/* ============================================================
   Skill Galaxy — vanilla Web Component (no framework runtime).
   Constellation hubs × magnetic-cloud physics: skills drift,
   the cursor repels them, they're draggable, and selecting a
   category gathers its cluster. Hover any node to trace links.
   Lazy: physics only runs while the element is on screen.
   ============================================================ */
import { SKILLS, CATEGORIES, catShort, skillRadius, type Category, type Skill } from "../data/skills";

const SVGNS = "http://www.w3.org/2000/svg";
const XHTML = "http://www.w3.org/1999/xhtml";

// Minimum guaranteed gap (px) between skill node rims; enforced by a hard
// positional pass so clustering pull can never stack nodes on top of each other.
const SK_GAP = 16;
// Minimum gap (px) between a skill node's rim and a category hub's rim.
const HUB_GAP = 18;
const SEP_ITERS = 3;
const svgEl = <K extends keyof SVGElementTagNameMap>(n: K) => document.createElementNS(SVGNS, n);

function lum(hex: string): number {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16),
    g = parseInt(h.slice(2, 4), 16),
    b = parseInt(h.slice(4, 6), 16);
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
}
function withAlpha(hex: string, a: number): string {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16),
    g = parseInt(h.slice(2, 4), 16),
    b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${a})`;
}

interface Hub {
  c: Category;
  x: number;
  y: number;
  vx: number;
  vy: number;
  sx: number;
  sy: number;
  r: number;
}
interface SkNode {
  s: Skill;
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}
interface Edge {
  si: number;
  hi: number;
}
type Focus = { type: "skill" | "hub"; i: number } | null;

const catIndex = new Map(CATEGORIES.map((c, i) => [c.key, i]));

class SkillGalaxyEl extends HTMLElement {
  private stage!: HTMLElement;
  private svg!: SVGSVGElement;
  private W = 0;
  private H = 0;
  private hubs: Hub[] = [];
  private sk: SkNode[] = [];
  private edges: Edge[] = [];
  private hubG: SVGGElement[] = [];
  private skG: SVGGElement[] = [];
  private edgeL: SVGLineElement[] = [];
  private mouse = { x: -9999, y: -9999, on: false };
  private drag: { node: Hub | SkNode } | null = null;
  private hover: Focus = null;
  private sel: string | null = null;
  private inited = false;
  private running = false;
  private raf = 0;
  private last = 0;
  private ro?: ResizeObserver;
  private io?: IntersectionObserver;
  private boundMove = (e: PointerEvent) => this.onMove(e);
  private boundUp = (e: PointerEvent) => this.onUp(e);

  connectedCallback() {
    this.stage = this.querySelector(".galaxy-stage") as HTMLElement;
    this.edges = [];
    SKILLS.forEach((s, si) =>
      s.cats.forEach((c) => {
        const hi = catIndex.get(c);
        if (hi !== undefined) this.edges.push({ si, hi });
      }),
    );

    // chip filter
    this.querySelectorAll<HTMLButtonElement>(".chip").forEach((btn) => {
      btn.addEventListener("click", () => {
        const key = btn.dataset.cat || null;
        this.sel = key;
        this.querySelectorAll(".chip").forEach((b) =>
          b.classList.toggle("on", (b as HTMLElement).dataset.cat === (key ?? "")),
        );
        this.applyFocus();
      });
    });

    // lazy init / pause off-screen
    this.io = new IntersectionObserver(
      (ents) => {
        const visible = ents.some((e) => e.isIntersecting);
        if (visible) {
          if (!this.inited) this.init();
          this.start();
        } else {
          this.stop();
        }
      },
      { rootMargin: "120px" },
    );
    this.io.observe(this);
  }

  disconnectedCallback() {
    this.stop();
    this.io?.disconnect();
    this.ro?.disconnect();
    window.removeEventListener("pointermove", this.boundMove);
    window.removeEventListener("pointerup", this.boundUp);
  }

  private init() {
    this.measure();
    if (!this.W || !this.H) return; // not laid out yet; IO will retry
    this.buildState();
    this.buildSVG();
    this.inited = true;
    this.classList.add("ready");

    this.ro = new ResizeObserver(() => {
      this.measure();
      this.layoutHubs();
      this.svg.setAttribute("width", String(this.W));
      this.svg.setAttribute("height", String(this.H));
    });
    this.ro.observe(this.stage);
    window.addEventListener("pointermove", this.boundMove);
    window.addEventListener("pointerup", this.boundUp);

    // click on empty space → clear selection, re-highlight everything
    this.stage.addEventListener("click", (ev) => {
      if ((ev.target as Element).closest(".hub, .gnode")) return;
      if (!this.sel) return;
      this.sel = null;
      this.querySelectorAll(".chip").forEach((b) =>
        b.classList.toggle("on", !(b as HTMLElement).dataset.cat),
      );
      this.applyFocus();
    });
  }

  private measure() {
    const r = this.stage.getBoundingClientRect();
    this.W = r.width;
    this.H = r.height;
  }

  // Constellation ring. On landscape (desktop) it's a balanced circle; on
  // portrait (mobile) it stretches into an ellipse so the 10 hub clusters fan
  // out across the full height instead of cramming into a small central circle.
  private ring() {
    const { W, H } = this;
    const base = Math.min(W * 0.46, H * 0.42);
    const portrait = H > W;
    return {
      cx: W / 2,
      cy: H / 2,
      rx: portrait ? W * 0.46 : base,
      ry: portrait ? H * 0.42 : base,
    };
  }

  private layoutHubs() {
    const { cx, cy, rx, ry } = this.ring();
    this.hubs.forEach((h, i) => {
      const a = (i / CATEGORIES.length) * Math.PI * 2 - Math.PI / 2;
      h.sx = cx + Math.cos(a) * rx;
      h.sy = cy + Math.sin(a) * ry;
    });
  }

  private buildState() {
    const { cx, cy, rx, ry } = this.ring();
    this.hubs = CATEGORIES.map((c, i) => {
      const a = (i / CATEGORIES.length) * Math.PI * 2 - Math.PI / 2;
      const sx = cx + Math.cos(a) * rx,
        sy = cy + Math.sin(a) * ry;
      return { c, x: sx, y: sy, vx: 0, vy: 0, sx, sy, r: c.featured ? 40 : 30 };
    });
    this.sk = SKILLS.map((s) => {
      const hi = catIndex.get(s.cats[0]) ?? 0;
      const h = this.hubs[hi] || { x: cx, y: cy };
      return {
        s,
        x: h.x + (Math.random() - 0.5) * 90,
        y: h.y + (Math.random() - 0.5) * 90,
        vx: (Math.random() - 0.5) * 20,
        vy: (Math.random() - 0.5) * 20,
        r: skillRadius(s),
      };
    });
  }

  private buildSVG() {
    const svg = svgEl("svg");
    svg.setAttribute("class", "galaxy-svg");
    svg.setAttribute("width", String(this.W));
    svg.setAttribute("height", String(this.H));

    const edgeGroup = svgEl("g");
    this.edgeL = this.edges.map(() => {
      const l = svgEl("line");
      l.setAttribute("class", "edge");
      edgeGroup.appendChild(l);
      return l;
    });
    svg.appendChild(edgeGroup);

    this.hubG = this.hubs.map((h, i) => {
      const g = svgEl("g");
      g.setAttribute("class", "hub on" + (h.c.featured ? " featured" : ""));
      const circle = svgEl("circle");
      circle.setAttribute("r", String(h.r));
      const text = svgEl("text");
      text.setAttribute("class", "hub-t");
      text.setAttribute("dy", "0.32em");
      text.textContent = catShort(h.c.key).split(/[ /]+/)[0];
      g.appendChild(circle);
      g.appendChild(text);
      g.addEventListener("pointerdown", (ev) => {
        this.drag = { node: this.hubs[i] };
        // Touch/pen have no hover — drive the highlight from the drag itself.
        if (ev.pointerType !== "mouse") {
          this.hover = { type: "hub", i };
          this.applyFocus();
        }
        ev.preventDefault();
      });
      g.addEventListener("mouseenter", () => {
        this.hover = { type: "hub", i };
        this.applyFocus();
      });
      g.addEventListener("mouseleave", () => {
        if (this.drag) return; // keep the highlight steady while dragging
        this.hover = null;
        this.applyFocus();
      });
      g.addEventListener("click", () => {
        this.sel = this.sel === h.c.key ? null : h.c.key;
        this.querySelectorAll(".chip").forEach((b) =>
          b.classList.toggle("on", (b as HTMLElement).dataset.cat === (this.sel ?? "")),
        );
        this.applyFocus();
      });
      svg.appendChild(g);
      return g;
    });

    this.skG = SKILLS.map((s, i) => {
      const rr = skillRadius(s);
      const g = svgEl("g");
      g.setAttribute("class", "gnode on" + (s.core ? " core" : "") + (s.tier === "familiar" ? " familiar" : ""));
      const circle = svgEl("circle");
      circle.setAttribute("r", String(rr));
      circle.style.stroke = s.color;
      const fo = svgEl("foreignObject");
      fo.setAttribute("x", String(-rr * 0.62));
      fo.setAttribute("y", String(-rr * 0.62));
      fo.setAttribute("width", String(rr * 1.24));
      fo.setAttribute("height", String(rr * 1.24));
      const box = document.createElementNS(XHTML, "div") as HTMLDivElement;
      box.setAttribute("class", "gnode-ico");
      box.appendChild(this.makeIcon(s, rr));
      fo.appendChild(box);
      const text = svgEl("text");
      text.setAttribute("class", "gnode-t");
      text.setAttribute("dy", String(rr + 14));
      text.textContent = s.name;
      g.appendChild(circle);
      g.appendChild(fo);
      g.appendChild(text);
      g.addEventListener("pointerdown", (ev) => {
        this.drag = { node: this.sk[i] };
        // Touch/pen have no hover — drive the highlight from the drag itself.
        if (ev.pointerType !== "mouse") {
          this.hover = { type: "skill", i };
          this.applyFocus();
        }
        ev.preventDefault();
      });
      g.addEventListener("mouseenter", () => {
        this.hover = { type: "skill", i };
        this.applyFocus();
      });
      g.addEventListener("mouseleave", () => {
        if (this.drag) return; // keep the highlight steady while dragging
        this.hover = null;
        this.applyFocus();
      });
      svg.appendChild(g);
      return g;
    });

    this.stage.appendChild(svg);
    this.svg = svg;
  }

  private makeIcon(s: Skill, size: number): HTMLElement {
    const img = document.createElementNS(XHTML, "img") as HTMLImageElement;
    img.setAttribute("class", "ico");
    img.setAttribute("alt", s.name);
    img.setAttribute("loading", "lazy");
    img.setAttribute("src", s.icon);
    img.addEventListener("error", () => {
      const light = lum(s.color) < 0.45;
      const fb = document.createElementNS(XHTML, "div") as HTMLDivElement;
      fb.setAttribute("class", "ico-fallback");
      fb.style.background = withAlpha(s.color, 0.16);
      fb.style.border = `1px solid ${withAlpha(s.color, 0.5)}`;
      fb.style.color = light ? "#fff" : s.color;
      fb.style.fontSize = `${size * 0.42}px`;
      fb.textContent = s.name[0];
      img.replaceWith(fb);
    });
    return img;
  }

  private onMove(e: PointerEvent) {
    const r = this.stage.getBoundingClientRect();
    const mx = e.clientX - r.left,
      my = e.clientY - r.top;
    this.mouse = { x: mx, y: my, on: mx >= 0 && my >= 0 && mx <= r.width && my <= r.height };
    if (this.drag) {
      this.drag.node.x = mx;
      this.drag.node.y = my;
      this.drag.node.vx = 0;
      this.drag.node.vy = 0;
    }
  }

  private onUp(e: PointerEvent) {
    // On touch/pen the highlight was set by the drag (no hover to fall back
    // on), so clear it when the finger lifts — back to normal on release.
    const clearHover = this.drag !== null && e.pointerType !== "mouse";
    this.drag = null;
    if (clearHover) {
      this.hover = null;
      this.applyFocus();
    }
  }

  private start() {
    if (this.running || !this.inited) return;
    this.running = true;
    this.last = performance.now();
    const tick = (now: number) => {
      if (!this.running) return;
      const dt = Math.min(0.05, (now - this.last) / 1000);
      this.last = now;
      this.step(dt);
      this.raf = requestAnimationFrame(tick);
    };
    this.raf = requestAnimationFrame(tick);
  }

  private stop() {
    this.running = false;
    cancelAnimationFrame(this.raf);
  }

  private step(dt: number) {
    const { W, H } = this;
    const cx = W / 2,
      cy = H / 2;
    const HB = this.hubs,
      SK = this.sk,
      m = this.mouse,
      s = this.sel;
    const isDrag = (n: Hub | SkNode) => this.drag !== null && this.drag.node === n;

    for (const h of HB) {
      if (isDrag(h)) continue;
      h.vx += (h.sx - h.x) * 7 * dt;
      h.vy += (h.sy - h.y) * 7 * dt;
      h.vx *= Math.exp(-6 * dt);
      h.vy *= Math.exp(-6 * dt);
      h.x += h.vx * dt;
      h.y += h.vy * dt;
    }

    for (const n of SK) {
      if (isDrag(n)) continue;
      const active = !s || n.s.cats.includes(s as Skill["cats"][number]);
      let ax = 0,
        ay = 0,
        c = 0;
      for (const cat of n.s.cats) {
        const hi = catIndex.get(cat);
        if (hi !== undefined) {
          ax += HB[hi].x;
          ay += HB[hi].y;
          c++;
        }
      }
      if (c) {
        ax /= c;
        ay /= c;
        const pull = s ? (active ? 4.6 : 1.4) : 2.6;
        n.vx += (ax - n.x) * pull * dt;
        n.vy += (ay - n.y) * pull * dt;
      }
      if (s && active) {
        const hi = catIndex.get(s as Skill["cats"][number]);
        if (hi !== undefined) {
          n.vx += (HB[hi].x - n.x) * 1.6 * dt;
          n.vy += (HB[hi].y - n.y) * 1.6 * dt;
        }
      }
      n.vx += (cx - n.x) * 0.16 * dt + (Math.random() - 0.5) * 7 * dt;
      n.vy += (cy - n.y) * 0.16 * dt + (Math.random() - 0.5) * 7 * dt;
      if (m.on) {
        const dx = n.x - m.x,
          dy = n.y - m.y,
          dist = Math.hypot(dx, dy) || 1,
          RAD = 135;
        if (dist < RAD) {
          const f = (1 - dist / RAD) * 760;
          n.vx += (dx / dist) * f * dt;
          n.vy += (dy / dist) * f * dt;
        }
      }
    }

    // skill-skill separation
    for (let i = 0; i < SK.length; i++)
      for (let j = i + 1; j < SK.length; j++) {
        const a = SK[i],
          b = SK[j];
        const dx = b.x - a.x,
          dy = b.y - a.y,
          d = Math.hypot(dx, dy) || 1,
          min = a.r + b.r + SK_GAP;
        if (d < min) {
          const f = ((min - d) / min) * 560,
            ux = dx / d,
            uy = dy / d;
          if (!isDrag(a)) {
            a.vx -= ux * f * dt;
            a.vy -= uy * f * dt;
          }
          if (!isDrag(b)) {
            b.vx += ux * f * dt;
            b.vy += uy * f * dt;
          }
        }
      }

    // skill-hub separation
    for (const n of SK)
      for (const h of HB) {
        const dx = n.x - h.x,
          dy = n.y - h.y,
          d = Math.hypot(dx, dy) || 1,
          min = n.r + h.r + HUB_GAP;
        if (d < min && !isDrag(n)) {
          const f = ((min - d) / min) * 620;
          n.vx += (dx / d) * f * dt;
          n.vy += (dy / d) * f * dt;
        }
      }

    // integrate skills
    const damp = Math.exp(-2.8 * dt);
    for (const n of SK) {
      if (isDrag(n)) continue;
      n.vx *= damp;
      n.vy *= damp;
      const sp = Math.hypot(n.vx, n.vy);
      if (sp > 620) {
        n.vx = (n.vx / sp) * 620;
        n.vy = (n.vy / sp) * 620;
      }
      n.x += n.vx * dt;
      n.y += n.vy * dt;
      n.x = Math.max(n.r, Math.min(W - n.r, n.x));
      n.y = Math.max(n.r, Math.min(H - n.r, n.y));
    }

    // hard positional separation — guarantee SK_GAP between every pair even
    // when the clustering pull would otherwise stack nodes. A few relaxation
    // iterations resolve chains of overlaps without visible jitter.
    for (let it = 0; it < SEP_ITERS; it++) {
      for (let i = 0; i < SK.length; i++)
        for (let j = i + 1; j < SK.length; j++) {
          const a = SK[i],
            b = SK[j];
          const dx = b.x - a.x,
            dy = b.y - a.y,
            d = Math.hypot(dx, dy) || 0.01,
            min = a.r + b.r + SK_GAP;
          if (d >= min) continue;
          const ux = dx / d,
            uy = dy / d;
          const aDrag = isDrag(a),
            bDrag = isDrag(b);
          // split the correction; a dragged node stays put and the other takes all
          const push = min - d;
          const aShare = aDrag ? 0 : bDrag ? 1 : 0.5;
          const bShare = bDrag ? 0 : aDrag ? 1 : 0.5;
          a.x -= ux * push * aShare;
          a.y -= uy * push * aShare;
          b.x += ux * push * bShare;
          b.y += uy * push * bShare;
        }
      // skill ↔ hub: push only the skill so hubs stay on the constellation ring
      for (const n of SK) {
        if (isDrag(n)) continue;
        for (const h of HB) {
          const dx = n.x - h.x,
            dy = n.y - h.y,
            d = Math.hypot(dx, dy) || 0.01,
            min = n.r + h.r + HUB_GAP;
          if (d >= min) continue;
          const push = min - d;
          n.x += (dx / d) * push;
          n.y += (dy / d) * push;
        }
      }
      for (const n of SK) {
        n.x = Math.max(n.r, Math.min(W - n.r, n.x));
        n.y = Math.max(n.r, Math.min(H - n.r, n.y));
      }
    }

    // write DOM
    for (let i = 0; i < HB.length; i++)
      this.hubG[i]?.setAttribute("transform", `translate(${HB[i].x},${HB[i].y})`);
    for (let i = 0; i < SK.length; i++)
      this.skG[i]?.setAttribute("transform", `translate(${SK[i].x},${SK[i].y})`);
    for (let k = 0; k < this.edges.length; k++) {
      const e = this.edges[k],
        l = this.edgeL[k];
      if (!l) continue;
      const a = SK[e.si],
        h = HB[e.hi];
      l.setAttribute("x1", String(a.x));
      l.setAttribute("y1", String(a.y));
      l.setAttribute("x2", String(h.x));
      l.setAttribute("y2", String(h.y));
    }
  }

  private applyFocus() {
    if (!this.svg) return;
    const focus: Focus =
      this.hover ||
      (this.sel ? { type: "hub", i: catIndex.get(this.sel as Skill["cats"][number]) ?? -1 } : null);
    this.svg.classList.toggle("focused", !!focus);

    this.edges.forEach((e, k) => {
      const on = !focus ? false : focus.type === "skill" ? e.si === focus.i : e.hi === focus.i;
      this.edgeL[k].classList.toggle("on", on);
    });
    CATEGORIES.forEach((c, i) => {
      const on = !focus
        ? true
        : focus.type === "hub"
          ? i === focus.i
          : SKILLS[focus.i].cats.includes(c.key);
      this.hubG[i].classList.toggle("on", on);
    });
    SKILLS.forEach((sk, i) => {
      const on = !focus
        ? true
        : focus.type === "skill"
          ? i === focus.i
          : sk.cats.includes(CATEGORIES[focus.i].key);
      this.skG[i].classList.toggle("on", on);
    });
  }
}

if (!customElements.get("skill-galaxy")) customElements.define("skill-galaxy", SkillGalaxyEl);
