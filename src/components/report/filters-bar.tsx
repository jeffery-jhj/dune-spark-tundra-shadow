import { Button } from "@/components/ui/button";
import { useFilters } from "@/lib/filters";
import { cn } from "@/lib/utils";
import { applyFilters, respondents } from "@/data/study";

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "h-9 rounded-full px-3 text-sm font-medium transition-colors duration-150",
        active ? "bg-matcha text-cream" : "bg-cream text-muted shadow-[var(--shadow-border)] hover:text-ink",
      )}
    >
      {children}
    </button>
  );
}

export function FiltersBar() {
  const f = useFilters();
  const n = applyFilters(respondents, f).length;
  const dirty = f.camp !== "all" || f.origin !== "all" || f.powder !== "all";

  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-wrap gap-1.5">
        <Chip active={f.camp === "all"} onClick={() => f.setCamp("all")}>
          All camps
        </Chip>
        <Chip active={f.camp === "convenience"} onClick={() => f.setCamp("convenience")}>
          Convenience-first
        </Chip>
        <Chip active={f.camp === "home"} onClick={() => f.setCamp("home")}>
          Home-control
        </Chip>
        <span className="mx-1 hidden h-9 w-px bg-line sm:block" />
        <Chip active={f.origin === "all"} onClick={() => f.setOrigin("all")}>
          5 / 5 split
        </Chip>
        <Chip active={f.origin === "asian"} onClick={() => f.setOrigin("asian")}>
          Asian
        </Chip>
        <Chip active={f.origin === "non-asian"} onClick={() => f.setOrigin("non-asian")}>
          Non-Asian
        </Chip>
        <span className="mx-1 hidden h-9 w-px bg-line sm:block" />
        <Chip active={f.powder === "all"} onClick={() => f.setPowder("all")}>
          Any powder
        </Chip>
        <Chip active={f.powder === "regular"} onClick={() => f.setPowder("regular")}>
          Regular powder
        </Chip>
        <Chip active={f.powder === "never"} onClick={() => f.setPowder("never")}>
          Never powder
        </Chip>
      </div>
      <div className="flex items-center gap-3">
        <p className="font-mono text-xs tracking-wide text-subtle uppercase">
          Showing {n} of {respondents.length}
        </p>
        {dirty ? (
          <Button variant="ghost" size="sm" onClick={f.reset}>
            Reset
          </Button>
        ) : null}
      </div>
    </div>
  );
}
