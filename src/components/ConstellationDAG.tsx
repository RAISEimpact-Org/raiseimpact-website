"use client";

import { useRef, useEffect, useCallback, type ReactNode } from "react";

// ── Edges (cause → effect) ───────────────────────────────────────

const edges = [
  { from: "root", to: "ed-manages" },
  { from: "root", to: "one-person" },
  { from: "root", to: "frustrations" },
  { from: "root", to: "deadlines" },
  { from: "ed-manages", to: "co-leaders" },
  { from: "ed-manages", to: "fire" },
  { from: "one-person", to: "senior-role" },
  { from: "one-person", to: "grew-5x" },
  { from: "frustrations", to: "best-leave" },
  { from: "frustrations", to: "health-score" },
  { from: "deadlines", to: "circles" },
  { from: "co-leaders", to: "talent" },
  { from: "fire", to: "talent" },
  { from: "best-leave", to: "talent" },
  { from: "senior-role", to: "research" },
  { from: "grew-5x", to: "research" },
  { from: "circles", to: "research" },
  { from: "health-score", to: "mission" },
  { from: "deadlines", to: "mission" },
  { from: "circles", to: "mission" },
];

// ── Card positions: [left%, top%] ────────────────────────────────
// Desktop (>=1024px) — absolute positioned constellation
// These are hand-tuned. Gap between cards must be >= 12px.

const desktopPositions: Record<string, [number, number]> = {
  // Consequences (top row)
  talent:       [6,  0],
  research:     [38, 1],
  mission:      [70, 0],
  // Immediate symptoms (scattered mid-zone)
  fire:         [1,  15],
  "co-leaders": [1,  27],
  "senior-role":[26, 22],
  "best-leave": [52, 16],
  circles:      [76, 24],
  "grew-5x":    [26, 36],
  "health-score":[52, 34],
  // Structural symptoms (lower zone)
  "ed-manages": [6,  52],
  "one-person": [28, 58],
  frustrations: [54, 50],
  deadlines:    [76, 56],
  // Root
  root:         [32, 80],
};

// Tablet (640–1023px) — tighter but still scattered
const tabletPositions: Record<string, [number, number]> = {
  talent:       [2,  0],
  research:     [36, 0],
  mission:      [68, 1],
  fire:         [0,  13],
  "co-leaders": [0,  24],
  "senior-role":[30, 18],
  "best-leave": [56, 13],
  circles:      [56, 25],
  "grew-5x":    [30, 30],
  "health-score":[56, 36],
  "ed-manages": [2,  44],
  "one-person": [30, 48],
  frustrations: [56, 44],
  deadlines:    [30, 58],
  root:         [22, 72],
};

// All node IDs for overlap checking
const allNodeIds = Object.keys(desktopPositions);

// ── Bold helper ──────────────────────────────────────────────────

function B({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-dark">{children}</strong>;
}

// ── Arrow + overlap logic (ref-based, no setState) ───────────────

function useArrowsAndOverlapCheck(
  containerRef: React.RefObject<HTMLDivElement | null>,
  svgRef: React.RefObject<SVGSVGElement | null>,
  pathRefs: React.RefObject<Map<string, SVGPathElement>>,
) {
  const computeLines = useCallback(() => {
    const container = containerRef.current;
    const svg = svgRef.current;
    const paths = pathRefs.current;
    if (!container || !svg || !paths) return;

    const rect = container.getBoundingClientRect();

    // Draw arrows
    for (const edge of edges) {
      const causeEl = container.querySelector(`[data-node="${edge.from}"]`) as HTMLElement;
      const effectEl = container.querySelector(`[data-node="${edge.to}"]`) as HTMLElement;
      const pathEl = paths.get(`${edge.from}-${edge.to}`);
      if (!causeEl || !effectEl || !pathEl) continue;

      const cR = causeEl.getBoundingClientRect();
      const eR = effectEl.getBoundingClientRect();

      const causeBelow = cR.top > eR.top;
      const lower = causeBelow ? cR : eR;
      const upper = causeBelow ? eR : cR;

      const x1 = lower.left + lower.width / 2 - rect.left;
      const y1 = lower.top - rect.top;
      const x2 = upper.left + upper.width / 2 - rect.left;
      const y2 = upper.top + upper.height - rect.top;

      const dy = Math.abs(y1 - y2);
      const cpOffset = dy * 0.35;
      const dx = (x2 - x1) * 0.05;

      pathEl.setAttribute(
        "d",
        `M ${x1} ${y1} C ${x1 + dx} ${y1 - cpOffset}, ${x2 - dx} ${y2 + cpOffset}, ${x2} ${y2}`
      );
    }

    // Overlap detection (dev only)
    if (process.env.NODE_ENV === "development") {
      const GAP = 8;
      const rects: { id: string; r: DOMRect }[] = [];
      for (const id of allNodeIds) {
        const el = container.querySelector(`[data-node="${id}"]`) as HTMLElement;
        if (el) rects.push({ id, r: el.getBoundingClientRect() });
      }
      for (let i = 0; i < rects.length; i++) {
        for (let j = i + 1; j < rects.length; j++) {
          const a = rects[i].r;
          const b = rects[j].r;
          if (
            a.left < b.right + GAP &&
            a.right + GAP > b.left &&
            a.top < b.bottom + GAP &&
            a.bottom + GAP > b.top
          ) {
            console.warn(
              `[DAG] OVERLAP: "${rects[i].id}" and "${rects[j].id}" are within ${GAP}px`
            );
          }
        }
      }
    }
  }, [containerRef, svgRef, pathRefs]);

  useEffect(() => {
    let rafId: number;
    const update = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(computeLines);
    };

    window.addEventListener("resize", update);
    const t1 = setTimeout(computeLines, 100);
    const t2 = setTimeout(computeLines, 500);

    return () => {
      window.removeEventListener("resize", update);
      cancelAnimationFrame(rafId);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [computeLines]);
}

// ── Component ────────────────────────────────────────────────────

export default function ConstellationDAG() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRefs = useRef<Map<string, SVGPathElement>>(new Map());

  useArrowsAndOverlapCheck(containerRef, svgRef, pathRefs);

  // Shared card content (used by both desktop and mobile)
  const cardContent: Record<string, ReactNode> = {
    "co-leaders": <>Co-leaders <B>aren&apos;t aligned</B>. Nobody&apos;s said it out loud.</>,
    fire: <>Need to <B>let someone go</B>. Nobody here has done this before.</>,
    "senior-role": <>Can&apos;t fill a <B>senior role</B>. Not sure why.</>,
    "grew-5x": <>Grew <B>5x</B>. Org still runs like it did at five people.</>,
    "best-leave": <><B>Best people leaving</B>. Nobody addressed what they raised.</>,
    "health-score": <><B>Team health score</B> would embarrass if the board saw it.</>,
    circles: <>Moving fast. <B>In circles.</B></>,
    "ed-manages": <>ED <B>managing people</B>{" "}they don&apos;t want to manage.</>,
    "one-person": <>One person <B>holding everything together</B>. Running out of energy.</>,
    frustrations: <><B>Frustrations</B> accumulate silently until they erupt.</>,
    deadlines: <><B>Deadlines slip</B>. Nobody follows up.</>,
  };

  const consequenceLabels: Record<string, string> = {
    talent: "Talent leaves",
    research: "Research output drops",
    mission: "Mission impact slows",
  };

  return (
    <section
      id="symptoms"
      className="bg-surface py-[var(--space-10)] md:py-[140px] px-[var(--space-5)] md:px-[var(--space-7)]"
    >
      <div className="mx-auto max-w-[1200px]">
        <p className="text-[0.8125rem] uppercase tracking-[0.15em] text-muted mb-[var(--space-5)]">
          The challenge
        </p>
        <p className="text-lg leading-relaxed mb-[var(--space-9)] max-w-[var(--max-text)]">
          These aren&apos;t twelve separate problems. They&apos;re one system.
        </p>

        <div ref={containerRef} className="relative">
          {/* SVG arrows (shared between desktop and mobile) */}
          <svg
            ref={svgRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 0 }}
          >
            <defs>
              <marker
                id="dag-arrow"
                viewBox="0 0 10 7"
                refX="5"
                refY="3.5"
                markerWidth="6"
                markerHeight="4"
                orient="auto"
              >
                <path d="M 0 0 L 10 3.5 L 0 7 z" fill="var(--color-accent)" fillOpacity="0.3" />
              </marker>
            </defs>
            {edges.map((edge) => (
              <path
                key={`${edge.from}-${edge.to}`}
                ref={(el) => {
                  if (el) pathRefs.current.set(`${edge.from}-${edge.to}`, el);
                }}
                fill="none"
                stroke="var(--color-accent)"
                strokeOpacity="0.15"
                strokeWidth="1.5"
                markerEnd="url(#dag-arrow)"
              />
            ))}
          </svg>

          {/* ── Desktop layout (lg+): absolute constellation ── */}
          <div className="hidden lg:block" style={{ height: "920px" }}>
            {/* Consequences */}
            {(["talent", "research", "mission"] as const).map((id) => {
              const [l, t] = desktopPositions[id];
              return (
                <div
                  key={id}
                  data-node={id}
                  className="absolute bg-accent text-white rounded-2xl px-5 py-3 md:px-6 md:py-3.5"
                  style={{ left: `${l}%`, top: `${t}%`, zIndex: 1 }}
                >
                  <span className="font-heading font-semibold text-[1.05rem] md:text-[1.3rem] leading-tight">
                    {consequenceLabels[id]}
                  </span>
                </div>
              );
            })}
            {/* Symptom cards */}
            {Object.keys(cardContent).map((id) => {
              const pos = desktopPositions[id];
              if (!pos) return null;
              const [l, t] = pos;
              return (
                <div
                  key={id}
                  data-node={id}
                  className="absolute bg-white border border-border rounded-xl px-5 py-4 text-[0.9375rem] leading-[1.55] text-text/80 shadow-sm"
                  style={{ left: `${l}%`, top: `${t}%`, maxWidth: "220px", zIndex: 1 }}
                >
                  {cardContent[id]}
                </div>
              );
            })}
            {/* Root */}
            <div
              data-node="root"
              className="absolute bg-dark text-white rounded-2xl px-5 py-3.5 md:px-7 md:py-4"
              style={{ left: `${desktopPositions.root[0]}%`, top: `${desktopPositions.root[1]}%`, zIndex: 1 }}
            >
              <span className="font-heading font-semibold text-[1.05rem] md:text-[1.3rem] leading-tight">
                No dedicated people leadership
              </span>
            </div>
            <p
              className="absolute text-center text-[0.875rem] italic text-muted/50"
              style={{ bottom: "0", left: "0", right: "0" }}
            >
              The mission feels too urgent to pause. The org is too broken not to.
            </p>
          </div>

          {/* ── Tablet layout (sm–lg): tighter constellation with arrows ── */}
          <div className="hidden sm:block lg:hidden" style={{ height: "780px" }}>
            {(["talent", "research", "mission"] as const).map((id) => {
              const [l, t] = tabletPositions[id];
              return (
                <div
                  key={id}
                  data-node={id}
                  className="absolute bg-accent text-white rounded-2xl px-4 py-2.5"
                  style={{ left: `${l}%`, top: `${t}%`, zIndex: 1 }}
                >
                  <span className="font-heading font-semibold text-[0.95rem] leading-tight">
                    {consequenceLabels[id]}
                  </span>
                </div>
              );
            })}
            {Object.keys(cardContent).map((id) => {
              const pos = tabletPositions[id];
              if (!pos) return null;
              const [l, t] = pos;
              return (
                <div
                  key={id}
                  data-node={id}
                  className="absolute bg-white border border-border rounded-xl px-4 py-3 text-[0.8125rem] leading-[1.5] text-text/80 shadow-sm"
                  style={{ left: `${l}%`, top: `${t}%`, maxWidth: "190px", zIndex: 1 }}
                >
                  {cardContent[id]}
                </div>
              );
            })}
            <div
              data-node="root"
              className="absolute bg-dark text-white rounded-2xl px-5 py-3"
              style={{ left: `${tabletPositions.root[0]}%`, top: `${tabletPositions.root[1]}%`, zIndex: 1 }}
            >
              <span className="font-heading font-semibold text-[0.95rem] leading-tight">
                No dedicated people leadership
              </span>
            </div>
            <p
              className="absolute text-center text-[0.8125rem] italic text-muted/50"
              style={{ bottom: "0", left: "0", right: "0" }}
            >
              The mission feels too urgent to pause. The org is too broken not to.
            </p>
          </div>

          {/* ── Mobile (<640px): 2-col staggered grid with arrows ── */}
          <div className="sm:hidden" style={{ minHeight: "900px" }}>
            <div className="grid grid-cols-2 gap-x-3 gap-y-4">
              {/* Row 1: consequences */}
              <div data-node="talent" className="bg-accent text-white rounded-xl px-3 py-2 col-span-2 justify-self-center">
                <span className="font-heading font-semibold text-[0.95rem] leading-tight">Talent leaves</span>
              </div>
              <div data-node="research" className="bg-accent text-white rounded-xl px-3 py-2 mt-1">
                <span className="font-heading font-semibold text-[0.85rem] leading-tight">Research output drops</span>
              </div>
              <div data-node="mission" className="bg-accent text-white rounded-xl px-3 py-2 -mt-1">
                <span className="font-heading font-semibold text-[0.85rem] leading-tight">Mission impact slows</span>
              </div>

              {/* Immediate symptoms: staggered 2-col */}
              <div data-node="co-leaders" className="bg-white border border-border rounded-xl px-3 py-3 text-[0.8125rem] leading-[1.45] text-text/80 shadow-sm mt-3">
                Co-leaders <B>aren&apos;t aligned</B>. Nobody&apos;s said it out loud.
              </div>
              <div data-node="fire" className="bg-white border border-border rounded-xl px-3 py-3 text-[0.8125rem] leading-[1.45] text-text/80 shadow-sm mt-6">
                Need to <B>let someone go</B>. Nobody here has done this before.
              </div>
              <div data-node="senior-role" className="bg-white border border-border rounded-xl px-3 py-3 text-[0.8125rem] leading-[1.45] text-text/80 shadow-sm -mt-1">
                Can&apos;t fill a <B>senior role</B>. Not sure why.
              </div>
              <div data-node="best-leave" className="bg-white border border-border rounded-xl px-3 py-3 text-[0.8125rem] leading-[1.45] text-text/80 shadow-sm mt-2">
                <B>Best people leaving</B>. Nobody addressed what they raised.
              </div>
              <div data-node="grew-5x" className="bg-white border border-border rounded-xl px-3 py-3 text-[0.8125rem] leading-[1.45] text-text/80 shadow-sm mt-1">
                Grew <B>5x</B>. Org still runs like it did at five people.
              </div>
              <div data-node="circles" className="bg-white border border-border rounded-xl px-3 py-3 text-[0.8125rem] leading-[1.45] text-text/80 shadow-sm -mt-2">
                Moving fast. <B>In circles.</B>
              </div>
              <div data-node="health-score" className="bg-white border border-border rounded-xl px-3 py-3 text-[0.8125rem] leading-[1.45] text-text/80 shadow-sm col-span-2 max-w-[200px] justify-self-center mt-1">
                <B>Team health score</B> would embarrass if the board saw it.
              </div>

              {/* Structural symptoms */}
              <div data-node="ed-manages" className="bg-white border border-border rounded-xl px-3 py-3 text-[0.8125rem] leading-[1.45] text-text/80 shadow-sm mt-4">
                ED <B>managing people</B>{" "}they don&apos;t want to manage.
              </div>
              <div data-node="one-person" className="bg-white border border-border rounded-xl px-3 py-3 text-[0.8125rem] leading-[1.45] text-text/80 shadow-sm mt-7">
                One person <B>holding everything together</B>. Running out of energy.
              </div>
              <div data-node="frustrations" className="bg-white border border-border rounded-xl px-3 py-3 text-[0.8125rem] leading-[1.45] text-text/80 shadow-sm -mt-1">
                <B>Frustrations</B> accumulate silently until they erupt.
              </div>
              <div data-node="deadlines" className="bg-white border border-border rounded-xl px-3 py-3 text-[0.8125rem] leading-[1.45] text-text/80 shadow-sm mt-3">
                <B>Deadlines slip</B>. Nobody follows up.
              </div>

              {/* Root */}
              <div data-node="root" className="bg-dark text-white rounded-xl px-4 py-3 col-span-2 justify-self-center mt-5">
                <span className="font-heading font-semibold text-[0.95rem] leading-tight">
                  No dedicated people leadership
                </span>
              </div>
            </div>
            <p className="text-center text-[0.8125rem] italic text-muted/50 mt-6">
              The mission feels too urgent to pause. The org is too broken not to.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
