import { PriceScatter } from "@/components/report/charts";
import { Panel, PowderBadge, PullQuote, Section, Stat } from "@/components/report/primitives";
import { applyFilters, BARRIERS, respondents, studyStats, type PowderStatus } from "@/data/study";
import { useFilters } from "@/lib/filters";
import { formatUsd } from "@/lib/utils";

const POWDER_ORDER: PowderStatus[] = ["regular", "rarely", "tried-once", "never"];

export function Powder() {
  const f = useFilters();
  const list = applyFilters(respondents, f);
  const counts = POWDER_ORDER.map((status) => ({
    status,
    n: list.filter((r) => r.powder === status).length,
    ids: list.filter((r) => r.powder === status).map((r) => r.id),
  }));
  const max = Math.max(1, ...counts.map((c) => c.n));

  return (
    <Section
      id="powder"
      kicker="07 · Q5 recoded"
      title="Three people make it. The rest find the steps annoying."
      lede="The previous working file had six regular powder users. That overstated conversion. Recoded: at most three in ten actually buy powder. R01 rarely does. R04 tried once and it was disgusting. The rest never started — extra steps, no whisk, scary tins, or the cafe already tastes like what they want."
    >
      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <Panel>
          <p className="mb-5 text-sm font-medium text-ink">Powder status</p>
          <ul className="space-y-4">
            {counts.map((c) => (
              <li key={c.status}>
                <div className="mb-1.5 flex items-center justify-between gap-3">
                  <PowderBadge status={c.status} />
                  <span className="font-mono text-sm tabular-nums text-ink">
                    {c.n}
                    <span className="ml-2 text-subtle">{c.ids.join(" ")}</span>
                  </span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-matcha-wash">
                  <div
                    className="h-full rounded-full bg-matcha"
                    style={{ width: `${(c.n / max) * 100}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs leading-relaxed text-subtle">
            “Uses powder” in the headline count is regular only — R03, R06, R10. Rarely and
            tried-once are not habits.
          </p>
        </Panel>
        <Panel>
          <p className="mb-5 text-sm font-medium text-ink">Barriers among non-regulars</p>
          <ul className="space-y-3">
            {BARRIERS.map((b) => (
              <li key={b.label} className="flex items-start justify-between gap-4 border-b border-line pb-3 last:border-0">
                <div>
                  <p className="text-sm text-ink">{b.label}</p>
                  <p className="mt-1 font-mono text-[11px] text-subtle">{b.ids.join(" · ")}</p>
                </div>
                <span className="font-display text-xl font-medium tabular-nums">{b.n}</span>
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <PullQuote text="I made it once and it was disgusting." who="R04 · Cha Cha Matcha" />
        <PullQuote text="If I have to whisk, I'm not doing it." who="R07" />
        <PullQuote
          text="The price almost doesn't matter if the steps are annoying."
          who="R07"
        />
      </div>
    </Section>
  );
}

export function Price() {
  const f = useFilters();
  const list = applyFilters(respondents, f);
  const s = studyStats(list.length ? list : respondents);

  return (
    <Section
      id="price"
      kicker="08 · Willingness to pay"
      title="A dollar a cup is the home story. Seven to eight is the cafe story."
      lede="The gap is the product problem. Median reasonable tin is $26.50 for ~30 drinks — $0.88 a serving — against a $7.13 usual beverage. R01 was explicit: above ~$1 she swaps back to the prepared drink. R09 and R10 also pushed back on whether '30 drinks' is real."
    >
      <div className="mb-8 grid grid-cols-2 gap-6 border-y border-line py-8 md:grid-cols-4">
        <Stat value={formatUsd(s.medianPack, 2)} label="Median pack / 30" hint={`Range $${s.packMin}–$${s.packMax}`} />
        <Stat value={formatUsd(s.medianServing)} label="Median $ / serving" hint="Implied from the 30-drink frame" />
        <Stat value={formatUsd(s.medianBev)} label="Median usual beverage" hint={`Paid $${s.bevMin.toFixed(2)}–$${s.bevMax.toFixed(2)}`} />
        <Stat value={formatUsd(s.medianWalk, 0)} label="Median walk-away" hint="Q9 · R01 not asked" />
      </div>

      <Panel>
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-sm font-medium text-ink">Cafe price vs powder per serving</p>
            <p className="mt-1 text-xs text-subtle">
              Horizontal: usual cafe drink ($) · Vertical: powder $ / serving · Green = cafe-first · Ink = home
            </p>
          </div>
          <p className="font-mono text-[11px] tracking-wide text-subtle uppercase">
            Every point is a person
          </p>
        </div>
        <PriceScatter list={list} />
      </Panel>

      <div className="mt-8 overflow-x-auto rounded-xl bg-cream shadow-[var(--shadow-border)]">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="border-b border-line text-xs tracking-wide text-subtle uppercase">
            <tr>
              {["", "Prepared beverage", "Powder (30-drink frame)"].map((h) => (
                <th key={h} className="px-5 py-3 font-medium">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-ink">
            {[
              ["Typical in this file", "~$7–8 usual paid", "Cluster $25–30 / 30 drinks"],
              ["Median", formatUsd(s.medianBev), `${formatUsd(s.medianPack, 2)} pack → ${formatUsd(s.medianServing)} / serving`],
              ["Range", `$${s.bevMin.toFixed(2)}–$${s.bevMax.toFixed(2)}`, `$${s.packMin}–$${s.packMax} pack`],
              ["Walk-away", "Median $9", "—"],
              ["Convenience", "High", "Low for cafe-first users"],
              ["Control over flavor", "Medium / shop-dependent", "High"],
              ["Taste risk", "Too sweet / too weak", "Too bitter / clumpy first try"],
              ["Prep effort", "Low", "High unless frother / packets"],
            ].map((row) => (
              <tr key={row[0]} className="border-b border-line last:border-0">
                <th className="px-5 py-3 text-left text-sm font-medium text-muted">{row[0]}</th>
                <td className="px-5 py-3">{row[1]}</td>
                <td className="px-5 py-3">{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
