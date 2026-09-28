import { useState } from "react";
import { CampBadge, MetaRow, OriginBadge, Panel, PowderBadge, PullQuote, Section } from "@/components/report/primitives";
import { FrequencyBars } from "@/components/report/charts";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import {
  applyFilters,
  respondents,
  type Respondent,
} from "@/data/study";
import { useFilters } from "@/lib/filters";
import { formatUsdShort } from "@/lib/utils";
import { cn } from "@/lib/utils";

function RespondentCard({ r, onOpen }: { r: Respondent; onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="flex flex-col rounded-xl bg-cream p-5 text-left shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-150 hover:shadow-[var(--shadow-border-hover)]"
    >
      <MetaRow r={r} />
      <p className="mt-4 font-display text-lg leading-snug font-medium tracking-tight text-ink">
        “{r.keyQuote}”
      </p>
      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">{r.form}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        <PowderBadge status={r.powder} />
        <span className="rounded-full px-2.5 py-0.5 text-xs text-subtle shadow-[0_0_0_1px_var(--color-line)]">
          {r.goToShop}
        </span>
      </div>
      {r.source === "primary" ? (
        <p className="mt-4 font-mono text-[11px] tracking-[0.14em] text-matcha uppercase">
          Completed street interview
        </p>
      ) : (
        <p className="mt-4 font-mono text-[11px] tracking-[0.14em] text-subtle uppercase">
          Working analogue
        </p>
      )}
    </button>
  );
}

function Detail({ r }: { r: Respondent }) {
  const rows: Array<[string, string]> = [
    ["Frequency", r.frequency],
    ["Form", r.form],
    ["Go-to shop", r.goToShop],
    ["Q4 Brand / shop", r.q4Brand],
    ["Powder", r.powder],
    ["Q6 Barrier / why home", r.q6],
    ["Reasonable pack (30)", formatUsdShort(r.pack30)],
    ["Implied $ / serving", formatUsdShort(r.perServing)],
    ["Usual beverage", formatUsdShort(r.usualBev)],
    ["Too expensive", r.tooExpensive == null ? "Not asked" : formatUsdShort(r.tooExpensive)],
    ["Q10 Trigger", r.q10],
  ];
  return (
    <div className="min-h-0 flex-1 space-y-5 overflow-y-auto pb-8">
      <MetaRow r={r} />
      <PullQuote text={r.keyQuote} who={`${r.id} · ${r.goToShop}`} />
      <p className="text-sm leading-relaxed text-muted">{r.q1Raw}</p>
      <dl className="grid gap-3">
        {rows.map(([k, v]) => (
          <div key={k} className="grid gap-1 border-t border-line pt-3 sm:grid-cols-[160px_1fr]">
            <dt className="font-mono text-[11px] tracking-[0.14em] text-subtle uppercase">{k}</dt>
            <dd className="text-sm leading-relaxed text-ink">{v}</dd>
          </div>
        ))}
      </dl>
      <p className="text-xs leading-relaxed text-subtle">{r.notes}</p>
    </div>
  );
}

export function Sample() {
  const f = useFilters();
  const list = applyFilters(respondents, f);
  const [openId, setOpenId] = useState<string | null>(null);
  const open = respondents.find((r) => r.id === openId) ?? null;
  const [view, setView] = useState<"cards" | "table">("cards");

  return (
    <Section
      id="sample"
      kicker="02 · Sample"
      title="Ten drinkers. One completed intercept. A 5 / 5 split."
      lede="R01 is the only fully completed street interview — the seed case. R02–R10 are working analogues, written to sit next to that case rather than invent a powder-enthusiast majority the street did not produce."
    >
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-1.5">
          <Button variant={view === "cards" ? "default" : "outline"} size="sm" onClick={() => setView("cards")}>
            Cards
          </Button>
          <Button variant={view === "table" ? "default" : "outline"} size="sm" onClick={() => setView("table")}>
            Matrix
          </Button>
        </div>
        <p className="text-sm text-subtle">{list.length} in view</p>
      </div>

      {view === "cards" ? (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {list.map((r) => (
            <RespondentCard key={r.id} r={r} onOpen={() => setOpenId(r.id)} />
          ))}
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl bg-cream shadow-[var(--shadow-border)]">
          <table className="w-full min-w-[880px] text-left text-sm">
            <thead className="border-b border-line text-xs tracking-wide text-subtle uppercase">
              <tr>
                {["ID", "Origin", "Camp", "Freq", "Go-to", "Powder", "Pack $", "Bev $"].map((h) => (
                  <th key={h} className="px-4 py-3 font-medium">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {list.map((r) => (
                <tr
                  key={r.id}
                  className={cn(
                    "cursor-pointer border-b border-line last:border-0 hover:bg-matcha-wash/60",
                    r.source === "primary" && "bg-matcha-wash/40",
                  )}
                  onClick={() => setOpenId(r.id)}
                >
                  <td className="px-4 py-3 font-mono text-xs text-matcha">{r.id}</td>
                  <td className="px-4 py-3">{r.asian ? "Asian" : "Non-Asian"}</td>
                  <td className="px-4 py-3">{r.camp === "home" ? "Home" : "Cafe"}</td>
                  <td className="px-4 py-3">{r.frequency}</td>
                  <td className="px-4 py-3">{r.goToShop}</td>
                  <td className="px-4 py-3">{r.powder}</td>
                  <td className="px-4 py-3 tabular-nums">{formatUsdShort(r.pack30)}</td>
                  <td className="px-4 py-3 tabular-nums">{formatUsdShort(r.usualBev)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <Panel>
          <p className="mb-1 text-sm font-medium text-ink">How often they drink</p>
          <p className="mb-4 text-xs text-subtle">Q2 · current filter</p>
          <FrequencyBars list={list} />
        </Panel>
        <Panel className="flex flex-col justify-center">
          <p className="mb-4 text-sm font-medium text-ink">Composition</p>
          <ul className="space-y-3 text-sm text-muted">
            <li className="flex items-start justify-between gap-4">
              <span>Asian / non-Asian</span>
              <span className="font-medium text-ink">5 / 5</span>
            </li>
            <li className="flex items-start justify-between gap-4">
              <span>Women / men</span>
              <span className="font-medium text-ink">7 / 3</span>
            </li>
            <li className="flex items-start justify-between gap-4">
              <span>Convenience / home</span>
              <span className="font-medium text-ink">7 / 3</span>
            </li>
            <li className="flex items-start justify-between gap-4">
              <span>Primary intercept</span>
              <span className="font-medium text-ink">R01 only</span>
            </li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            <OriginBadge asian />
            <OriginBadge asian={false} />
            <CampBadge camp="convenience" />
            <CampBadge camp="home" />
          </div>
        </Panel>
      </div>

      <Sheet open={!!open} onOpenChange={(v) => !v && setOpenId(null)}>
        <SheetContent>
          {open ? (
            <>
              <SheetHeader>
                <SheetTitle>
                  {open.id}
                  {open.source === "primary" ? " · street interview" : " · analogue"}
                </SheetTitle>
              </SheetHeader>
              <Detail r={open} />
            </>
          ) : null}
        </SheetContent>
      </Sheet>
    </Section>
  );
}
