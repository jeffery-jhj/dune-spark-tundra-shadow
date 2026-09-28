import { Panel, Section } from "@/components/report/primitives";

export function Trends() {
  return (
    <Section
      id="trends"
      kicker="11 · Industry reading"
      title="Two currents. New drinks going west. Health becoming the default brief."
      lede="The assignment did not ask for a market model. It asked for a reading of consumption. The street file is small. The category around it is not."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <article className="rounded-xl bg-cream p-6 shadow-[var(--shadow-border)] md:p-8">
          <p className="font-mono text-[11px] tracking-[0.16em] text-matcha uppercase">Current one</p>
          <h3 className="mt-3 font-display text-2xl leading-snug font-medium tracking-tight md:text-3xl">
            New consumption is opening a Western repertoire that used to be coffee-only.
          </h3>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted">
            <p>
              For most of the last two decades, “new consumption” drinks — fruit teas, cheese
              foams, regional milk teas, ceremonial-grade lattes — incubated in mainland China,
              Taiwan, and Japan. North America had coffee, and then coffee with a green powder
              dumped in. That is changing because East Asian brands and formats are no longer
              staying home.
            </p>
            <p>
              Luckin Coffee opened in New York in June 2025. By September 2026 it had roughly two
              dozen stores in the city, matcha on the board next to Coconut Latte, ordered from an
              app. Heytea has been testing the same corridor. Cha Cha Matcha, Matchaful, 12
              Matcha, Setsugekka, and Kettl are local specialists; Blank Street — a coffee chain —
              now runs a matcha list long enough to be its own menu: cinnamon bun, strawberry
              shortcake, vanilla bean, blondie. The category is no longer a single ceremonial
              bowl. It is a weekday option.
            </p>
            <p>
              r/MatchaEverything is the cultural tell. The community was founded 14 January 2025.
              In about a year and a half it grew past 50,000 members. Posting is dense enough that
              shop-recommendation threads, $8-latte complaints, “which tin,” and NYC lists are a
              weekly drumbeat — the brief observed well over a thousand posts in a busy week. That
              is not a hobbyist backwater. It is Western consumers forming a habit language that
              did not exist in English-language coffee culture ten years ago: ceremonial versus
              culinary, origin, grams per drink, why the cafe tastes like vanilla syrup.
            </p>
            <p>
              Matcha is Japanese. The broader move is East Asian. What the street sample actually
              does with that abundance is conservative: they pick a go-to shop, they want the
              flavor kept, they do not become tin buyers. More choice opened the habit. It did not
              automatically convert them to powder.
            </p>
          </div>
        </article>

        <article className="rounded-xl bg-cream p-6 shadow-[var(--shadow-border)] md:p-8">
          <p className="font-mono text-[11px] tracking-[0.16em] text-matcha uppercase">Current two</p>
          <h3 className="mt-3 font-display text-2xl leading-snug font-medium tracking-tight md:text-3xl">
            Health, quality, and “not fake” are a louder brief than they were ten years ago.
          </h3>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted">
            <p>
              R01 did not lead with a clinical claim. She led with pristine, not-artificial,
              middle-class body-control, and a skincare attraction point she has heard about. That
              is the actual health job in this file. R04 said people say it is good for skin and
              immediately added that she does not know if it is true. Nobody volunteered
              L-theanine or EGCG. The code is lifestyle cleanliness, not a supplement panel.
            </p>
            <p>
              That still matters commercially. Middle-class drinkers in both China and the US have
              raised the floor on food quality and food safety over the last decade. Matcha fits
              the story they already want to tell about themselves: less fake-sweet than a
              frappuccino, smoother than coffee, photographable, “slightly better.” Once a drink
              sits in that slot, it becomes a trend, and trends pull volume. The 2025 harvest
              shock — sold-out tins, auction prices multiples of the prior year, r/MatchaEverything
              threads on sticker shock — is what demand looks like when a lifestyle drink outruns
              an agricultural supply chain built for tea ceremony, not for Blank Street.
            </p>
            <p>
              The risk for a powder brand is to over-read the health halo. Cafe-first users will
              not whisk for antioxidants. They will pay $7–8 for a drink that keeps the matcha
              flavor, does not taste like syrup, and does not ask them to own a bamboo tool. The
              health story gets them in the door. Convenience and taste decide whether they come
              back — and whether they ever buy the tin.
            </p>
            <p>
              If East Asian new-consumption keeps seeding North American high streets, the Western
              drinker will have more matcha in front of them, not less. The open question from
              this file is not whether the category grows. It is whether growth stays inside the
              $8 cup, or whether a lower-friction powder format (packets, shaker, honest grade,
              ~$1 a serving) can steal the weekday from Cha Cha and Blank Street.
            </p>
          </div>
        </article>
      </div>

      <Panel className="mt-6">
        <p className="font-mono text-[11px] tracking-[0.14em] text-subtle uppercase">What Reddit adds that the street did not</p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <p className="text-sm leading-relaxed text-muted">
            Home powder is loud on r/MatchaEverything (“got sick of spending $8+”). It is quiet on
            the street. The subreddit is a converted sample. Do not use it as a base rate.
          </p>
          <p className="text-sm leading-relaxed text-muted">
            Grade honesty is a live grievance: culinary sold as ceremonial is a trust-breaker
            (R03, R05, R09). Origin and harvest info beat another pretty tin (R10).
          </p>
          <p className="text-sm leading-relaxed text-muted">
            NYC threads name 12 Matcha, Setsugekka, Matchaful, Cha Cha, Kettl, Matcha House,
            Isshiki, Mika’s Direction — the same shop set used to recode Q4 as a place habit.
          </p>
        </div>
      </Panel>
    </Section>
  );
}

export function Method() {
  return (
    <Section
      id="method"
      kicker="12 · Method"
      title="A working file, not a census. Designed to be replaced."
      lede="Ten people, ideally five Asian and five not, street-style. One intercept is complete. The matrix is built so the remaining interviews can overwrite analogues without breaking the structure."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h3 className="font-display text-xl font-medium tracking-tight">What is in the file</h3>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
            <li>
              <span className="font-medium text-ink">R01</span> — completed street interview.
              Primary. Bilingual notes retained. Q9 and age not asked.
            </li>
            <li>
              <span className="font-medium text-ink">R02–R10</span> — working analogues, 5 / 5
              Asian split, aligned to the seed case plus NYC shop landscape and public
              r/MatchaEverything themes. Labeled as analogues in every card.
            </li>
            <li>
              Q4 recoded as go-to <em>shop</em>, not packaged brand. Q5 capped at three regular
              powder users.
            </li>
          </ul>
        </Panel>
        <Panel>
          <h3 className="font-display text-xl font-medium tracking-tight">Question guide</h3>
          <ol className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
            <li>Q1 Why do you drink matcha? What is the main thing you are looking for?</li>
            <li>Q2 How often do you usually have matcha?</li>
            <li>Q3 What do you like or dislike about the taste?</li>
            <li>Q4 Do you usually have a particular brand or type? Why?</li>
            <li>Q5 Have you ever bought matcha powder to make it yourself?</li>
            <li>Q6a/b Barrier, or why home.</li>
            <li>Q7 Reasonable price for ~30 drinks — not maximum.</li>
            <li>Q8 Usual beverage paid. Q9 walk-away. Q10 conversion trigger.</li>
          </ol>
        </Panel>
      </div>
      <p className="mt-8 max-w-3xl text-sm leading-relaxed text-subtle">
        Sources for the shop landscape and category reading: Blank Street menu; NYC matcha
        roundups (Roaming Reina, Quintessentially, Copina Co., local lists naming 12 Matcha,
        Cha Cha Matcha, Matchaful, Setsugekka, Kettl, Sorate); r/MatchaEverything (founded 14
        Jan 2025); reporting on Luckin’s NYC entry (June 2025) and subsequent expansion. This
        is a consumption-behavior working file for class, not a representative survey.
      </p>
    </Section>
  );
}
