import { median } from "@/lib/utils";

export type Camp = "convenience" | "home";
export type PowderStatus = "regular" | "rarely" | "tried-once" | "never";
export type Source = "primary" | "analogue";

export type MotivationCode =
  | "taste"
  | "health-wellness"
  | "health-naturalness"
  | "energy-focus"
  | "coffee-alt"
  | "habit-ritual"
  | "social-trend"
  | "skincare"
  | "not-artificial";

export const MOTIVATION_LABELS: Record<MotivationCode, string> = {
  taste: "Taste",
  "health-wellness": "Health / wellness",
  "health-naturalness": "Naturalness",
  "energy-focus": "Energy / focus",
  "coffee-alt": "Coffee alternative",
  "habit-ritual": "Habit / ritual",
  "social-trend": "Social / trend",
  skincare: "Perceived skincare",
  "not-artificial": "Not artificial",
};

export type Respondent = {
  id: string;
  asian: boolean;
  gender: "F" | "M";
  age: string;
  frequency: string;
  frequencyBucket: "daily" | "3-5" | "2-3" | "1-2";
  form: string;
  q1Raw: string;
  codes: MotivationCode[];
  q3Like: string;
  q3Dislike: string;
  tasteTags: string[];
  q4Brand: string;
  goToShop: string;
  shopType: "specialty" | "chain" | "home-tin" | "none";
  powder: PowderStatus;
  q6: string;
  pack30: number;
  perServing: number;
  usualBev: number;
  tooExpensive: number | null;
  q10: string;
  keyQuote: string;
  quote2: string;
  camp: Camp;
  source: Source;
  notes: string;
};

export const QUESTIONS = [
  { id: "Q1", text: "Why do you drink matcha? What is the main thing you're looking for?" },
  { id: "Q2", text: "How often do you usually have matcha?" },
  { id: "Q3", text: "What do you like or dislike about the taste?" },
  { id: "Q4", text: "Do you usually have a particular brand or type? Why?" },
  { id: "Q5", text: "Have you ever bought matcha powder to make it yourself?" },
  { id: "Q6a", text: "If no: What's stopping you from making it yourself?" },
  { id: "Q6b", text: "If yes: What makes you prefer making it yourself rather than buying a prepared drink?" },
  { id: "Q7", text: "If one package made approximately 30 drinks, what price would feel reasonable to you?" },
  { id: "Q8", text: "How much do you usually pay for a matcha beverage?" },
  { id: "Q9", text: "At what price would a matcha beverage feel too expensive?" },
  { id: "Q10", text: "If you were going to try matcha powder tomorrow, what would make you actually buy it?" },
] as const;

export const respondents: Respondent[] = [
  {
    id: "R01",
    asian: true,
    gender: "F",
    age: "not asked",
    frequency: "2–3× / week",
    frequencyBucket: "2-3",
    form: "Prepared lattes / cafe beverages",
    q1Raw:
      "It's very pure and pristine, not just for health. Matcha is not like those heavily artificial drinks people pursue. Healthy lifestyle has been going pretty viral the past 5–10 years. For girls, skincare is an attraction point. And the flavor itself is pretty good.",
    codes: ["health-naturalness", "taste", "skincare", "not-artificial"],
    q3Like: "Wants the matcha flavor kept. Prefers drinks that don't bury it under extra stuff.",
    q3Dislike:
      "Powder felt more bitter, more 'original,' mouthfeel a bit lacking vs a cafe drink.",
    tasteTags: ["matcha-forward", "bitter (powder)", "not too covered"],
    q4Brand:
      "No strong packaged brand. Willing to try different shops as long as they keep the matcha flavor itself — she does not want a lot of extras covering it. Chain latte shops with consistent quality are fine; specialty is a plus, not a requirement.",
    goToShop: "Rotates — flavor kept > brand",
    shopType: "none",
    powder: "rarely",
    q6: "Extra steps — inconvenient to buy and make. Also thinks powder is a bit bitter because it's more natural / 原汁原味, so from a taste standpoint it feels a bit lacking.",
    pack30: 30,
    perServing: 1,
    usualBev: 7.5,
    tooExpensive: null,
    q10: "If powder lands around $1 per drink she would consider home; above that she stays with the prepared drink.",
    keyQuote: "I don't want a lot of different stuff covering the matcha flavor.",
    quote2:
      "If it's around $1 a drink I would consider making it at home. Otherwise I'm just going to swap to the beverage.",
    camp: "convenience",
    source: "primary",
    notes:
      "Only completed street interview. Skincare coded as perceived benefit, not a verified claim. Q9 not asked. Age not recorded. Bilingual notes: 护肤功效 / 偏好保留本味 / 有点苦、原汁原味、口感欠缺.",
  },
  {
    id: "R02",
    asian: false,
    gender: "F",
    age: "late 20s",
    frequency: "Daily (morning)",
    frequencyBucket: "daily",
    form: "Cafe latte on the commute",
    q1Raw:
      "I switched off coffee. The energy is so… smooth? I don't know how else to describe it. No jitters, no 4pm crash. I didn't think I'd feel this different.",
    codes: ["energy-focus", "coffee-alt", "taste"],
    q3Like: "Creamy oat, still wants to taste the green. Now drinks it less sweet than when she started.",
    q3Dislike:
      "Chain versions often taste like vanilla syrup. Hot matcha from big coffee chains can be revolting if too sweet.",
    tasteTags: ["smooth", "creamy", "not too sweet", "matcha-forward"],
    q4Brand:
      "Willing to try different shops. Blank Street is the weekday stop because it is on her walk. Matchaful is where she would take a friend if she wants it to actually taste like matcha, not vanilla syrup.",
    goToShop: "Blank Street (weekday) · Matchaful (friends)",
    shopType: "chain",
    powder: "never",
    q6: "Morning is already a commute. A cafe is two minutes. She does not want a second ritual with a whisk before 8am.",
    pack30: 28,
    perServing: 0.93,
    usualBev: 7.25,
    tooExpensive: 9,
    q10: "Would need already-portioned packets that taste like her Matchaful order — not a 12-minute tea video.",
    keyQuote: "I got tired of paying $8 for vanilla syrup with a hint of green.",
    quote2: "The energy is so smooth. I don't know how else to describe it.",
    camp: "convenience",
    source: "analogue",
    notes:
      "Coffee-to-matcha switcher pattern, recoded as cafe-first. Taste grew on her; health was not the first reason.",
  },
  {
    id: "R03",
    asian: true,
    gender: "M",
    age: "early 30s",
    frequency: "4–5× / week",
    frequencyBucket: "3-5",
    form: "Usucha at home + milk lattes",
    q1Raw:
      "Part ritual, part focus. I like that I can drink it and still sit down. Coffee makes me buzzy. Also my wife grew up on usucha so we do both.",
    codes: ["habit-ritual", "energy-focus", "taste"],
    q3Like: "Umami, a little bitterness is fine. Wants to actually taste the tea.",
    q3Dislike: "Milk can drown the notes if you use the delicate stuff. Flavored syrups — no.",
    tasteTags: ["umami", "bitter (ok)", "matcha-forward"],
    q4Brand:
      "Home tins split by use: cheaper culinary (Wakatake-type) for lattes, a better tin for usucha. Cafe: Setsugekka is where he would bring a friend. Starbucks is not matcha.",
    goToShop: "Setsugekka · home tins by grade",
    shopType: "home-tin",
    powder: "regular",
    q6: "Cost per cup, and he can pick the grade for the drink. Tea-house usucha is not an everyday price.",
    pack30: 24,
    perServing: 0.8,
    usualBev: 6.5,
    tooExpensive: 10,
    q10: "Origin + grade honesty. If you sell culinary as ceremonial I'm out.",
    keyQuote: "If it's going in a latte, don't waste the expensive tin.",
    quote2: "I want to taste the tea. Milk is fine. Syrup is not the point.",
    camp: "home",
    source: "analogue",
    notes:
      "Usucha vs latte split is a real enthusiast pattern. Price answer is messy on purpose — he rejected a single number at first.",
  },
  {
    id: "R04",
    asian: false,
    gender: "F",
    age: "early 20s?",
    frequency: "2–3× / week",
    frequencyBucket: "2-3",
    form: "Iced cafe latte",
    q1Raw:
      "Honestly? It feels healthier than my old iced coffee. And people say it's good for skin. I don't know if that's true. I just like that it doesn't feel fake-sweet… except when it is.",
    codes: ["health-wellness", "skincare", "taste"],
    q3Like: "Creamy iced. Oat. Needs some sweetness.",
    q3Dislike:
      "Starbucks too sweet. Tried it 'black' once, did not like it. Powder she made at home was clumpy and bitter.",
    tasteTags: ["creamy", "sweet (needed)", "bitter (dislike)", "iced"],
    q4Brand:
      "Whatever the cafe uses — she would not know the difference on a powder label. Cha Cha Matcha is her most-visited shop. Starbucks is the backup she complains about.",
    goToShop: "Cha Cha Matcha",
    shopType: "chain",
    powder: "tried-once",
    q6: "I don't have the little bamboo thing. I made it once and it was disgusting. Also I don't want to think about water temperature at 8am.",
    pack30: 25,
    perServing: 0.83,
    usualBev: 7.5,
    tooExpensive: 10,
    q10: "If it came in a shaker, already portioned, and didn't taste bitter. Someone showing me once would help. I'm not watching a 12-minute tea video.",
    keyQuote: "I made it once and it was disgusting.",
    quote2: "I honestly have no idea what powder costs.",
    camp: "convenience",
    source: "analogue",
    notes:
      "Price answer is a guess — low confidence. Failed first powder trial poisoning conversion. Cha Cha as the accessible NYC gateway.",
  },
  {
    id: "R05",
    asian: true,
    gender: "F",
    age: "mid 20s",
    frequency: "Daily",
    frequencyBucket: "daily",
    form: "Iced oat latte (cafe)",
    q1Raw:
      "Taste is the main thing. Health is a bonus. I like that it's not as heavy as coffee. 味道要在，不要一堆香精把抹茶盖掉.",
    codes: ["taste", "health-wellness", "energy-focus"],
    q3Like: "Bold, creamy, still matcha. Nutty is ok. Bright grassy is ok if not harsh.",
    q3Dislike: "Strawberry / earl grey syrup drinks. Seaweed-heavy cheap powder. Too floral.",
    tasteTags: ["matcha-forward", "creamy", "umami", "not flavored"],
    q4Brand:
      "Willing to try different products, but 12 Matcha is her go-to and where she would bring a friend. She walks past Starbucks. Matchaful is the backup when the line at 12 is absurd.",
    goToShop: "12 Matcha",
    shopType: "specialty",
    powder: "never",
    q6: "12 Matcha already keeps the flavor. Extra steps for a commute drink are not worth it when the shop is on the way.",
    pack30: 30,
    perServing: 1,
    usualBev: 7,
    tooExpensive: 9,
    q10: "A sample size. I won't drop $45 on a tin I haven't tasted. And don't call culinary 'ceremonial.'",
    keyQuote: "Don't cover it with strawberry syrup. That's not matcha, that's dessert.",
    quote2: "Taste is the main thing. Health is a bonus.",
    camp: "convenience",
    source: "analogue",
    notes:
      "Closest analogue to R01 on matcha-forward taste, but converted to a specialty cafe habit rather than powder.",
  },
  {
    id: "R06",
    asian: false,
    gender: "M",
    age: "mid 30s",
    frequency: "Daily",
    frequencyBucket: "daily",
    form: "Home latte / sometimes powder + water",
    q1Raw:
      "Coffee wrecks my stomach no matter how I make it. Matcha doesn't. That's the whole story. The health stuff is extra. I like the earthy taste now.",
    codes: ["coffee-alt", "taste", "health-wellness"],
    q3Like: "Earthy. Bitterness doesn't bother him. Aftertaste better than coffee.",
    q3Dislike: "Watered-down cafe matcha. Super sugary chain drinks. If I can't taste it, why am I here.",
    tasteTags: ["earthy", "bitter (ok)", "not watery", "not too sweet"],
    q4Brand:
      "Supermarket / cheaper culinary for daily. Out: whichever chain is on the way — Blank Street or Luckin. Not hunting Uji tins in a cafe.",
    goToShop: "Home culinary tin · closest chain",
    shopType: "home-tin",
    powder: "regular",
    q6: "Price, mostly. Also I can make it in 30 seconds with a frother. I'm not doing a ceremony.",
    pack30: 19,
    perServing: 0.63,
    usualBev: 6.25,
    tooExpensive: 8,
    q10: "Already buys it. Lowest friction: a tin that's not grassy-dust and a $12 frother.",
    keyQuote: "I'm not paying ceremonial prices to dump it in milk.",
    quote2: "Coffee wrecks my stomach. That's the whole story.",
    camp: "home",
    source: "analogue",
    notes: "Price-sensitive home user. Shows the floor of the powder WTP distribution.",
  },
  {
    id: "R07",
    asian: true,
    gender: "F",
    age: "early 20s",
    frequency: "3–4× / week",
    frequencyBucket: "3-5",
    form: "Cafe beverage only",
    q1Raw:
      "Clean energy, and yeah the skincare thing is part of it — that's what people say anyway. I like that it feels like I'm doing something slightly better than a frappuccino.",
    codes: ["energy-focus", "skincare", "health-wellness", "social-trend"],
    q3Like: "Creamy, a little sweet, iced. Pretty color.",
    q3Dislike: "Too grassy she won't finish. Too bitter. But also too fake-sweet is embarrassing.",
    tasteTags: ["creamy", "sweet (light)", "grassy (dislike if strong)", "iced"],
    q4Brand:
      "The pretty one. Cha Cha Matcha is most often visited — she takes a picture sometimes, she's not proud. Willing to try Matchaful. No tin loyalty.",
    goToShop: "Cha Cha Matcha",
    shopType: "chain",
    powder: "never",
    q6: "Too many steps. Dorm kitchen. I just buy it. I don't want to own another gadget.",
    pack30: 28,
    perServing: 0.93,
    usualBev: 7.5,
    tooExpensive: 9,
    q10: "Pre-portioned packets + oat milk. Instant, not ceremonial. If I have to whisk, I'm not doing it.",
    keyQuote: "If I have to whisk, I'm not doing it.",
    quote2: "The price almost doesn't matter if the steps are annoying.",
    camp: "convenience",
    source: "analogue",
    notes: "Strong convenience lock. Powder WTP is hypothetical — she said so.",
  },
  {
    id: "R08",
    asian: false,
    gender: "F",
    age: "21",
    frequency: "1–2× / week",
    frequencyBucket: "1-2",
    form: "Flavored cafe lattes",
    q1Raw:
      "It tastes good? And it's kind of everywhere. I wouldn't say I'm a matcha person. I just order it.",
    codes: ["taste", "social-trend"],
    q3Like: "Sweet, dessert-y versions. Creamy. Fun flavors.",
    q3Dislike: "Straight matcha is too green / too tea. Doesn't like when it's bitter.",
    tasteTags: ["sweet", "flavored", "creamy", "bitter (dislike)"],
    q4Brand:
      "Blank Street. She likes the flavored ones — strawberry shortcake, cinnamon bun, pistachio-type specials. Tins on a shelf all look the same and some are like $50.",
    goToShop: "Blank Street",
    shopType: "chain",
    powder: "never",
    q6: "Wouldn't know which to buy. Afraid of wasting money. Don't have time. Also I like the cafe versions that aren't really 'pure' matcha.",
    pack30: 22,
    perServing: 0.73,
    usualBev: 6.5,
    tooExpensive: 8.5,
    q10: "A starter kit under $30 that actually tastes like the cafe — meaning a bit sweet. Not a lecture about grades.",
    keyQuote: "I wouldn't say I'm a matcha person. I just order it.",
    quote2: "They all look the same on the shelf and some are like $50.",
    camp: "convenience",
    source: "analogue",
    notes:
      "Light user / flavor-forward. Different job-to-be-done than R01 and R03. Easy to lose if the product is too 'pure.' Blank Street menu is built for this job.",
  },
  {
    id: "R09",
    asian: true,
    gender: "M",
    age: "late 20s",
    frequency: "2–3× / week",
    frequencyBucket: "2-3",
    form: "Specialty cafe latte / usucha when out",
    q1Raw:
      "I want the flavor, and a milder caffeine. Not a health project. If it tastes like grass clippings I just don't finish it.",
    codes: ["taste", "energy-focus"],
    q3Like: "Umami, slight bitterness, clean finish.",
    q3Dislike: "Vanilla syrup. Weak cafe shots. Brownish cheap powder.",
    tasteTags: ["umami", "bitter (slight ok)", "matcha-forward", "not flavored"],
    q4Brand:
      "Willing to try, but 12 Matcha is the most-visited shop and where he would bring a friend. Origin on the menu matters. Cha Cha is fine if he's late. Will not buy culinary labeled ceremonial.",
    goToShop: "12 Matcha",
    shopType: "specialty",
    powder: "never",
    q6: "The serving math on tins is fake sometimes. I'd rather walk to 12 Matcha twice a week than gamble on a $40 tin I haven't tasted.",
    pack30: 25,
    perServing: 0.83,
    usualBev: 6,
    tooExpensive: 8,
    q10: "Tell me the origin. Don't sell culinary as ceremonial. A small tin to try.",
    keyQuote: "The serving math is fake sometimes.",
    quote2: "I'd rather walk to a good shop twice a week than gamble on a tin.",
    camp: "convenience",
    source: "analogue",
    notes:
      "Pushed back on the 30-drink framing — keep that. Quality-seeking but still cafe-first; powder is a risk, not a habit.",
  },
  {
    id: "R10",
    asian: false,
    gender: "F",
    age: "early 30s",
    frequency: "Daily",
    frequencyBucket: "daily",
    form: "Whisked home ritual; cafe as treat",
    q1Raw:
      "The morning thing. I whisk it after stretching. It keeps me alert without being wired. I like the grassy sweet taste now. I used to think that was marketing.",
    codes: ["habit-ritual", "energy-focus", "taste"],
    q3Like: "Sweet-umami, grassy, thick foam if she whisks well.",
    q3Dislike: "Bitter low-grade. Cafe drinks that are beige-green and taste like milk.",
    tasteTags: ["grassy", "umami", "sweet (natural)", "creamy (foam)"],
    q4Brand:
      "Rotates higher-grade Japanese tins at home. Cafe treat: Kettl is where she would bring a friend. Notices price hikes. Not loyal to a cafe brand for the daily cup — powder is the habit.",
    goToShop: "Kettl (treat) · home tins (habit)",
    shopType: "home-tin",
    powder: "regular",
    q6: "Quality and the ritual. Cafe is a treat, not the habit. I got sick of not knowing what they put in it.",
    pack30: 38,
    perServing: 1.27,
    usualBev: 8.5,
    tooExpensive: 12,
    q10: "Already converted. To switch brands: harvest info, not another pretty tin.",
    keyQuote: "The $8 drink is a treat. Powder is the habit.",
    quote2: "I got sick of not knowing what they put in it.",
    camp: "home",
    source: "analogue",
    notes: "Upper bound of powder WTP. Also questions the 30-serving assumption.",
  },
];

export const NYC_SHOPS = [
  {
    name: "Cha Cha Matcha",
    kind: "Fast chain",
    area: "NoMad / SoHo / Flatiron / Midtown",
    blurb:
      "Draft matcha on tap — NYC's gateway cup. Pink branding, consistent froth, strawberry specials. The shop people actually visit most days.",
    who: ["R04", "R07"],
  },
  {
    name: "Blank Street",
    kind: "Coffee chain",
    area: "Citywide",
    blurb:
      "A coffee menu that is quietly a matcha menu: cinnamon bun, strawberry shortcake, vanilla bean, blondie, blueberry. Flavor-forward, not purist.",
    who: ["R02", "R08"],
  },
  {
    name: "12 Matcha",
    kind: "Specialty bar",
    area: "NoHo · Bond Street",
    blurb:
      "Hand-whisked, ~6g Uji, design-forward, lines out the door. The place people name when they would bring a friend. Purists yes; syrup drinks no.",
    who: ["R05", "R09"],
  },
  {
    name: "Matchaful",
    kind: "Wellness specialty",
    area: "SoHo / West Village / Nolita +",
    blurb:
      "Organic single-origin from Shizuoka. Clean-girl add-ins (collagen, MCT). The 'I would take a friend' shop when 12 Matcha's line is absurd.",
    who: ["R02", "R07"],
  },
  {
    name: "Setsugekka",
    kind: "Tea house",
    area: "East Village",
    blurb:
      "Stone-mill, ceremonial prep, region-priced tins. Closest thing in the file to a Kyoto room. Named by the home-control camp as a treat, not a habit.",
    who: ["R03"],
  },
  {
    name: "Kettl",
    kind: "Tea purveyor",
    area: "Greenpoint",
    blurb:
      "Farm-direct Japanese tea, supplies serious kitchens. The treat cafe for people who already whisk at home.",
    who: ["R10"],
  },
  {
    name: "Luckin Coffee",
    kind: "New-consumption chain",
    area: "22 NYC stores since June 2025",
    blurb:
      "China's largest coffee brand, US debut 2025. Matcha is on the board next to Coconut Latte. East Asian new-consumption arriving as a weekday option, not a ceremony.",
    who: ["R06"],
  },
  {
    name: "Starbucks",
    kind: "Default coffee",
    area: "Everywhere",
    blurb:
      "The drink people walk past. Too sweet, beige-green, 'vanilla syrup with a hint of green.' Present as the category's floor, not a go-to.",
    who: [],
  },
] as const;

export const FINDINGS = [
  {
    id: "H1",
    title: "Matcha-forward flavor is the high-importance job for a slice of users.",
    support:
      "R01 key quote; R03 / R05 / R09 tags. They reject drinks that bury the tea. r/MatchaEverything threads on syrup masking high-grade matcha rhyme with this.",
    kill: "If remaining street interviews mostly want flavored/sweet (R08 type) as the core job.",
  },
  {
    id: "H2",
    title: "The real competition for powder is a $7–8 ready-to-drink, not another tin.",
    support:
      "R01 reverts above ~$1/serving. R07: price almost doesn't matter if she has to whisk. 7/10 are cafe-first. Median usual beverage $7.13.",
    kill: "If the remaining street sample is already making powder despite cafes, or cafes collapse on quality.",
  },
  {
    id: "H3",
    title: "A failed first powder trial is a conversion killer, not a mild objection.",
    support:
      "R01 bitterness + extra steps. R04: 'I made it once and it was disgusting.' R07/R08 will not whisk. Only 3/10 use powder regularly.",
    kill: "If a simple packet + shaker converts them in a follow-up.",
  },
  {
    id: "H4",
    title: "Perceived health is 'not artificial' + lifestyle + skincare hearsay — not a clinical claim.",
    support:
      "R01 pristine / middle-class health / 护肤. R04: 'people say it's good for skin. I don't know if that's true.' Nobody led with L-theanine or EGCG.",
    kill: "If people lead with L-theanine / EGCG unprompted in remaining street interviews.",
  },
  {
    id: "H5",
    title: "Two camps, weak packaged-brand loyalty. Loyalty is to a shop habit.",
    support:
      "7 convenience / 3 home. Q4 answers name Cha Cha, Blank Street, 12 Matcha, Matchaful, Setsugekka, Kettl — places, not SKUs. 'Willing to try, but X is my go-to.'",
    kill: "If a packaged tin or a cafe brand actually shows up as a named daily SKU habit.",
  },
  {
    id: "H6",
    title: "Asking maximum price for 30 drinks inflates WTP. 'Reasonable' is cleaner.",
    support:
      "R01 was asked max → $30. R09/R10 questioned whether 30 servings is real.",
    kill: "If both wordings give the same distribution in a split test.",
  },
  {
    id: "H7",
    title: "Asian vs non-Asian is not the main split. Camp is.",
    support:
      "Both groups appear in both camps. Taste-forward shows up on both sides. The powder minority is mixed (R03 Asian; R06 and R10 not).",
    kill: "If remaining 5/5 street work shows a clean cultural difference on usucha, sweetness, or powder uptake.",
  },
] as const;

export const BARRIERS = [
  { label: "Convenience / extra steps", n: 5, ids: ["R01", "R02", "R05", "R07", "R09"] },
  { label: "Bitterness / bad first try", n: 2, ids: ["R01", "R04"] },
  { label: "Don't know which tin to buy", n: 2, ids: ["R04", "R08"] },
  { label: "No tools / don't want gadgets", n: 2, ids: ["R04", "R07"] },
  { label: "Cafe taste is already the point", n: 2, ids: ["R05", "R08"] },
  { label: "Tin prices look scary", n: 1, ids: ["R08"] },
] as const;

export type FilterState = {
  camp: "all" | Camp;
  origin: "all" | "asian" | "non-asian";
  powder: "all" | PowderStatus;
};

export function applyFilters(list: Respondent[], f: FilterState): Respondent[] {
  return list.filter((r) => {
    if (f.camp !== "all" && r.camp !== f.camp) return false;
    if (f.origin === "asian" && !r.asian) return false;
    if (f.origin === "non-asian" && r.asian) return false;
    if (f.powder !== "all" && r.powder !== f.powder) return false;
    return true;
  });
}

export function countCodes(list: Respondent[]) {
  const counts = new Map<MotivationCode, number>();
  for (const r of list) {
    for (const c of r.codes) counts.set(c, (counts.get(c) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([code, n]) => ({ code, label: MOTIVATION_LABELS[code], n }))
    .sort((a, b) => b.n - a.n);
}

export function countTaste(list: Respondent[]) {
  const counts = new Map<string, number>();
  for (const r of list) {
    for (const t of r.tasteTags) counts.set(t, (counts.get(t) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([tag, n]) => ({ tag, n }))
    .sort((a, b) => b.n - a.n);
}

export function studyStats(list: Respondent[] = respondents) {
  const packs = list.map((r) => r.pack30);
  const servings = list.map((r) => r.perServing);
  const bevs = list.map((r) => r.usualBev);
  const walk = list.map((r) => r.tooExpensive).filter((n): n is number => n != null);
  const powderRegular = list.filter((r) => r.powder === "regular").length;
  const convenience = list.filter((r) => r.camp === "convenience").length;
  const home = list.filter((r) => r.camp === "home").length;
  const asian = list.filter((r) => r.asian).length;
  return {
    n: list.length,
    asian,
    nonAsian: list.length - asian,
    powderRegular,
    convenience,
    home,
    medianPack: median(packs),
    medianServing: median(servings),
    medianBev: median(bevs),
    medianWalk: median(walk),
    packMin: Math.min(...packs),
    packMax: Math.max(...packs),
    bevMin: Math.min(...bevs),
    bevMax: Math.max(...bevs),
  };
}

export const POWDER_LABEL: Record<PowderStatus, string> = {
  regular: "Uses powder regularly",
  rarely: "Rarely",
  "tried-once": "Tried once — stopped",
  never: "Does not buy powder",
};

export const CAMP_LABEL: Record<Camp, string> = {
  convenience: "Convenience-first",
  home: "Home-control",
};

export const NAV = [
  { id: "overview", label: "Overview" },
  { id: "sample", label: "Sample" },
  { id: "jobs", label: "Jobs" },
  { id: "taste", label: "Taste" },
  { id: "camps", label: "Camps" },
  { id: "shops", label: "Shops" },
  { id: "powder", label: "Powder" },
  { id: "price", label: "Price" },
  { id: "quotes", label: "Quotes" },
  { id: "findings", label: "Findings" },
  { id: "trends", label: "Trends" },
  { id: "method", label: "Method" },
] as const;
