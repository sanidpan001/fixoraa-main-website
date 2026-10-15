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
      { name: "RentOrOwn", slug: "rentorown", url: "https://rentorown.fixoraa.tech", blurb: "Compare renting vs buying a home, year by year" },
      { name: "FundShield", slug: "fundshield", url: "https://fundshield.fixoraa.tech", blurb: "Emergency fund calculator — months of cover & plan" },
      { name: "HikeMath", slug: "hikemath", url: "https://hikemath.fixoraa.tech", blurb: "Salary hike calculator — new CTC & in-hand" },
      { name: "EvenPoint", slug: "evenpoint", url: "https://evenpoint.fixoraa.tech", blurb: "Break-even point calculator for any business" },
      { name: "CardZero", slug: "cardzero", url: "https://cardzero.fixoraa.tech", blurb: "Debt snowball vs avalanche payoff planner" },
      { name: "CompoMint", slug: "compomint", url: "https://compomint.fixoraa.tech", blurb: "Compound interest calculator with growth projections" },
      { name: "DiscountWish", slug: "discountwish", url: "https://discountwish.fixoraa.tech", blurb: "Calculate sale discounts and final prices instantly" },
      { name: "EMI Compare", slug: "emi-compare", url: "https://emicompare.fixoraa.tech", blurb: "Compare loan EMIs side by side before you borrow" },
      { name: "EMI Vault", slug: "emi-vault", url: "https://emivault.fixoraa.tech", blurb: "Track and plan all your loan EMIs in one place" },
      { name: "FeeScale", slug: "feescale", url: "https://feescale.fixoraa.tech", blurb: "Set freelance rates that cover costs and profit" },
      { name: "FinGrow", slug: "fingrow", url: "https://fingrow.fixoraa.tech", blurb: "Project how your savings and investments grow" },
      { name: "GoalGrove", slug: "goalgrove", url: "https://goalgrove.fixoraa.tech", blurb: "Turn savings goals into simple monthly plans" },
      { name: "Gratix", slug: "gratix", url: "https://gratix.fixoraa.tech", blurb: "Calculate gratuity payout by years of service" },
      { name: "Gratuityly", slug: "gratuityly", url: "https://gratuityly.fixoraa.tech", blurb: "Instant gratuity estimate for employees" },
      { name: "GrowthX", slug: "growthx", url: "https://growthx.fixoraa.tech", blurb: "Simulate investment growth with custom projections" },
      { name: "InflationScope", slug: "inflation-scope", url: "https://inflationscope.fixoraa.tech", blurb: "See how inflation shrinks your money over time" },
      { name: "InvoiceCraft Pro", slug: "invoicecraft", url: "https://invoicecraft.fixoraa.tech", blurb: "Create professional invoices in minutes" },
      { name: "LeaseLimit", slug: "leaselimit", url: "https://leaselimit.fixoraa.tech", blurb: "Find the rent you can actually afford" },
      { name: "LoanLens", slug: "loanlens", url: "https://loanlens.fixoraa.tech", blurb: "Understand your loan's true cost and interest" },
      { name: "LoanLens 2", slug: "loanlens-2", url: "https://loanlens2.fixoraa.tech", blurb: "Compare loans with detailed amortization tables" },
      { name: "LoanLens EMI", slug: "loanlens-emi", url: "https://loanlensemi.fixoraa.tech", blurb: "Check your personal loan eligibility and max amount" },
      { name: "AutoFenix", slug: "autofenix", url: "https://autofenix.fixoraa.tech", blurb: "Car and bike loan EMI calculator with down payment" },
      { name: "PinAtlas", slug: "pinatlas", url: "https://pinatlas.fixoraa.tech", blurb: "Validate IFSC codes and decode PIN codes for India" },
      { name: "ProfitMargin", slug: "profit-margin", url: "https://profite.fixoraa.tech", blurb: "Calculate profit margins and markups fast" },
      { name: "PropVault", slug: "propvault", url: "https://propvault.fixoraa.tech", blurb: "Track property investments and rental returns" },
      { name: "RentRelief", slug: "rentrelief", url: "https://rentrelief.fixoraa.tech", blurb: "Estimate your rent savings and relief amount" },
      { name: "Rently", slug: "rently", url: "https://rently.fixoraa.tech", blurb: "Calculate HRA exemption on your salary" },
      { name: "RetireWise", slug: "retirewise", url: "https://retirewise.fixoraa.tech", blurb: "Plan your retirement corpus and monthly savings" },
      { name: "SIPScope", slug: "sipscope", url: "https://sipscope.fixoraa.tech", blurb: "SIP calculator — project mutual fund growth" },
      { name: "SlabWise", slug: "slabwise", url: "https://slabwise.fixoraa.tech", blurb: "GST calculator with India's latest tax slabs" },
      { name: "TakeHome", slug: "takehome", url: "https://takehome.fixoraa.tech", blurb: "Calculate your in-hand salary after deductions" },
      { name: "Taxly", slug: "taxly", url: "https://taxly.fixoraa.tech", blurb: "Income tax calculator — old vs new regime" },
      { name: "TaxSnap", slug: "taxsnap", url: "https://taxsnap.fixoraa.tech", blurb: "Quick GST calculator for bills and invoices" },
      { name: "TipSlice", slug: "tipslice", url: "https://tipslice.fixoraa.tech", blurb: "Split restaurant bills and calculate tips fairly" },
      { name: "WageFlip", slug: "wageflip", url: "https://wageflip.fixoraa.tech", blurb: "Convert salary to hourly rate and back" },
      { name: "WealthMint", slug: "wealthmint", url: "https://wealthmint.fixoraa.tech", blurb: "PPF calculator — maturity and interest projections" },
      { name: "WealthBloom", slug: "wealthbloom", url: "https://wealthbloom.fixoraa.tech", blurb: "Grow your savings with smart money plans" },
      { name: "AurumX", slug: "aurumx", url: "https://aurumx.fixoraa.tech", blurb: "Track gold prices and calculate gold value" },
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
      { name: "VaultNest", slug: "vaultnest", url: "https://vaultnest.fixoraa.tech", blurb: "FD calculator with payout modes and penalty estimate" },
      { name: "DripVault", slug: "dripvault", url: "https://dripvault.fixoraa.tech", blurb: "RD calculator with deposit timeline and tenure compare" },
      { name: "GrowSafe", slug: "growsafe", url: "https://growsafe.fixoraa.tech", blurb: "PPF calculator with year-by-year balance table" },
      { name: "SoloRate", slug: "solorate", url: "https://solorate.fixoraa.tech", blurb: "Freelance rate calculator — target income to hourly rate" },
      { name: "Ledgerly", slug: "ledgerly", url: "https://ledgerly.fixoraa.tech", blurb: "Net worth calculator — assets vs liabilities tracker" },
      { name: "GlobeRate", slug: "globerate", url: "https://globerate.fixoraa.tech", blurb: "Currency converter with editable indicative rates" },
      { name: "MortgageMate", slug: "mortgagemate", url: "https://mortgagemate.fixoraa.tech", blurb: "Mortgage calculator with tax, insurance and PMI" },
      { name: "LittleNest", slug: "littlenest", url: "https://littlenest.fixoraa.tech", blurb: "Sukanya Samriddhi (SSY) calculator with deposit grid" },
      { name: "BudgetBloom", slug: "budgetbloom", url: "https://budgetbloom.2.fixoraa.tech", blurb: "Adjustable ratios (e.g. 60/20/20 for high-rent cities) plus a leak finder that" },
      { name: "DelayCost", slug: "delaycost", url: "https://delaycost.2.fixoraa.tech", blurb: "Month-level delay slider AND the catch-up SIP needed to still hit the same cor" },
      { name: "ShareAvg", slug: "shareavg", url: "https://shareavg.2.fixoraa.tech", blurb: "Unlimited buy tranches with break-even and 'average needed to reach target pri" },
      { name: "ScoreLift", slug: "scorelift", url: "https://scorelift.2.fixoraa.tech", blurb: "Anonymous, no-login simulator that ranks actions by score impact \u2014 bureaus gat" },
      { name: "RetirePath", slug: "retirepath", url: "https://retirepath.2.fixoraa.tech", blurb: "Combines inflation, existing savings AND annual step-up saving in one year-by-" },
      { name: "EduFund", slug: "edufund", url: "https://edufund.2.fixoraa.tech", blurb: "Starts from course + country presets with education-inflation (higher than CPI" },
      { name: "CostPerUse", slug: "costperuse", url: "https://costperuse.2.fixoraa.tech", blurb: "Verdict meter ('worth it / borderline / luxury tax') plus cost-per-day \u2014 blogs" },
      { name: "HomeReno", slug: "homereno", url: "https://homereno.2.fixoraa.tech", blurb: "Room-by-room build-up (kitchen/bath/living) splitting labour vs materials, plu" },
      { name: "PetBudget", slug: "petbudget", url: "https://petbudget.2.fixoraa.tech", blurb: "Monthly + first-year + lifetime cost by pet type and size, with vet/food/insur" },
      { name: "SinkFund", slug: "sinkfund", url: "https://sinkfund.2.fixoraa.tech", blurb: "Multiple dated goals side by side with one combined monthly saving figure and" },
      { name: "BondYield", slug: "bondyield", url: "https://bondyield.2.fixoraa.tech", blurb: "Current yield AND YTM plus the full year-by-year cashflow schedule in one scre" },
      { name: "EPFCalc", slug: "epfcalc", url: "https://epfcalc.2.fixoraa.tech", blurb: "Projects with yearly salary increments and shows the employer/employee split p" },
      { name: "SWPCalc", slug: "swpcalc", url: "https://swpcalc.2.fixoraa.tech", blurb: "Withdrawals that can rise yearly with inflation, plus the exact month the corp" },
      { name: "SipVsRd", slug: "sipvsrd", url: "https://sipvsrd.2.fixoraa.tech", blurb: "Same monthly amount through SIP and RD together, inflation-adjusted real value" },
      { name: "StampDuty", slug: "stampduty", url: "https://stampduty.2.fixoraa.tech", blurb: "State-wise duty + registration with male, female and joint totals compared on" },
      { name: "CarInsure", slug: "carinsure", url: "https://carinsure.2.fixoraa.tech", blurb: "Premium estimate built transparently from IDV, car age, NCB slab and add-on pi" },
      { name: "RentDeposit", slug: "rentdeposit", url: "https://rentdeposit.2.fixoraa.tech", blurb: "Full move-in cash total: deposit (city-wise month presets), first month, broke" },
      { name: "NpsVsEpf", slug: "npsvsepf", url: "https://npsvsepf.2.fixoraa.tech", blurb: "Same contribution through NPS (with equity/debt split + annuity portion at exi" },
      { name: "TermCover", slug: "termcover", url: "https://termcover.2.fixoraa.tech", blurb: "Needs-based cover: replace income for N years, add loans and goals, subtract e" },
      { name: "GoldVsFd", slug: "goldvsfd", url: "https://goldvsfd.2.fixoraa.tech", blurb: "Same lump sum in gold (with making-charge/SGB toggle) vs FD (with tax-slab on" },
      { name: "KidsAllowance", slug: "kidsallowance", url: "https://kidsallowance.2.fixoraa.tech", blurb: "Age-guided allowance with a spend/save/share split, chore bonus table and a sa" },
    ],
  },
  // ── Image Tools ──────────────────────────────────────────────────────
  {
    name: "Image Tools",
    slug: "image-tools",
    tagline: "Edit, compress and enhance images right in your browser",
    tools: [
      { name: "MockFrame", slug: "mockframe", url: "https://mockframe.fixoraa.tech", blurb: "Beautify screenshots with device frames & gradients" },
      { name: "ObjectPro", slug: "objectpro", url: "https://objectpro.fixoraa.tech", blurb: "Remove unwanted objects from any photo" },
      { name: "PNGCraft", slug: "pngcraft", url: "https://pngcraft.fixoraa.tech", blurb: "Edit, convert and polish PNG images" },
      { name: "PixelFix", slug: "pixelfix", url: "https://pixelfix.fixoraa.tech", blurb: "Fix blurry and pixelated photos in one click" },
      { name: "ShrinkPro", slug: "shrinkpro", url: "https://shrinkpro.fixoraa.tech", blurb: "Compress images without visible quality loss" },
      { name: "PixelSlim", slug: "pixelslim", url: "https://pixelslim.fixoraa.tech", blurb: "Shrink images for faster websites and sharing" },
      { name: "ClarityPro", slug: "claritypro", url: "https://claritypro.fixoraa.tech", blurb: "Unblur photos and recover lost detail with AI" },
      { name: "FacePro", slug: "facepro", url: "https://facepro.fixoraa.tech", blurb: "AI face retouching and portrait enhancement" },
      { name: "MarkPro", slug: "markpro", url: "https://markpro.fixoraa.tech", blurb: "Remove watermarks from images effortlessly" },
      { name: "ResizeCraft", slug: "resizecraft", url: "https://resizecraft.fixoraa.tech", blurb: "Resize images to any dimension instantly" },
      { name: "RestorePro", slug: "restorepro", url: "https://restorepro.fixoraa.tech", blurb: "Restore old and damaged photos with AI" },
      { name: "CaptionMint", slug: "captionmint", url: "https://captionmint.fixoraa.tech", blurb: "Generate catchy captions for your photos with AI" },
      { name: "PassportPro", slug: "passportpro", url: "https://passportpro.fixoraa.tech", blurb: "Create passport photos at home" },
      { name: "ErasePro", slug: "erasepro", url: "https://erasepro.fixoraa.tech", blurb: "AI background remover in one click" },
      { name: "MemeForge", slug: "memeforge", url: "https://memeforge.fixoraa.tech", blurb: "Meme generator with draggable text and templates" },
      { name: "GridGala", slug: "gridgala", url: "https://gridgala.fixoraa.tech", blurb: "Photo collage maker for 2 to 9 photos" },
      { name: "TinyIcon", slug: "tinyicon", url: "https://tinyicon.fixoraa.tech", blurb: "Favicon generator — text, emoji and image icons" },
      { name: "MetaPeel", slug: "metapeel", url: "https://metapeel.fixoraa.tech", blurb: "EXIF viewer and remover — strip photo metadata" },
      { name: "Vectra", slug: "vectra", url: "https://vectra.fixoraa.tech", blurb: "SVG to PNG converter with custom sizes" },
      { name: "BlurGuard", slug: "blurguard", url: "https://blurguard.fixoraa.tech", blurb: "Blur faces and plates in photos for privacy" },
      { name: "BeforeAfter", slug: "beforeafter", url: "https://beforeafter.2.fixoraa.tech", blurb: "Exports static PNG, animated wipe GIF AND a copy-paste embed slider \u2014 competit" },
      { name: "RoundCrop", slug: "roundcrop", url: "https://roundcrop.2.fixoraa.tech", blurb: "Circle, rounded-rect and blob shapes with ring/border styling in one tool \u2014 pr" },
      { name: "AsciiPic", slug: "asciipic", url: "https://asciipic.2.fixoraa.tech", blurb: "Colour ASCII (HTML export) as well as classic mono, with brightness-mapped cha" },
      { name: "PixelDust", slug: "pixeldust", url: "https://pixeldust.2.fixoraa.tech", blurb: "Palette reduction to classic console palettes (Game Boy, NES-style) \u2014 serves p" },
      { name: "DuoTone Lab", slug: "duotone", url: "https://duotone.2.fixoraa.tech", blurb: "Preset pairs named by use (Poster, Blueprint, Sunset, Noir) with shadow/highli" },
      { name: "Polaroidly", slug: "polaroidly", url: "https://polaroidly.2.fixoraa.tech", blurb: "No-watermark print-ready export with handwriting caption fonts and tilt/shadow" },
      { name: "FlipImg", slug: "flipimg", url: "https://flipimg.2.fixoraa.tech", blurb: "Batch flip/rotate with lossless export and EXIF-orientation fix" },
      { name: "ThumbCraft", slug: "thumbcraft", url: "https://thumbcraft.2.fixoraa.tech", blurb: "1280\u00d7720 canvas with bold outlined text, background photo, face-safe zone over" },
      { name: "MicNote", slug: "micnote", url: "https://micnote.2.fixoraa.tech", blurb: "Browser recording with live waveform, pause/resume, simple trim and MP3/WAV do" },
      { name: "ClipWave", slug: "clipwave", url: "https://clipwave.2.fixoraa.tech", blurb: "Drag-trim any MP3/WAV in-browser with fade in/out and loop preview; the file n" },
      { name: "NegativeLab", slug: "negativelab", url: "https://negativelab.2.fixoraa.tech", blurb: "Full invert plus per-channel levels and film-base (orange mask) correction \u2014 t" },
      { name: "CropBulk", slug: "cropbulk", url: "https://cropbulk.2.fixoraa.tech", blurb: "Drop many images \u2192 all cropped to one ratio/size with a per-image focal drag," },
      { name: "SvgColor", slug: "svgcolor", url: "https://svgcolor.2.fixoraa.tech", blurb: "Load SVG \u2192 its colours listed as swatches \u2192 click a swatch, pick a replacement" },
      { name: "AvifConv", slug: "avifconv", url: "https://avifconv.2.fixoraa.tech", blurb: "Batch-convert between JPG/PNG/WebP/AVIF entirely in-browser with a per-file si" },
      { name: "BgWhite", slug: "bgwhite", url: "https://bgwhite.2.fixoraa.tech", blurb: "Place a cut-out/any photo on pure-white (or brand colour) canvas at marketplac" },
      { name: "PixelMeasure", slug: "pixelmeasure", url: "https://pixelmeasure.2.fixoraa.tech", blurb: "Set scale from a reference object, then click-measure distances/areas in the p" },
      { name: "GifReverse", slug: "gifreverse", url: "https://gifreverse.2.fixoraa.tech", blurb: "Drop a GIF \u2192 reversed, boomerang (forward+back) or speed-shifted version, proc" },
      { name: "VideoThumb", slug: "videothumb", url: "https://videothumb.2.fixoraa.tech", blurb: "Load a video in-browser, step frame-by-frame or by timestamp, export full-reso" },
    ],
  },
  // ── PDF Tools ────────────────────────────────────────────────────────
  {
    name: "PDF Tools",
    slug: "pdf-tools",
    tagline: "Merge, split and convert PDF files for free",
    tools: [
      { name: "PageToPix", slug: "pagetopix", url: "https://pagetopix.fixoraa.tech", blurb: "Convert PDF pages to PNG or JPG in your browser" },
      { name: "DocBind", slug: "docbind", url: "https://docbind.fixoraa.tech", blurb: "Merge, split and organize PDF files online" },
      { name: "PDFNinja", slug: "pdfninja", url: "https://pdfninja.fixoraa.tech", blurb: "All-in-one PDF converter and editor toolkit" },
      { name: "PageMark", slug: "pagemark", url: "https://pagemark.fixoraa.tech", blurb: "Add text or image watermarks to PDFs" },
      { name: "DocuMeta", slug: "documeta", url: "https://documeta.fixoraa.tech", blurb: "View and edit PDF info and metadata" },
      { name: "ArrangePDF", slug: "organizepdf", url: "https://organizepdf.fixoraa.tech", blurb: "Reorder PDF pages into any order" },
      { name: "BlankGone", slug: "blankgone", url: "https://blankgone.fixoraa.tech", blurb: "Detect & remove blank PDF pages" },
      { name: "PDF2Web", slug: "pdftohtml", url: "https://pdftohtml.fixoraa.tech", blurb: "Convert a PDF to a single HTML file" },
      { name: "MarkPeel", slug: "pdftomd", url: "https://pdftomd.fixoraa.tech", blurb: "Convert PDF text to Markdown" },
      { name: "MDPress", slug: "mdtopdf", url: "https://mdtopdf.fixoraa.tech", blurb: "Turn Markdown into a clean PDF" },
      { name: "SlidePeel", slug: "pdftopptx", url: "https://pdftopptx.fixoraa.tech", blurb: "Convert PDF pages to PowerPoint slides" },
      { name: "SheetPeel", slug: "pdftoxlsx", url: "https://pdftoxlsx.fixoraa.tech", blurb: "Extract PDF tables into Excel" },
      { name: "MarkUp PDF", slug: "annotatepdf", url: "https://annotatepdf.fixoraa.tech", blurb: "Highlight, draw & add notes to a PDF" },
      { name: "FormForge PDF", slug: "formforge", url: "https://formforge.fixoraa.tech", blurb: "Create fillable PDF form fields" },
      { name: "StripNotes", slug: "stripnotes", url: "https://stripnotes.fixoraa.tech", blurb: "Remove annotations & comments from a PDF" },
      { name: "BatesPro", slug: "batespro", url: "https://batespro.fixoraa.tech", blurb: "Legal Bates numbering for PDFs" },
      { name: "HeadFoot PDF", slug: "headfootpdf", url: "https://headfootpdf.fixoraa.tech", blurb: "Add repeating header & footer text" },
      { name: "LetterLay", slug: "letterlay", url: "https://letterlay.fixoraa.tech", blurb: "Overlay letterhead onto a PDF" },
      { name: "QRStamp PDF", slug: "qrstampdf", url: "https://qrstampdf.fixoraa.tech", blurb: "Stamp a scannable QR code on a PDF" },
      { name: "PageColor", slug: "pagecolor", url: "https://pagecolor.fixoraa.tech", blurb: "Change PDF page background colour" },
      { name: "PDFMend", slug: "pdfrepair", url: "https://pdfrepair.fixoraa.tech", blurb: "Repair & rebuild a damaged PDF" },
      { name: "VectorPeel", slug: "pdftosvg", url: "https://pdftosvg.fixoraa.tech", blurb: "Convert PDF pages to SVG files" },
      { name: "BookPeel", slug: "pdftoepub", url: "https://pdftoepub.fixoraa.tech", blurb: "Convert a PDF to an EPUB e-book" },
      { name: "ReadAloud PDF", slug: "readaloudpdf", url: "https://readaloudpdf.fixoraa.tech", blurb: "Listen to a PDF read aloud" },
      { name: "PreFlight PDF", slug: "preflightpdf", url: "https://preflightpdf.fixoraa.tech", blurb: "Print preflight checker for PDFs" },
      { name: "SplitSize PDF", slug: "splitbysize", url: "https://splitbysize.fixoraa.tech", blurb: "Split a PDF into parts under a size limit" },
      { name: "ChapterSplit PDF", slug: "splitmarks", url: "https://splitmarks.fixoraa.tech", blurb: "Split a PDF at its bookmarks" },
      { name: "CollatePDF", slug: "interleavepdf", url: "https://interleavepdf.fixoraa.tech", blurb: "Interleave two PDFs page by page" },
      { name: "DupePages PDF", slug: "dupepages", url: "https://dupepages.fixoraa.tech", blurb: "Find & remove duplicate PDF pages" },
      { name: "FindPages PDF", slug: "findpages", url: "https://findpages.fixoraa.tech", blurb: "Extract pages containing a word" },
      { name: "PDFWordCount", slug: "pdfwordcount", url: "https://pdfwordcount.fixoraa.tech", blurb: "Word & character count for a PDF" },
      { name: "AccessCheck PDF", slug: "accesspdf", url: "https://accesspdf.fixoraa.tech", blurb: "PDF accessibility checker (WCAG)" },
      { name: "SlideShow PDF", slug: "pdfslides", url: "https://pdfslides.fixoraa.tech", blurb: "Present a PDF as a fullscreen slideshow" },
      { name: "CSVSheet PDF", slug: "csvtopdf", url: "https://csvtopdf.fixoraa.tech", blurb: "Convert CSV to a formatted table PDF" },
      { name: "JSONDoc PDF", slug: "jsontopdf", url: "https://jsontopdf.fixoraa.tech", blurb: "Convert JSON to a readable PDF" },
      { name: "TIFFPages PDF", slug: "pdftotiff", url: "https://pdftotiff.fixoraa.tech", blurb: "Convert PDF pages to TIFF images" },
      { name: "AttachPeel PDF", slug: "pdfattachments", url: "https://pdfattachments.fixoraa.tech", blurb: "Extract files embedded in a PDF" },
      { name: "OutlinePeel PDF", slug: "outlinepeel", url: "https://outlinepeel.fixoraa.tech", blurb: "View & export PDF bookmarks" },
      { name: "LinkPeel PDF", slug: "pdflinks", url: "https://pdflinks.fixoraa.tech", blurb: "Extract all hyperlinks from a PDF" },
      { name: "SafeCheck PDF", slug: "pdfsafecheck", url: "https://pdfsafecheck.fixoraa.tech", blurb: "PDF security audit for scripts & actions" },
      { name: "BoxPeek PDF", slug: "boxpeek", url: "https://boxpeek.fixoraa.tech", blurb: "View PDF Media/Crop/Trim/Bleed boxes" },
      { name: "UprightPDF", slug: "autorotatepdf", url: "https://autorotatepdf.fixoraa.tech", blurb: "Auto-rotate sideways PDF pages" },
      { name: "DeskewPDF", slug: "deskewpdf", url: "https://deskewpdf.fixoraa.tech", blurb: "Straighten skewed PDF scans" },
      { name: "GraphPaper PDF", slug: "graphpaperpdf", url: "https://graphpaperpdf.fixoraa.tech", blurb: "Printable graph, dot & ruled paper maker" },
      { name: "LabelSheet PDF", slug: "labelsheetpdf", url: "https://labelsheetpdf.fixoraa.tech", blurb: "Address label sheets from a list" },
      { name: "EPUBForge PDF", slug: "epubtopdf", url: "https://epubtopdf.fixoraa.tech", blurb: "Convert EPUB e-books to PDF" },
      { name: "FormCSV PDF", slug: "formcsv", url: "https://formcsv.fixoraa.tech", blurb: "Export PDF form values to CSV" },
      { name: "BatchCount PDF", slug: "batchcountpdf", url: "https://batchcountpdf.fixoraa.tech", blurb: "Bulk PDF page & word inventory" },
      { name: "PlanCraft PDF", slug: "plannerpdf", url: "https://plannerpdf.fixoraa.tech", blurb: "Dated daily & weekly planner generator" },
      { name: "InkCheck PDF", slug: "inkcheckpdf", url: "https://inkcheckpdf.fixoraa.tech", blurb: "Estimate PDF ink & toner coverage" },
      { name: "PicStrip PDF", slug: "stripimagespdf", url: "https://stripimagespdf.fixoraa.tech", blurb: "Remove all images from a PDF" },
      { name: "PDFToJSON", slug: "pdftojson", url: "https://pdftojson.fixoraa.tech", blurb: "Structured JSON export from a PDF" },
      { name: "TOCForge PDF", slug: "tocforgepdf", url: "https://tocforgepdf.fixoraa.tech", blurb: "Auto table-of-contents page for a PDF" },
      { name: "CoverPage PDF", slug: "coverpagepdf", url: "https://coverpagepdf.fixoraa.tech", blurb: "Add a designed cover page to a PDF" },
      { name: "ResumeForge", slug: "resumeforge", url: "https://resumeforge.fixoraa.tech", blurb: "Build a professional resume PDF" },
      { name: "PDFSlim", slug: "pdfslim", url: "https://pdfslim.fixoraa.tech", blurb: "Compress PDFs smaller with quality & target-size modes" },
      { name: "FramePDF", slug: "framepdf", url: "https://framepdf.fixoraa.tech", blurb: "Turn JPG & PNG images into one tidy PDF" },
      { name: "TextPeel", slug: "textpeel", url: "https://textpeel.fixoraa.tech", blurb: "Extract all readable text from a PDF" },
      { name: "KeyOff PDF", slug: "keyoffpdf", url: "https://keyoffpdf.fixoraa.tech", blurb: "Unlock a PDF with the password you know" },
      { name: "InkSeal", slug: "inkseal", url: "https://inkseal.fixoraa.tech", blurb: "Sign any PDF — draw, type or upload a signature" },
      { name: "PicPeel", slug: "picpeel", url: "https://picpeel.fixoraa.tech", blurb: "Extract original embedded images from a PDF" },
      { name: "NumPage", slug: "numpage", url: "https://numpage.fixoraa.tech", blurb: "Add page numbers in any position & format" },
      { name: "SheetStack", slug: "sheetstack", url: "https://sheetstack.fixoraa.tech", blurb: "Put 2, 4, 6 or 9 PDF pages on one sheet" },
      { name: "FoldBook", slug: "foldbook", url: "https://foldbook.fixoraa.tech", blurb: "Make fold-and-staple booklets from any PDF" },
      { name: "TrimPage", slug: "trimpage", url: "https://trimpage.fixoraa.tech", blurb: "Crop PDF pages & trim white margins" },
      { name: "PageFit", slug: "pagefit", url: "https://pagefit.fixoraa.tech", blurb: "Resize PDF pages to A4, Letter, A5 or Legal" },
      { name: "GrayPage", slug: "graypage", url: "https://graypage.fixoraa.tech", blurb: "Convert PDFs to grayscale for cheap printing" },
      { name: "WordBridge", slug: "wordbridge", url: "https://wordbridge.fixoraa.tech", blurb: "Convert PDF to an editable Word document" },
      { name: "PlainPDF", slug: "plainpdf", url: "https://plainpdf.fixoraa.tech", blurb: "Turn plain text into a clean paginated PDF" },
      { name: "PagePress", slug: "pagepress", url: "https://pagepress.fixoraa.tech", blurb: "Convert pasted HTML into a paginated PDF" },
      { name: "TwinPeek", slug: "twinpeek", url: "https://twinpeek.fixoraa.tech", blurb: "Compare two PDFs & highlight what changed" },
      { name: "FieldFill", slug: "fieldfill", url: "https://fieldfill.fixoraa.tech", blurb: "Fill fillable PDF forms & save them filled" },
      { name: "Redactly", slug: "redactly", url: "https://redactly.fixoraa.tech", blurb: "Permanently black out sensitive PDF content" },
      { name: "PDFSeer", slug: "pdfseer", url: "https://pdfseer.fixoraa.tech", blurb: "OCR scanned PDFs into searchable documents" },
      { name: "FlatPage", slug: "flatpage", url: "https://flatpage.fixoraa.tech", blurb: "Flatten PDF forms & lock fields in place" },
    ],
  },
  // ── Text Tools ───────────────────────────────────────────────────────
  {
    name: "Text Tools",
    slug: "text-tools",
    tagline: "Write, format and analyze text like a pro",
    tools: [
      { name: "AcronymForge", slug: "acronymforge", url: "https://acronymforge.fixoraa.tech", blurb: "Acronym & backronym generator for any phrase" },
      { name: "BaseCraft", slug: "basecraft", url: "https://basecraft.fixoraa.tech", blurb: "Encode and decode Base64 text and files" },
      { name: "DiffScope", slug: "diffscope", url: "https://diffscope.fixoraa.tech", blurb: "Compare two texts side by side with highlights" },
      { name: "Dupeless", slug: "dupeless", url: "https://dupeless.fixoraa.tech", blurb: "Remove duplicate lines from any text" },
      { name: "FreqLens", slug: "freqlens", url: "https://freqlens.fixoraa.tech", blurb: "Analyze word frequency for writing and SEO" },
      { name: "GhostGlyph", slug: "ghostglyph", url: "https://ghostglyph.fixoraa.tech", blurb: "Find invisible characters hiding in your text" },
      { name: "JSONLens", slug: "jsonlens", url: "https://jsonlens.fixoraa.tech", blurb: "Format, validate and explore JSON data" },
      { name: "Keynetic", slug: "keynetic", url: "https://keynetic.fixoraa.tech", blurb: "Check keyword density and SEO keywords" },
      { name: "Mailor AI", slug: "mailor", url: "https://mailora-ai.fixoraa.tech", blurb: "AI email writer — drafts, replies and subject lines" },
      { name: "MatchMint", slug: "matchmint", url: "https://matchmint.fixoraa.tech", blurb: "Test and debug regular expressions live" },
      { name: "QuillVortex AI", slug: "quillvortex", url: "https://quillvortex.fixoraa.tech", blurb: "AI writing assistant for articles and stories" },
      { name: "SlugWise", slug: "slugwise", url: "https://slugwise.fixoraa.tech", blurb: "Turn headlines into clean URL slugs" },
      { name: "TextShift", slug: "textshift", url: "https://textshift.fixoraa.tech", blurb: "Convert text case — upper, lower, title and more" },
      { name: "WordTally", slug: "wordtally", url: "https://wordtally.fixoraa.tech", blurb: "Count words, characters and reading time" },
      { name: "LineForge", slug: "lineforge", url: "https://lineforge.fixoraa.tech", blurb: "Sort, filter and dedupe text lines" },
      { name: "SegText", slug: "segtext", url: "https://segtext.fixoraa.tech", blurb: "Split long texts into SMS-sized parts" },
      { name: "ReadRank", slug: "readrank", url: "https://readrank.fixoraa.tech", blurb: "Score your text's readability level" },
      { name: "ProsePulse", slug: "prosepulse", url: "https://prosepulse.fixoraa.tech", blurb: "Polish your writing style instantly" },
      { name: "SubjectLab", slug: "subjectlab", url: "https://subjectlab.fixoraa.tech", blurb: "Test email subject lines that get opened" },
      { name: "WordSprint", slug: "wordsprint", url: "https://wordsprint.fixoraa.tech", blurb: "Track writing speed and smash word goals" },
      { name: "Lorumly", slug: "lorumly", url: "https://lorumly.fixoraa.tech", blurb: "Lorem ipsum generator — paragraphs, sentences, words" },
      { name: "Speakly", slug: "speakly", url: "https://speakly.fixoraa.tech", blurb: "Text to speech reader with voice picker" },
      { name: "MorseMate", slug: "morsemate", url: "https://morsemate.fixoraa.tech", blurb: "Morse code translator with audio playback" },
      { name: "EchoType", slug: "echotype", url: "https://echotype.fixoraa.tech", blurb: "Repeat text up to 10,000 times instantly" },
      { name: "BrailleBridge", slug: "braillebridge", url: "https://braillebridge.fixoraa.tech", blurb: "Braille translator — English to Grade 1 Braille" },
      { name: "Pigglish", slug: "pigglish", url: "https://pigglish.fixoraa.tech", blurb: "Pig Latin translator, both ways" },
      { name: "ScribeMic", slug: "scribemic", url: "https://scribemic.fixoraa.tech", blurb: "Speech to text dictation in your browser" },
      { name: "FancyType", slug: "fancytype", url: "https://fancytype.2.fixoraa.tech", blurb: "40+ Unicode styles, favourites pinned on top, works for bio-length text in one" },
      { name: "Anagramix", slug: "anagramix", url: "https://anagramix.2.fixoraa.tech", blurb: "Groups results by word length and offers a name/business anagram mode with pro" },
      { name: "QuickNote", slug: "quicknote", url: "https://quicknote.2.fixoraa.tech", blurb: "Multiple named notes, autosaved locally, with word count and .txt/.md export \u2014" },
      { name: "FlipText", slug: "fliptext", url: "https://fliptext.2.fixoraa.tech", blurb: "Three transform modes with per-mode copy buttons and a combined 'chaos' mode" },
      { name: "WordCloud Studio", slug: "cloudwords", url: "https://cloudwords.2.fixoraa.tech", blurb: "Phrase detection (2-word phrases like 'true to size') + classroom-simple UI \u2014" },
      { name: "PalinPlay", slug: "palinplay", url: "https://palinplay.2.fixoraa.tech", blurb: "Checks full sentences the way humans mean it, and finds the longest palindrome" },
      { name: "SentFlip", slug: "sentflip", url: "https://sentflip.2.fixoraa.tech", blurb: "Reverses sentence order in a paragraph, or word order inside each sentence, ke" },
      { name: "EmojiText", slug: "emojitext", url: "https://emojitext.2.fixoraa.tech", blurb: "Type a sentence \u2192 words swapped for emojis where they exist, names/letters in" },
      { name: "VocabTest", slug: "vocabtest", url: "https://vocabtest.2.fixoraa.tech", blurb: "Frequency-band sampling test with nonsense-word traps to correct guessing \u2192 es" },
      { name: "TextColumns", slug: "textcolumns", url: "https://textcolumns.2.fixoraa.tech", blurb: "Paste text \u2192 balanced 2/3/4-column layout with gutter, font-size and rule-line" },
      { name: "AcroFind", slug: "acrofind", url: "https://acrofind.2.fixoraa.tech", blurb: "Paste a document \u2192 every acronym extracted with occurrence counts, first-use p" },
      { name: "QuoteMaker", slug: "quotemaker", url: "https://quotemaker.2.fixoraa.tech", blurb: "Quote + author \u2192 typography-led cards with curated background styles (gradient" },
      { name: "PangramCheck", slug: "pangramcheck", url: "https://pangramcheck.2.fixoraa.tech", blurb: "Paste text \u2192 26-letter coverage grid lighting up live, missing letters listed," },
    ],
  },
  // ── Developer Tools ──────────────────────────────────────────────────
  {
    name: "Developer Tools",
    slug: "developer-tools",
    tagline: "Tiny utilities that make developers' lives easier",
    tools: [
      { name: "BinBridge", slug: "binbridge", url: "https://binbridge.fixoraa.tech", blurb: "Text to binary, hex, octal & decimal translator" },
      { name: "StatusAtlas", slug: "statusatlas", url: "https://statusatlas.fixoraa.tech", blurb: "HTTP status codes explained — searchable reference" },
      { name: "ScreenScope", slug: "screenscope", url: "https://screenscope.fixoraa.tech", blurb: "What is my screen size? Live viewport checker" },
      { name: "TableForge", slug: "tableforge", url: "https://tableforge.fixoraa.tech", blurb: "Build tables & export Markdown, HTML or CSV" },
      { name: "CronSage", slug: "cronsage", url: "https://cronsage.fixoraa.tech", blurb: "Cron expressions explained in plain English" },
      { name: "Epochly", slug: "epochly", url: "https://epochly.fixoraa.tech", blurb: "Convert Unix timestamps to dates and back" },
      { name: "Fakerly", slug: "fakerly", url: "https://fakerly.fixoraa.tech", blurb: "Generate fake data for testing your apps" },
      { name: "HexSum", slug: "hexsum", url: "https://hexsum.fixoraa.tech", blurb: "Generate MD5, SHA-1 and SHA-256 hashes" },
      { name: "HookForge", slug: "hook-forge", url: "https://hookforge.fixoraa.tech", blurb: "Forge test webhooks for your integrations" },
      { name: "HueHive", slug: "huehive", url: "https://huehive.fixoraa.tech", blurb: "Create and explore beautiful color palettes" },
      { name: "LinkAura", slug: "linkaura", url: "https://linkaura.fixoraa.tech", blurb: "Create QR codes for links, WiFi and more" },
      { name: "OgCraft", slug: "ogcraft", url: "https://ogcraft.fixoraa.tech", blurb: "Preview and generate Open Graph social cards" },
      { name: "PassSmith", slug: "passsmith", url: "https://passsmith.fixoraa.tech", blurb: "Generate strong, secure passwords" },
      { name: "Scanova", slug: "scanova", url: "https://scanova.fixoraa.tech", blurb: "Design and download custom QR codes" },
      { name: "SQLPolish", slug: "sqlpolish", url: "https://sqlpolish.fixoraa.tech", blurb: "Format and beautify SQL queries instantly" },
      { name: "UuidMint", slug: "uuidmint", url: "https://uuidmint.fixoraa.tech", blurb: "Generate random UUIDs and GUIDs" },
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
      { name: "RegexRex", slug: "regexrex", url: "https://regexrex.fixoraa.tech", blurb: "Regex tester with live match highlighting" },
      { name: "HashForge", slug: "hashforge", url: "https://hashforge.fixoraa.tech", blurb: "Hash generator — MD5, SHA-1, SHA-256, SHA-512" },
      { name: "BlendWave", slug: "blendwave", url: "https://blendwave.fixoraa.tech", blurb: "CSS gradient generator — linear, radial, conic" },
      { name: "Umbra", slug: "umbra", url: "https://umbra.fixoraa.tech", blurb: "Box shadow generator with layers and presets" },
      { name: "ModelMint", slug: "modelmint", url: "https://modelmint.fixoraa.tech", blurb: "Convert JSON to TypeScript interfaces" },
      { name: "GlyphCode", slug: "glyphcode", url: "https://glyphcode.fixoraa.tech", blurb: "HTML entity encoder and decoder" },
      { name: "Chmodly", slug: "chmodly", url: "https://chmodly.fixoraa.tech", blurb: "Chmod calculator and permission converter" },
      { name: "Subnetly", slug: "subnetly", url: "https://subnetly.fixoraa.tech", blurb: "IP subnet calculator with CIDR splitter" },
      { name: "WaveForge", slug: "waveforge", url: "https://waveforge.2.fixoraa.tech", blurb: "Reproducible seed + up to 5 layers + one-click SVG/CSS \u2014 design teams can shar" },
      { name: "VerseMatch", slug: "versematch", url: "https://versematch.2.fixoraa.tech", blurb: "Explains WHY (major/minor/patch) and tests ranges (^, ~, >=) with a plain-Engl" },
      { name: "UAParse", slug: "uaparse", url: "https://uaparse.2.fixoraa.tech", blurb: "Human verdict first, raw fields second, plus a library of real UA strings to l" },
      { name: "MimeMap", slug: "mimemap", url: "https://mimemap.2.fixoraa.tech", blurb: "Drag any file in and get its real MIME type, plus the searchable two-way refer" },
      { name: "PortAtlas", slug: "portatlas", url: "https://portatlas.2.fixoraa.tech", blurb: "Search by port OR service name, with plain notes ('usually safe to close?') fo" },
      { name: "CsvJson", slug: "csvjson", url: "https://csvjson.2.fixoraa.tech", blurb: "Two-way conversion with delimiter auto-detect and nested-key flatten/unflatten" },
      { name: "KeyPeek", slug: "keypeek", url: "https://keypeek.2.fixoraa.tech", blurb: "Live key capture with event.key/code/keyCode/ASCII and a history tape of press" },
      { name: "JsonSchema", slug: "jsonschema", url: "https://jsonschema.2.fixoraa.tech", blurb: "Validate JSON against a schema with errors translated into plain English with" },
      { name: "CssFilter", slug: "cssfilter", url: "https://cssfilter.2.fixoraa.tech", blurb: "Upload any photo, stack blur/brightness/contrast/saturate/hue filters live, co" },
      { name: "TextShadow", slug: "textshadow", url: "https://textshadow.2.fixoraa.tech", blurb: "Multi-layer text-shadow builder with per-layer colour/blur/offset and style pr" },
      { name: "MetaCheck", slug: "metacheck", url: "https://metacheck.2.fixoraa.tech", blurb: "Paste a page's head/HTML \u2192 title & description graded with pixel-length bars," },
      { name: "HtPasswd", slug: "htpasswd", url: "https://htpasswd.2.fixoraa.tech", blurb: "Username + password \u2192 bcrypt/APR1/SHA1 htpasswd lines generated 100% in-browse" },
      { name: "SqlBuild", slug: "sqlbuild", url: "https://sqlbuild.2.fixoraa.tech", blurb: "Pick columns, stack conditions with AND/OR grouping, joins by dropdown \u2192 clean" },
      { name: "MacAddr", slug: "macaddr", url: "https://macaddr.2.fixoraa.tech", blurb: "Paste any MAC \u2192 all standard formats (colon, dash, Cisco dotted, bare), validi" },
      { name: "Base64Img", slug: "base64img", url: "https://base64img.2.fixoraa.tech", blurb: "Drop an image \u2192 base64 with the full data URI, copy-ready CSS background and <" },
    ],
  },
  // ── Date & Time ──────────────────────────────────────────────────────
  {
    name: "Date & Time",
    slug: "date-time",
    tagline: "Calculators, converters and timers for dates and time",
    tools: [
      { name: "DayStone", slug: "daystone", url: "https://daystone.fixoraa.tech", blurb: "Days-alive counter & life milestone dates" },
      { name: "AgeArc", slug: "agearc", url: "https://agearc.fixoraa.tech", blurb: "Calculate exact age in years, months and days" },
      { name: "DateJump", slug: "datejump", url: "https://datejump.fixoraa.tech", blurb: "Add or subtract days from any date" },
      { name: "DaySpan", slug: "dayspan", url: "https://dayspan.fixoraa.tech", blurb: "Find the exact duration between two dates" },
      { name: "PomoPace", slug: "pomopace", url: "https://pomopace.fixoraa.tech", blurb: "Pomodoro focus timer with work and break cycles" },
      { name: "ShiftTally", slug: "shifttally", url: "https://shifttally.fixoraa.tech", blurb: "Track work hours and shifts for easy payroll" },
      { name: "WhichWeek", slug: "whichweek", url: "https://whichweek.fixoraa.tech", blurb: "Find the week number for any date" },
      { name: "WorkCount", slug: "workcount", url: "https://workcount.fixoraa.tech", blurb: "Count business days between two dates" },
      { name: "ZeroHour", slug: "zerohour", url: "https://zerohour.fixoraa.tech", blurb: "Create countdown timers for any event" },
      { name: "ZoneSync", slug: "zonesync", url: "https://zonesync.fixoraa.tech", blurb: "Convert time across world time zones" },
      { name: "BizDays", slug: "bizdays", url: "https://bizdays.fixoraa.tech", blurb: "Business days calculator — count and add working days" },
      { name: "ChronoLap", slug: "chronolap", url: "https://chronolap.fixoraa.tech", blurb: "Stopwatch with laps, splits and fastest lap" },
      { name: "HourMath", slug: "hourmath", url: "https://hourmath.fixoraa.tech", blurb: "Add and subtract hours and minutes for payroll" },
      { name: "IntervalIQ", slug: "intervaliq", url: "https://intervaliq.fixoraa.tech", blurb: "Interval and Tabata timer with HIIT presets" },
    ],
  },
  // ── Health & Fitness ─────────────────────────────────────────────────
  {
    name: "Health & Fitness",
    slug: "health-fitness",
    tagline: "Simple trackers for fitness, diet and sleep",
    tools: [
      { name: "PressureMap", slug: "pressuremap", url: "https://pressuremap.fixoraa.tech", blurb: "Blood pressure checker with a private reading log" },
      { name: "SoberScale", slug: "soberscale", url: "https://soberscale.fixoraa.tech", blurb: "BAC estimator with sober-by time & decay chart" },
      { name: "CaloFuel", slug: "calofuel", url: "https://calofuel.fixoraa.tech", blurb: "Calculate your TDEE and daily calorie needs" },
      { name: "HydroQuotient", slug: "hydroquotient", url: "https://hydroquotient.fixoraa.tech", blurb: "Track your daily water intake goal" },
      { name: "MacroMason", slug: "macromason", url: "https://macromason.fixoraa.tech", blurb: "Split your calories into protein, carbs and fat" },
      { name: "OneRepLab", slug: "onereplab", url: "https://onereplab.fixoraa.tech", blurb: "Calculate your one-rep max for any lift" },
      { name: "REMNest", slug: "remnest", url: "https://remnest.fixoraa.tech", blurb: "Find the best bedtime and wake-up time for you" },
      { name: "TapeTrim", slug: "tapetrim", url: "https://tapetrim.fixoraa.tech", blurb: "Estimate body fat percentage from measurements" },
      { name: "VitaScale", slug: "vitascale", url: "https://vitascale.fixoraa.tech", blurb: "Calculate your BMI in seconds" },
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
      { name: "DueBloom", slug: "duebloom", url: "https://duebloom.fixoraa.tech", blurb: "Pregnancy due date calculator with trimester timeline" },
      { name: "LeanLens", slug: "leanlens", url: "https://leanlens.fixoraa.tech", blurb: "Body fat calculator using the US Navy tape method" },
      { name: "CardioMap", slug: "cardiomap", url: "https://cardiomap.fixoraa.tech", blurb: "Heart rate zones calculator with Karvonen mode" },
      { name: "BreathBox", slug: "breathbox", url: "https://breathbox.fixoraa.tech", blurb: "Box breathing trainer with 4-4-4-4 guide" },
      { name: "CycleBloom", slug: "cyclebloom", url: "https://cyclebloom.fixoraa.tech", blurb: "Ovulation and fertility calendar for 3 months" },
      { name: "VO2Peak", slug: "vo2peak", url: "https://vo2peak.2.fixoraa.tech", blurb: "Three validated methods (Cooper, Rockport, race time) with age/gender percenti" },
      { name: "SweatRate", slug: "sweatrate", url: "https://sweatrate.2.fixoraa.tech", blurb: "Converts weigh-in/out into a per-hour fluid + sodium plan for race day" },
      { name: "BumpGain", slug: "bumpgain", url: "https://bumpgain.2.fixoraa.tech", blurb: "IOM guideline ranges personalised by BMI category, twins toggle, week-by-week" },
      { name: "KidGrowth", slug: "kidgrowth", url: "https://kidgrowth.2.fixoraa.tech", blurb: "WHO-based percentiles plotted on a growth chart curve, not just a number" },
      { name: "StepMiles", slug: "stepmiles", url: "https://stepmiles.2.fixoraa.tech", blurb: "Personal stride from height (or measured stride) + weekly goal planner" },
      { name: "CaffHalf", slug: "caffhalf", url: "https://caffhalf.2.fixoraa.tech", blurb: "Log every drink (type + time) \u2192 one combined decay curve and the exact mg stil" },
      { name: "PostureCheck", slug: "posturecheck", url: "https://posturecheck.2.fixoraa.tech", blurb: "Enter your height \u2192 chair height, desk height, monitor distance/height and key" },
      { name: "RunWalk", slug: "runwalk", url: "https://runwalk.2.fixoraa.tech", blurb: "Pick run/walk ratios and weeks \u2192 a progressing session-by-session plan with to" },
      { name: "BloodDonor", slug: "blooddonor", url: "https://blooddonor.2.fixoraa.tech", blurb: "Answer a short situation checklist \u2192 eligible / wait-until verdict with the ex" },
      { name: "KidVaccine", slug: "kidvaccine", url: "https://kidvaccine.2.fixoraa.tech", blurb: "Birth date in \u2192 the full schedule with calendar dates per dose, what's due now" },
    ],
  },
  // ── Fun & Lifestyle ──────────────────────────────────────────────────
  {
    name: "Fun & Lifestyle",
    slug: "fun-lifestyle",
    tagline: "Quizzes, games and generators for fun and daily life",
    tools: [
      { name: "JetLagWise", slug: "jetlagwise", url: "https://jetlagwise.fixoraa.tech", blurb: "Jet lag recovery planner — light & sleep schedule" },
      { name: "PawsYears", slug: "pawsyears", url: "https://pawsyears.fixoraa.tech", blurb: "Dog & cat age in human years, by size & stage" },
      { name: "TileTally", slug: "tiletally", url: "https://tiletally.fixoraa.tech", blurb: "Tile calculator — tiles, boxes, wastage & cost" },
      { name: "ReflexLab", slug: "reflexlab", url: "https://reflexlab.fixoraa.tech", blurb: "Reaction time test — 5-round average in ms" },
      { name: "AmoraMatch", slug: "amoramatch", url: "https://amoramatch.fixoraa.tech", blurb: "Love compatibility test for you and your partner" },
      { name: "FateOrb", slug: "fateorb", url: "https://fateorb.fixoraa.tech", blurb: "Ask the magic oracle — get yes-or-no answers" },
      { name: "NameNova", slug: "namenova", url: "https://namenova.fixoraa.tech", blurb: "Generate cool nicknames for anyone" },
      { name: "Numbria", slug: "numbria", url: "https://numbria.fixoraa.tech", blurb: "Numerology reading from your name and birthdate" },
      { name: "PetPicks", slug: "petpicks", url: "https://petpicks.fixoraa.tech", blurb: "Find the perfect name for your pet" },
      { name: "Randora", slug: "randora", url: "https://randora.fixoraa.tech", blurb: "Random name, number and decision picker" },
      { name: "SipMile", slug: "sipmile", url: "https://sipmile.fixoraa.tech", blurb: "Track your car's fuel efficiency and trip costs" },
      { name: "TotTales", slug: "tottales", url: "https://tottales.fixoraa.tech", blurb: "Discover baby names with meanings and origins" },
      { name: "TypeBolt", slug: "typebolt", url: "https://typebolt.fixoraa.tech", blurb: "Test your typing speed and accuracy" },
      { name: "VowTag", slug: "vowtag", url: "https://vowtag.fixoraa.tech", blurb: "Create a unique wedding hashtag" },
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
      { name: "SantaShuffle", slug: "santashuffle", url: "https://santashuffle.fixoraa.tech", blurb: "Secret Santa generator with private reveal links" },
      { name: "AislePlan", slug: "aisleplan", url: "https://aisleplan.fixoraa.tech", blurb: "Wedding budget planner with vendor tracker" },
      { name: "TinyNames", slug: "tinynames", url: "https://tinynames.fixoraa.tech", blurb: "Baby name generator with meanings and origins" },
      { name: "CalmWave", slug: "calmwave", url: "https://calmwave.fixoraa.tech", blurb: "White noise generator with pink and brown noise mixer" },
      { name: "CurtainCalc", slug: "curtaincalc", url: "https://curtaincalc.2.fixoraa.tech", blurb: "Fullness ratio by curtain style (pencil/eyelet/wave) driving panel + fabric ma" },
      { name: "PlankCalc", slug: "plankcalc", url: "https://plankcalc.2.fixoraa.tech", blurb: "Pack count by your pack coverage, with wastage by laying pattern (straight/her" },
      { name: "SoilCalc", slug: "soilcalc", url: "https://soilcalc.2.fixoraa.tech", blurb: "Litres + bag counts (by 20/40/50L bags) + soil/compost mix ratios for raised b" },
      { name: "ACCool", slug: "accool", url: "https://accool.2.fixoraa.tech", blurb: "BTU/tonnes adjusted for sun exposure, occupants, floor and ceiling height \u2014 no" },
      { name: "WordleAid", slug: "wordleaid", url: "https://wordleaid.2.fixoraa.tech", blurb: "Candidates ranked by letter frequency with a suggested next guess that splits" },
      { name: "StorySpark", slug: "storyspark", url: "https://storyspark.2.fixoraa.tech", blurb: "Genre + hero + twist dealt as three cards, first-line generator, favourites sa" },
      { name: "TeamShuffle", slug: "teamshuffle", url: "https://teamshuffle.2.fixoraa.tech", blurb: "Balanced teams via snake draft using optional skill ratings, or pure random \u2014" },
      { name: "CharadesGen", slug: "charadesgen", url: "https://charadesgen.2.fixoraa.tech", blurb: "Category decks with a big word card, countdown timer and team score keeper \u2014 t" },
      { name: "WordSearchGen", slug: "wordsearchgen", url: "https://wordsearchgen.2.fixoraa.tech", blurb: "Your words \u2192 a filled printable grid (8 directions optional) plus a separate a" },
      { name: "MemoryMatch", slug: "memorymatch", url: "https://memorymatch.2.fixoraa.tech", blurb: "Themed decks (animals, flags, fruits, emoji), move counter, timer and 3 diffic" },
      { name: "FlagQuiz", slug: "flagquiz", url: "https://flagquiz.2.fixoraa.tech", blurb: "Flag-first quiz with region filters, streak scoring and a reversed hard mode (" },
      { name: "BingoCard", slug: "bingocard", url: "https://bingocard.2.fixoraa.tech", blurb: "Generate many unique 5\u00d75 cards (numbers or custom words) with a matching calle" },
      { name: "HangHero", slug: "hanghero", url: "https://hanghero.2.fixoraa.tech", blurb: "Category word decks, gentle gallows-free visual option for young kids, streaks" },
      { name: "MapQuiz", slug: "mapquiz", url: "https://mapquiz.2.fixoraa.tech", blurb: "Name-the-location quiz by region with streaks and a learn mode that groups cou" },
      { name: "WardrobeCalc", slug: "wardrobecalc", url: "https://wardrobecalc.2.fixoraa.tech", blurb: "Clothes inventory in \u2192 hanging metres (short/long split), shelf stacks, drawer" },
    ],
  },
  // ── Converters ───────────────────────────────────────────────────────
  {
    name: "Converters",
    slug: "converters",
    tagline: "Convert units, sizes and numbers in seconds",
    tools: [
      { name: "CupGrams", slug: "cupgrams", url: "https://cupgrams.fixoraa.tech", blurb: "Cups to grams converter for 40+ ingredients" },
      { name: "Fracify", slug: "fracify", url: "https://fracify.fixoraa.tech", blurb: "Fraction calculator — add, subtract and simplify" },
      { name: "OvenMark", slug: "ovenmark", url: "https://ovenmark.fixoraa.tech", blurb: "Convert oven temperatures between °C and °F" },
      { name: "PercentIQ", slug: "percentiq", url: "https://percentiq.fixoraa.tech", blurb: "Percentage calculator for discounts, marks and tips" },
      { name: "RingWisp", slug: "ringwisp", url: "https://ringwisp.fixoraa.tech", blurb: "Find your ring size in any country standard" },
      { name: "Romanly", slug: "romanly", url: "https://romanly.fixoraa.tech", blurb: "Convert numbers to Roman numerals and back" },
      { name: "StrideScale", slug: "stridescale", url: "https://stridescale.fixoraa.tech", blurb: "Convert shoe sizes across US, UK and EU" },
      { name: "UnitShift", slug: "unitshift", url: "https://unitshift.fixoraa.tech", blurb: "Convert length, weight, temperature and more" },
      { name: "YamlForge", slug: "yamlforge", url: "https://yamlforge.fixoraa.tech", blurb: "Convert YAML to JSON and back" },
      { name: "NumWords", slug: "numwords", url: "https://numwords.fixoraa.tech", blurb: "Number to words — Indian and international, cheque-ready" },
      { name: "SoleSize", slug: "solesize", url: "https://solesize.fixoraa.tech", blurb: "Shoe size converter for US, UK, EU and India" },
      { name: "Aspectly", slug: "aspectly", url: "https://aspectly.fixoraa.tech", blurb: "Aspect ratio calculator with common presets" },
      { name: "PaperScale", slug: "paperscale", url: "https://paperscale.2.fixoraa.tech", blurb: "Instant scale % between any two A-sizes in both directions + poster fit planne" },
      { name: "PPICalc", slug: "ppicalc", url: "https://ppicalc.2.fixoraa.tech", blurb: "PPI + dot pitch + physical size for ANY resolution/size, with a monitor-buying" },
      { name: "DaysUntil", slug: "daysuntil", url: "https://daysuntil.2.fixoraa.tech", blurb: "Countdown as the hero: days + weekday + working-days toggle + a shareable coun" },
      { name: "FeelsLike", slug: "feelslike", url: "https://feelslike.2.fixoraa.tech", blurb: "Wind chill, heat index AND dew point in one tool with a comfort/safety verdict" },
      { name: "ChargeWise", slug: "chargewise", url: "https://chargewise.2.fixoraa.tech", blurb: "Battery, charger kW, tariff and petrol price all editable \u2014 works in any count" },
      { name: "CarbonWise", slug: "carbonwise", url: "https://carbonwise.2.fixoraa.tech", blurb: "Travel + home energy + food in one quick pass, yearly CO2e total, and reductio" },
    ],
  },
  // ── Study & Career ───────────────────────────────────────────────────
  {
    name: "Study & Career",
    slug: "study-career",
    tagline: "Tools to study smarter and land your dream job",
    tools: [
      { name: "SignCraft", slug: "signcraft", url: "https://signcraft.fixoraa.tech", blurb: "Email signature generator for Gmail & Outlook" },
      { name: "CiteCraft", slug: "citecraft", url: "https://citecraft.fixoraa.tech", blurb: "Generate citations in APA, MLA and Chicago styles" },
      { name: "DeckDash", slug: "deckdash", url: "https://deckdash.fixoraa.tech", blurb: "Study faster with smart flashcards" },
      { name: "GradeAxis", slug: "gradeaxis", url: "https://gradeaxis.fixoraa.tech", blurb: "Calculate your GPA and CGPA easily" },
      { name: "GradeNeed", slug: "gradeneed", url: "https://gradeneed.fixoraa.tech", blurb: "Find the grade you need on your final exam" },
      { name: "PrepPilot", slug: "preppilot", url: "https://preppilot.fixoraa.tech", blurb: "AI study planner that builds your exam routine" },
      { name: "ResumeCraft AI", slug: "resumecraft", url: "https://resumecraft-ai.fixoraa.tech", blurb: "Build a job-winning resume with AI" },
      { name: "RezScore", slug: "rezscore", url: "https://rezscore.fixoraa.tech", blurb: "Score your resume the way recruiters see it" },
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
      { name: "CalcPrime", slug: "calcprime", url: "https://calcprime.fixoraa.tech", blurb: "Scientific calculator with history tape" },
      { name: "TempoTap", slug: "tempotap", url: "https://tempotap.fixoraa.tech", blurb: "Online metronome with tap tempo" },
      { name: "PingLink", slug: "pinglink", url: "https://pinglink.fixoraa.tech", blurb: "WhatsApp link generator with QR code" },
      { name: "MarkPercent", slug: "markpercent", url: "https://markpercent.2.fixoraa.tech", blurb: "Enter each subject's marks/max, get percentage + division + how many marks sho" },
      { name: "ClassTable", slug: "classtable", url: "https://classtable.2.fixoraa.tech", blurb: "Editable weekly grid, colour-coded subjects, breaks row, one-click print/PDF l" },
      { name: "ElementLab", slug: "elementlab", url: "https://elementlab.2.fixoraa.tech", blurb: "Full clickable table with properties, category filters and a built-in element" },
      { name: "CapitalQuest", slug: "capitalquest", url: "https://capitalquest.2.fixoraa.tech", blurb: "Two modes (multiple choice, type-it), region filters, streak scoring and a har" },
      { name: "TableTrainer", slug: "tabletainer", url: "https://tabletainer.2.fixoraa.tech", blurb: "Timed table drills with a mistake-review round that repeats only the facts you" },
      { name: "StepSolve", slug: "stepsolve", url: "https://stepsolve.2.fixoraa.tech", blurb: "Linear and quadratic equations solved with every step shown and named (factor," },
      { name: "MapScale", slug: "mapscale", url: "https://mapscale.2.fixoraa.tech", blurb: "Both directions (map\u2192real, real\u2192map), RF/verbal/unit scales handled, working s" },
      { name: "ReadLog", slug: "readlog", url: "https://readlog.2.fixoraa.tech", blurb: "Log books/pages daily \u2192 streaks, pages-per-day graph, finished shelf \u2014 all pri" },
      { name: "SciFair", slug: "scifair", url: "https://scifair.2.fixoraa.tech", blurb: "Curated project bank filtered by grade, topic, days available and materials-on" },
      { name: "MemoryPalace", slug: "memorypalace", url: "https://memorypalace.2.fixoraa.tech", blurb: "Guided peg-word and loci drills: memorise a list against a route, get quizzed" },
      { name: "HandPractice", slug: "handpractice", url: "https://handpractice.2.fixoraa.tech", blurb: "Your words \u2192 dotted tracing lines in print/cursive/joined styles with line gui" },
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
