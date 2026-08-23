# finance-bot: Personal Finance That Files Itself

> An automation layer over my own Firefly III ledger, running on hardware in my apartment. Transactions import and categorise themselves overnight, budgets and bills track themselves, and I ask it questions in plain English from a chat window on my phone.

- **Author:** Keshav Lingala (Senior Software Engineer) — https://keshav.codes
- **Published:** August 2026
- **Project page:** https://keshav.codes/finance-bot/ (screenshots and diagrams are on that page)
- **Tech:** Python, Postgresql, Docker, Neural Networks, Bash, SQLite, Telegram, Firefly III
- **Topics:** Finance automation, Personal finance, Firefly III, Budgeting, Net worth tracking, Bill tracking, SimpleFIN, Open banking, Telegram bot, Chat interface, Python, Stdlib only, No dependencies, SQLite, Job scheduler, Automated categorisation, Self-hosted, Home lab, Privacy, Keshav Lingala, Keshav Reddy, Keshav Reddy Lingala, Lingala Keshav Reddy, Keshav

---

I wanted to know where my money goes without doing any bookkeeping. Not a budgeting app that sells my transaction history, and not a spreadsheet I'd abandon in March. Something that runs itself.

So the ledger is [Firefly III](https://www.firefly-iii.org/), self-hosted on [my home server](/homelab/), and **finance-bot** is the automation layer wrapped around it: 3,612 lines of Python across nine modules, stdlib only, no third-party dependencies at all. It pulls my banks every morning, files what it can, asks me about what it can't, and answers questions from a chat window on my phone.

The whole thing runs on hardware in my apartment. My transaction history never touches a vendor's servers.

- **Imports itself.** Every account I own syncs overnight. I never export a CSV or log into a bank.
- **Categorises itself.** Rules file about 97% of spending on their own. The rules grow as I use it.
- **Budgets that warn early.** Burn-down per category, spend against pace, and a projection of where the month ends up if nothing changes.
- **Bills before they're late.** Upcoming and overdue, so a missed payment surfaces before the money fails to move.
- **Answers in a chat window.** Net worth, savings rate, spend by payee or category, from my phone in a couple of seconds.
- **Asks when it isn't sure.** Anything ambiguous becomes a numbered question I can answer in plain English.

## Every Morning, Before I'm Awake

The point of the whole system is that the interesting part has already happened by the time I look at my phone.

- **04:30, Import.** Every linked account pulled through SimpleFIN into the ledger.
- **05:00, Reconcile.** Transfers between my own accounts matched up, so moving money doesn't look like spending.
- **05:15, Categorise.** Rules first, then a model pass over whatever the rules didn't recognise.
- **05:30, Back up.** The whole ledger, dumped to the file share.
- **05:45, Summary.** What's new since I last looked, waiting for me.
- **21:00, Digest.** Yesterday's spending, month-to-date pace, and where the month is heading.

By breakfast, yesterday's transactions are in, categorised, reconciled against transfers, and summarised. There's no "import day." There's no moment where I sit down and do finances.

*Figure: Job status: ten jobs with their schedules and last recorded occurrence, nine run today and the monthly restore drill not yet due, plus the SimpleFIN budget showing 8 of 24 requests used*

## Budgets That Tell Me Before, Not After

Firefly III holds the budgets. finance-bot is what makes me actually look at them.

`/budget` draws a burn-down bar per category with a colour on each one, green while there's room, amber past 90%, red once it's blown, plus the month's total against the month's limits. That's the "am I fine" question answered in one message.

The daily digest is the more useful one, because it's about *pace* rather than totals. It shows yesterday's spending itemised, month-to-date against my consumption target, what percentage of the month has actually elapsed, and then the part that changes decisions:

> At this rate: **$X** by month end

A straight-line projection from the current run rate. Being 60% through my budget is fine on the 22nd and a problem on the 9th, and a raw number can't tell me which one I'm looking at. The projection can.

`/bills` covers the other half, the money that moves whether I think about it or not: what's due in the next 30 days, what's already overdue and unpaid, and what Firefly can't predict a date for yet. A weekly review lands Sunday mornings with the week's spend by category, any budget over 90%, and anything overdue.

## Ask It Anything, In Plain English

Everything is a Telegram message, which means the interface is already on my phone, my laptop and my watch, with no app to build and nothing exposed to the internet.

- **`/status`** Income booked, consumption against target, invested, savings rate, and net worth broken out by account.
- **`/budget`** This month's burn-down, one bar per category.
- **`/bills`** Due soon, overdue, and unpredicted.
- **`/spend <text>`** Recent transactions matching a category or a payee.
- **`/net`** Net worth, account by account.
- **`/uncat`** Whatever is still waiting on me, as a numbered list.
- **`/import`** Pull from the banks right now instead of waiting for 04:30.
- **`/digest`, `/review`** The daily and weekly reports on demand.

The queue is where it gets conversational. When something can't be filed confidently it becomes a numbered question, and I answer the way I'd answer a person:

> *"2 is my car insurance, 3 and 4 are food"*

That resolves against the open questions, the live category list and the last dozen turns of conversation, so follow-ups and pronouns work. Whatever it works out comes back as a **proposal with Apply and Cancel buttons**, and nothing is written to my ledger until I tap. If I name a category that doesn't exist yet, it offers to create it, and creating it also writes a matching rule so the next one files itself without ever asking.

That last part is the compounding bit. Every question I answer is one I don't get asked again.

## It Learns How I Spend

Declarative rules in Firefly handle about 97% of withdrawals. The remaining few are merchants I've seen once or twice, which is exactly what a fixed rule list is bad at, so those go to a language model in one batched call per night.

The model doesn't get free rein. Every category it returns is checked against the categories that actually exist in my ledger, and anything below high confidence becomes a question for me instead of a silent write. Above that bar it files it and logs it, and `/autolog` shows me what it did with `/undo` to reverse any of it.

Then it consolidates. Once a merchant resolves the same way twice, it gets folded into the *existing* rule for that category rather than spawning a rule of its own. The rule set stays small and readable, and the system needs the model less the longer it runs, not more. That's the direction I wanted: the automation should be converging on deterministic, not accumulating magic.

The fiddly part is that rules match the raw payee string off the bank feed, so one gas station shows up as half a dozen different names. Evidence is counted under a single canonical merchant, with every raw variant recorded against it, and a rule only gets a loose "contains" match when the short name genuinely appears in every variant it stands for.

## On My Phone, From Anywhere

Two front ends, both reachable over the private mesh my [home server](/homelab/) runs on, neither exposed to the internet.

**Telegram** is the conversational one: reports, questions, approvals.

**Abacus**, an open-source native iOS client for Firefly III, is the visual one. Balances, charts, net worth history and recent transactions, as a real app on my home screen rather than an admin panel squeezed onto a phone screen. It talks straight to the ledger in my apartment, over cellular, with no VPN toggle to remember and no port forwarded anywhere.

That only works because the server terminates HTTPS on a genuine certificate. Mobile apps refuse self-signed certificates outright, so the TLS work on the host is what turned the ledger from a browser tab into something that lives on my phone.

## Built To Be Left Alone

Automation that touches money has to be trustworthy in a way a side project usually doesn't, so a decent share of the work went into the parts that never show up in a screenshot.

- **One scheduler, with memory.** Every run is recorded, so restarts can't double-fire a job and a run missed while the box was down is caught up rather than skipped.
- **A real quota ledger.** The bank aggregator allows 24 requests a day and one import costs 8, counted in the unit the provider actually bills.
- **Undo on everything.** Every automated write stores the previous value, so any of it reverses from chat.
- **Backups that are proven.** Nightly dumps, 30 dailies and 12 monthlies, plus a monthly drill that actually restores one and compares row counts.
- **Alerts on silence.** A healthy import logs errors by design, so the alert is "no successful import in 36 hours" rather than a non-zero exit code.
- **109 tests.** Stdlib `unittest`, no fixtures, over the logic that only breaks in states I'd never reproduce by hand.

*Figure: The suite running in the container: 109 tests, all passing, in well under a second*

It publishes no network ports at all, holds no key to the host's Docker daemon, and keeps its own state in a small SQLite database next to the code.

The thing I took from building it: every real bug in this system reported success while being wrong. A backup that completed and couldn't be restored, a scheduler that forgot what it had already done, two rate limiters that were each individually correct. None of them threw an error. Most of the reliability work above is just making that class of failure visible.

## What It Actually Changed

I know my net worth, this month's burn rate and what's due next week, at any moment, from my phone, without maintaining any of it. Categorisation happens whether or not I participate. Budgets warn me on the 9th instead of informing me on the 30th.

And all of it runs on a machine I own, against a ledger I control, with no third party sitting between me and my own spending history.

---

From the project archive of Keshav Lingala — https://keshav.codes. Machine-readable index: https://keshav.codes/llms.txt
