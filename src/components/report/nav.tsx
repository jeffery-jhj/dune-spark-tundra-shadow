import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { NAV } from "@/data/study";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

function useActiveSection() {
  const [active, setActive] = useState("overview");

  useEffect(() => {
    const ids = NAV.map((n) => n.id);
    const els = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => !!el);
    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) setActive(visible[0].target.id);
      },
      { rootMargin: "0px 0px -55% 0px", threshold: [0.15, 0.35, 0.6] },
    );
    for (const el of els) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return active;
}

function jump(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function ReportNav() {
  const active = useActiveSection();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 md:h-16 md:px-6">
        <button type="button" onClick={() => jump("overview")} className="flex min-w-0 items-baseline gap-2">
          <span className="font-display text-lg font-medium tracking-tight text-ink">Field Study</span>
          <span className="hidden font-mono text-[11px] tracking-[0.16em] text-subtle uppercase sm:inline">
            Matcha · NYC · n=10
          </span>
        </button>

        <nav className="hidden items-center gap-0.5 overflow-x-auto lg:flex" aria-label="Report sections">
          {NAV.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => jump(item.id)}
              className={cn(
                "h-9 rounded-full px-2.5 text-sm transition-colors duration-150",
                active === item.id ? "bg-matcha text-cream" : "text-muted hover:text-ink",
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden" aria-label="Open sections">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Sections</SheetTitle>
            </SheetHeader>
            <nav className="grid gap-1 pb-6">
              {NAV.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    jump(item.id);
                  }}
                  className={cn(
                    "h-12 rounded-md px-3 text-left text-base",
                    active === item.id ? "bg-matcha-wash text-matcha-deep" : "text-ink",
                  )}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
