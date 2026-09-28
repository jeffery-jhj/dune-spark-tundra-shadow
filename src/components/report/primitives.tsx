import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { CAMP_LABEL, POWDER_LABEL, type Camp, type PowderStatus, type Respondent } from "@/data/study";
import { cn } from "@/lib/utils";

export function Section({
  id,
  kicker,
  title,
  lede,
  children,
}: {
  id: string;
  kicker: string;
  title: string;
  lede?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-line py-14 md:scroll-mt-24 md:py-20">
      <div className="mb-8 max-w-3xl md:mb-10">
        <p className="mb-3 font-mono text-xs tracking-[0.18em] text-matcha uppercase">{kicker}</p>
        <h2 className="font-display text-3xl leading-tight font-medium tracking-tight text-ink md:text-4xl">
          {title}
        </h2>
        {lede ? <div className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{lede}</div> : null}
      </div>
      {children}
    </section>
  );
}

export function Panel({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div className={cn("rounded-xl bg-cream p-5 shadow-[var(--shadow-border)] md:p-6", className)}>
      {children}
    </div>
  );
}

export function CampBadge({ camp }: { camp: Camp }) {
  return (
    <Badge variant={camp === "home" ? "ink" : "matcha"}>
      {CAMP_LABEL[camp]}
    </Badge>
  );
}

export function PowderBadge({ status }: { status: PowderStatus }) {
  const variant =
    status === "regular" ? "matcha" : status === "tried-once" ? "warn" : status === "rarely" ? "default" : "outline";
  return <Badge variant={variant}>{POWDER_LABEL[status]}</Badge>;
}

export function OriginBadge({ asian }: { asian: boolean }) {
  return <Badge variant="cream">{asian ? "Asian" : "Non-Asian"}</Badge>;
}

export function MetaRow({ r }: { r: Respondent }) {
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      <span className="font-mono text-xs tracking-wide text-matcha">{r.id}</span>
      <OriginBadge asian={r.asian} />
      <Badge variant="outline">
        {r.gender} · {r.age}
      </Badge>
      <CampBadge camp={r.camp} />
    </div>
  );
}

export function Stat({
  value,
  label,
  hint,
}: {
  value: string;
  label: string;
  hint?: string;
}) {
  return (
    <div className="min-w-0">
      <p className="font-display text-3xl leading-none font-medium tracking-tight text-ink md:text-4xl">
        {value}
      </p>
      <p className="mt-2 text-sm font-medium text-ink">{label}</p>
      {hint ? <p className="mt-1 text-xs leading-snug text-subtle">{hint}</p> : null}
    </div>
  );
}

export function PullQuote({ text, who }: { text: string; who: string }) {
  return (
    <blockquote className="border-l-2 border-matcha pl-4">
      <p className="font-display text-xl leading-snug font-medium tracking-tight text-ink md:text-2xl">
        “{text}”
      </p>
      <footer className="mt-2 font-mono text-xs tracking-wide text-subtle">{who}</footer>
    </blockquote>
  );
}
