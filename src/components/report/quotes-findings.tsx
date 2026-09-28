import { CampBadge, Panel, Section } from "@/components/report/primitives";
import { applyFilters, FINDINGS, respondents } from "@/data/study";
import { useFilters } from "@/lib/filters";

export function Quotes() {
  const f = useFilters();
  const list = applyFilters(respondents, f);

  return (
    <Section
      id="quotes"
      kicker="09 · Voice"
      title="Keep their words. They are sharper than the codes."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {list.map((r) => (
          <figure key={r.id} className="rounded-xl bg-cream p-5 shadow-[var(--shadow-border)] md:p-6">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs text-matcha">{r.id}</span>
              <CampBadge camp={r.camp} />
            </div>
            <blockquote className="font-display text-xl leading-snug font-medium tracking-tight text-ink">
              “{r.keyQuote}”
            </blockquote>
            <p className="mt-3 text-sm leading-relaxed text-muted">“{r.quote2}”</p>
          </figure>
        ))}
      </div>
    </Section>
  );
}

export function Findings() {
  return (
    <Section
      id="findings"
      kicker="10 · Working hypotheses"
      title="What this file can support — and what would kill it."
      lede="These are not conclusions. They are bets to be broken by the remaining street interviews. Q4 and Q5 recodes (shop habit, 3/10 powder) make H2, H3, and H5 stronger, not weaker."
    >
      <div className="grid gap-4">
        {FINDINGS.map((h) => (
          <article key={h.id} className="grid gap-4 rounded-xl bg-cream p-5 shadow-[var(--shadow-border)] md:grid-cols-[72px_1fr] md:p-6">
            <p className="font-display text-2xl font-medium text-matcha">{h.id}</p>
            <div>
              <h3 className="font-display text-xl leading-snug font-medium tracking-tight text-ink">
                {h.title}
              </h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="font-mono text-[11px] tracking-[0.14em] text-matcha uppercase">
                    What supports it
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{h.support}</p>
                </div>
                <div>
                  <p className="font-mono text-[11px] tracking-[0.14em] text-subtle uppercase">
                    What would kill it
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{h.kill}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <Panel className="mt-8">
        <p className="font-mono text-[11px] tracking-[0.14em] text-matcha uppercase">2 × 2 · importance in this sample</p>
        <div className="mt-5 grid gap-px overflow-hidden rounded-lg bg-line md:grid-cols-2">
          <div className="bg-cream p-5">
            <p className="text-xs tracking-wide text-subtle uppercase">Flavor · high</p>
            <p className="mt-2 font-display text-lg font-medium tracking-tight">Matcha-forward</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              R01, R03, R05, R09. Do not cover it. Milk is fine. Syrup is dessert.
            </p>
          </div>
          <div className="bg-cream p-5">
            <p className="text-xs tracking-wide text-subtle uppercase">Flavor · low</p>
            <p className="mt-2 font-display text-lg font-medium tracking-tight">Added / dessert flavors</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              R08: “I wouldn’t say I’m a matcha person.” Pistachio / lavender as the point.
            </p>
          </div>
          <div className="bg-cream p-5">
            <p className="text-xs tracking-wide text-subtle uppercase">Convenience · high</p>
            <p className="mt-2 font-display text-lg font-medium tracking-tight">Ready-to-drink wins the occasion</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Usual paid $6–8. R01 pays that rather than fight powder above $1/serving.
            </p>
          </div>
          <div className="bg-cream p-5">
            <p className="text-xs tracking-wide text-subtle uppercase">Control · high</p>
            <p className="mt-2 font-display text-lg font-medium tracking-tight">Home as habit</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              R10, R06, R03. Three people. Cafe is a treat or a last resort.
            </p>
          </div>
        </div>
      </Panel>
    </Section>
  );
}
