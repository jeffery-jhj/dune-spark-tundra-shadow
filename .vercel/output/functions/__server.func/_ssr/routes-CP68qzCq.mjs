import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { r as Menu, t as X } from "../_libs/lucide-react.mjs";
import { a as DialogPortal, i as DialogOverlay, m as Slot, n as DialogClose, o as DialogTitle, r as DialogContent, s as DialogTrigger, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { a as median, i as formatUsdShort, n as cn, r as formatUsd } from "./router-DJ6iD8SR.mjs";
import { t as create } from "../_libs/zustand.mjs";
import { a as Scatter, c as Bar, d as Tooltip, i as XAxis, l as Cell, n as BarChart, o as ZAxis, r as YAxis, s as CartesianGrid, t as ScatterChart, u as ResponsiveContainer } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CP68qzCq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var badgeVariants = cva("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium tracking-wide", {
	variants: { variant: {
		default: "bg-matcha-wash text-matcha-deep",
		matcha: "bg-matcha text-cream",
		outline: "text-muted shadow-[0_0_0_1px_var(--color-line)]",
		ink: "bg-ink text-cream",
		cream: "bg-cream text-muted shadow-[0_0_0_1px_var(--color-line)]",
		warn: "bg-matcha-mist text-warn"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
var MOTIVATION_LABELS = {
	taste: "Taste",
	"health-wellness": "Health / wellness",
	"health-naturalness": "Naturalness",
	"energy-focus": "Energy / focus",
	"coffee-alt": "Coffee alternative",
	"habit-ritual": "Habit / ritual",
	"social-trend": "Social / trend",
	skincare: "Perceived skincare",
	"not-artificial": "Not artificial"
};
var respondents = [
	{
		id: "R01",
		asian: true,
		gender: "F",
		age: "not asked",
		frequency: "2–3× / week",
		frequencyBucket: "2-3",
		form: "Prepared lattes / cafe beverages",
		q1Raw: "It's very pure and pristine, not just for health. Matcha is not like those heavily artificial drinks people pursue. Healthy lifestyle has been going pretty viral the past 5–10 years. For girls, skincare is an attraction point. And the flavor itself is pretty good.",
		codes: [
			"health-naturalness",
			"taste",
			"skincare",
			"not-artificial"
		],
		q3Like: "Wants the matcha flavor kept. Prefers drinks that don't bury it under extra stuff.",
		q3Dislike: "Powder felt more bitter, more 'original,' mouthfeel a bit lacking vs a cafe drink.",
		tasteTags: [
			"matcha-forward",
			"bitter (powder)",
			"not too covered"
		],
		q4Brand: "No strong packaged brand. Willing to try different shops as long as they keep the matcha flavor itself — she does not want a lot of extras covering it. Chain latte shops with consistent quality are fine; specialty is a plus, not a requirement.",
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
		quote2: "If it's around $1 a drink I would consider making it at home. Otherwise I'm just going to swap to the beverage.",
		camp: "convenience",
		source: "primary",
		notes: "Only completed street interview. Skincare coded as perceived benefit, not a verified claim. Q9 not asked. Age not recorded. Bilingual notes: 护肤功效 / 偏好保留本味 / 有点苦、原汁原味、口感欠缺."
	},
	{
		id: "R02",
		asian: false,
		gender: "F",
		age: "late 20s",
		frequency: "Daily (morning)",
		frequencyBucket: "daily",
		form: "Cafe latte on the commute",
		q1Raw: "I switched off coffee. The energy is so… smooth? I don't know how else to describe it. No jitters, no 4pm crash. I didn't think I'd feel this different.",
		codes: [
			"energy-focus",
			"coffee-alt",
			"taste"
		],
		q3Like: "Creamy oat, still wants to taste the green. Now drinks it less sweet than when she started.",
		q3Dislike: "Chain versions often taste like vanilla syrup. Hot matcha from big coffee chains can be revolting if too sweet.",
		tasteTags: [
			"smooth",
			"creamy",
			"not too sweet",
			"matcha-forward"
		],
		q4Brand: "Willing to try different shops. Blank Street is the weekday stop because it is on her walk. Matchaful is where she would take a friend if she wants it to actually taste like matcha, not vanilla syrup.",
		goToShop: "Blank Street (weekday) · Matchaful (friends)",
		shopType: "chain",
		powder: "never",
		q6: "Morning is already a commute. A cafe is two minutes. She does not want a second ritual with a whisk before 8am.",
		pack30: 28,
		perServing: .93,
		usualBev: 7.25,
		tooExpensive: 9,
		q10: "Would need already-portioned packets that taste like her Matchaful order — not a 12-minute tea video.",
		keyQuote: "I got tired of paying $8 for vanilla syrup with a hint of green.",
		quote2: "The energy is so smooth. I don't know how else to describe it.",
		camp: "convenience",
		source: "analogue",
		notes: "Coffee-to-matcha switcher pattern, recoded as cafe-first. Taste grew on her; health was not the first reason."
	},
	{
		id: "R03",
		asian: true,
		gender: "M",
		age: "early 30s",
		frequency: "4–5× / week",
		frequencyBucket: "3-5",
		form: "Usucha at home + milk lattes",
		q1Raw: "Part ritual, part focus. I like that I can drink it and still sit down. Coffee makes me buzzy. Also my wife grew up on usucha so we do both.",
		codes: [
			"habit-ritual",
			"energy-focus",
			"taste"
		],
		q3Like: "Umami, a little bitterness is fine. Wants to actually taste the tea.",
		q3Dislike: "Milk can drown the notes if you use the delicate stuff. Flavored syrups — no.",
		tasteTags: [
			"umami",
			"bitter (ok)",
			"matcha-forward"
		],
		q4Brand: "Home tins split by use: cheaper culinary (Wakatake-type) for lattes, a better tin for usucha. Cafe: Setsugekka is where he would bring a friend. Starbucks is not matcha.",
		goToShop: "Setsugekka · home tins by grade",
		shopType: "home-tin",
		powder: "regular",
		q6: "Cost per cup, and he can pick the grade for the drink. Tea-house usucha is not an everyday price.",
		pack30: 24,
		perServing: .8,
		usualBev: 6.5,
		tooExpensive: 10,
		q10: "Origin + grade honesty. If you sell culinary as ceremonial I'm out.",
		keyQuote: "If it's going in a latte, don't waste the expensive tin.",
		quote2: "I want to taste the tea. Milk is fine. Syrup is not the point.",
		camp: "home",
		source: "analogue",
		notes: "Usucha vs latte split is a real enthusiast pattern. Price answer is messy on purpose — he rejected a single number at first."
	},
	{
		id: "R04",
		asian: false,
		gender: "F",
		age: "early 20s?",
		frequency: "2–3× / week",
		frequencyBucket: "2-3",
		form: "Iced cafe latte",
		q1Raw: "Honestly? It feels healthier than my old iced coffee. And people say it's good for skin. I don't know if that's true. I just like that it doesn't feel fake-sweet… except when it is.",
		codes: [
			"health-wellness",
			"skincare",
			"taste"
		],
		q3Like: "Creamy iced. Oat. Needs some sweetness.",
		q3Dislike: "Starbucks too sweet. Tried it 'black' once, did not like it. Powder she made at home was clumpy and bitter.",
		tasteTags: [
			"creamy",
			"sweet (needed)",
			"bitter (dislike)",
			"iced"
		],
		q4Brand: "Whatever the cafe uses — she would not know the difference on a powder label. Cha Cha Matcha is her most-visited shop. Starbucks is the backup she complains about.",
		goToShop: "Cha Cha Matcha",
		shopType: "chain",
		powder: "tried-once",
		q6: "I don't have the little bamboo thing. I made it once and it was disgusting. Also I don't want to think about water temperature at 8am.",
		pack30: 25,
		perServing: .83,
		usualBev: 7.5,
		tooExpensive: 10,
		q10: "If it came in a shaker, already portioned, and didn't taste bitter. Someone showing me once would help. I'm not watching a 12-minute tea video.",
		keyQuote: "I made it once and it was disgusting.",
		quote2: "I honestly have no idea what powder costs.",
		camp: "convenience",
		source: "analogue",
		notes: "Price answer is a guess — low confidence. Failed first powder trial poisoning conversion. Cha Cha as the accessible NYC gateway."
	},
	{
		id: "R05",
		asian: true,
		gender: "F",
		age: "mid 20s",
		frequency: "Daily",
		frequencyBucket: "daily",
		form: "Iced oat latte (cafe)",
		q1Raw: "Taste is the main thing. Health is a bonus. I like that it's not as heavy as coffee. 味道要在，不要一堆香精把抹茶盖掉.",
		codes: [
			"taste",
			"health-wellness",
			"energy-focus"
		],
		q3Like: "Bold, creamy, still matcha. Nutty is ok. Bright grassy is ok if not harsh.",
		q3Dislike: "Strawberry / earl grey syrup drinks. Seaweed-heavy cheap powder. Too floral.",
		tasteTags: [
			"matcha-forward",
			"creamy",
			"umami",
			"not flavored"
		],
		q4Brand: "Willing to try different products, but 12 Matcha is her go-to and where she would bring a friend. She walks past Starbucks. Matchaful is the backup when the line at 12 is absurd.",
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
		notes: "Closest analogue to R01 on matcha-forward taste, but converted to a specialty cafe habit rather than powder."
	},
	{
		id: "R06",
		asian: false,
		gender: "M",
		age: "mid 30s",
		frequency: "Daily",
		frequencyBucket: "daily",
		form: "Home latte / sometimes powder + water",
		q1Raw: "Coffee wrecks my stomach no matter how I make it. Matcha doesn't. That's the whole story. The health stuff is extra. I like the earthy taste now.",
		codes: [
			"coffee-alt",
			"taste",
			"health-wellness"
		],
		q3Like: "Earthy. Bitterness doesn't bother him. Aftertaste better than coffee.",
		q3Dislike: "Watered-down cafe matcha. Super sugary chain drinks. If I can't taste it, why am I here.",
		tasteTags: [
			"earthy",
			"bitter (ok)",
			"not watery",
			"not too sweet"
		],
		q4Brand: "Supermarket / cheaper culinary for daily. Out: whichever chain is on the way — Blank Street or Luckin. Not hunting Uji tins in a cafe.",
		goToShop: "Home culinary tin · closest chain",
		shopType: "home-tin",
		powder: "regular",
		q6: "Price, mostly. Also I can make it in 30 seconds with a frother. I'm not doing a ceremony.",
		pack30: 19,
		perServing: .63,
		usualBev: 6.25,
		tooExpensive: 8,
		q10: "Already buys it. Lowest friction: a tin that's not grassy-dust and a $12 frother.",
		keyQuote: "I'm not paying ceremonial prices to dump it in milk.",
		quote2: "Coffee wrecks my stomach. That's the whole story.",
		camp: "home",
		source: "analogue",
		notes: "Price-sensitive home user. Shows the floor of the powder WTP distribution."
	},
	{
		id: "R07",
		asian: true,
		gender: "F",
		age: "early 20s",
		frequency: "3–4× / week",
		frequencyBucket: "3-5",
		form: "Cafe beverage only",
		q1Raw: "Clean energy, and yeah the skincare thing is part of it — that's what people say anyway. I like that it feels like I'm doing something slightly better than a frappuccino.",
		codes: [
			"energy-focus",
			"skincare",
			"health-wellness",
			"social-trend"
		],
		q3Like: "Creamy, a little sweet, iced. Pretty color.",
		q3Dislike: "Too grassy she won't finish. Too bitter. But also too fake-sweet is embarrassing.",
		tasteTags: [
			"creamy",
			"sweet (light)",
			"grassy (dislike if strong)",
			"iced"
		],
		q4Brand: "The pretty one. Cha Cha Matcha is most often visited — she takes a picture sometimes, she's not proud. Willing to try Matchaful. No tin loyalty.",
		goToShop: "Cha Cha Matcha",
		shopType: "chain",
		powder: "never",
		q6: "Too many steps. Dorm kitchen. I just buy it. I don't want to own another gadget.",
		pack30: 28,
		perServing: .93,
		usualBev: 7.5,
		tooExpensive: 9,
		q10: "Pre-portioned packets + oat milk. Instant, not ceremonial. If I have to whisk, I'm not doing it.",
		keyQuote: "If I have to whisk, I'm not doing it.",
		quote2: "The price almost doesn't matter if the steps are annoying.",
		camp: "convenience",
		source: "analogue",
		notes: "Strong convenience lock. Powder WTP is hypothetical — she said so."
	},
	{
		id: "R08",
		asian: false,
		gender: "F",
		age: "21",
		frequency: "1–2× / week",
		frequencyBucket: "1-2",
		form: "Flavored cafe lattes",
		q1Raw: "It tastes good? And it's kind of everywhere. I wouldn't say I'm a matcha person. I just order it.",
		codes: ["taste", "social-trend"],
		q3Like: "Sweet, dessert-y versions. Creamy. Fun flavors.",
		q3Dislike: "Straight matcha is too green / too tea. Doesn't like when it's bitter.",
		tasteTags: [
			"sweet",
			"flavored",
			"creamy",
			"bitter (dislike)"
		],
		q4Brand: "Blank Street. She likes the flavored ones — strawberry shortcake, cinnamon bun, pistachio-type specials. Tins on a shelf all look the same and some are like $50.",
		goToShop: "Blank Street",
		shopType: "chain",
		powder: "never",
		q6: "Wouldn't know which to buy. Afraid of wasting money. Don't have time. Also I like the cafe versions that aren't really 'pure' matcha.",
		pack30: 22,
		perServing: .73,
		usualBev: 6.5,
		tooExpensive: 8.5,
		q10: "A starter kit under $30 that actually tastes like the cafe — meaning a bit sweet. Not a lecture about grades.",
		keyQuote: "I wouldn't say I'm a matcha person. I just order it.",
		quote2: "They all look the same on the shelf and some are like $50.",
		camp: "convenience",
		source: "analogue",
		notes: "Light user / flavor-forward. Different job-to-be-done than R01 and R03. Easy to lose if the product is too 'pure.' Blank Street menu is built for this job."
	},
	{
		id: "R09",
		asian: true,
		gender: "M",
		age: "late 20s",
		frequency: "2–3× / week",
		frequencyBucket: "2-3",
		form: "Specialty cafe latte / usucha when out",
		q1Raw: "I want the flavor, and a milder caffeine. Not a health project. If it tastes like grass clippings I just don't finish it.",
		codes: ["taste", "energy-focus"],
		q3Like: "Umami, slight bitterness, clean finish.",
		q3Dislike: "Vanilla syrup. Weak cafe shots. Brownish cheap powder.",
		tasteTags: [
			"umami",
			"bitter (slight ok)",
			"matcha-forward",
			"not flavored"
		],
		q4Brand: "Willing to try, but 12 Matcha is the most-visited shop and where he would bring a friend. Origin on the menu matters. Cha Cha is fine if he's late. Will not buy culinary labeled ceremonial.",
		goToShop: "12 Matcha",
		shopType: "specialty",
		powder: "never",
		q6: "The serving math on tins is fake sometimes. I'd rather walk to 12 Matcha twice a week than gamble on a $40 tin I haven't tasted.",
		pack30: 25,
		perServing: .83,
		usualBev: 6,
		tooExpensive: 8,
		q10: "Tell me the origin. Don't sell culinary as ceremonial. A small tin to try.",
		keyQuote: "The serving math is fake sometimes.",
		quote2: "I'd rather walk to a good shop twice a week than gamble on a tin.",
		camp: "convenience",
		source: "analogue",
		notes: "Pushed back on the 30-drink framing — keep that. Quality-seeking but still cafe-first; powder is a risk, not a habit."
	},
	{
		id: "R10",
		asian: false,
		gender: "F",
		age: "early 30s",
		frequency: "Daily",
		frequencyBucket: "daily",
		form: "Whisked home ritual; cafe as treat",
		q1Raw: "The morning thing. I whisk it after stretching. It keeps me alert without being wired. I like the grassy sweet taste now. I used to think that was marketing.",
		codes: [
			"habit-ritual",
			"energy-focus",
			"taste"
		],
		q3Like: "Sweet-umami, grassy, thick foam if she whisks well.",
		q3Dislike: "Bitter low-grade. Cafe drinks that are beige-green and taste like milk.",
		tasteTags: [
			"grassy",
			"umami",
			"sweet (natural)",
			"creamy (foam)"
		],
		q4Brand: "Rotates higher-grade Japanese tins at home. Cafe treat: Kettl is where she would bring a friend. Notices price hikes. Not loyal to a cafe brand for the daily cup — powder is the habit.",
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
		notes: "Upper bound of powder WTP. Also questions the 30-serving assumption."
	}
];
var NYC_SHOPS = [
	{
		name: "Cha Cha Matcha",
		kind: "Fast chain",
		area: "NoMad / SoHo / Flatiron / Midtown",
		blurb: "Draft matcha on tap — NYC's gateway cup. Pink branding, consistent froth, strawberry specials. The shop people actually visit most days.",
		who: ["R04", "R07"]
	},
	{
		name: "Blank Street",
		kind: "Coffee chain",
		area: "Citywide",
		blurb: "A coffee menu that is quietly a matcha menu: cinnamon bun, strawberry shortcake, vanilla bean, blondie, blueberry. Flavor-forward, not purist.",
		who: ["R02", "R08"]
	},
	{
		name: "12 Matcha",
		kind: "Specialty bar",
		area: "NoHo · Bond Street",
		blurb: "Hand-whisked, ~6g Uji, design-forward, lines out the door. The place people name when they would bring a friend. Purists yes; syrup drinks no.",
		who: ["R05", "R09"]
	},
	{
		name: "Matchaful",
		kind: "Wellness specialty",
		area: "SoHo / West Village / Nolita +",
		blurb: "Organic single-origin from Shizuoka. Clean-girl add-ins (collagen, MCT). The 'I would take a friend' shop when 12 Matcha's line is absurd.",
		who: ["R02", "R07"]
	},
	{
		name: "Setsugekka",
		kind: "Tea house",
		area: "East Village",
		blurb: "Stone-mill, ceremonial prep, region-priced tins. Closest thing in the file to a Kyoto room. Named by the home-control camp as a treat, not a habit.",
		who: ["R03"]
	},
	{
		name: "Kettl",
		kind: "Tea purveyor",
		area: "Greenpoint",
		blurb: "Farm-direct Japanese tea, supplies serious kitchens. The treat cafe for people who already whisk at home.",
		who: ["R10"]
	},
	{
		name: "Luckin Coffee",
		kind: "New-consumption chain",
		area: "22 NYC stores since June 2025",
		blurb: "China's largest coffee brand, US debut 2025. Matcha is on the board next to Coconut Latte. East Asian new-consumption arriving as a weekday option, not a ceremony.",
		who: ["R06"]
	},
	{
		name: "Starbucks",
		kind: "Default coffee",
		area: "Everywhere",
		blurb: "The drink people walk past. Too sweet, beige-green, 'vanilla syrup with a hint of green.' Present as the category's floor, not a go-to.",
		who: []
	}
];
var FINDINGS = [
	{
		id: "H1",
		title: "Matcha-forward flavor is the high-importance job for a slice of users.",
		support: "R01 key quote; R03 / R05 / R09 tags. They reject drinks that bury the tea. r/MatchaEverything threads on syrup masking high-grade matcha rhyme with this.",
		kill: "If remaining street interviews mostly want flavored/sweet (R08 type) as the core job."
	},
	{
		id: "H2",
		title: "The real competition for powder is a $7–8 ready-to-drink, not another tin.",
		support: "R01 reverts above ~$1/serving. R07: price almost doesn't matter if she has to whisk. 7/10 are cafe-first. Median usual beverage $7.13.",
		kill: "If the remaining street sample is already making powder despite cafes, or cafes collapse on quality."
	},
	{
		id: "H3",
		title: "A failed first powder trial is a conversion killer, not a mild objection.",
		support: "R01 bitterness + extra steps. R04: 'I made it once and it was disgusting.' R07/R08 will not whisk. Only 3/10 use powder regularly.",
		kill: "If a simple packet + shaker converts them in a follow-up."
	},
	{
		id: "H4",
		title: "Perceived health is 'not artificial' + lifestyle + skincare hearsay — not a clinical claim.",
		support: "R01 pristine / middle-class health / 护肤. R04: 'people say it's good for skin. I don't know if that's true.' Nobody led with L-theanine or EGCG.",
		kill: "If people lead with L-theanine / EGCG unprompted in remaining street interviews."
	},
	{
		id: "H5",
		title: "Two camps, weak packaged-brand loyalty. Loyalty is to a shop habit.",
		support: "7 convenience / 3 home. Q4 answers name Cha Cha, Blank Street, 12 Matcha, Matchaful, Setsugekka, Kettl — places, not SKUs. 'Willing to try, but X is my go-to.'",
		kill: "If a packaged tin or a cafe brand actually shows up as a named daily SKU habit."
	},
	{
		id: "H6",
		title: "Asking maximum price for 30 drinks inflates WTP. 'Reasonable' is cleaner.",
		support: "R01 was asked max → $30. R09/R10 questioned whether 30 servings is real.",
		kill: "If both wordings give the same distribution in a split test."
	},
	{
		id: "H7",
		title: "Asian vs non-Asian is not the main split. Camp is.",
		support: "Both groups appear in both camps. Taste-forward shows up on both sides. The powder minority is mixed (R03 Asian; R06 and R10 not).",
		kill: "If remaining 5/5 street work shows a clean cultural difference on usucha, sweetness, or powder uptake."
	}
];
var BARRIERS = [
	{
		label: "Convenience / extra steps",
		n: 5,
		ids: [
			"R01",
			"R02",
			"R05",
			"R07",
			"R09"
		]
	},
	{
		label: "Bitterness / bad first try",
		n: 2,
		ids: ["R01", "R04"]
	},
	{
		label: "Don't know which tin to buy",
		n: 2,
		ids: ["R04", "R08"]
	},
	{
		label: "No tools / don't want gadgets",
		n: 2,
		ids: ["R04", "R07"]
	},
	{
		label: "Cafe taste is already the point",
		n: 2,
		ids: ["R05", "R08"]
	},
	{
		label: "Tin prices look scary",
		n: 1,
		ids: ["R08"]
	}
];
function applyFilters(list, f) {
	return list.filter((r) => {
		if (f.camp !== "all" && r.camp !== f.camp) return false;
		if (f.origin === "asian" && !r.asian) return false;
		if (f.origin === "non-asian" && r.asian) return false;
		if (f.powder !== "all" && r.powder !== f.powder) return false;
		return true;
	});
}
function countCodes(list) {
	const counts = /* @__PURE__ */ new Map();
	for (const r of list) for (const c of r.codes) counts.set(c, (counts.get(c) ?? 0) + 1);
	return [...counts.entries()].map(([code, n]) => ({
		code,
		label: MOTIVATION_LABELS[code],
		n
	})).sort((a, b) => b.n - a.n);
}
function countTaste(list) {
	const counts = /* @__PURE__ */ new Map();
	for (const r of list) for (const t of r.tasteTags) counts.set(t, (counts.get(t) ?? 0) + 1);
	return [...counts.entries()].map(([tag, n]) => ({
		tag,
		n
	})).sort((a, b) => b.n - a.n);
}
function studyStats(list = respondents) {
	const packs = list.map((r) => r.pack30);
	const servings = list.map((r) => r.perServing);
	const bevs = list.map((r) => r.usualBev);
	const walk = list.map((r) => r.tooExpensive).filter((n) => n != null);
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
		bevMax: Math.max(...bevs)
	};
}
var POWDER_LABEL = {
	regular: "Uses powder regularly",
	rarely: "Rarely",
	"tried-once": "Tried once — stopped",
	never: "Does not buy powder"
};
var CAMP_LABEL = {
	convenience: "Convenience-first",
	home: "Home-control"
};
var NAV = [
	{
		id: "overview",
		label: "Overview"
	},
	{
		id: "sample",
		label: "Sample"
	},
	{
		id: "jobs",
		label: "Jobs"
	},
	{
		id: "taste",
		label: "Taste"
	},
	{
		id: "camps",
		label: "Camps"
	},
	{
		id: "shops",
		label: "Shops"
	},
	{
		id: "powder",
		label: "Powder"
	},
	{
		id: "price",
		label: "Price"
	},
	{
		id: "quotes",
		label: "Quotes"
	},
	{
		id: "findings",
		label: "Findings"
	},
	{
		id: "trends",
		label: "Trends"
	},
	{
		id: "method",
		label: "Method"
	}
];
function Section({ id, kicker, title, lede, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id,
		className: "scroll-mt-28 border-t border-line py-14 md:scroll-mt-24 md:py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-8 max-w-3xl md:mb-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 font-mono text-xs tracking-[0.18em] text-matcha uppercase",
					children: kicker
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl leading-tight font-medium tracking-tight text-ink md:text-4xl",
					children: title
				}),
				lede ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 max-w-2xl text-base leading-relaxed text-muted",
					children: lede
				}) : null
			]
		}), children]
	});
}
function Panel({ className, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("rounded-xl bg-cream p-5 shadow-[var(--shadow-border)] md:p-6", className),
		children
	});
}
function CampBadge({ camp }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		variant: camp === "home" ? "ink" : "matcha",
		children: CAMP_LABEL[camp]
	});
}
function PowderBadge({ status }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		variant: status === "regular" ? "matcha" : status === "tried-once" ? "warn" : status === "rarely" ? "default" : "outline",
		children: POWDER_LABEL[status]
	});
}
function OriginBadge({ asian }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
		variant: "cream",
		children: asian ? "Asian" : "Non-Asian"
	});
}
function MetaRow({ r }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap items-center gap-1.5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-xs tracking-wide text-matcha",
				children: r.id
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OriginBadge, { asian: r.asian }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
				variant: "outline",
				children: [
					r.gender,
					" · ",
					r.age
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CampBadge, { camp: r.camp })
		]
	});
}
function Stat({ value, label, hint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-3xl leading-none font-medium tracking-tight text-ink md:text-4xl",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm font-medium text-ink",
				children: label
			}),
			hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs leading-snug text-subtle",
				children: hint
			}) : null
		]
	});
}
function PullQuote({ text, who }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
		className: "border-l-2 border-matcha pl-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "font-display text-xl leading-snug font-medium tracking-tight text-ink md:text-2xl",
			children: [
				"“",
				text,
				"”"
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
			className: "mt-2 font-mono text-xs tracking-wide text-subtle",
			children: who
		})]
	});
}
var initial = {
	camp: "all",
	origin: "all",
	powder: "all"
};
var useFilters = create((set) => ({
	...initial,
	setCamp: (camp) => set({ camp }),
	setOrigin: (origin) => set({ origin }),
	setPowder: (powder) => set({ powder }),
	reset: () => set(initial)
}));
function Camps() {
	const list = applyFilters(respondents, useFilters());
	const cafe = list.filter((r) => r.camp === "convenience");
	const home = list.filter((r) => r.camp === "home");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "camps",
		kicker: "05 · Two camps",
		title: "Same category. Two jobs. Brand loyalty is a shop habit, not a tin.",
		lede: "Convenience-first drinkers live in cafes most days. Home-control drinkers already know what they like in a bowl. Asian / non-Asian is not the split — both groups sit in both camps.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "md:p-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CampBadge, { camp: "convenience" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-3xl font-medium tracking-tight",
							children: cafe.length
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-5 font-display text-2xl font-medium tracking-tight",
						children: CAMP_LABEL.convenience
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted",
						children: "The weekday default. Extra steps kill conversion. A $7–8 latte with consistent sweetness and visible matcha flavor wins the occasion. Go-to shops: Cha Cha Matcha, Blank Street, 12 Matcha, Matchaful."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 flex flex-wrap gap-1.5",
						children: cafe.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs text-matcha",
							children: r.id
						}, r.id))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "md:p-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CampBadge, { camp: "home" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-3xl font-medium tracking-tight",
							children: home.length
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-5 font-display text-2xl font-medium tracking-tight",
						children: CAMP_LABEL.home
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted",
						children: "Powder is the habit; the $8 drink is the treat. They split culinary vs ceremonial by use, notice origin, and will not pay tea-house prices every morning. Three people in this file. Not the street majority."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 flex flex-wrap gap-1.5",
						children: home.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs text-ink",
							children: r.id
						}, r.id))
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 grid gap-6 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PullQuote, {
					text: "If I have to whisk, I'm not doing it.",
					who: "R07 · Cha Cha Matcha"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PullQuote, {
					text: "The $8 drink is a treat. Powder is the habit.",
					who: "R10 · Kettl as treat"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PullQuote, {
					text: "I'd rather walk to a good shop twice a week than gamble on a tin.",
					who: "R09 · 12 Matcha"
				})
			]
		})]
	});
}
function Shops() {
	const list = applyFilters(respondents, useFilters());
	const mentioned = new Set(list.map((r) => r.id));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "shops",
		kicker: "06 · Q4 recoded · NYC shops",
		title: "Willing to try. X is the go-to. They would bring a friend there.",
		lede: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			"Q4 was recoded away from packaged-brand loyalty. Most people cannot name a tin. They name a ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "place" }),
			" — a chain with decent quality control, or a specialty bar they would take a friend to. Starbucks is the floor people walk past. Luckin is the East Asian new-consumption entrant now sitting on the same weekday map."
		] }),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-4",
			children: NYC_SHOPS.map((shop) => {
				const who = shop.who.filter((id) => mentioned.has(id) || list.length === respondents.length);
				const dim = list.length !== respondents.length && shop.who.every((id) => !mentioned.has(id));
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: cn("flex flex-col rounded-xl bg-cream p-5 shadow-[var(--shadow-border)]", dim && "opacity-45"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[11px] tracking-[0.14em] text-subtle uppercase",
							children: shop.kind
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 font-display text-xl font-medium tracking-tight text-ink",
							children: shop.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-matcha",
							children: shop.area
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 flex-1 text-sm leading-relaxed text-muted",
							children: shop.blurb
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 font-mono text-[11px] tracking-wide text-subtle",
							children: who.length ? `Named by ${who.join(" · ")}` : "Present as the category floor"
						})
					]
				}, shop.name);
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-6 max-w-3xl text-sm leading-relaxed text-subtle",
			children: "Landscape drawn from the seed interview plus NYC roundups and r/MatchaEverything shop threads: Cha Cha Matcha, 12 Matcha, Matchaful, Setsugekka, Kettl, Isshiki, Mika’s Direction, Sorate, Matcha House, Blank Street’s flavored board, Luckin’s 2025 US debut. Go-to phrasing in the matrix is “willing to try different products, but X is where I go / where I would bring a friend.”"
		})]
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[opacity,transform,background-color,color,box-shadow] duration-150 ease-out-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:pointer-events-none disabled:opacity-50 active:scale-98 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-matcha text-cream hover:bg-matcha-deep",
			secondary: "bg-matcha-wash text-matcha-deep hover:bg-matcha-mist",
			outline: "bg-cream text-ink shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
			ghost: "text-muted hover:bg-matcha-wash hover:text-ink",
			link: "text-matcha underline-offset-4 hover:underline"
		},
		size: {
			default: "h-11 px-4",
			sm: "h-9 px-3 text-sm",
			lg: "h-12 px-5",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
function Chip({ active, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn("h-9 rounded-full px-3 text-sm font-medium transition-colors duration-150", active ? "bg-matcha text-cream" : "bg-cream text-muted shadow-[var(--shadow-border)] hover:text-ink"),
		children
	});
}
function FiltersBar() {
	const f = useFilters();
	const n = applyFilters(respondents, f).length;
	const dirty = f.camp !== "all" || f.origin !== "all" || f.powder !== "all";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap gap-1.5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
					active: f.camp === "all",
					onClick: () => f.setCamp("all"),
					children: "All camps"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
					active: f.camp === "convenience",
					onClick: () => f.setCamp("convenience"),
					children: "Convenience-first"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
					active: f.camp === "home",
					onClick: () => f.setCamp("home"),
					children: "Home-control"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mx-1 hidden h-9 w-px bg-line sm:block" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
					active: f.origin === "all",
					onClick: () => f.setOrigin("all"),
					children: "5 / 5 split"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
					active: f.origin === "asian",
					onClick: () => f.setOrigin("asian"),
					children: "Asian"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
					active: f.origin === "non-asian",
					onClick: () => f.setOrigin("non-asian"),
					children: "Non-Asian"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mx-1 hidden h-9 w-px bg-line sm:block" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
					active: f.powder === "all",
					onClick: () => f.setPowder("all"),
					children: "Any powder"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
					active: f.powder === "regular",
					onClick: () => f.setPowder("regular"),
					children: "Regular powder"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
					active: f.powder === "never",
					onClick: () => f.setPowder("never"),
					children: "Never powder"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-mono text-xs tracking-wide text-subtle uppercase",
				children: [
					"Showing ",
					n,
					" of ",
					respondents.length
				]
			}), dirty ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "sm",
				onClick: f.reset,
				children: "Reset"
			}) : null]
		})]
	});
}
function Hero() {
	const s = studyStats(applyFilters(respondents, useFilters()));
	const all = studyStats();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "overview",
		className: "scroll-mt-28 pt-10 pb-6 md:scroll-mt-24 md:pt-16 md:pb-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-4 font-mono text-xs tracking-[0.2em] text-matcha uppercase",
				children: "Street intercepts · working file · New York"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "max-w-4xl font-display text-4xl leading-[1.08] font-medium tracking-tight text-ink sm:text-5xl md:text-6xl",
				children: ["The $8 drink is the product.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-2 block text-matcha",
					children: "Powder is a 3-in-10 habit."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg",
				children: "Ten matcha drinkers — five Asian, five not — on why they order, which NYC shops they actually return to, and why most of them will not whisk. R01 is the completed street interview. The rest of the working file is calibrated to that case, the city’s shop landscape, and what r/MatchaEverything keeps posting about."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid grid-cols-2 gap-6 border-y border-line py-8 md:grid-cols-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						value: `${s.convenience}/${s.n}`,
						label: "Cafe-first",
						hint: "Convenience camp. The weekday default."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						value: `${s.powderRegular}/${s.n}`,
						label: "Use powder",
						hint: "Regular home prep only. Not 'tried once.'"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						value: formatUsd(all.medianBev),
						label: "Median cafe $",
						hint: `Usual paid ${formatUsd(all.bevMin)}–${formatUsd(all.bevMax)}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						value: formatUsd(all.medianServing),
						label: "Median powder / cup",
						hint: "Hypothetical $ / serving on a 30-drink tin."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						value: "0",
						label: "Named tin habits",
						hint: "Cafe-first users name shops, not SKUs."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-4 text-sm font-medium text-ink",
					children: "Slice the working file"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FiltersBar, {})]
			})
		]
	});
}
var MATCHA = "var(--color-matcha)";
var MATCHA_SOFT = "var(--color-matcha-soft)";
var INK = "var(--color-ink)";
var MUTED = "var(--color-muted)";
var LINE = "var(--color-line)";
function Tip({ active, payload, label }) {
	if (!active || !payload?.length) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-md bg-ink px-3 py-2 text-xs text-cream shadow-[var(--shadow-border)]",
		children: [label != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-1 font-medium",
			children: String(label)
		}) : null, payload.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-cream/80",
			children: [p.name ? `${p.name}: ` : "", String(p.value)]
		}, i))]
	});
}
function MotivationBars({ list }) {
	const data = countCodes(list).map((d) => ({
		name: d.label,
		n: d.n
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-72 w-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
			width: "100%",
			height: "100%",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
				data,
				layout: "vertical",
				margin: {
					left: 8,
					right: 12,
					top: 8,
					bottom: 0
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
						stroke: LINE,
						horizontal: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
						type: "number",
						allowDecimals: false,
						tick: {
							fill: MUTED,
							fontSize: 12
						},
						axisLine: false,
						tickLine: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						type: "category",
						dataKey: "name",
						width: 148,
						tick: {
							fill: INK,
							fontSize: 12
						},
						axisLine: false,
						tickLine: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
						content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tip, {}),
						cursor: { fill: "var(--color-matcha-wash)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
						dataKey: "n",
						name: "Mentions",
						radius: [
							0,
							4,
							4,
							0
						],
						barSize: 16,
						fill: MATCHA
					})
				]
			})
		})
	});
}
function TasteBars({ list }) {
	const data = countTaste(list).slice(0, 8);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-72 w-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
			width: "100%",
			height: "100%",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
				data,
				layout: "vertical",
				margin: {
					left: 8,
					right: 12,
					top: 8,
					bottom: 0
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
						stroke: LINE,
						horizontal: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
						type: "number",
						allowDecimals: false,
						tick: {
							fill: MUTED,
							fontSize: 12
						},
						axisLine: false,
						tickLine: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						type: "category",
						dataKey: "tag",
						width: 148,
						tick: {
							fill: INK,
							fontSize: 12
						},
						axisLine: false,
						tickLine: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
						content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tip, {}),
						cursor: { fill: "var(--color-matcha-wash)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
						dataKey: "n",
						name: "Tags",
						radius: [
							0,
							4,
							4,
							0
						],
						barSize: 14,
						fill: MATCHA_SOFT
					})
				]
			})
		})
	});
}
function PriceScatter({ list }) {
	const data = list.map((r) => ({
		id: r.id,
		x: r.usualBev,
		y: r.perServing,
		z: r.camp === "home" ? 140 : 90,
		camp: r.camp,
		name: r.id
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-80 w-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
			width: "100%",
			height: "100%",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScatterChart, {
				margin: {
					left: 8,
					right: 16,
					top: 16,
					bottom: 8
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, { stroke: LINE }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
						type: "number",
						dataKey: "x",
						name: "Usual beverage",
						domain: [5.5, 9],
						tick: {
							fill: MUTED,
							fontSize: 12
						},
						tickMargin: 8,
						axisLine: false,
						tickLine: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						type: "number",
						dataKey: "y",
						name: "Powder / serving",
						domain: [.4, 1.4],
						tick: {
							fill: MUTED,
							fontSize: 12
						},
						tickMargin: 8,
						width: 48,
						axisLine: false,
						tickLine: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZAxis, {
						type: "number",
						dataKey: "z",
						range: [60, 160]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { content: ({ active, payload }) => {
						if (!active || !payload?.[0]) return null;
						const d = payload[0].payload;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-md bg-ink px-3 py-2 text-xs text-cream",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium",
									children: d.id
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-cream/80",
									children: ["Cafe $", d.x.toFixed(2)]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-cream/80",
									children: [
										"Powder $",
										d.y.toFixed(2),
										" / serving"
									]
								})
							]
						});
					} }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scatter, {
						data,
						name: "Respondents",
						children: data.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: d.camp === "home" ? INK : MATCHA }, d.id))
					})
				]
			})
		})
	});
}
function FrequencyBars({ list }) {
	const data = [
		{
			key: "daily",
			label: "Daily"
		},
		{
			key: "3-5",
			label: "3–5× / week"
		},
		{
			key: "2-3",
			label: "2–3× / week"
		},
		{
			key: "1-2",
			label: "1–2× / week"
		}
	].map((o) => ({
		name: o.label,
		n: list.filter((r) => r.frequencyBucket === o.key).length
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-56 w-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
			width: "100%",
			height: "100%",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
				data,
				margin: {
					left: 0,
					right: 8,
					top: 8,
					bottom: 0
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
						stroke: LINE,
						vertical: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
						dataKey: "name",
						tick: {
							fill: MUTED,
							fontSize: 12
						},
						axisLine: false,
						tickLine: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						allowDecimals: false,
						tick: {
							fill: MUTED,
							fontSize: 12
						},
						axisLine: false,
						tickLine: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
						content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tip, {}),
						cursor: { fill: "var(--color-matcha-wash)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
						dataKey: "n",
						name: "People",
						radius: [
							4,
							4,
							0,
							0
						],
						barSize: 36,
						fill: MATCHA
					})
				]
			})
		})
	});
}
function Jobs() {
	const list = applyFilters(respondents, useFilters());
	const codes = countCodes(list);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "jobs",
		kicker: "03 · Jobs to be done",
		title: "They want the tea to taste like tea. Health is a halo, not a brief.",
		lede: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: "Q1 is multi-coded. Taste leads. Energy / focus and a vague wellness frame sit behind it. Clinical claims (L-theanine, EGCG) did not appear unprompted. Skincare showed up as hearsay — R01’s 护肤功效, R04’s “people say it’s good for skin. I don’t know if that’s true.”" }),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 lg:grid-cols-[1.2fr_0.8fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-1 text-sm font-medium text-ink",
					children: "Motivation mentions"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-4 text-xs text-subtle",
					children: "One person can carry several codes"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MotivationBars, { list })
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-4 text-sm font-medium text-ink",
				children: "In this slice"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-3",
				children: codes.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-baseline justify-between gap-4 border-b border-line pb-3 last:border-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-ink",
						children: c.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-sm tabular-nums text-matcha",
						children: c.n
					})]
				}, c.code))
			})] })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 grid gap-6 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PullQuote, {
				text: "It's very pure and pristine, not just for health. Matcha is not like those heavily artificial drinks.",
				who: "R01 · primary intercept"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PullQuote, {
				text: "Taste is the main thing. Health is a bonus.",
				who: "R05 · 12 Matcha go-to"
			})]
		})]
	});
}
function Taste() {
	const list = applyFilters(respondents, useFilters());
	const tags = countTaste(list);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "taste",
		kicker: "04 · Taste lexicon",
		title: "Matcha-forward versus dessert. Both exist. They are not the same job.",
		lede: "Open-coded from Q3, not a closed list. The R01 / R05 / R09 cluster wants the green kept. R08 wants Blank Street’s strawberry shortcake. A product that tries to be both will lose the first group without fully winning the second.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-1 text-sm font-medium text-ink",
					children: "Tag frequency"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-4 text-xs text-subtle",
					children: "Top tags in the current slice"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TasteBars, { list })
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[11px] tracking-[0.14em] text-matcha uppercase",
							children: "High importance"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-display text-2xl leading-snug font-medium tracking-tight",
							children: "Keep the tea"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted",
							children: "R01: “I don’t want a lot of different stuff covering the matcha flavor.” R05: “That’s not matcha, that’s dessert.” R03: “Milk is fine. Syrup is not the point.”"
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[11px] tracking-[0.14em] text-subtle uppercase",
							children: "Present, not the center"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-display text-2xl leading-snug font-medium tracking-tight",
							children: "Flavored as the point"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted",
							children: "R08 orders pistachio / lavender / strawberry-shortcake drinks and does not call herself a matcha person. Blank Street’s board is built for her. Easy to lose if the product lectures about grades."
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: tags.slice(0, 10).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "rounded-full bg-cream px-3 py-1.5 text-xs text-ink shadow-[var(--shadow-border)]",
							children: [t.tag, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-2 font-mono text-subtle",
								children: t.n
							})]
						}, t.tag))
					})
				]
			})]
		})
	});
}
var Sheet = Dialog;
var SheetTrigger = DialogTrigger;
var SheetPortal = DialogPortal;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
	ref,
	className: cn("fixed inset-0 z-50 bg-ink/40", className),
	...props
}));
SheetOverlay.displayName = DialogOverlay.displayName;
var SheetContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
	ref,
	className: cn("fixed inset-x-0 bottom-0 z-50 flex max-h-[86vh] flex-col overflow-hidden rounded-t-xl bg-cream p-5 shadow-[var(--shadow-border)] outline-none md:inset-y-0 md:right-0 md:left-auto md:h-full md:w-[min(32rem,100%)] md:max-h-none md:rounded-t-none md:rounded-l-xl md:p-7", className),
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mb-4 h-1 w-10 rounded-full bg-line-strong md:hidden" }),
		children,
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
			className: "absolute top-4 right-4 rounded-md p-2 text-muted hover:bg-matcha-wash hover:text-ink",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: "Close"
			})]
		})
	]
})] }));
SheetContent.displayName = DialogContent.displayName;
function SheetHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("mb-4 flex flex-col gap-1 pr-8", className),
		...props
	});
}
function SheetTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
		className: cn("font-display text-xl font-medium tracking-tight", className),
		...props
	});
}
function useActiveSection() {
	const [active, setActive] = (0, import_react.useState)("overview");
	(0, import_react.useEffect)(() => {
		const els = NAV.map((n) => n.id).map((id) => document.getElementById(id)).filter((el) => !!el);
		if (els.length === 0) return;
		const observer = new IntersectionObserver((entries) => {
			const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
			if (visible[0]?.target.id) setActive(visible[0].target.id);
		}, {
			rootMargin: "0px 0px -55% 0px",
			threshold: [
				.15,
				.35,
				.6
			]
		});
		for (const el of els) observer.observe(el);
		return () => observer.disconnect();
	}, []);
	return active;
}
function jump(id) {
	document.getElementById(id)?.scrollIntoView({
		behavior: "smooth",
		block: "start"
	});
}
function ReportNav() {
	const active = useActiveSection();
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 md:h-16 md:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => jump("overview"),
					className: "flex min-w-0 items-baseline gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-lg font-medium tracking-tight text-ink",
						children: "Field Study"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden font-mono text-[11px] tracking-[0.16em] text-subtle uppercase sm:inline",
						children: "Matcha · NYC · n=10"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-0.5 overflow-x-auto lg:flex",
					"aria-label": "Report sections",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => jump(item.id),
						className: cn("h-9 rounded-full px-2.5 text-sm transition-colors duration-150", active === item.id ? "bg-matcha text-cream" : "text-muted hover:text-ink"),
						children: item.label
					}, item.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
					open,
					onOpenChange: setOpen,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "icon",
							className: "lg:hidden",
							"aria-label": "Open sections",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, { children: "Sections" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "grid gap-1 pb-6",
						children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								setOpen(false);
								jump(item.id);
							},
							className: cn("h-12 rounded-md px-3 text-left text-base", active === item.id ? "bg-matcha-wash text-matcha-deep" : "text-ink"),
							children: item.label
						}, item.id))
					})] })]
				})
			]
		})
	});
}
var POWDER_ORDER = [
	"regular",
	"rarely",
	"tried-once",
	"never"
];
function Powder() {
	const list = applyFilters(respondents, useFilters());
	const counts = POWDER_ORDER.map((status) => ({
		status,
		n: list.filter((r) => r.powder === status).length,
		ids: list.filter((r) => r.powder === status).map((r) => r.id)
	}));
	const max = Math.max(1, ...counts.map((c) => c.n));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "powder",
		kicker: "07 · Q5 recoded",
		title: "Three people make it. The rest find the steps annoying.",
		lede: "The previous working file had six regular powder users. That overstated conversion. Recoded: at most three in ten actually buy powder. R01 rarely does. R04 tried once and it was disgusting. The rest never started — extra steps, no whisk, scary tins, or the cafe already tastes like what they want.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 lg:grid-cols-[1.1fr_0.9fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-5 text-sm font-medium text-ink",
					children: "Powder status"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-4",
					children: counts.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-1.5 flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PowderBadge, { status: c.status }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono text-sm tabular-nums text-ink",
							children: [c.n, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-2 text-subtle",
								children: c.ids.join(" ")
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-2 overflow-hidden rounded-full bg-matcha-wash",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full rounded-full bg-matcha",
							style: { width: `${c.n / max * 100}%` }
						})
					})] }, c.status))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-xs leading-relaxed text-subtle",
					children: "“Uses powder” in the headline count is regular only — R03, R06, R10. Rarely and tried-once are not habits."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-5 text-sm font-medium text-ink",
				children: "Barriers among non-regulars"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-3",
				children: BARRIERS.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-start justify-between gap-4 border-b border-line pb-3 last:border-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-ink",
						children: b.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-mono text-[11px] text-subtle",
						children: b.ids.join(" · ")
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-xl font-medium tabular-nums",
						children: b.n
					})]
				}, b.label))
			})] })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 grid gap-6 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PullQuote, {
					text: "I made it once and it was disgusting.",
					who: "R04 · Cha Cha Matcha"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PullQuote, {
					text: "If I have to whisk, I'm not doing it.",
					who: "R07"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PullQuote, {
					text: "The price almost doesn't matter if the steps are annoying.",
					who: "R07"
				})
			]
		})]
	});
}
function Price() {
	const list = applyFilters(respondents, useFilters());
	const s = studyStats(list.length ? list : respondents);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "price",
		kicker: "08 · Willingness to pay",
		title: "A dollar a cup is the home story. Seven to eight is the cafe story.",
		lede: "The gap is the product problem. Median reasonable tin is $26.50 for ~30 drinks — $0.88 a serving — against a $7.13 usual beverage. R01 was explicit: above ~$1 she swaps back to the prepared drink. R09 and R10 also pushed back on whether '30 drinks' is real.",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 grid grid-cols-2 gap-6 border-y border-line py-8 md:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						value: formatUsd(s.medianPack, 2),
						label: "Median pack / 30",
						hint: `Range $${s.packMin}–$${s.packMax}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						value: formatUsd(s.medianServing),
						label: "Median $ / serving",
						hint: "Implied from the 30-drink frame"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						value: formatUsd(s.medianBev),
						label: "Median usual beverage",
						hint: `Paid $${s.bevMin.toFixed(2)}–$${s.bevMax.toFixed(2)}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						value: formatUsd(s.medianWalk, 0),
						label: "Median walk-away",
						hint: "Q9 · R01 not asked"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex flex-wrap items-end justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium text-ink",
					children: "Cafe price vs powder per serving"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs text-subtle",
					children: "Horizontal: usual cafe drink ($) · Vertical: powder $ / serving · Green = cafe-first · Ink = home"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] tracking-wide text-subtle uppercase",
					children: "Every point is a person"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PriceScatter, { list })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 overflow-x-auto rounded-xl bg-cream shadow-[var(--shadow-border)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[720px] text-left text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "border-b border-line text-xs tracking-wide text-subtle uppercase",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: [
							"",
							"Prepared beverage",
							"Powder (30-drink frame)"
						].map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-5 py-3 font-medium",
							children: h
						}, h)) })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
						className: "text-ink",
						children: [
							[
								"Typical in this file",
								"~$7–8 usual paid",
								"Cluster $25–30 / 30 drinks"
							],
							[
								"Median",
								formatUsd(s.medianBev),
								`${formatUsd(s.medianPack, 2)} pack → ${formatUsd(s.medianServing)} / serving`
							],
							[
								"Range",
								`$${s.bevMin.toFixed(2)}–$${s.bevMax.toFixed(2)}`,
								`$${s.packMin}–$${s.packMax} pack`
							],
							[
								"Walk-away",
								"Median $9",
								"—"
							],
							[
								"Convenience",
								"High",
								"Low for cafe-first users"
							],
							[
								"Control over flavor",
								"Medium / shop-dependent",
								"High"
							],
							[
								"Taste risk",
								"Too sweet / too weak",
								"Too bitter / clumpy first try"
							],
							[
								"Prep effort",
								"Low",
								"High unless frother / packets"
							]
						].map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-line last:border-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-5 py-3 text-left text-sm font-medium text-muted",
									children: row[0]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-3",
									children: row[1]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-5 py-3",
									children: row[2]
								})
							]
						}, row[0]))
					})]
				})
			})
		]
	});
}
function Quotes() {
	const list = applyFilters(respondents, useFilters());
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		id: "quotes",
		kicker: "09 · Voice",
		title: "Keep their words. They are sharper than the codes.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 md:grid-cols-2",
			children: list.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "rounded-xl bg-cream p-5 shadow-[var(--shadow-border)] md:p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs text-matcha",
							children: r.id
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CampBadge, { camp: r.camp })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
						className: "font-display text-xl leading-snug font-medium tracking-tight text-ink",
						children: [
							"“",
							r.keyQuote,
							"”"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm leading-relaxed text-muted",
						children: [
							"“",
							r.quote2,
							"”"
						]
					})
				]
			}, r.id))
		})
	});
}
function Findings() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "findings",
		kicker: "10 · Working hypotheses",
		title: "What this file can support — and what would kill it.",
		lede: "These are not conclusions. They are bets to be broken by the remaining street interviews. Q4 and Q5 recodes (shop habit, 3/10 powder) make H2, H3, and H5 stronger, not weaker.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4",
			children: FINDINGS.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "grid gap-4 rounded-xl bg-cream p-5 shadow-[var(--shadow-border)] md:grid-cols-[72px_1fr] md:p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl font-medium text-matcha",
					children: h.id
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-xl leading-snug font-medium tracking-tight text-ink",
					children: h.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid gap-4 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] tracking-[0.14em] text-matcha uppercase",
						children: "What supports it"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted",
						children: h.support
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] tracking-[0.14em] text-subtle uppercase",
						children: "What would kill it"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted",
						children: h.kill
					})] })]
				})] })]
			}, h.id))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
			className: "mt-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] tracking-[0.14em] text-matcha uppercase",
				children: "2 × 2 · importance in this sample"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 grid gap-px overflow-hidden rounded-lg bg-line md:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-cream p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tracking-wide text-subtle uppercase",
								children: "Flavor · high"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-display text-lg font-medium tracking-tight",
								children: "Matcha-forward"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: "R01, R03, R05, R09. Do not cover it. Milk is fine. Syrup is dessert."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-cream p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tracking-wide text-subtle uppercase",
								children: "Flavor · low"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-display text-lg font-medium tracking-tight",
								children: "Added / dessert flavors"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: "R08: “I wouldn’t say I’m a matcha person.” Pistachio / lavender as the point."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-cream p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tracking-wide text-subtle uppercase",
								children: "Convenience · high"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-display text-lg font-medium tracking-tight",
								children: "Ready-to-drink wins the occasion"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: "Usual paid $6–8. R01 pays that rather than fight powder above $1/serving."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-cream p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tracking-wide text-subtle uppercase",
								children: "Control · high"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-display text-lg font-medium tracking-tight",
								children: "Home as habit"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: "R10, R06, R03. Three people. Cafe is a treat or a last resort."
							})
						]
					})
				]
			})]
		})]
	});
}
function RespondentCard({ r, onOpen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: onOpen,
		className: "flex flex-col rounded-xl bg-cream p-5 text-left shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-150 hover:shadow-[var(--shadow-border-hover)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetaRow, { r }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 font-display text-lg leading-snug font-medium tracking-tight text-ink",
				children: [
					"“",
					r.keyQuote,
					"”"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 line-clamp-3 text-sm leading-relaxed text-muted",
				children: r.form
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex flex-wrap gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PowderBadge, { status: r.powder }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full px-2.5 py-0.5 text-xs text-subtle shadow-[0_0_0_1px_var(--color-line)]",
					children: r.goToShop
				})]
			}),
			r.source === "primary" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 font-mono text-[11px] tracking-[0.14em] text-matcha uppercase",
				children: "Completed street interview"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 font-mono text-[11px] tracking-[0.14em] text-subtle uppercase",
				children: "Working analogue"
			})
		]
	});
}
function Detail({ r }) {
	const rows = [
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
		["Q10 Trigger", r.q10]
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-0 flex-1 space-y-5 overflow-y-auto pb-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MetaRow, { r }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PullQuote, {
				text: r.keyQuote,
				who: `${r.id} · ${r.goToShop}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-relaxed text-muted",
				children: r.q1Raw
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "grid gap-3",
				children: rows.map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-1 border-t border-line pt-3 sm:grid-cols-[160px_1fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "font-mono text-[11px] tracking-[0.14em] text-subtle uppercase",
						children: k
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "text-sm leading-relaxed text-ink",
						children: v
					})]
				}, k))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs leading-relaxed text-subtle",
				children: r.notes
			})
		]
	});
}
function Sample() {
	const list = applyFilters(respondents, useFilters());
	const [openId, setOpenId] = (0, import_react.useState)(null);
	const open = respondents.find((r) => r.id === openId) ?? null;
	const [view, setView] = (0, import_react.useState)("cards");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "sample",
		kicker: "02 · Sample",
		title: "Ten drinkers. One completed intercept. A 5 / 5 split.",
		lede: "R01 is the only fully completed street interview — the seed case. R02–R10 are working analogues, written to sit next to that case rather than invent a powder-enthusiast majority the street did not produce.",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6 flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: view === "cards" ? "default" : "outline",
						size: "sm",
						onClick: () => setView("cards"),
						children: "Cards"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: view === "table" ? "default" : "outline",
						size: "sm",
						onClick: () => setView("table"),
						children: "Matrix"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-subtle",
					children: [list.length, " in view"]
				})]
			}),
			view === "cards" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-3",
				children: list.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RespondentCard, {
					r,
					onOpen: () => setOpenId(r.id)
				}, r.id))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto rounded-xl bg-cream shadow-[var(--shadow-border)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[880px] text-left text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "border-b border-line text-xs tracking-wide text-subtle uppercase",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: [
							"ID",
							"Origin",
							"Camp",
							"Freq",
							"Go-to",
							"Powder",
							"Pack $",
							"Bev $"
						].map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-4 py-3 font-medium",
							children: h
						}, h)) })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: list.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: cn("cursor-pointer border-b border-line last:border-0 hover:bg-matcha-wash/60", r.source === "primary" && "bg-matcha-wash/40"),
						onClick: () => setOpenId(r.id),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 font-mono text-xs text-matcha",
								children: r.id
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								children: r.asian ? "Asian" : "Non-Asian"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								children: r.camp === "home" ? "Home" : "Cafe"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								children: r.frequency
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								children: r.goToShop
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3",
								children: r.powder
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 tabular-nums",
								children: formatUsdShort(r.pack30)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "px-4 py-3 tabular-nums",
								children: formatUsdShort(r.usualBev)
							})
						]
					}, r.id)) })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-4 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-1 text-sm font-medium text-ink",
						children: "How often they drink"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-4 text-xs text-subtle",
						children: "Q2 · current filter"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FrequencyBars, { list })
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					className: "flex flex-col justify-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-4 text-sm font-medium text-ink",
							children: "Composition"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-3 text-sm text-muted",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Asian / non-Asian" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium text-ink",
										children: "5 / 5"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Women / men" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium text-ink",
										children: "7 / 3"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Convenience / home" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium text-ink",
										children: "7 / 3"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Primary intercept" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium text-ink",
										children: "R01 only"
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OriginBadge, { asian: true }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OriginBadge, { asian: false }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CampBadge, { camp: "convenience" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CampBadge, { camp: "home" })
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
				open: !!open,
				onOpenChange: (v) => !v && setOpenId(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetContent, { children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetTitle, { children: [open.id, open.source === "primary" ? " · street interview" : " · analogue"] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, { r: open })] }) : null })
			})
		]
	});
}
function Trends() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "trends",
		kicker: "11 · Industry reading",
		title: "Two currents. New drinks going west. Health becoming the default brief.",
		lede: "The assignment did not ask for a market model. It asked for a reading of consumption. The street file is small. The category around it is not.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-xl bg-cream p-6 shadow-[var(--shadow-border)] md:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] tracking-[0.16em] text-matcha uppercase",
						children: "Current one"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-3 font-display text-2xl leading-snug font-medium tracking-tight md:text-3xl",
						children: "New consumption is opening a Western repertoire that used to be coffee-only."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 space-y-4 text-sm leading-relaxed text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "For most of the last two decades, “new consumption” drinks — fruit teas, cheese foams, regional milk teas, ceremonial-grade lattes — incubated in mainland China, Taiwan, and Japan. North America had coffee, and then coffee with a green powder dumped in. That is changing because East Asian brands and formats are no longer staying home." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Luckin Coffee opened in New York in June 2025. By September 2026 it had roughly two dozen stores in the city, matcha on the board next to Coconut Latte, ordered from an app. Heytea has been testing the same corridor. Cha Cha Matcha, Matchaful, 12 Matcha, Setsugekka, and Kettl are local specialists; Blank Street — a coffee chain — now runs a matcha list long enough to be its own menu: cinnamon bun, strawberry shortcake, vanilla bean, blondie. The category is no longer a single ceremonial bowl. It is a weekday option." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "r/MatchaEverything is the cultural tell. The community was founded 14 January 2025. In about a year and a half it grew past 50,000 members. Posting is dense enough that shop-recommendation threads, $8-latte complaints, “which tin,” and NYC lists are a weekly drumbeat — the brief observed well over a thousand posts in a busy week. That is not a hobbyist backwater. It is Western consumers forming a habit language that did not exist in English-language coffee culture ten years ago: ceremonial versus culinary, origin, grams per drink, why the cafe tastes like vanilla syrup." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Matcha is Japanese. The broader move is East Asian. What the street sample actually does with that abundance is conservative: they pick a go-to shop, they want the flavor kept, they do not become tin buyers. More choice opened the habit. It did not automatically convert them to powder." })
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-xl bg-cream p-6 shadow-[var(--shadow-border)] md:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] tracking-[0.16em] text-matcha uppercase",
						children: "Current two"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-3 font-display text-2xl leading-snug font-medium tracking-tight md:text-3xl",
						children: "Health, quality, and “not fake” are a louder brief than they were ten years ago."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 space-y-4 text-sm leading-relaxed text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "R01 did not lead with a clinical claim. She led with pristine, not-artificial, middle-class body-control, and a skincare attraction point she has heard about. That is the actual health job in this file. R04 said people say it is good for skin and immediately added that she does not know if it is true. Nobody volunteered L-theanine or EGCG. The code is lifestyle cleanliness, not a supplement panel." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "That still matters commercially. Middle-class drinkers in both China and the US have raised the floor on food quality and food safety over the last decade. Matcha fits the story they already want to tell about themselves: less fake-sweet than a frappuccino, smoother than coffee, photographable, “slightly better.” Once a drink sits in that slot, it becomes a trend, and trends pull volume. The 2025 harvest shock — sold-out tins, auction prices multiples of the prior year, r/MatchaEverything threads on sticker shock — is what demand looks like when a lifestyle drink outruns an agricultural supply chain built for tea ceremony, not for Blank Street." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The risk for a powder brand is to over-read the health halo. Cafe-first users will not whisk for antioxidants. They will pay $7–8 for a drink that keeps the matcha flavor, does not taste like syrup, and does not ask them to own a bamboo tool. The health story gets them in the door. Convenience and taste decide whether they come back — and whether they ever buy the tin." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "If East Asian new-consumption keeps seeding North American high streets, the Western drinker will have more matcha in front of them, not less. The open question from this file is not whether the category grows. It is whether growth stays inside the $8 cup, or whether a lower-friction powder format (packets, shaker, honest grade, ~$1 a serving) can steal the weekday from Cha Cha and Blank Street." })
						]
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
			className: "mt-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] tracking-[0.14em] text-subtle uppercase",
				children: "What Reddit adds that the street did not"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid gap-4 md:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed text-muted",
						children: "Home powder is loud on r/MatchaEverything (“got sick of spending $8+”). It is quiet on the street. The subreddit is a converted sample. Do not use it as a base rate."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed text-muted",
						children: "Grade honesty is a live grievance: culinary sold as ceremonial is a trust-breaker (R03, R05, R09). Origin and harvest info beat another pretty tin (R10)."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed text-muted",
						children: "NYC threads name 12 Matcha, Setsugekka, Matchaful, Cha Cha, Kettl, Matcha House, Isshiki, Mika’s Direction — the same shop set used to recode Q4 as a place habit."
					})
				]
			})]
		})]
	});
}
function Method() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
		id: "method",
		kicker: "12 · Method",
		title: "A working file, not a census. Designed to be replaced.",
		lede: "Ten people, ideally five Asian and five not, street-style. One intercept is complete. The matrix is built so the remaining interviews can overwrite analogues without breaking the structure.",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-xl font-medium tracking-tight",
				children: "What is in the file"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-4 space-y-3 text-sm leading-relaxed text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium text-ink",
						children: "R01"
					}), " — completed street interview. Primary. Bilingual notes retained. Q9 and age not asked."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium text-ink",
						children: "R02–R10"
					}), " — working analogues, 5 / 5 Asian split, aligned to the seed case plus NYC shop landscape and public r/MatchaEverything themes. Labeled as analogues in every card."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						"Q4 recoded as go-to ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "shop" }),
						", not packaged brand. Q5 capped at three regular powder users."
					] })
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-xl font-medium tracking-tight",
				children: "Question guide"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
				className: "mt-4 space-y-2 text-sm leading-relaxed text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Q1 Why do you drink matcha? What is the main thing you are looking for?" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Q2 How often do you usually have matcha?" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Q3 What do you like or dislike about the taste?" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Q4 Do you usually have a particular brand or type? Why?" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Q5 Have you ever bought matcha powder to make it yourself?" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Q6a/b Barrier, or why home." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Q7 Reasonable price for ~30 drinks — not maximum." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Q8 Usual beverage paid. Q9 walk-away. Q10 conversion trigger." })
				]
			})] })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-8 max-w-3xl text-sm leading-relaxed text-subtle",
			children: "Sources for the shop landscape and category reading: Blank Street menu; NYC matcha roundups (Roaming Reina, Quintessentially, Copina Co., local lists naming 12 Matcha, Cha Cha Matcha, Matchaful, Setsugekka, Kettl, Sorate); r/MatchaEverything (founded 14 Jan 2025); reporting on Luckin’s NYC entry (June 2025) and subsequent expansion. This is a consumption-behavior working file for class, not a representative survey."
		})]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-paper",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReportNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-6xl px-4 pb-24 md:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sample, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Jobs, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Taste, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camps, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shops, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Powder, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Price, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quotes, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Findings, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trends, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Method, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 md:flex-row md:items-center md:justify-between md:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-lg font-medium tracking-tight text-ink",
						children: "Matcha Field Study"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-subtle",
						children: "NYC working file · n=10 · street intercept + analogues"
					})]
				})
			})
		]
	});
}
//#endregion
export { Home as component };
