import { MotivationBars, TasteBars } from "@/components/report/charts";
import { Panel, PullQuote, Section } from "@/components/report/primitives";
import { applyFilters, countCodes, countTaste, respondents } from "@/data/study";
import { useFilters } from "@/lib/filters";

export function Jobs() {
  const f = useFilters();
  const list = applyFilters(respondents, f);
  const codes = countCodes(list);

  return (
    <Section
      id="jobs"
      kicker="03 · Jobs to be done"
      title="They want the tea to taste like tea. Health is a halo, not a brief."
      lede={
        <>
          Q1 is multi-coded. Taste leads. Energy / focus and a vague wellness frame sit behind
          it. Clinical claims (L-theanine, EGCG) did not appear unprompted. Skincare showed up as
          hearsay — R01’s 护肤功效, R04’s “people say it’s good for skin. I don’t know if that’s
          true.”
        </>
      }
    >
      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <Panel>
          <p className="mb-1 text-sm font-medium text-ink">Motivation mentions</p>
          <p className="mb-4 text-xs text-subtle">One person can carry several codes</p>
          <MotivationBars list={list} />
        </Panel>
        <Panel>
          <p className="mb-4 text-sm font-medium text-ink">In this slice</p>
          <ul className="space-y-3">
            {codes.map((c) => (
              <li key={c.code} className="flex items-baseline justify-between gap-4 border-b border-line pb-3 last:border-0">
                <span className="text-sm text-ink">{c.label}</span>
                <span className="font-mono text-sm tabular-nums text-matcha">{c.n}</span>
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <PullQuote
          text="It's very pure and pristine, not just for health. Matcha is not like those heavily artificial drinks."
          who="R01 · primary intercept"
        />
        <PullQuote
          text="Taste is the main thing. Health is a bonus."
          who="R05 · 12 Matcha go-to"
        />
      </div>
    </Section>
  );
}

export function Taste() {
  const f = useFilters();
  const list = applyFilters(respondents, f);
  const tags = countTaste(list);

  return (
    <Section
      id="taste"
      kicker="04 · Taste lexicon"
      title="Matcha-forward versus dessert. Both exist. They are not the same job."
      lede="Open-coded from Q3, not a closed list. The R01 / R05 / R09 cluster wants the green kept. R08 wants Blank Street’s strawberry shortcake. A product that tries to be both will lose the first group without fully winning the second."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <Panel>
          <p className="mb-1 text-sm font-medium text-ink">Tag frequency</p>
          <p className="mb-4 text-xs text-subtle">Top tags in the current slice</p>
          <TasteBars list={list} />
        </Panel>
        <div className="grid gap-3">
          <Panel>
            <p className="font-mono text-[11px] tracking-[0.14em] text-matcha uppercase">High importance</p>
            <p className="mt-2 font-display text-2xl leading-snug font-medium tracking-tight">
              Keep the tea
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              R01: “I don’t want a lot of different stuff covering the matcha flavor.” R05: “That’s
              not matcha, that’s dessert.” R03: “Milk is fine. Syrup is not the point.”
            </p>
          </Panel>
          <Panel>
            <p className="font-mono text-[11px] tracking-[0.14em] text-subtle uppercase">Present, not the center</p>
            <p className="mt-2 font-display text-2xl leading-snug font-medium tracking-tight">
              Flavored as the point
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              R08 orders pistachio / lavender / strawberry-shortcake drinks and does not call
              herself a matcha person. Blank Street’s board is built for her. Easy to lose if the
              product lectures about grades.
            </p>
          </Panel>
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 10).map((t) => (
              <span
                key={t.tag}
                className="rounded-full bg-cream px-3 py-1.5 text-xs text-ink shadow-[var(--shadow-border)]"
              >
                {t.tag}
                <span className="ml-2 font-mono text-subtle">{t.n}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
