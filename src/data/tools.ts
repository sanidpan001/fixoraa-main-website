// ═══════════════════════════════════════════════════════════════════════════
//  FIXORAA — MASTER TOOLS LIST
// ═══════════════════════════════════════════════════════════════════════════
//
//  THIS FILE IS THE SINGLE SOURCE OF TRUTH FOR EVERY TOOL ON THE WEBSITE.
//  The landing page, the /tools directory page, the search box and every
//  tool counter on the site are rendered automatically from the `niches`
//  list below. You never need to touch any page file to add or edit a tool.
//
//  ----------------------------------------------------------------------
//  HOW TO ADD A NEW TOOL (takes 30 seconds)
//  ----------------------------------------------------------------------
//  1. Find the niche (category) the tool belongs to in the list below.
//  2. Add one line inside that niche's `tools` array:
//
//       { name: "ToolName", slug: "tool-slug", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "One short line about what the tool does." },
//
//  The 4 fields mean:
//    • name  — the brand name shown on the website (e.g. "CardZero")
//    • slug  — a short, lowercase, URL-safe id, no spaces (e.g. "cardzero").
//              It must be UNIQUE across all tools in this file.
//    • url   — the live website address of the tool. Keep the placeholder
//              "https://PASTE-YOUR-TOOL-URL-HERE" until the tool is deployed,
//              then replace it with the real link (e.g. "https://cardzero.fixoraa.tech").
//    • blurb — one short sentence (under ~80 characters) describing the tool.
//  3. Save the file. The site rebuilds itself — the new tool appears on the
//     landing page, in /tools, in search results and in the totals. Done.
//
//  ----------------------------------------------------------------------
//  HOW TO REMOVE A TOOL
//  ----------------------------------------------------------------------
//  Delete its one line from the `tools` array. It disappears everywhere.
//
//  ----------------------------------------------------------------------
//  HOW TO ADD A NEW NICHE (CATEGORY)
//  ----------------------------------------------------------------------
//  A ready-made template block is pasted at the BOTTOM of this file.
//  Copy it, paste it as a new entry inside the `niches` array (before the
//  closing `];`), and fill in the name, slug, tagline and tools.
//
//  ----------------------------------------------------------------------
//  RULES — PLEASE READ
//  ----------------------------------------------------------------------
//  • NEVER hardcode tool names, links or counts inside page files.
//    Always read from `niches`, `allTools` or `totalTools` exported here.
//  • Tool `url`s are the ONLY values you should edit regularly — paste the
//    real deployed link over the PASTE-YOUR-TOOL-URL-HERE placeholder.
//  • Keep `slug`s unique and lowercase with dashes only.
//  • `totalTools` is calculated automatically — do not set it by hand.

export interface Tool {
  name: string;
  slug: string;
  url: string;
  blurb: string;
}

export interface Niche {
  name: string;
  slug: string;
  tagline: string;
  tools: Tool[];
}

export const niches: Niche[] = [
  // ── Finance Calculators ──────────────────────────────────────────────
  {
    name: "Finance Calculators",
    slug: "finance-calculators",
    tagline: "Smart calculators for money, loans, taxes and savings",
    tools: [
      { name: "CardZero", slug: "cardzero", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Debt snowball vs avalanche payoff planner" },
      { name: "CompoMint", slug: "compomint", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Compound interest calculator with growth projections" },
      { name: "DiscountWish", slug: "discountwish", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Calculate sale discounts and final prices instantly" },
      { name: "EMI Compare", slug: "emi-compare", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Compare loan EMIs side by side before you borrow" },
      { name: "EMI Vault", slug: "emi-vault", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Track and plan all your loan EMIs in one place" },
      { name: "FeeScale", slug: "feescale", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Set freelance rates that cover costs and profit" },
      { name: "FinGrow", slug: "fingrow", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Project how your savings and investments grow" },
      { name: "GoalGrove", slug: "goalgrove", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Turn savings goals into simple monthly plans" },
      { name: "Gratix", slug: "gratix", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Calculate gratuity payout by years of service" },
      { name: "Gratuityly", slug: "gratuityly", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Instant gratuity estimate for employees" },
      { name: "GrowthX", slug: "growthx", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Simulate investment growth with custom projections" },
      { name: "InflationScope", slug: "inflation-scope", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "See how inflation shrinks your money over time" },
      { name: "InvoiceCraft Pro", slug: "invoicecraft", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Create professional invoices in minutes" },
      { name: "LeaseLimit", slug: "leaselimit", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Find the rent you can actually afford" },
      { name: "LoanLens", slug: "loanlens", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Understand your loan's true cost and interest" },
      { name: "LoanLens 2", slug: "loanlens-2", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Compare loans with detailed amortization tables" },
      { name: "ProfitMargin", slug: "profit-margin", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Calculate profit margins and markups fast" },
      { name: "PropVault", slug: "propvault", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Track property investments and rental returns" },
      { name: "RentRelief", slug: "rentrelief", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Estimate your rent savings and relief amount" },
      { name: "Rently", slug: "rently", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Calculate HRA exemption on your salary" },
      { name: "RetireWise", slug: "retirewise", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Plan your retirement corpus and monthly savings" },
      { name: "SIPScope", slug: "sipscope", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "SIP calculator — project mutual fund growth" },
      { name: "SlabWise", slug: "slabwise", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "GST calculator with India's latest tax slabs" },
      { name: "TakeHome", slug: "takehome", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Calculate your in-hand salary after deductions" },
      { name: "Taxly", slug: "taxly", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Income tax calculator — old vs new regime" },
      { name: "TaxSnap", slug: "taxsnap", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Quick GST calculator for bills and invoices" },
      { name: "TipSlice", slug: "tipslice", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Split restaurant bills and calculate tips fairly" },
      { name: "WageFlip", slug: "wageflip", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Convert salary to hourly rate and back" },
      { name: "WealthMint", slug: "wealthmint", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "PPF calculator — maturity and interest projections" },
      { name: "WealthBloom", slug: "wealthbloom", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Grow your savings with smart money plans" },
      { name: "AurumX", slug: "aurumx", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Track gold prices and calculate gold value" },
      { name: "ShelfCheck", slug: "shelfcheck", url: "https://shelfcheck.fixoraa.tech", blurb: "Compare unit prices and find the real deal" },
      { name: "SnowYield", slug: "snowyield", url: "https://snowyield.fixoraa.tech", blurb: "Dividend DRIP growth calculator" },
      { name: "BurnRate", slug: "burnrate", url: "https://burnrate.fixoraa.tech", blurb: "Startup runway and burn rate calculator" },
      { name: "PerkWise", slug: "perkwise", url: "https://perkwise.fixoraa.tech", blurb: "Maximize your credit card rewards" },
      { name: "PayoffPlot", slug: "payoffplot", url: "https://payoffplot.fixoraa.tech", blurb: "Options payoff chart visualizer" },
      { name: "SubScout", slug: "subscout", url: "https://subscout.fixoraa.tech", blurb: "Audit subscriptions, stop money leaks" },
      { name: "LumpLab", slug: "lumplab", url: "https://lumplab.fixoraa.tech", blurb: "Lump sum vs DCA — which wins?" },
      { name: "ShiftZero", slug: "shiftzero", url: "https://shiftzero.fixoraa.tech", blurb: "Balance transfer savings calculator" },
      { name: "CarTrue", slug: "cartrue", url: "https://cartrue.fixoraa.tech", blurb: "The true cost of owning a car" },
      { name: "SettleFair", slug: "settlefair", url: "https://settlefair.fixoraa.tech", blurb: "Split group expenses fairly" },
      { name: "GeoPay", slug: "geopay", url: "https://geopay.fixoraa.tech", blurb: "Compare salaries across cities" },
      { name: "PlateProfit", slug: "plateprofit", url: "https://plateprofit.fixoraa.tech", blurb: "Recipe costing for food businesses" },
      { name: "MeetBurn", slug: "meetburn", url: "https://meetburn.fixoraa.tech", blurb: "See what your meetings really cost" },
      { name: "MoveMate", slug: "movemate", url: "https://movemate.fixoraa.tech", blurb: "Estimate moving costs in minutes" },
    ],
  },
  // ── Image Tools ──────────────────────────────────────────────────────
  {
    name: "Image Tools",
    slug: "image-tools",
    tagline: "Edit, compress and enhance images right in your browser",
    tools: [
      { name: "ErasePro", slug: "erasepro-bg", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Remove photo backgrounds with AI in seconds" },
      { name: "Erase Pro", slug: "erase-pro", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Quick background eraser for clean cutouts" },
      { name: "ObjectPro", slug: "objectpro", url: "https://objectpro.fixoraa.tech", blurb: "Remove unwanted objects from any photo" },
      { name: "PNGCraft", slug: "pngcraft", url: "https://pngcraft.fixoraa.tech", blurb: "Edit, convert and polish PNG images" },
      { name: "PixelFix", slug: "pixelfix", url: "https://pixelfix.fixoraa.tech", blurb: "Fix blurry and pixelated photos in one click" },
      { name: "PixelFix AI", slug: "pixelfix-ai", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "AI photo enhancer — upscale and sharpen images" },
      { name: "ShrinkPro", slug: "shrinkpro", url: "https://shrinkpro.fixoraa.tech", blurb: "Compress images without visible quality loss" },
      { name: "Shrink Pro", slug: "shrink-pro", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Fast image compressor for smaller file sizes" },
      { name: "PixelSlim", slug: "pixelslim", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Shrink images for faster websites and sharing" },
      { name: "PNGPro", slug: "pngpro", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Optimize PNG files for crisp, lightweight graphics" },
      { name: "ClarityPro", slug: "claritypro", url: "https://claritypro.fixoraa.tech", blurb: "Unblur photos and recover lost detail with AI" },
      { name: "FacePro", slug: "facepro", url: "https://facepro.fixoraa.tech", blurb: "AI face retouching and portrait enhancement" },
      { name: "MarkPro", slug: "markpro", url: "https://markpro.fixoraa.tech", blurb: "Remove watermarks from images effortlessly" },
      { name: "PassportPro", slug: "passport-photo", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Make passport and ID photos at home" },
      { name: "ResizeCraft", slug: "resizecraft", url: "https://resizecraft.fixoraa.tech", blurb: "Resize images to any dimension instantly" },
      { name: "RestorePro", slug: "restorepro", url: "https://restorepro.fixoraa.tech", blurb: "Restore old and damaged photos with AI" },
      { name: "CaptionMint", slug: "captionmint", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Generate catchy captions for your photos with AI" },
      { name: "PassportPro", slug: "passportpro", url: "https://passportpro.fixoraa.tech", blurb: "Create passport photos at home" },
      { name: "ErasePro", slug: "erasepro", url: "https://erasepro.fixoraa.tech", blurb: "AI background remover in one click" },
    ],
  },
  // ── PDF Tools ────────────────────────────────────────────────────────
  {
    name: "PDF Tools",
    slug: "pdf-tools",
    tagline: "Merge, split and convert PDF files for free",
    tools: [
      { name: "DocBind", slug: "docbind", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Merge, split and organize PDF files online" },
      { name: "PDFNinja", slug: "pdfninja", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "All-in-one PDF converter and editor toolkit" },
    ],
  },
  // ── Text Tools ───────────────────────────────────────────────────────
  {
    name: "Text Tools",
    slug: "text-tools",
    tagline: "Write, format and analyze text like a pro",
    tools: [
      { name: "BaseCraft", slug: "basecraft", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Encode and decode Base64 text and files" },
      { name: "DiffScope", slug: "diffscope", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Compare two texts side by side with highlights" },
      { name: "Dupeless", slug: "dupeless", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Remove duplicate lines from any text" },
      { name: "FreqLens", slug: "freqlens", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Analyze word frequency for writing and SEO" },
      { name: "GhostGlyph", slug: "ghostglyph", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Find invisible characters hiding in your text" },
      { name: "JSONLens", slug: "jsonlens", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Format, validate and explore JSON data" },
      { name: "Keynetic", slug: "keynetic", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Check keyword density and SEO keywords" },
      { name: "Mailor AI", slug: "mailor", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "AI email writer — drafts, replies and subject lines" },
      { name: "MatchMint", slug: "matchmint", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Test and debug regular expressions live" },
      { name: "QuillVortex AI", slug: "quillvortex", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "AI writing assistant for articles and stories" },
      { name: "SlugWise", slug: "slugwise", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Turn headlines into clean URL slugs" },
      { name: "TextShift", slug: "textshift", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Convert text case — upper, lower, title and more" },
      { name: "WordTally", slug: "wordtally", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Count words, characters and reading time" },
      { name: "LineForge", slug: "lineforge", url: "https://lineforge.fixoraa.tech", blurb: "Sort, filter and dedupe text lines" },
      { name: "SegText", slug: "segtext", url: "https://segtext.fixoraa.tech", blurb: "Split long texts into SMS-sized parts" },
      { name: "ReadRank", slug: "readrank", url: "https://readrank.fixoraa.tech", blurb: "Score your text's readability level" },
      { name: "ProsePulse", slug: "prosepulse", url: "https://prosepulse.fixoraa.tech", blurb: "Polish your writing style instantly" },
      { name: "SubjectLab", slug: "subjectlab", url: "https://subjectlab.fixoraa.tech", blurb: "Test email subject lines that get opened" },
      { name: "WordSprint", slug: "wordsprint", url: "https://wordsprint.fixoraa.tech", blurb: "Track writing speed and smash word goals" },
    ],
  },
  // ── Developer Tools ──────────────────────────────────────────────────
  {
    name: "Developer Tools",
    slug: "developer-tools",
    tagline: "Tiny utilities that make developers' lives easier",
    tools: [
      { name: "CronSage", slug: "cronsage", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Cron expressions explained in plain English" },
      { name: "Epochly", slug: "epochly", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Convert Unix timestamps to dates and back" },
      { name: "Fakerly", slug: "fakerly", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Generate fake data for testing your apps" },
      { name: "HexSum", slug: "hexsum", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Generate MD5, SHA-1 and SHA-256 hashes" },
      { name: "HookForge", slug: "hook-forge", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Forge test webhooks for your integrations" },
      { name: "HueHive", slug: "huehive", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Create and explore beautiful color palettes" },
      { name: "LinkAura", slug: "linkaura", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Create QR codes for links, WiFi and more" },
      { name: "OgCraft", slug: "ogcraft", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Preview and generate Open Graph social cards" },
      { name: "PassSmith", slug: "passsmith", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Generate strong, secure passwords" },
      { name: "Scanova", slug: "scanova", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Design and download custom QR codes" },
      { name: "SQLPolish", slug: "sqlpolish", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Format and beautify SQL queries instantly" },
      { name: "UuidMint", slug: "uuidmint", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Generate random UUIDs and GUIDs" },
      { name: "TokenPeek", slug: "tokenpeek", url: "https://tokenpeek.fixoraa.tech", blurb: "Decode and inspect JWT tokens instantly" },
      { name: "GitAid", slug: "gitaid", url: "https://gitaid.fixoraa.tech", blurb: "Git rescue guide — fix mistakes fast" },
      { name: "QueryKit", slug: "querykit", url: "https://querykit.fixoraa.tech", blurb: "URL parser and UTM link builder" },
      { name: "Permitly", slug: "permitly", url: "https://permitly.fixoraa.tech", blurb: "Pick the right open-source license" },
      { name: "SpecScope", slug: "specscope", url: "https://specscope.fixoraa.tech", blurb: "CSS specificity score analyzer" },
      { name: "CommitCraft", slug: "commitcraft", url: "https://commitcraft.fixoraa.tech", blurb: "Build clean git commit messages" },
      { name: "CurlSmith", slug: "curlsmith", url: "https://curlsmith.fixoraa.tech", blurb: "Build and test API requests without code" },
      { name: "IgnorePilot", slug: "ignorepilot", url: "https://ignorepilot.fixoraa.tech", blurb: "Generate perfect .gitignore files instantly" },
      { name: "CookieLens", slug: "cookielens", url: "https://cookielens.fixoraa.tech", blurb: "Inspect and understand website cookies" },
      { name: "MarkForge", slug: "markforge", url: "https://markforge.fixoraa.tech", blurb: "Write and preview Markdown like a pro" },
      { name: "CipherLab", slug: "cipherlab", url: "https://cipherlab.fixoraa.tech", blurb: "Encode and decode secret ciphers" },
    ],
  },
  // ── Date & Time ──────────────────────────────────────────────────────
  {
    name: "Date & Time",
    slug: "date-time",
    tagline: "Calculators, converters and timers for dates and time",
    tools: [
      { name: "AgeArc", slug: "agearc", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Calculate exact age in years, months and days" },
      { name: "DateJump", slug: "datejump", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Add or subtract days from any date" },
      { name: "DaySpan", slug: "dayspan", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Find the exact duration between two dates" },
      { name: "PomoPace", slug: "pomopace", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Pomodoro focus timer with work and break cycles" },
      { name: "ShiftTally", slug: "shifttally", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Track work hours and shifts for easy payroll" },
      { name: "WhichWeek", slug: "whichweek", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Find the week number for any date" },
      { name: "WorkCount", slug: "workcount", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Count business days between two dates" },
      { name: "ZeroHour", slug: "zerohour", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Create countdown timers for any event" },
      { name: "ZoneSync", slug: "zonesync", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Convert time across world time zones" },
    ],
  },
  // ── Health & Fitness ─────────────────────────────────────────────────
  {
    name: "Health & Fitness",
    slug: "health-fitness",
    tagline: "Simple trackers for fitness, diet and sleep",
    tools: [
      { name: "CaloFuel", slug: "calofuel", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Calculate your TDEE and daily calorie needs" },
      { name: "HydroQuotient", slug: "hydroquotient", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Track your daily water intake goal" },
      { name: "MacroMason", slug: "macromason", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Split your calories into protein, carbs and fat" },
      { name: "OneRepLab", slug: "onereplab", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Calculate your one-rep max for any lift" },
      { name: "REMNest", slug: "remnest", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Find the best bedtime and wake-up time for you" },
      { name: "TapeTrim", slug: "tapetrim", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Estimate body fat percentage from measurements" },
      { name: "VitaScale", slug: "vitascale", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Calculate your BMI in seconds" },
      { name: "SolSafe", slug: "solsafe", url: "https://solsafe.fixoraa.tech", blurb: "Sun safety timer by skin type and SPF" },
      { name: "Snoozely", slug: "snoozely", url: "https://snoozely.fixoraa.tech", blurb: "Baby sleep schedules and guidance" },
      { name: "ZoneBeat", slug: "zonebeat", url: "https://zonebeat.fixoraa.tech", blurb: "Heart-rate training zones calculator" },
      { name: "CaffCut", slug: "caffcut", url: "https://caffcut.fixoraa.tech", blurb: "Caffeine cutoff time for better sleep" },
      { name: "FitAge", slug: "fitage", url: "https://fitage.fixoraa.tech", blurb: "Discover your true fitness age" },
      { name: "PaceCraft", slug: "pacecraft", url: "https://pacecraft.fixoraa.tech", blurb: "Predict your race finish times" },
      { name: "BurnBoard", slug: "burnboard", url: "https://burnboard.fixoraa.tech", blurb: "Calories burned by activity" },
      { name: "WaistWise", slug: "waistwise", url: "https://waistwise.fixoraa.tech", blurb: "Waist-to-height health check" },
      { name: "SleepLedger", slug: "sleepledger", url: "https://sleepledger.fixoraa.tech", blurb: "Track and repay your sleep debt" },
      { name: "HabitForge", slug: "habitforge", url: "https://habitforge.fixoraa.tech", blurb: "Build habits with streak tracking" },
    ],
  },
  // ── Fun & Lifestyle ──────────────────────────────────────────────────
  {
    name: "Fun & Lifestyle",
    slug: "fun-lifestyle",
    tagline: "Quizzes, games and generators for fun and daily life",
    tools: [
      { name: "AmoraMatch", slug: "amoramatch", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Love compatibility test for you and your partner" },
      { name: "FateOrb", slug: "fateorb", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Ask the magic oracle — get yes-or-no answers" },
      { name: "NameNova", slug: "namenova", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Generate cool nicknames for anyone" },
      { name: "Numbria", slug: "numbria", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Numerology reading from your name and birthdate" },
      { name: "PetPicks", slug: "petpicks", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Find the perfect name for your pet" },
      { name: "Randora", slug: "randora", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Random name, number and decision picker" },
      { name: "SipMile", slug: "sipmile", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Track your car's fuel efficiency and trip costs" },
      { name: "TotTales", slug: "tottales", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Discover baby names with meanings and origins" },
      { name: "TypeBolt", slug: "typebolt", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Test your typing speed and accuracy" },
      { name: "VowTag", slug: "vowtag", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Create a unique wedding hashtag" },
      { name: "SwapChef", slug: "swapchef", url: "https://swapchef.fixoraa.tech", blurb: "Smart ingredient swaps for any recipe" },
      { name: "StainGone", slug: "staingone", url: "https://staingone.fixoraa.tech", blurb: "Stain remover guide for every fabric" },
      { name: "NestSketch", slug: "nestsketch", url: "https://nestsketch.fixoraa.tech", blurb: "Plan your room layout visually" },
      { name: "BrewMetric", slug: "brewmetric", url: "https://brewmetric.fixoraa.tech", blurb: "Perfect coffee ratios, every brew" },
      { name: "SliceSense", slug: "slicesense", url: "https://slicesense.fixoraa.tech", blurb: "Pizza planner — slices per person" },
      { name: "Packly", slug: "packly", url: "https://packly.fixoraa.tech", blurb: "Packing lists for every trip" },
      { name: "GlowHour", slug: "glowhour", url: "https://glowhour.fixoraa.tech", blurb: "Golden hour times for perfect photos" },
      { name: "CoatCount", slug: "coatcount", url: "https://coatcount.fixoraa.tech", blurb: "Paint quantity calculator for rooms" },
      { name: "RoastRite", slug: "roastrite", url: "https://roastrite.fixoraa.tech", blurb: "Funny roast generator for friends" },
      { name: "SousLine", slug: "sousline", url: "https://sousline.fixoraa.tech", blurb: "Sous vide time and temperature guide" },
      { name: "CrumbClock", slug: "crumbclock", url: "https://crumbclock.fixoraa.tech", blurb: "Sourdough baking schedule planner" },
      { name: "ProofPour", slug: "proofpour", url: "https://proofpour.fixoraa.tech", blurb: "Batch cocktail recipes for parties" },
      { name: "SteepSmart", slug: "steepsmart", url: "https://steepsmart.fixoraa.tech", blurb: "Perfect tea steeping timer" },
      { name: "Prioritix", slug: "prioritix", url: "https://prioritix.fixoraa.tech", blurb: "Prioritize tasks with the Eisenhower Matrix" },
      { name: "DecideWise", slug: "decidewise", url: "https://decidewise.fixoraa.tech", blurb: "Make tough decisions with weighted scores" },
      { name: "HourHive", slug: "hourhive", url: "https://hourhive.fixoraa.tech", blurb: "Track time across tasks and projects" },
      { name: "WashWise", slug: "washwise", url: "https://washwise.fixoraa.tech", blurb: "Decode laundry care symbols instantly" },
      { name: "KeepFresh", slug: "keepfresh", url: "https://keepfresh.fixoraa.tech", blurb: "Track food freshness and expiry dates" },
      { name: "Sproutly", slug: "sproutly", url: "https://sproutly.fixoraa.tech", blurb: "Get reminded to water your plants" },
      { name: "TipAtlas", slug: "tipatlas", url: "https://tipatlas.fixoraa.tech", blurb: "Tipping etiquette for every country" },
      { name: "PhrasePack", slug: "phrasepack", url: "https://phrasepack.fixoraa.tech", blurb: "Essential travel phrases in your pocket" },
      { name: "BagFit", slug: "bagfit", url: "https://bagfit.fixoraa.tech", blurb: "Check if your bag fits airline limits" },
      { name: "TripBudget", slug: "tripbudget", url: "https://tripbudget.fixoraa.tech", blurb: "Plan trips backwards from your budget" },
      { name: "Dreamly", slug: "dreamly", url: "https://dreamly.fixoraa.tech", blurb: "Decode your dreams and journal them" },
      { name: "Riddly", slug: "riddly", url: "https://riddly.fixoraa.tech", blurb: "Generate riddles with answers included" },
      { name: "Darely", slug: "darely", url: "https://darely.fixoraa.tech", blurb: "Party dares and games for groups" },
      { name: "MafiaDeal", slug: "mafiadeal", url: "https://mafiadeal.fixoraa.tech", blurb: "Deal secret roles for Mafia night" },
    ],
  },
  // ── Converters ───────────────────────────────────────────────────────
  {
    name: "Converters",
    slug: "converters",
    tagline: "Convert units, sizes and numbers in seconds",
    tools: [
      { name: "Fracify", slug: "fracify", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Fraction calculator — add, subtract and simplify" },
      { name: "OvenMark", slug: "ovenmark", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Convert oven temperatures between °C and °F" },
      { name: "PercentIQ", slug: "percentiq", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Percentage calculator for discounts, marks and tips" },
      { name: "RingWisp", slug: "ringwisp", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Find your ring size in any country standard" },
      { name: "Romanly", slug: "romanly", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Convert numbers to Roman numerals and back" },
      { name: "StrideScale", slug: "stridescale", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Convert shoe sizes across US, UK and EU" },
      { name: "UnitShift", slug: "unitshift", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Convert length, weight, temperature and more" },
      { name: "YamlForge", slug: "yamlforge", url: "https://yamlforge.fixoraa.tech", blurb: "Convert YAML to JSON and back" },
    ],
  },
  // ── Study & Career ───────────────────────────────────────────────────
  {
    name: "Study & Career",
    slug: "study-career",
    tagline: "Tools to study smarter and land your dream job",
    tools: [
      { name: "CiteCraft", slug: "citecraft", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Generate citations in APA, MLA and Chicago styles" },
      { name: "DeckDash", slug: "deckdash", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Study faster with smart flashcards" },
      { name: "GradeAxis", slug: "gradeaxis", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Calculate your GPA and CGPA easily" },
      { name: "GradeNeed", slug: "gradeneed", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Find the grade you need on your final exam" },
      { name: "PrepPilot", slug: "preppilot", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "AI study planner that builds your exam routine" },
      { name: "ResumeCraft AI", slug: "resumecraft", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Build a job-winning resume with AI" },
      { name: "RezScore", slug: "rezscore", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "Score your resume the way recruiters see it" },
      { name: "AskHire", slug: "askhire", url: "https://askhire.fixoraa.tech", blurb: "Interview questions with sample answers" },
      { name: "Quadra", slug: "quadra", url: "https://quadra.fixoraa.tech", blurb: "SWOT and TOWS analysis builder" },
      { name: "NineBlock", slug: "nineblock", url: "https://nineblock.fixoraa.tech", blurb: "Business model canvas builder" },
      { name: "QuizLink", slug: "quizlink", url: "https://quizlink.fixoraa.tech", blurb: "Create and share quizzes in minutes" },
      { name: "RowReduce", slug: "rowreduce", url: "https://rowreduce.fixoraa.tech", blurb: "Matrix row-reduction calculator" },
      { name: "Revisit", slug: "revisit", url: "https://revisit.fixoraa.tech", blurb: "Spaced repetition study scheduler" },
      { name: "BookPace", slug: "bookpace", url: "https://bookpace.fixoraa.tech", blurb: "Reading time and pace calculator" },
      { name: "ExamPace", slug: "exampace", url: "https://exampace.fixoraa.tech", blurb: "Time every exam section perfectly" },
      { name: "Rootly", slug: "rootly", url: "https://rootly.fixoraa.tech", blurb: "Master vocabulary through word roots" },
      { name: "CornellCraft", slug: "cornellcraft", url: "https://cornellcraft.fixoraa.tech", blurb: "Take notes the Cornell way" },
      { name: "MathDash", slug: "mathdash", url: "https://mathdash.fixoraa.tech", blurb: "Adaptive math drills that level up" },
    ],
  },
];

// ───────────────────────────────────────────────────────────────────────
//  AUTOMATIC: flattened list of every tool, with its niche attached.
//  Built from `niches` above — you do NOT need to edit this by hand.
//  Pages use this for search results and the /tools directory.
// ───────────────────────────────────────────────────────────────────────
export const allTools: {
  niche: string;
  nicheSlug: string;
  name: string;
  slug: string;
  url: string;
  blurb: string;
}[] = niches.flatMap((n) =>
  n.tools.map((t) => ({
    niche: n.name,
    nicheSlug: n.slug,
    name: t.name,
    slug: t.slug,
    url: t.url,
    blurb: t.blurb,
  }))
);

// ───────────────────────────────────────────────────────────────────────
//  AUTOMATIC: total number of tools. Used by counters on the site.
//  Do NOT set this by hand — it is calculated from `allTools`.
// ───────────────────────────────────────────────────────────────────────
export const totalTools: number = allTools.length;

// ═══════════════════════════════════════════════════════════════════════════
//  TEMPLATE: HOW TO ADD A NEW NICHE (CATEGORY)
// ═══════════════════════════════════════════════════════════════════════════
//  1. Copy the block below.
//  2. Paste it as a new entry INSIDE the `niches` array above
//     (right before the closing `];` line).
//  3. Remove the leading `//` from every line of the pasted block.
//  4. Fill in your niche name, slug, tagline and tools.
//  5. Save — the new niche appears everywhere on the site automatically.
//
//  {
//    name: "Your Niche Name",
//    slug: "your-niche-slug",
//    tagline: "One short line describing this niche.",
//    tools: [
//      { name: "ToolName", slug: "tool-slug", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "One short line about what the tool does." },
//      { name: "AnotherTool", slug: "another-tool", url: "https://PASTE-YOUR-TOOL-URL-HERE", blurb: "One short line about what the tool does." },
//    ],
//  },
