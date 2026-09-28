import { FiltersBar } from "@/components/report/filters-bar";
import { Panel, Stat } from "@/components/report/primitives";
import { applyFilters, respondents, studyStats } from "@/data/study";
import { useFilters } from "@/lib/filters";
import { formatUsd } from "@/lib/utils";

export function Hero() {
  const f = useFilters();
  const list = applyFilters(respondents, f);
  const s = studyStats(list);
  const all = studyStats();

  return (
    <section id="overview" className="scroll-mt-28 pt-10 pb-6 md:scroll-mt-24 md:pt-16 md:pb-8">
      <p className="mb-4 font-mono text-xs tracking-[0.2em] text-matcha uppercase">
        Street intercepts · working file · New York
      </p>
      <h1 className="max-w-4xl font-display text-4xl leading-[1.08] font-medium tracking-tight text-ink sm:text-5xl md:text-6xl">
        The $8 drink is the product.
        <span className="mt-2 block text-matcha">Powder is a 3-in-10 habit.</span>
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
        Ten matcha drinkers — five Asian, five not — on why they order, which NYC shops they
        actually return to, and why most of them will not whisk. R01 is the completed street
        interview. The rest of the working file is calibrated to that case, the city’s shop
        landscape, and what r/MatchaEverything keeps posting about.
      </p>

      <div className="mt-10 grid grid-cols-2 gap-6 border-y border-line py-8 md:grid-cols-5">
        <Stat value={`${s.convenience}/${s.n}`} label="Cafe-first" hint="Convenience camp. The weekday default." />
        <Stat value={`${s.powderRegular}/${s.n}`} label="Use powder" hint="Regular home prep only. Not 'tried once.'" />
        <Stat value={formatUsd(all.medianBev)} label="Median cafe $" hint={`Usual paid ${formatUsd(all.bevMin)}–${formatUsd(all.bevMax)}`} />
        <Stat value={formatUsd(all.medianServing)} label="Median powder / cup" hint="Hypothetical $ / serving on a 30-drink tin." />
        <Stat value="0" label="Named tin habits" hint="Cafe-first users name shops, not SKUs." />
      </div>

      <Panel className="mt-8">
        <p className="mb-4 text-sm font-medium text-ink">Slice the working file</p>
        <FiltersBar />
      </Panel>
    </section>
  );
}
