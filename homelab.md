# beast: A Private AI Cloud I Deploy To From My Phone

> A machine in my apartment that runs local AI models, image and video generation, my personal finance system and my file storage. I deploy to it from my phone over breakfast, drive coding agents on it from anywhere, and it costs nothing per month because I own it.

- **Author:** Keshav Lingala (Senior Software Engineer) — https://keshav.codes
- **Published:** July 2026
- **Project page:** https://keshav.codes/homelab/ (screenshots and diagrams are on that page)
- **Tech:** Docker, Bash, Python, Ollama, ComfyUI, Git, Ubuntu, Tailscale, NVIDIA, Samba, LVM
- **Topics:** Home lab, Home server, Self-hosted, Private cloud, AI infrastructure, Local LLM, Ollama, Open WebUI, ComfyUI, Agentic AI, AI agents, Claude Code, Docker Compose, Dockge, Tailscale, WireGuard, Zero trust, HTTPS, TLS, NVIDIA, RTX 5070 Ti, Firefly III, Samba, LVM, Privacy, No cloud, Keshav Lingala, Keshav Reddy, Keshav Reddy Lingala, Lingala Keshav Reddy, Keshav

---

I have an idea over breakfast. I open a web UI on my phone, paste a Compose file into it, and hit deploy. Ninety seconds later the thing is running on a real HTTPS URL with a valid certificate, reachable from anywhere in the world, and I finish my coffee.

No AWS account. No instance to size. No VPC, no security group, no load balancer, no certificate to provision, no meter running. **beast** is a machine I built and put in the corner of my apartment, and it has quietly replaced every reason I used to have for renting someone else's computer.

*Figure: The stack manager: every stack, its live containers and its compose file, all editable from a browser on any of my devices. This capture predates the TLS rewrite, so the port badges still show the older two-address binding*

- **Runs AI locally.** Open-source models served on my own GPU, with an OpenAI-shaped API and a chat UI in front of them.
- **Generates images and video.** A full ComfyUI install with a working image-to-video pipeline on 16 GB of VRAM.
- **Hosts coding agents.** Agent sessions live on the box, so I can start one on my laptop and pick it up on my phone.
- **Runs my money.** A self-hosted Firefly III ledger and [the automation around it](/finance-bot/).
- **Stores everything.** 1.7 TB mounted in Finder like any other drive.
- **Deploys in minutes.** Paste a config, hit a button, get a URL.

## The Loop

The reason this changed how I build things is that the distance between "I want to try this" and "it is running on a URL" collapsed to almost nothing.

- **Write a Compose file.** Or paste one from a project's README.
- **Drop it into the stack manager.** From a browser, on whatever device is in my hand.
- **Deploy.** Images pull, the container starts, and it's live on loopback.
- **One line to publish it.** The reverse proxy gives it an HTTPS port on my private mesh.
- **Use it.** From my laptop, my phone, or a script, anywhere, on a real certificate.

The same thing on a cloud provider is an account, an IAM policy, a VPC, a subnet, a security group, a load balancer, a certificate request, a DNS record, and a bill that starts the moment you click create and never stops. Here it is a file and a button, and the marginal cost of trying something is zero, so I try more things.

That last part matters more than it sounds. When spinning something up is free and instant, a bad idea costs an afternoon instead of a monthly line item, so I stop pre-judging which ideas are worth the setup. Most of what runs on this machine now started as something I was only half serious about.

## It Runs AI, And AI Runs It

This is the part that justified the GPU.

**Any open-source model, on demand.** I pull a model and it's serving on an API within minutes of deciding I want it. No approval, no quota, no per-token billing, no waiting for a provider to offer it. If a promising model drops, I can be testing it against my own workload from my phone before I've read the whole paper. It exposes an OpenAI-compatible API, so anything I write against it works unchanged, and there's a chat UI in front for when I just want to talk to it.

Nothing I type into it leaves the building.

**Image and video generation.** ComfyUI with the custom nodes and model weights that make a real image-to-video pipeline work inside 16 GB of VRAM. Generation runs for hours if it wants to; there's no clock running.

**Chaining models together, for free.** Because both an LLM and an image model live on the same box, connecting them costs nothing. I wrote a small CLI called `imagine` that takes a one-line idea, has the local LLM expand it into a full prompt, runs the result through a validator, and queues the batch on ComfyUI. Two models cooperating in a pipeline I own end to end, with no API key and no per-call cost, so I could iterate on it until it worked instead of watching a bill grow while I debugged.

That is the shape of most things I build here now: a local model does the fuzzy part, ordinary code does the strict part, and the whole loop runs on hardware I already paid for.

**And it does the boring work too.** The finance system on this box uses a model to categorise the handful of transactions its rules don't recognise each night, validated against the real category list so it can't invent anything, and everything it writes is reversible. It runs at 05:15 whether or not I'm awake.

## Agents I Drive From My Phone

The machine hosts my coding agents, which is why the phone workflow stopped being a novelty and became how I actually work.

**Claude Code runs as a service on the box.** A user systemd unit keeps a `claude remote-control` server alive, with lingering enabled so it survives reboots and doesn't need me logged in. The Claude iOS app connects to it, so I can start a session on my laptop, close the lid, and continue the same session from my phone. The relay goes through Anthropic rather than my mesh, so it works from anywhere with signal, including places my VPN wouldn't help.

That means "update my portfolio" is a sentence I say to my phone. The agent has the repo checked out on the box, makes the change, and pushes it. I never open a laptop.

**SSH from anywhere, with no key to manage.** Mesh SSH means any iOS client, Termius or whatever else, reaches the box as me. Everything long-running lives in `tmux`, so a cellular dropout costs nothing and `tmux new-session -A` makes "reconnect" and "start fresh" the same command. Admin from a train is the same experience as admin from my desk.

- **The stack manager.** Deploy and edit containers from a browser on any device.
- **Agent sessions.** Hosted on the box, resumable from the phone app, working against real repos.
- **A plain SSH client.** Persistent `tmux` sessions, so nothing dies when the connection does.

## What Runs On It

Seven Compose stacks, tracked in git and managed from a web UI.

- **Ollama.** Local model serving on the GPU. It evicts the model from VRAM after five idle minutes so the card is free for everything else.
- **Open WebUI.** The chat front end for it.
- **ComfyUI.** Image and video generation, with the whole install on a bind mount so the container stays disposable.
- **Firefly III + Postgres.** The finance ledger. The database publishes no ports at all.
- **finance-bot.** The automation around the ledger, with [a write-up of its own](/finance-bot/).
- **Cockpit + Dockge.** System admin and stack management.
- **homepage.** A static landing page, so the bare hostname is a dashboard of everything above.

Provisioning is a set of idempotent shell scripts that each verify their own prerequisites, so re-running any of them is safe. The Docker script refuses to start if the data volume isn't mounted or the driver isn't working, which means a half-finished install fails loudly at the right step rather than producing something subtly broken three steps later.

## Every Service Is An HTTPS URL

A single reverse proxy holds the machine's address on my private mesh and terminates TLS on a genuine, publicly trusted certificate that renews itself. Every container behind it publishes to loopback and nothing else.

*Figure: tailscale serve status: eight public HTTPS ports on the mesh hostname, each proxying to a different loopback backend. The tailnet name is redacted*

| Service | URL | What it is |
|---|---|---|
| homepage | `:443` | A landing page of every link below |
| Open WebUI | `:3443` | Chat UI for the local models |
| Dockge | `:5443` | Compose stack management |
| Firefly III | `:8443` | The finance ledger |
| Importer | `:8444` | Bank transaction importer |
| ComfyUI | `:8843` | Image and video generation |
| Cockpit | `:9443` | Full system admin |
| Ollama | `:11443` | The model API itself |

Because the certificate is real, **native apps work**, not just browser tabs. I run Abacus, an open-source iOS client for Firefly III, pointed at my own ledger, with balances and charts as a proper app on my home screen. Mobile apps are far stricter about this than browsers: a browser lets you click past a self-signed certificate, an iOS app's networking stack simply refuses.

*Figure: openssl s_client against the ledger port: verification OK, issuer Let's Encrypt, TLS 1.3, with the hostname redacted*

## Storage That Can't Wedge The OS

The Ubuntu installer leaves most of the volume group unallocated. A setup script carves that free space into a separate 1.7 TB data volume rather than growing root, so a runaway download or a 14 GB model file can never fill the OS disk. Docker's images live there too, and those alone total over 80 GB.

*Figure: lsblk and df showing one NVMe split into a root volume at 76% full and a 1.7 TB data volume at 5%*

The whole volume is one Samba share tuned for Finder, which quietly removes a shell from several workflows: drop a model file in from my Mac and the running service picks it up immediately, and the finance system's nightly backups land somewhere I can drag off the machine.

## Private By Construction

Nothing is port-forwarded. There's no dynamic DNS and no exposed SSH. Every dashboard, the shell and the file share are reachable only over a WireGuard mesh where each device is individually authenticated. Even on my own home network, the firewall denies the dashboards.

The non-obvious part, and the thing most home-lab writeups get wrong, is that **Docker publishes ports below the host firewall.** Docker writes published ports into an iptables chain evaluated *before* `ufw`'s rules, so a container published as `"8080:8080"` is reachable from every machine on the LAN and `ufw deny 8080` does nothing about it. The firewall reports the rule. The port is open.

The first version of this machine handled that by binding every container explicitly, never the wildcard:

```yaml
ports:
  # v1: Docker bypasses ufw, so bind explicitly, never 0.0.0.0
  - "127.0.0.1:8080:8080"
  - "100.xx.yy.zz:8080:8080"
```

*Figure: ss -lnt during the first iteration: every container port bound once to loopback and once to the mesh address*

The TLS rewrite made it simpler still. Now the proxy is the only process holding the mesh address and every container is loopback-only, so the number of things listening on a reachable address dropped from "every container" to one:

```yaml
ports:
  # v2: loopback only. The mesh address belongs to the TLS proxy, not Docker.
  - "127.0.0.1:8080:8080"
```

Host processes like `sshd` and Samba are a different category and really are governed by `ufw`. Knowing which of the two you're dealing with is the difference between a firewall rule that works and one that only looks like it does.

## It Stays Mine

There's no monthly bill, no account that can be suspended, no model deprecated out from under me, no rate limit, and no terms of service governing what I'm allowed to run on my own hardware. The prompts, the transactions and the files never leave the building.

When it needs to be faster, I buy a part and put it in. That's the whole upgrade process. No instance type to migrate to, no reserved-capacity commitment, no quota request.

I'm honest that it isn't zero-dependency: the mesh has a coordination service, the certificates come from a public CA, and a few integrations talk to APIs I don't run. But every one of those is commodity and replaceable, none of them holds my data, and none of them can raise a price on me. The tradeoff is that I'm my own operations team, and I'd make that trade again.

The box ships with a written operating guide aimed at whoever runs it rather than whoever built it, plus an instruction file at its root encoding the rules, so both humans and agents working on it inherit the constraints instead of rediscovering them.

---

From the project archive of Keshav Lingala — https://keshav.codes. Machine-readable index: https://keshav.codes/llms.txt
