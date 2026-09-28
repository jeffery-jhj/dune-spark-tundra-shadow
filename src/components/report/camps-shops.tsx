import { CampBadge, Panel, PullQuote, Section } from "@/components/report/primitives";
import { applyFilters, CAMP_LABEL, NYC_SHOPS, respondents } from "@/data/study";
import { useFilters } from "@/lib/filters";
import { cn } from "@/lib/utils";

export function Camps() {
  const f = useFilters();
  const list = applyFilters(respondents, f);
  const cafe = list.filter((r) => r.camp === "convenience");
  const home = list.filter((r) => r.camp === "home");

  return (
    <Section
      id="camps"
      kicker="05 · Two camps"
      title="Same category. Two jobs. Brand loyalty is a shop habit, not a tin."
      lede="Convenience-first drinkers live in cafes most days. Home-control drinkers already know what they like in a bowl. Asian / non-Asian is not the split — both groups sit in both camps."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Panel className="md:p-7">
          <div className="flex items-center justify-between gap-3">
            <CampBadge camp="convenience" />
            <span className="font-display text-3xl font-medium tracking-tight">{cafe.length}</span>
          </div>
          <h3 className="mt-5 font-display text-2xl font-medium tracking-tight">
            {CAMP_LABEL.convenience}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            The weekday default. Extra steps kill conversion. A $7–8 latte with consistent
            sweetness and visible matcha flavor wins the occasion. Go-to shops: Cha Cha Matcha,
            Blank Street, 12 Matcha, Matchaful.
          </p>
          <ul className="mt-5 flex flex-wrap gap-1.5">
            {cafe.map((r) => (
              <span key={r.id} className="font-mono text-xs text-matcha">
                {r.id}
              </span>
            ))}
          </ul>
        </Panel>
        <Panel className="md:p-7">
          <div className="flex items-center justify-between gap-3">
            <CampBadge camp="home" />
            <span className="font-display text-3xl font-medium tracking-tight">{home.length}</span>
          </div>
          <h3 className="mt-5 font-display text-2xl font-medium tracking-tight">{CAMP_LABEL.home}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Powder is the habit; the $8 drink is the treat. They split culinary vs ceremonial by
            use, notice origin, and will not pay tea-house prices every morning. Three people in
            this file. Not the street majority.
          </p>
          <ul className="mt-5 flex flex-wrap gap-1.5">
            {home.map((r) => (
              <span key={r.id} className="font-mono text-xs text-ink">
                {r.id}
              </span>
            ))}
          </ul>
        </Panel>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <PullQuote text="If I have to whisk, I'm not doing it." who="R07 · Cha Cha Matcha" />
        <PullQuote text="The $8 drink is a treat. Powder is the habit." who="R10 · Kettl as treat" />
        <PullQuote
          text="I'd rather walk to a good shop twice a week than gamble on a tin."
          who="R09 · 12 Matcha"
        />
      </div>
    </Section>
  );
}

export function Shops() {
  const f = useFilters();
  const list = applyFilters(respondents, f);
  const mentioned = new Set(list.map((r) => r.id));

  return (
    <Section
      id="shops"
      kicker="06 · Q4 recoded · NYC shops"
      title="Willing to try. X is the go-to. They would bring a friend there."
      lede={
        <>
          Q4 was recoded away from packaged-brand loyalty. Most people cannot name a tin. They
          name a <em>place</em> — a chain with decent quality control, or a specialty bar they
          would take a friend to. Starbucks is the floor people walk past. Luckin is the East
          Asian new-consumption entrant now sitting on the same weekday map.
        </>
      }
    >
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {NYC_SHOPS.map((shop) => {
          const who = shop.who.filter((id) => mentioned.has(id) || list.length === respondents.length);
          const dim = list.length !== respondents.length && shop.who.every((id) => !mentioned.has(id));
          return (
            <article
              key={shop.name}
              className={cn(
                "flex flex-col rounded-xl bg-cream p-5 shadow-[var(--shadow-border)]",
                dim && "opacity-45",
              )}
            >
              <p className="font-mono text-[11px] tracking-[0.14em] text-subtle uppercase">{shop.kind}</p>
              <h3 className="mt-2 font-display text-xl font-medium tracking-tight text-ink">{shop.name}</h3>
              <p className="mt-1 text-xs text-matcha">{shop.area}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{shop.blurb}</p>
              <p className="mt-4 font-mono text-[11px] tracking-wide text-subtle">
                {who.length ? `Named by ${who.join(" · ")}` : "Present as the category floor"}
              </p>
            </article>
          );
        })}
      </div>
      <p className="mt-6 max-w-3xl text-sm leading-relaxed text-subtle">
        Landscape drawn from the seed interview plus NYC roundups and r/MatchaEverything shop
        threads: Cha Cha Matcha, 12 Matcha, Matchaful, Setsugekka, Kettl, Isshiki, Mika’s
        Direction, Sorate, Matcha House, Blank Street’s flavored board, Luckin’s 2025 US debut.
        Go-to phrasing in the matrix is “willing to try different products, but X is where I go /
        where I would bring a friend.”
      </p>
    </Section>
  );
}
