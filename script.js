// =========================================================================
// 0. FAVICON & INTER FONT AUTO-INJECTOR
// =========================================================================
(function() {
    if (!document.querySelector('link[rel="icon"]')) {
        const favicon = document.createElement('link');
        favicon.rel = 'icon';
        favicon.type = 'image/png';
        favicon.href = 'https://freeonlinetools203.com/favicon.png';
        document.head.appendChild(favicon);

        const appleIcon = document.createElement('link');
        appleIcon.rel = 'apple-touch-icon';
        appleIcon.href = 'https://freeonlinetools203.com/favicon.png';
        document.head.appendChild(appleIcon);
    }
    if (!document.querySelector('link[href*="fonts.googleapis.com/css2?family=Inter"]')) {
        const fontLink = document.createElement('link');
        fontLink.rel = 'stylesheet';
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap';
        document.head.appendChild(fontLink);
    }
})();

// =========================================================================
// 1. CENTRALIZED TOOLS DATABASE (COMPLETE - 240+ TOOLS WITH DESCRIPTIONS)
// =========================================================================
const toolsDatabase = {
  catMostPopular: {
    name: "Popular Tools",
    icon: "⭐",
    desc: "Our most frequently used free online calculators, generators, and checkers.",
    tools: [
      "Age Calculator",
      "Dog Age Calculator",
      "What Year Was I Born Calculator",
      "Born Year Age Calculator",
      "Current Year Calculator",
      "Best Lottery Number Generator",
      "Spin The Wheel",
      "Keyword Density Checker"
    ]
  },
  catAge: {
    name: "Age Calculators",
    icon: "📅",
    desc: "Calculate exact chronological age, biological age, age differences, and milestones.",
    tools: [
      { name: "Age Calculator", category: "basic" },
      { name: "Current Year Calculator", category: "basic" },
      { name: "What Year Was I Born Calculator", category: "basic" },
      { name: "Born Year Age Calculator", category: "basic" },
      { name: "Birth Year Calculator", category: "basic" },
      { name: "Age In Days Calculator", category: "basic" },
      { name: "Age In Months Calculator", category: "basic" },
      { name: "Date of Birth Calculator Year", category: "basic" },
      { name: "Dog Age Calculator", category: "pet" },
      { name: "Age Difference Calculator", category: "difference" },
      { name: "Age Calculator Difference", category: "difference" },
      { name: "Calculate Age Difference", category: "difference" },
      { name: "Age Gap Calculator", category: "difference" },
      { name: "Age Gap Dating Calculator", category: "difference" },
      { name: "Dating Age Difference Calculator", category: "difference" },
      { name: "Chronological Age Calculator", category: "health" },
      { name: "Online Chronological Age Calculator", category: "health" },
      { name: "Biological Age Calculator", category: "health" },
      { name: "Free Biological Age Calculator", category: "health" },
      { name: "Adjusted Age Calculator", category: "health" },
      { name: "Preemie Adjusted Age Calculator", category: "health" },
      { name: "Pearson Age Calculator", category: "health" },
      { name: "Pearson Chronological Age Calculator", category: "health" },
      { name: "Life Expectancy Calculator", category: "health" },
      { name: "AI Age Guesser", category: "pet" },
      { name: "Future Age Predictor", category: "pet" },
      { name: "Korean Age Calculator", category: "pet" },
      { name: "Birthday Countdown", category: "pet" },
      { name: "Happy Birthday Tool", category: "pet" },
      { name: "Running Age Calculator", category: "pet" },
      { name: "Running Age Calculator by Date of Birth", category: "pet" },
      { name: "Age Calculator By Photo", category: "photo" },
      { name: "Photo Age Calculator", category: "photo" },
      { name: "Geekzilla Age Calculator", category: "photo" }
    ]
  },
  catAgeExcel: {
    name: "Age Calculation in Excel",
    icon: "📗",
    desc: "Step-by-step spreadsheet formulas and guides to calculate age from DOB in Excel.",
    tools: [
      "Excel Formula To Calculate Age",
      "How To Calculate Age In Excel",
      "Calculate Age From DOB In Excel"
    ]
  },
  catPop: {
    name: "Calculators",
    icon: "🧮",
    desc: "Everyday math, percentage, discount, GPA, currency, and QR code utilities.",
    tools: [
      { name: "Age Calculator", category: "age-date" },
      { name: "Age Difference Calculator", category: "age-date" },
      { name: "Date Calculator", category: "age-date" },
      { name: "My Birth Year", category: "age-date" },
      { name: "Discount Calculator", category: "finance-math" },
      { name: "Profit & Loss Calculator", category: "finance-math" },
      { name: "GST Calculator", category: "finance-math" },
      { name: "Percentage Calculator", category: "finance-math" },
      { name: "Currency Converter", category: "finance-math" },
      { name: "GPA Calculator", category: "finance-math" },
      { name: "Unit Converter", category: "utilities" },
      { name: "QR Code Generator", category: "utilities" },
      { name: "Advanced QR Generator", category: "utilities" },
      { name: "YouTube Thumbnail Downloader", category: "utilities" }
    ]
  },
  catFin: {
    name: "Financial Tools",
    icon: "💰",
    desc: "Plan loans, monthly EMIs, SIP investments, and Zakat calculations accurately.",
    tools: [
      { name: "EMI Calculator", category: "loans" },
      { name: "Loan Calculator", category: "loans" },
      { name: "SIP Calculator", category: "loans" },
      { name: "Zakat Calculator", category: "tax" }
    ]
  },
  catHealth: {
    name: "Health Tools",
    icon: "❤️",
    desc: "Track BMI, daily calorie needs, BMR, TDEE, macros, and body composition metrics.",
    tools: [
      { name: "BMI Calculator", category: "metrics" },
      { name: "Body Fat Calculator", category: "metrics" },
      { name: "Ideal Weight Calculator", category: "metrics" },
      { name: "Lean Body Mass Calculator", category: "metrics" },
      { name: "Waist to Hip Calculator", category: "metrics" },
      { name: "BMR Calculator", category: "nutrition" },
      { name: "Calorie Calculator", category: "nutrition" },
      { name: "TDEE Calculator", category: "nutrition" },
      { name: "Macro Calculator", category: "nutrition" },
      { name: "Protein Calculator", category: "nutrition" }
    ]
  },
  catSeo: {
    name: "SEO Tools",
    icon: "🔍",
    desc: "Audit on-page SEO, check keyword density, preview SERP snippets, and generate meta tags.",
    tools: [
      { name: "SEO Analyzer", category: "analysis" },
      { name: "SEO Score Checker", category: "analysis" },
      { name: "Readability Checker", category: "analysis" },
      { name: "Heading Structure Checker", category: "analysis" },
      { name: "Image Alt Analyzer", category: "analysis" },
      { name: "Broken Link Checker", category: "analysis" },
      { name: "Google Index Checker", category: "analysis" },
      { name: "Meta Tags Generator", category: "meta-content" },
      { name: "Meta Tag Analyzer", category: "meta-content" },
      { name: "SEO Title Generator", category: "meta-content" },
      { name: "SERP Snippet Preview", category: "meta-content" },
      { name: "Keyword Density Checker", category: "meta-content" },
      { name: "Free Backlink Checker", category: "technical" },
      { name: "XML Sitemap Generator", category: "technical" }
    ]
  },
  catYoutube: {
    name: "YouTube Tools",
    icon: "🎬",
    desc: "Optimize video titles, tags, thumbnails, Shorts scripts, and channel growth.",
    tools: [
      { name: "YouTube SEO Score Checker", category: "seo" },
      { name: "YouTube Keyword Generator", category: "seo" },
      { name: "YouTube Keyword Research", category: "seo" },
      { name: "YouTube Channel Analyzer", category: "seo" },
      { name: "YouTube Channel Comparison", category: "seo" },
      { name: "YouTube Viral Video Predictor", category: "seo" },
      { name: "YouTube SEO Checklist Generator", category: "seo" },
      { name: "YouTube Title Generator", category: "content" },
      { name: "YouTube Description Generator", category: "content" },
      { name: "YouTube Video Idea Generator", category: "content" },
      { name: "YouTube Video Outline Generator", category: "content" },
      { name: "YouTube Content Planner AI", category: "content" },
      { name: "YouTube Shorts Hook Generator", category: "content" },
      { name: "YouTube Shorts Script Generator", category: "content" },
      { name: "YouTube Shorts Idea Calendar Generator", category: "content" },
      { name: "YouTube Video Tags Extractor", category: "tags" },
      { name: "YouTube Video Tags Generator", category: "tags" },
      { name: "YouTube Hashtag Generator", category: "tags" },
      { name: "YouTube Thumbnail Downloader", category: "thumbnails" },
      { name: "YouTube Thumbnail Text Generator", category: "thumbnails" },
      { name: "YouTube Thumbnail Color Palette Generator", category: "thumbnails" },
      { name: "YouTube Thumbnail Split Tester", category: "thumbnails" },
      { name: "YouTube Thumbnail CTR Predictor", category: "thumbnails" },
      { name: "YouTube Channel Name Generator", category: "channel" },
      { name: "YouTube Community Post Generator", category: "channel" }
    ]
  },
  catHash: {
    name: "Social Media Hashtag Tools",
    icon: "📱",
    desc: "Generate high-reach hashtags and captions for Instagram, TikTok, LinkedIn, and X.",
    tools: [
      { name: "Instagram Hashtag Generator", category: "platforms" },
      { name: "LinkedIn Hashtag Generator", category: "platforms" },
      { name: "Facebook Hashtag Generator", category: "platforms" },
      { name: "Pinterest Hashtag Generator", category: "platforms" },
      { name: "TikTok Hashtag Generator", category: "platforms" },
      { name: "Twitter Hashtag Generator", category: "platforms" },
      { name: "Threads Hashtag Generator", category: "platforms" },
      { name: "YouTube Hashtag Generator", category: "platforms" },
      { name: "AI Hashtag Generator", category: "ai-seo" },
      { name: "SEO Hashtags Generator", category: "ai-seo" },
      { name: "Viral Hashtag Generator", category: "ai-seo" },
      { name: "Random Hashtag Generator", category: "other" },
      { name: "Trending Hashtags Today", category: "other" },
      { name: "Social Media Caption Generator", category: "other" }
    ]
  },
  catText: {
    name: "Text Tools",
    icon: "📝",
    desc: "Count words and lines, convert text case, and generate secure passwords.",
    tools: [
      { name: "Word Counter", category: "text-tools" },
      { name: "Line Counter", category: "text-tools" },
      { name: "Text Case Converter", category: "text-tools" },
      { name: "Password Generator", category: "security" },
      { name: "Password Strength Checker", category: "security" }
    ]
  },
  catImage: {
    name: "Image Tools",
    icon: "🖼️",
    desc: "Crop, resize, compress, upscale, and convert images directly in your browser.",
    tools: [
      { name: "Image Cropper", category: "edit" },
      { name: "Image Resizer", category: "edit" },
      { name: "Image Upscaler", category: "edit" },
      { name: "Image Converter", category: "converters" },
      { name: "WebP Converter", category: "converters" },
      { name: "Image to PDF", category: "converters" },
      { name: "Image Compressor", category: "optimize" },
      { name: "Image Color Extractor", category: "optimize" }
    ]
  },
  catPdf: {
    name: "PDF Tools",
    icon: "📄",
    desc: "Merge, split, rotate, and convert PDF files to Word, Excel, JPG, and PNG.",
    tools: [
      { name: "PDF Merger", category: "organize" },
      { name: "PDF Splitter", category: "organize" },
      { name: "PDF Rotator", category: "organize" },
      { name: "PDF to Image", category: "to-image" },
      { name: "PDF to JPG", category: "to-image" },
      { name: "PDF to PNG", category: "to-image" },
      { name: "PDF to BMP", category: "to-image" },
      { name: "PDF to WEBP", category: "to-image" },
      { name: "PDF to TIFF", category: "to-image" },
      { name: "PDF to Word", category: "to-document" },
      { name: "PDF to Excel", category: "to-document" },
      { name: "PDF to Text", category: "to-document" }
    ]
  },
  catDev: {
    name: "Developer Tools",
    icon: "💻",
    desc: "Format JSON, minify HTML, encode/decode Base64 & URLs, and generate hashes.",
    tools: [
      { name: "MD5 Hash Generator", category: "hashing" },
      { name: "SHA-256 Hash Generator", category: "hashing" },
      { name: "SHA-1 Hash Generator", category: "hashing" },
      { name: "Base64 Encoder/Decoder", category: "encoders" },
      { name: "URL Encoder/Decoder", category: "encoders" },
      { name: "HTML Encoder/Decoder", category: "encoders" },
      { name: "HTML Minifier Pro", category: "formatters" },
      { name: "JSON Formatter & Validator", category: "formatters" }
    ]
  },
  catColor: {
    name: "Color Tools",
    icon: "🎨",
    desc: "Create harmonious color palettes, CSS gradients, and check WCAG contrast.",
    tools: [
      { name: "Color Palette Generator", category: "generators" },
      { name: "Palette Generator", category: "generators" },
      { name: "Color Shades Generator", category: "generators" },
      { name: "Color Gradient Maker", category: "gradients" },
      { name: "Gradient Maker", category: "gradients" },
      { name: "Color Contrast Checker", category: "checkers" },
      { name: "Color Name Finder", category: "checkers" },
      { name: "Random Color Picker", category: "pickers" },
      { name: "Color Wheel", category: "pickers" },
      { name: "Image Color Extractor", category: "pickers" }
    ]
  },
  catFun: {
    name: "Random & Fun Tools",
    icon: "🎲",
    desc: "Spin decision wheels, pick random names, generate lottery numbers, and play party games.",
    tools: [
      { name: "Spin The Wheel", category: "spinners" },
      { name: "Yes/No Wheel", category: "spinners" },
      { name: "Decision Roulette", category: "spinners" },
      { name: "Decision Wheel", category: "spinners" },
      { name: "Task Spinner", category: "spinners" },
      { name: "Art Roulette", category: "spinners" },
      { name: "Chore Wheel", category: "spinners" },
      { name: "Twister Spinner", category: "spinners" },
      { name: "Stop Right There Wheel", category: "spinners" },
      { name: "Color Wheel", category: "spinners" },
      { name: "Squid Game Spin Wheel", category: "spinners" },
      { name: "Game Character Spin Wheel", category: "spinners" },
      { name: "Carnival Game Spin Wheel", category: "spinners" },
      { name: "Random Name Picker", category: "pickers" },
      { name: "Name Picker Wheel", category: "pickers" },
      { name: "Random Number Generator", category: "pickers" },
      { name: "Prize Wheel", category: "pickers" },
      { name: "Lucky Prize Wheel", category: "pickers" },
      { name: "Daily Lucky Number Wheel", category: "pickers" },
      { name: "Country Picker Wheel", category: "pickers" },
      { name: "Mystery Gift Wheel", category: "pickers" },
      { name: "Random Fact Wheel", category: "pickers" },
      { name: "Random Animal Wheel", category: "pickers" },
      { name: "Zodiac Wheel", category: "pickers" },
      { name: "Exercise Wheel", category: "pickers" },
      { name: "Workout Spinner", category: "pickers" },
      { name: "Movie Picker Wheel", category: "pickers" },
      { name: "Holiday Activity Wheel", category: "pickers" },
      { name: "Icebreaker Wheel", category: "pickers" },
      { name: "Dinner Spinner", category: "food-drink" },
      { name: "Food Picker Wheel", category: "food-drink" },
      { name: "Drink Picker Wheel", category: "food-drink" },
      { name: "You vs Food Wheel", category: "food-drink" },
      { name: "Truth or Dare Generator", category: "party-games" },
      { name: "Sketch or Dare", category: "party-games" },
      { name: "Dare or Draw", category: "party-games" },
      { name: "Hot Seat Challenge", category: "party-games" },
      { name: "Casino Games Wheel", category: "party-games" },
      { name: "Party Games Spin Wheel", category: "party-games" },
      { name: "Drinking Game Spin Wheel", category: "party-games" },
      { name: "Board Game Spin Wheel", category: "party-games" }
    ]
  },
  catPreg: {
    name: "Pet & Animal Tools",
    icon: "🐾",
    desc: "Calculate gestation timelines and due dates for pets and farm livestock.",
    tools: [
      { name: "Dog Pregnancy Calculator", category: "pets" },
      { name: "Cat Pregnancy Calculator", category: "pets" },
      { name: "Rabbit Pregnancy Calculator", category: "pets" },
      { name: "Cow Pregnancy Calculator", category: "livestock" },
      { name: "Goat Pregnancy Calculator", category: "livestock" },
      { name: "Horse Gestation Calculator", category: "livestock" },
      { name: "Sheep Pregnancy Calculator", category: "livestock" },
      { name: "Pig Pregnancy Calculator", category: "livestock" },
      { name: "Lambing Calculator", category: "livestock" }
    ]
  },
  catTime: {
    name: "Date & Time Tools",
    icon: "⏰",
    desc: "Calculate time durations, date intervals, live countdowns, and world time zones.",
    tools: [
      { name: "Time Calculator", category: "calculators" },
      { name: "Date Calculator", category: "calculators" },
      { name: "Age Calculator", category: "calculators" },
      { name: "Countdown Timer", category: "timers-clocks" },
      { name: "World Clock", category: "timers-clocks" }
    ]
  },
  catZodiac: {
    name: "Zodiac & Birthday Tools",
    icon: "♈",
    desc: "Discover Western and Chinese zodiac signs and count down to your next birthday.",
    tools: [
      { name: "Zodiac Sign Finder", category: "zodiac" },
      { name: "Chinese Zodiac Finder", category: "zodiac" },
      { name: "Birthday Countdown", category: "birthday" },
      { name: "Happy Birthday Tool", category: "birthday" }
    ]
  }
};

// =========================================================================
// 2. TOOL URL MAPPING (COMPLETE - ALL 240+ EXISTING URLS UNCHANGED)
// =========================================================================
const toolUrlMap = {
  "Age Calculator": "age-calculator.html",
  "Dog Age Calculator": "dog-age-calculator.html",
  "What Year Was I Born Calculator": "what-year-was-i-born.html",
  "Born Year Age Calculator": "born-year-age-calculator.html",
  "Current Year Calculator": "current-year-calculator.html",
  "Chronological Age Calculator": "chronological-age-calculator.html",
  "Online Chronological Age Calculator": "online-chronological-age-calculator.html",
  "Age Calculator Difference": "age-calculator-difference.html",
  "Calculate Age Difference": "calculate-age-difference.html",
  "Age Gap Calculator": "age-gap-calculator.html",
  "Age Gap Dating Calculator": "age-gap-dating-calculator.html",
  "Dating Age Difference Calculator": "dating-age-difference-calculator.html",
  "Biological Age Calculator": "biological-age-calculator.html",
  "Free Biological Age Calculator": "free-biological-age-calculator.html",
  "Adjusted Age Calculator": "adjusted-age-calculator.html",
  "Preemie Adjusted Age Calculator": "preemie-adjusted-age-calculator.html",
  "Pearson Age Calculator": "pearson-age-calculator.html",
  "Pearson Chronological Age Calculator": "pearson-chronological-age-calculator.html",
  "Age Calculator By Photo": "age-calculator-by-photo.html",
  "Photo Age Calculator": "photo-age-calculator.html",
  "Geekzilla Age Calculator": "age-calculator-geekzilla.html",
  "Age In Days Calculator": "age-in-days-calculator.html",
  "Age In Months Calculator": "age-in-months-calculator.html",
  "Birth Year Calculator": "birth-year-calculator.html",
  "Excel Formula To Calculate Age": "excel-formula-to-calculate-age.html",
  "How To Calculate Age In Excel": "how-to-calculate-age-in-excel.html",
  "Calculate Age From DOB In Excel": "calculate-age-from-dob-in-excel.html",
  "AI Age Guesser": "ai-age-guesser.html",
  "Future Age Predictor": "future-age-predictor.html",
  "Korean Age Calculator": "korean-age-calculator.html",
  "Birthday Countdown": "birthday-countdown.html",
  "Happy Birthday Tool": "happy-birthday-tool.html",
  "Life Expectancy Calculator": "life-expectancy-calculator.html",
  "Running Age Calculator": "running-age-calculator.html",
  "Running Age Calculator by Date of Birth": "running-age-calculator-by-date-of-birth.html",
  "Date of Birth Calculator Year": "date-of-birth-calculator-year.html",
  "Keyword Density Checker": "keyword-density-checker.html",
  "Meta Tags Generator": "meta-tags-generator.html",
  "Meta Tag Analyzer": "meta-tag-analyzer.html",
  "Broken Link Checker": "broken-link-checker.html",
  "Free Backlink Checker": "free-backlink-checker.html",
  "Google Index Checker": "google-index-checker.html",
  "SEO Analyzer": "seo-analyzer.html",
  "SEO Score Checker": "seo-score-checker.html",
  "SEO Title Generator": "seo-title-generator.html",
  "SERP Snippet Preview": "serp-snippet-preview.html",
  "Readability Checker": "readability-checker.html",
  "Heading Structure Checker": "heading-structure-checker.html",
  "Image Alt Analyzer": "image-alt-analyzer.html",
  "XML Sitemap Generator": "xml-sitemap-generator.html",
  "Instagram Hashtag Generator": "instagram-hashtag-generator.html",
  "LinkedIn Hashtag Generator": "linkedin-hashtag-generator.html",
  "Facebook Hashtag Generator": "facebook-hashtag-generator.html",
  "Pinterest Hashtag Generator": "pinterest-hashtag-generator.html",
  "AI Hashtag Generator": "ai-hashtag-generator.html",
  "SEO Hashtags Generator": "seo-hashtags-generator.html",
  "Random Hashtag Generator": "random-hashtag-generator.html",
  "TikTok Hashtag Generator": "tiktok-hashtag-generator.html",
  "Twitter Hashtag Generator": "twitter-hashtag-generator.html",
  "Threads Hashtag Generator": "threads-hashtag-generator.html",
  "Trending Hashtags Today": "trending-hashtags-today.html",
  "Viral Hashtag Generator": "viral-hashtag-generator.html",
  "YouTube Hashtag Generator": "youtube-hashtag-generator.html",
  "Social Media Caption Generator": "social-media-caption-generator.html",
  "Dog Pregnancy Calculator": "dog-pregnancy-calculator.html",
  "Cat Pregnancy Calculator": "cat-pregnancy-calculator.html",
  "Cow Pregnancy Calculator": "cow-pregnancy-calculator.html",
  "Rabbit Pregnancy Calculator": "rabbit-pregnancy-calculator.html",
  "Goat Pregnancy Calculator": "goat-pregnancy-calculator.html",
  "Horse Gestation Calculator": "horse-gestation-calculator.html",
  "Sheep Pregnancy Calculator": "sheep-pregnancy-calculator.html",
  "Pig Pregnancy Calculator": "pig-pregnancy-calculator.html",
  "Lambing Calculator": "lambing-calculator.html",
  "MD5 Hash Generator": "md5-generator.html",
  "SHA-256 Hash Generator": "sha256-generator.html",
  "SHA-1 Hash Generator": "sha1-generator.html",
  "Base64 Encoder/Decoder": "base64-encoder-decoder.html",
  "URL Encoder/Decoder": "url-encoder-decoder.html",
  "HTML Encoder/Decoder": "html-encoder-decoder.html",
  "HTML Minifier Pro": "html-minifier-pro.html",
  "JSON Formatter & Validator": "json-formatter-validator.html",
  "Color Palette Generator": "color-palette-generator.html",
  "Palette Generator": "palette-generator.html",
  "Color Shades Generator": "color-shades-generator.html",
  "Color Gradient Maker": "color-gradient-maker.html",
  "Color Contrast Checker": "color-contrast-checker.html",
  "Color Name Finder": "color-name-finder.html",
  "Random Color Picker": "random-color-picker.html",
  "Color Wheel": "color-wheel-seo.html",
  "Image Color Extractor": "image-color-extractor.html",
  "Gradient Maker": "gradient-maker.html",
  "Unit Converter": "unit-converter.html",
  "Age Difference Calculator": "age-difference-calculator.html",
  "Discount Calculator": "discount-calculator.html",
  "Profit & Loss Calculator": "profit-loss-calculator.html",
  "GPA Calculator": "gpa-calculator.html",
  "GST Calculator": "gst-calculator.html",
  "Percentage Calculator": "percentage-calculator.html",
  "Date Calculator": "date-calculator.html",
  "QR Code Generator": "qr-code-generator.html",
  "Advanced QR Generator": "advanced-qr-generator.html",
  "YouTube Thumbnail Downloader": "youtube-thumbnail-downloader.html",
  "Currency Converter": "currency-converter.html",
  "My Birth Year": "my-birth-year.html",
  "BMI Calculator": "bmi-calculator.html",
  "BMR Calculator": "bmr-calculator.html",
  "Calorie Calculator": "calorie-calculator.html",
  "TDEE Calculator": "tdee-calculator.html",
  "Body Fat Calculator": "body-fat-calculator.html",
  "Ideal Weight Calculator": "ideal-weight-calculator.html",
  "Lean Body Mass Calculator": "lean-body-mass-calculator.html",
  "Macro Calculator": "macro-calculator.html",
  "Protein Calculator": "protein-calculator.html",
  "Waist to Hip Calculator": "waist-to-hip-calculator.html",
  "EMI Calculator": "emi-calculator.html",
  "Loan Calculator": "loan-calculator.html",
  "Zakat Calculator": "zakat-calculator.html",
  "SIP Calculator": "sip-calculator.html",
  "Word Counter": "word-counter.html",
  "Line Counter": "line-counter.html",
  "Text Case Converter": "text-case-converter.html",
  "Password Generator": "password-generator.html",
  "Password Strength Checker": "password-checker.html",
  "PDF Merger": "pdf-merger.html",
  "PDF Splitter": "pdf-splitter.html",
  "PDF to Image": "pdf-to-image.html",
  "PDF to JPG": "pdf-to-jpg.html",
  "PDF to PNG": "pdf-to-png.html",
  "PDF to BMP": "pdf-to-bmp.html",
  "PDF to WEBP": "pdf-to-webp.html",
  "PDF to TIFF": "pdf-to-tiff.html",
  "PDF to Word": "pdf-to-word.html",
  "PDF to Excel": "pdf-to-excel.html",
  "PDF to Text": "pdf-to-text.html",
  "PDF Rotator": "pdf-rotator.html",
  "Image Converter": "image-converter.html",
  "Image Cropper": "image-cropper.html",
  "Image Resizer": "image-resizer.html",
  "Image to PDF": "image-to-pdf.html",
  "Image Upscaler": "image-upscaler.html",
  "Image Compressor": "image-compressor.html",
  "WebP Converter": "webp-converter.html",
  "Zodiac Sign Finder": "zodiac-sign-finder.html",
  "Chinese Zodiac Finder": "chinese-zodiac-finder.html",
  "Time Calculator": "time-calculator.html",
  "Countdown Timer": "countdown-timer.html",
  "World Clock": "world-clock.html",
  "Spin The Wheel": "spin-the-wheel.html",
  "Yes/No Wheel": "yes-no-wheel.html",
  "Decision Roulette": "decision-roulette.html",
  "Random Name Picker": "random-name-picker.html",
  "Name Picker Wheel": "name-picker-wheel.html",
  "Random Number Generator": "best-lottery-number-generator.html",
  "Best Lottery Number Generator": "best-lottery-number-generator.html",
  "Prize Wheel": "prize-wheel.html",
  "Lucky Prize Wheel": "lucky-prize-wheel.html",
  "Daily Lucky Number Wheel": "daily-lucky-number-wheel.html",
  "Task Spinner": "task-spinner.html",
  "Art Roulette": "art-roulette-seo.html",
  "Chore Wheel": "chore-wheel-seo.html",
  "Country Picker Wheel": "country-picker-wheel-seo.html",
  "Decision Wheel": "decision-wheel.html",
  "Dinner Spinner": "dinner-spinner.html",
  "Icebreaker Wheel": "icebreaker-wheel-seo.html",
  "Random Fact Wheel": "random-fact-wheel-seo.html",
  "Random Animal Wheel": "random-animal-wheel.html",
  "Zodiac Wheel": "zodiac-wheel.html",
  "Twister Spinner": "twister-spinner-seo.html",
  "Truth or Dare Generator": "truth-or-dare-generator.html",
  "Sketch or Dare": "sketch-or-dare-seo.html",
  "Dare or Draw": "dare-or-draw-seo.html",
  "Hot Seat Challenge": "hot-seat-challenge-seo.html",
  "Stop Right There Wheel": "stop-right-there-wheel.html",
  "Holiday Activity Wheel": "holiday-wheel.html",
  "Food Picker Wheel": "food-picker-wheel.html",
  "Drink Picker Wheel": "drink-wheel.html",
  "Exercise Wheel": "exercise-wheel.html",
  "Workout Spinner": "workout-spinner.html",
  "Movie Picker Wheel": "movie-picker-wheel.html",
  "You vs Food Wheel": "you-vs-food-wheel.html",
  "Mystery Gift Wheel": "mystery-gift-wheel.html",
  "Casino Games Wheel": "casino-games-wheel.html",
  "Squid Game Spin Wheel": "squid-game-wheel.html",
  "Game Character Spin Wheel": "game-character-spin-wheel.html",
  "Party Games Spin Wheel": "party-games-spin-wheel.html",
  "Drinking Game Spin Wheel": "drinking-game-spin-wheel.html",
  "Board Game Spin Wheel": "board-game-spin-wheel.html",
  "Carnival Game Spin Wheel": "carnival-game-spin-wheel.html",
  "YouTube SEO Score Checker": "youtube-seo-score-checker.html",
  "YouTube Keyword Generator": "youtube-keyword-generator.html",
  "YouTube Keyword Research": "youtube-keyword-research.html",
  "YouTube Channel Analyzer": "youtube-channel-analyzer.html",
  "YouTube Channel Comparison": "youtube-channel-comparison.html",
  "YouTube Viral Video Predictor": "youtube-viral-video-predictor.html",
  "YouTube SEO Checklist Generator": "youtube-seo-checklist-generator.html",
  "YouTube Title Generator": "youtube-title-generator.html",
  "YouTube Description Generator": "youtube-description-generator.html",
  "YouTube Video Idea Generator": "youtube-video-idea-generator.html",
  "YouTube Video Outline Generator": "youtube-video-outline-generator.html",
  "YouTube Content Planner AI": "youtube-content-planner-ai.html",
  "YouTube Video Tags Extractor": "youtube-video-tags-extractor.html",
  "YouTube Video Tags Generator": "youtube-video-tags-generator.html",
  "YouTube Thumbnail Text Generator": "youtube-thumbnail-text-generator.html",
  "YouTube Thumbnail Color Palette Generator": "youtube-thumbnail-color-palette-generator.html",
  "YouTube Thumbnail Split Tester": "youtube-thumbnail-split-tester.html",
  "YouTube Thumbnail CTR Predictor": "thumbnail-ctr-predictor.html",
  "YouTube Shorts Hook Generator": "youtube-shorts-hook-generator.html",
  "YouTube Shorts Script Generator": "youtube-shorts-script-generator.html",
  "YouTube Shorts Idea Calendar Generator": "youtube-shorts-idea-calendar-generator.html",
  "YouTube Channel Name Generator": "youtube-channel-name-generator.html",
  "YouTube Community Post Generator": "youtube-community-post-generator.html"
};

function getToolName(tool) {
    return (typeof tool === 'object' && tool !== null) ? tool.name : tool;
}

function getUrl(toolName) {
    let nameStr = getToolName(toolName);
    if (toolUrlMap[nameStr]) {
        return "https://freeonlinetools203.com/" + toolUrlMap[nameStr];
    }
    return "https://freeonlinetools203.com/" + nameStr.toLowerCase().trim().replace(/ /g, '-').replace(/[^\w\-]/g, '') + '.html';
}

// =========================================================================
// 3. HOMEPAGE DASHBOARD RENDERER (BLUE & WHITE SAAS CARDS)
// =========================================================================
function renderDashboard() {
    const container = document.getElementById('toolsContainer');
    if (!container) return;

    const orderedCategoryKeys = [
        "catMostPopular", "catAge", "catPop", "catFin", "catHealth",
        "catSeo", "catYoutube", "catHash", "catText", "catImage",
        "catPdf", "catDev", "catColor", "catFun", "catPreg",
        "catTime", "catZodiac", "catAgeExcel"
    ];

    let html = '';
    for (const key of orderedCategoryKeys) {
        const cat = toolsDatabase[key];
        if (!cat) continue;

        const hasSubCategories = (typeof cat.tools[0] === 'object' && cat.tools[0] !== null);
        let toolsToShow = cat.tools;
        let hiddenHTML = '';

        if (cat.tools.length > 12) {
            toolsToShow = cat.tools.slice(0, 12);
            let hiddenToolsHTML = cat.tools.slice(12).map(tool => {
                let nameStr = getToolName(tool);
                let catClass = hasSubCategories ? 'tab-tool-card' : '';
                let subcat = hasSubCategories ? `data-subcat="${tool.category}"` : '';
                return `<div class="tool-card ${catClass}" data-category="${key}" ${subcat}><a href="${getUrl(nameStr)}">${nameStr}</a></div>`;
            }).join('');

            hiddenHTML = `
                <div id="hidden_${key}" style="display: none; grid-column: 1 / -1; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 16px; margin-top: 16px;">
                    ${hiddenToolsHTML}
                </div>
                <div style="grid-column: 1 / -1; text-align: center; margin-top: 20px;">
                    <button onclick="toggleShowMore('${key}')" id="btn_${key}" style="padding: 10px 26px; background: #EFF6FF; color: #1E3A8A; border: 1px solid #BFDBFE; border-radius: 999px; font-weight: 600; cursor: pointer; font-size: 0.88rem; transition: all 0.2s;">
                        Show All ${cat.tools.length} Tools ↓
                    </button>
                </div>
            `;
        }

        let visibleToolsHTML = toolsToShow.map(tool => {
            let nameStr = getToolName(tool);
            let catClass = hasSubCategories ? 'tab-tool-card' : '';
            let subcat = hasSubCategories ? `data-subcat="${tool.category}"` : '';
            return `<div class="tool-card ${catClass}" data-category="${key}" ${subcat}><a href="${getUrl(nameStr)}">${nameStr}</a></div>`;
        }).join('');

        let tabsHTML = '';
        if (hasSubCategories) {
            const uniqueCategories = [...new Set(cat.tools.map(t => t.category))];
            tabsHTML = `<div class="age-tabs" id="tabs_${key}">
                <button class="age-tab-btn active" data-filter="all">All (${cat.tools.length})</button>
                ${uniqueCategories.map(c => {
                    let catName = c.charAt(0).toUpperCase() + c.slice(1).replace('-', ' ');
                    return `<button class="age-tab-btn" data-filter="${c}">${catName}</button>`;
                }).join('')}
            </div>`;
        }

        let searchHTML = '';
        if (cat.tools.length > 12) {
            searchHTML = `
                <div class="age-local-search">
                    <input type="text" id="search_${key}" class="${hasSubCategories ? 'tab-search-input' : 'simple-cat-search'}" data-category="${key}" placeholder="Filter tools inside ${cat.name}...">
                </div>
            `;
        }

        html += `
        <section class="section" data-category="${key}" id="section_${key}">
            <div class="section-header-with-product">
                <h2><span>${cat.icon || '🛠️'}</span> ${cat.name}</h2>
                <span class="cat-count-badge">${cat.tools.length} Tools</span>
            </div>
            ${cat.desc ? `<p class="cat-desc">${cat.desc}</p>` : ''}
            ${searchHTML}
            ${tabsHTML}
            <div class="tools-grid" id="${hasSubCategories ? 'grid_' + key : 'simple_grid_' + key}">
                ${visibleToolsHTML}
                ${hiddenHTML}
            </div>
        </section>`;
    }

    container.innerHTML = html;
    initUniversalFilters();
}

function initUniversalFilters() {
    document.querySelectorAll('.age-tabs').forEach(tabContainer => {
        const catKey = tabContainer.id.replace('tabs_', '');
        const btns = tabContainer.querySelectorAll('.age-tab-btn');
        const grid = document.getElementById(`grid_${catKey}`);
        const hiddenDiv = document.getElementById(`hidden_${catKey}`);
        const btn = document.getElementById(`btn_${catKey}`);

        btns.forEach(btnElement => {
            btnElement.addEventListener('click', () => {
                btns.forEach(b => b.classList.remove('active'));
                btnElement.classList.add('active');

                const filter = btnElement.getAttribute('data-filter');
                const cards = grid.querySelectorAll('.tab-tool-card');

                if (filter !== 'all') {
                    if (hiddenDiv) hiddenDiv.style.display = 'grid';
                    if (btn) btn.style.display = 'none';
                } else {
                    if (hiddenDiv) hiddenDiv.style.display = 'none';
                    if (btn) btn.style.display = 'inline-block';
                }

                cards.forEach(card => {
                    card.style.display = (filter === 'all' || card.getAttribute('data-subcat') === filter) ? 'block' : 'none';
                });

                const searchInput = document.getElementById(`search_${catKey}`);
                if (searchInput) searchInput.value = '';
            });
        });
    });

    document.querySelectorAll('.tab-search-input, .simple-cat-search').forEach(input => {
        input.addEventListener('input', function() {
            const catKey = this.getAttribute('data-category');
            const searchText = this.value.toLowerCase().trim();
            const grid = document.getElementById(`grid_${catKey}`) || document.getElementById(`simple_grid_${catKey}`);
            if (!grid) return;

            const cards = grid.querySelectorAll('.tool-card');
            const hiddenDiv = document.getElementById(`hidden_${catKey}`);
            const btn = document.getElementById(`btn_${catKey}`);
            const tabContainer = document.getElementById(`tabs_${catKey}`);

            if (tabContainer) {
                const tabs = tabContainer.querySelectorAll('.age-tab-btn');
                tabs.forEach(t => t.classList.remove('active'));
                if (tabs[0]) tabs[0].classList.add('active');
            }

            if (searchText !== '') {
                if (hiddenDiv) hiddenDiv.style.display = 'grid';
                if (btn) btn.style.display = 'none';
            } else {
                if (hiddenDiv) hiddenDiv.style.display = 'none';
                if (btn) btn.style.display = 'inline-block';
            }

            cards.forEach(card => {
                card.style.display = card.textContent.toLowerCase().includes(searchText) ? 'block' : 'none';
            });
        });
    });
}

window.toggleShowMore = function(categoryKey) {
    const hiddenDiv = document.getElementById(`hidden_${categoryKey}`);
    const btn = document.getElementById(`btn_${categoryKey}`);
    if (hiddenDiv && btn) {
        if (hiddenDiv.style.display === 'none') {
            hiddenDiv.style.display = 'grid';
            btn.innerHTML = 'Show Less ↑';
        } else {
            hiddenDiv.style.display = 'none';
            btn.innerHTML = `Show All ${toolsDatabase[categoryKey].tools.length} Tools ↓`;
            document.getElementById(`section_${categoryKey}`).scrollIntoView({ behavior: 'smooth' });
        }
    }
};

// =========================================================================
// 4. TWO-LEVEL SAAS NAVIGATION & RESPONSIVE MEGA MENU (BLUE & WHITE)
// =========================================================================
const megaMenuCategories = [
    "catMostPopular", "catPop", "catFin", "catHealth", "catAge",
    "catSeo", "catYoutube", "catText", "catImage", "catPdf",
    "catDev", "catColor", "catFun", "catPreg", "catTime"
];

function buildMegaMenuColumns() {
    return megaMenuCategories.map(key => {
        const cat = toolsDatabase[key];
        if (!cat) return '';
        const previewTools = cat.tools.slice(0, 7);
        const links = previewTools.map(t => {
            const name = getToolName(t);
            return `<a href="${getUrl(name)}">${name}</a>`;
        }).join('');
        return `
        <div class="fot-mega-col">
            <h4><a href="https://freeonlinetools203.com/sitemap.html#${key}">${cat.icon} ${cat.name}</a></h4>
            ${links}
            <a href="https://freeonlinetools203.com/sitemap.html#${key}" class="fot-view-cat">View all (${cat.tools.length}) →</a>
        </div>`;
    }).join('');
}

function generateMobileMenu() {
    let html = `<ul class="fot-mobile-nav">
      <li><a href="https://freeonlinetools203.com/">Home</a></li>
      <li>
        <button type="button" class="fot-mobile-acc" id="mobileToolsToggle">All Tools (240+) <span>▼</span></button>
        <div class="fot-mobile-panel" id="mobileToolsContent">
            <a href="https://freeonlinetools203.com/sitemap.html" style="font-weight:700;color:#2563EB;background:#EFF6FF;">Browse Complete Directory (240+ Tools) →</a>`;

    megaMenuCategories.forEach(key => {
        const cat = toolsDatabase[key];
        if (!cat) return;
        html += `<div class="fot-mob-cat-title">${cat.icon} ${cat.name}</div>`;
        cat.tools.forEach(tool => {
            const nameStr = getToolName(tool);
            html += `<a href="${getUrl(nameStr)}">${nameStr}</a>`;
        });
    });

    html += `</div></li>
      <li>
        <button type="button" class="fot-mobile-acc" id="mobilePagesToggle">Information & Policies <span>▼</span></button>
        <div class="fot-mobile-panel" id="mobilePagesContent">
            <a href="https://freeonlinetools203.com/about.html">About Us</a>
            <a href="https://freeonlinetools203.com/contact.html">Contact Us</a>
            <a href="https://freeonlinetools203.com/privacy-policy.html">Privacy Policy</a>
            <a href="https://freeonlinetools203.com/terms-conditions.html">Terms & Conditions</a>
            <a href="https://freeonlinetools203.com/disclaimer.html">Disclaimer</a>
        </div>
      </li>
      <li><a href="https://freeonlinetools203.com/about.html">About</a></li>
      <li><a href="https://freeonlinetools203.com/contact.html">Contact</a></li>
    </ul>`;
    return html;
}

const globalSaasCSS = `<style>
/* TOP HEADER & TWO-LEVEL MEGA MENU */
.fot-header {
    width: 100%;
    background: #FFFFFF;
    border-bottom: 1px solid #E2E8F0;
    position: sticky;
    top: 0;
    z-index: 1050;
    box-shadow: 0 2px 10px rgba(15, 23, 42, 0.04);
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
.fot-nav-wrap {
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 20px;
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.fot-brand {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: #0F172A;
    font-weight: 800;
    font-size: 1.2rem;
    letter-spacing: -0.02em;
}
.fot-brand-icon {
    width: 36px;
    height: 36px;
    background: #2563EB;
    color: #FFFFFF;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    font-weight: 800;
}
.fot-brand span b {
    color: #2563EB;
}
.fot-menu {
    display: flex;
    align-items: center;
    gap: 6px;
    list-style: none;
    margin: 0;
    padding: 0;
}
.fot-menu > li {
    position: static;
}
.fot-menu > li > a {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 9px 14px;
    color: #0F172A;
    text-decoration: none;
    font-size: 0.92rem;
    font-weight: 600;
    border-radius: 8px;
    transition: all 0.2s;
}
.fot-menu > li > a:hover {
    background: #EFF6FF;
    color: #2563EB;
}
.fot-has-mega > a::after {
    content: "▾";
    font-size: 0.75rem;
    color: #64748B;
}
.fot-mega-panel {
    position: absolute;
    top: 68px;
    left: 0;
    right: 0;
    background: #FFFFFF;
    border-top: 1px solid #E2E8F0;
    border-bottom: 1px solid #E2E8F0;
    box-shadow: 0 20px 40px rgba(15, 23, 42, 0.12);
    opacity: 0;
    visibility: hidden;
    transform: translateY(6px);
    transition: all 0.2s ease;
    z-index: 1060;
}
.fot-has-mega:hover .fot-mega-panel {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}
.fot-mega-inner {
    max-width: 1240px;
    margin: 0 auto;
    padding: 24px 20px;
    max-height: 75vh;
    overflow-y: auto;
}
.fot-mega-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 14px;
    margin-bottom: 18px;
    border-bottom: 1px solid #E2E8F0;
}
.fot-mega-top span {
    font-weight: 700;
    color: #1E3A8A;
    font-size: 0.95rem;
}
.fot-mega-all-btn {
    background: #2563EB;
    color: #FFFFFF !important;
    padding: 7px 16px;
    border-radius: 8px;
    text-decoration: none;
    font-size: 0.84rem;
    font-weight: 600;
}
.fot-mega-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
}
.fot-mega-col h4 {
    margin: 0 0 8px 0;
    padding-bottom: 6px;
    border-bottom: 2px solid #EFF6FF;
    font-size: 0.86rem;
}
.fot-mega-col h4 a {
    color: #1E3A8A;
    text-decoration: none;
    font-weight: 700;
}
.fot-mega-col a {
    display: block;
    color: #64748B;
    text-decoration: none;
    font-size: 0.81rem;
    padding: 4px 0;
    transition: color 0.15s, padding-left 0.15s;
}
.fot-mega-col a:hover {
    color: #2563EB;
    padding-left: 4px;
}
.fot-mega-col a.fot-view-cat {
    color: #2563EB;
    font-weight: 600;
    margin-top: 4px;
}
/* Simple Dropdown for AdSense Pages */
.fot-has-drop {
    position: relative !important;
}
.fot-simple-drop {
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 210px;
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 12px;
    box-shadow: 0 12px 28px rgba(15, 23, 42, 0.10);
    padding: 8px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(6px);
    transition: all 0.2s;
    z-index: 1060;
}
.fot-has-drop:hover .fot-simple-drop {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}
.fot-simple-drop a {
    display: block;
    padding: 9px 12px;
    color: #0F172A;
    text-decoration: none;
    font-size: 0.86rem;
    font-weight: 500;
    border-radius: 8px;
}
.fot-simple-drop a:hover {
    background: #EFF6FF;
    color: #2563EB;
}
.fot-nav-cta {
    background: #2563EB !important;
    color: #FFFFFF !important;
    padding: 9px 18px !important;
    border-radius: 8px;
    font-weight: 600 !important;
}
.fot-nav-cta:hover {
    background: #1E3A8A !important;
}
.fot-mobile-btn {
    display: none;
    background: #EFF6FF;
    border: 1px solid #BFDBFE;
    color: #1E3A8A;
    font-size: 1.3rem;
    width: 42px;
    height: 42px;
    border-radius: 10px;
    cursor: pointer;
}
.fot-mobile-drawer {
    display: none;
    background: #FFFFFF;
    border-top: 1px solid #E2E8F0;
    max-height: 82vh;
    overflow-y: auto;
}
.fot-mobile-drawer.open {
    display: block;
}
.fot-mobile-nav {
    list-style: none;
    padding: 12px 20px 24px;
}
.fot-mobile-nav > li {
    border-bottom: 1px solid #F1F5F9;
}
.fot-mobile-nav > li > a,
.fot-mobile-acc {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 13px 4px;
    background: none;
    border: none;
    color: #0F172A;
    font-size: 0.95rem;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    font-family: inherit;
}
.fot-mobile-panel {
    display: none;
    background: #F8FAFC;
    border-radius: 10px;
    padding: 8px 12px;
    margin-bottom: 12px;
    max-height: 320px;
    overflow-y: auto;
}
.fot-mobile-panel.open {
    display: block;
}
.fot-mob-cat-title {
    font-size: 0.82rem;
    font-weight: 700;
    color: #1E3A8A;
    padding: 10px 4px 4px;
    border-bottom: 1px solid #E2E8F0;
}
.fot-mobile-panel a {
    display: block;
    padding: 7px 8px;
    color: #475569;
    text-decoration: none;
    font-size: 0.85rem;
}

/* BREADCRUMB BAR ON TOOL PAGES */
.fot-breadcrumb-bar {
    max-width: 1100px;
    margin: 20px auto 0;
    padding: 0 20px;
}
.fot-breadcrumb {
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    padding: 8px 16px;
    border-radius: 999px;
    font-size: 0.82rem;
    color: #64748B;
}
.fot-breadcrumb a {
    color: #2563EB;
    text-decoration: none;
    font-weight: 600;
}
.fot-breadcrumb a:hover {
    text-decoration: underline;
}

/* UNIFIED SAAS FOOTER */
.fot-global-footer {
    background: #0F172A;
    color: #CBD5E1;
    padding: 52px 20px 28px;
    margin-top: 60px;
    border-top: 4px solid #2563EB;
    font-family: 'Inter', sans-serif;
}
.fot-footer-inner {
    max-width: 1240px;
    margin: 0 auto;
}
.fot-footer-grid {
    display: grid;
    grid-template-columns: 1.4fr 1fr 1fr 1fr;
    gap: 32px;
    margin-bottom: 36px;
}
.fot-footer-brand h3 {
    color: #FFFFFF;
    font-size: 1.15rem;
    font-weight: 800;
    margin-bottom: 10px;
}
.fot-footer-brand p {
    color: #94A3B8;
    font-size: 0.88rem;
    line-height: 1.6;
    margin-bottom: 16px;
}
.fot-footer-col h4 {
    color: #FFFFFF;
    font-size: 0.92rem;
    font-weight: 700;
    margin-bottom: 14px;
    padding-bottom: 8px;
    border-bottom: 2px solid #1E3A8A;
}
.fot-footer-col a {
    display: block;
    color: #94A3B8;
    text-decoration: none;
    font-size: 0.86rem;
    padding: 5px 0;
    transition: color 0.2s, padding-left 0.2s;
}
.fot-footer-col a:hover {
    color: #38BDF8;
    padding-left: 4px;
}
.fot-share-row {
    display: flex;
    gap: 8px;
}
.fot-share-btn {
    background: #1E293B;
    border: 1px solid #334155;
    color: #FFFFFF;
    padding: 7px 12px;
    border-radius: 8px;
    font-size: 0.78rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
}
.fot-share-btn:hover {
    background: #2563EB;
    border-color: #2563EB;
}
.fot-footer-bottom {
    border-top: 1px solid #1E293B;
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
    font-size: 0.82rem;
    color: #64748B;
}

@media (max-width: 992px) {
    .fot-mega-grid { grid-template-columns: repeat(3, 1fr); }
    .fot-footer-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 768px) {
    .fot-menu { display: none; }
    .fot-mobile-btn { display: inline-flex; align-items: center; justify-content: center; }
    .fot-footer-grid { grid-template-columns: 1fr; }
}
</style>`;

const globalNavbarHTML = `
<header class="fot-header">
  <div class="fot-nav-wrap">
    <a href="https://freeonlinetools203.com/" class="fot-brand">
      <span class="fot-brand-icon">F</span>
      <span>Free <b>Online Tools</b></span>
    </a>

    <ul class="fot-menu">
      <li><a href="https://freeonlinetools203.com/">Home</a></li>
      <li class="fot-has-drop">
        <a href="https://freeonlinetools203.com/about.html">AdSense Pages ▾</a>
        <div class="fot-simple-drop">
          <a href="https://freeonlinetools203.com/about.html">About Us</a>
          <a href="https://freeonlinetools203.com/contact.html">Contact Us</a>
          <a href="https://freeonlinetools203.com/privacy-policy.html">Privacy Policy</a>
          <a href="https://freeonlinetools203.com/terms-conditions.html">Terms &amp; Conditions</a>
          <a href="https://freeonlinetools203.com/disclaimer.html">Disclaimer</a>
        </div>
      </li>
      <li class="fot-has-mega">
        <a href="https://freeonlinetools203.com/sitemap.html">All Tools</a>
        <div class="fot-mega-panel">
          <div class="fot-mega-inner">
            <div class="fot-mega-top">
              <span>Explore 240+ Free Browser-Based Tools Across 15+ Categories</span>
              <a href="https://freeonlinetools203.com/sitemap.html" class="fot-mega-all-btn">Open Full Directory →</a>
            </div>
            <div class="fot-mega-grid">
              ${buildMegaMenuColumns()}
            </div>
          </div>
        </div>
      </li>
      <li><a href="https://freeonlinetools203.com/about.html">About</a></li>
      <li><a href="https://freeonlinetools203.com/contact.html">Contact</a></li>
      <li><a href="https://freeonlinetools203.com/sitemap.html" class="fot-nav-cta">All 240+ Tools</a></li>
    </ul>

    <button type="button" class="fot-mobile-btn" id="mobileToggle" aria-label="Toggle Menu">☰</button>
  </div>
  <div class="fot-mobile-drawer" id="mobileMenu"></div>
</header>`;

// =========================================================================
// 5. PAGE ONLOAD: INJECT HEADER, BREADCRUMBS, DASHBOARD & UNIFIED FOOTER
// =========================================================================
document.addEventListener('DOMContentLoaded', () => {
    document.head.insertAdjacentHTML('beforeend', globalSaasCSS);

    // Remove legacy navbar if present
    const oldNav = document.querySelector('.navbar, .megamenu-container');
    if (oldNav) oldNav.remove();

    document.body.insertAdjacentHTML('afterbegin', globalNavbarHTML);

    const mobileMenuDiv = document.getElementById('mobileMenu');
    if (mobileMenuDiv) {
        mobileMenuDiv.innerHTML = generateMobileMenu();
    }

    // Mobile drawer toggles
    const mobileToggle = document.getElementById('mobileToggle');
    if (mobileToggle && mobileMenuDiv) {
        mobileToggle.addEventListener('click', () => {
            mobileMenuDiv.classList.toggle('open');
        });
    }

    document.addEventListener('click', (e) => {
        if (e.target && (e.target.id === 'mobileToolsToggle' || e.target.id === 'mobilePagesToggle')) {
            e.preventDefault();
            const panel = e.target.nextElementSibling;
            if (panel) panel.classList.toggle('open');
        }
    });

    // Render Homepage Dashboard if container exists
    renderDashboard();

    // Inject Breadcrumb on individual tool pages (not homepage)
    const path = window.location.pathname;
    const fileName = path.split('/').pop();
    if (fileName && fileName !== 'index.html' && fileName !== '') {
        let matchedToolName = '';
        let matchedCatName = 'All Tools';
        for (const [tName, tFile] of Object.entries(toolUrlMap)) {
            if (tFile === fileName) {
                matchedToolName = tName;
                break;
            }
        }
        if (matchedToolName) {
            for (const cat of Object.values(toolsDatabase)) {
                if (cat.tools.some(t => getToolName(t) === matchedToolName)) {
                    matchedCatName = cat.name;
                    break;
                }
            }
            const headerEl = document.querySelector('.fot-header');
            if (headerEl && !document.querySelector('.fot-breadcrumb-bar')) {
                const bcHTML = `
                <nav class="fot-breadcrumb-bar" aria-label="Breadcrumb">
                    <div class="fot-breadcrumb">
                        <a href="https://freeonlinetools203.com/">Home</a>
                        <span>/</span>
                        <a href="https://freeonlinetools203.com/sitemap.html">${matchedCatName}</a>
                        <span>/</span>
                        <span style="color:#0F172A;font-weight:600;">${matchedToolName}</span>
                    </div>
                </nav>`;
                headerEl.insertAdjacentHTML('afterend', bcHTML);
            }
        }
    }

    // Unify Footer across all pages (replaces duplicate/inconsistent footers cleanly)
    const existingFooters = document.querySelectorAll('footer, .professional-footer');
    existingFooters.forEach(f => f.remove());

    const unifiedFooterHTML = `
    <div style="max-width:1240px;margin:36px auto 0;padding:0 20px;text-align:center;">
        <a href="https://freeonlinetools203.com/sitemap.html" style="display:inline-flex;align-items:center;gap:8px;background:#2563EB;color:#FFFFFF;padding:13px 32px;border-radius:999px;text-decoration:none;font-weight:700;font-size:0.95rem;box-shadow:0 6px 20px rgba(37,99,235,0.25);">
            Explore All 240+ Free Tools →
        </a>
    </div>
    <footer class="fot-global-footer">
        <div class="fot-footer-inner">
            <div class="fot-footer-grid">
                <div class="fot-footer-brand">
                    <h3>Free Online Tools</h3>
                    <p>freeonlinetools203.com provides 240+ fast, accurate, and 100% free browser-based calculators, converters, SEO utilities, and developer tools with no sign-up required.</p>
                    <div class="fot-share-row">
                        <button type="button" onclick="sharePage('facebook')" class="fot-share-btn">Facebook</button>
                        <button type="button" onclick="sharePage('twitter')" class="fot-share-btn">Twitter</button>
                        <button type="button" onclick="sharePage('whatsapp')" class="fot-share-btn">WhatsApp</button>
                        <button type="button" onclick="copyPageLink()" class="fot-share-btn">Copy Link</button>
                    </div>
                </div>
                <div class="fot-footer-col">
                    <h4>Navigation &amp; Legal</h4>
                    <a href="https://freeonlinetools203.com/">Home</a>
                    <a href="https://freeonlinetools203.com/sitemap.html">All Tools Directory</a>
                    <a href="https://freeonlinetools203.com/about.html">About Us</a>
                    <a href="https://freeonlinetools203.com/contact.html">Contact Us</a>
                    <a href="https://freeonlinetools203.com/privacy-policy.html">Privacy Policy</a>
                    <a href="https://freeonlinetools203.com/terms-conditions.html">Terms &amp; Conditions</a>
                    <a href="https://freeonlinetools203.com/disclaimer.html">Disclaimer</a>
                </div>
                <div class="fot-footer-col">
                    <h4>Popular Calculators</h4>
                    <a href="https://freeonlinetools203.com/age-calculator.html">Age Calculator</a>
                    <a href="https://freeonlinetools203.com/bmi-calculator.html">BMI Calculator</a>
                    <a href="https://freeonlinetools203.com/emi-calculator.html">EMI Calculator</a>
                    <a href="https://freeonlinetools203.com/percentage-calculator.html">Percentage Calculator</a>
                    <a href="https://freeonlinetools203.com/currency-converter.html">Currency Converter</a>
                </div>
                <div class="fot-footer-col">
                    <h4>SEO, PDF &amp; Media</h4>
                    <a href="https://freeonlinetools203.com/keyword-density-checker.html">Keyword Density Checker</a>
                    <a href="https://freeonlinetools203.com/pdf-merger.html">PDF Merger</a>
                    <a href="https://freeonlinetools203.com/image-compressor.html">Image Compressor</a>
                    <a href="https://freeonlinetools203.com/youtube-thumbnail-downloader.html">YouTube Thumbnail Downloader</a>
                    <a href="https://freeonlinetools203.com/spin-the-wheel.html">Spin The Wheel</a>
                </div>
            </div>
            <div class="fot-footer-bottom">
                <span>© 2026 Free Online Tools (freeonlinetools203.com). All rights reserved.</span>
                <span>100% Client-Side &amp; Privacy-First</span>
            </div>
        </div>
    </footer>`;

    document.body.insertAdjacentHTML('beforeend', unifiedFooterHTML);

    if (typeof loadReviews === 'function') loadReviews();
});

// =========================================================================
// 6. GLOBAL SEARCH BAR FUNCTIONALITY (PRESERVED & ENHANCED)
// =========================================================================
(function() {
    function attachSearchEvents() {
        var input = document.getElementById('tsInput');
        if (!input) {
            setTimeout(attachSearchEvents, 150);
            return;
        }

        window.tsSearch = function() {
            var q = document.getElementById('tsInput');
            if (!q) return;
            var query = q.value.toLowerCase().trim();
            var label = document.getElementById('tsResultLabel');
            var grid = document.getElementById('tsResults');
            if (!grid) return;
            grid.innerHTML = '';

            if (!query) {
                if (label) label.style.display = 'none';
                return;
            }

            if (typeof gtag !== 'undefined' && query.length >= 2) {
                gtag('event', 'search_used', { 'search_term': query, 'event_category': 'engagement' });
            }

            var found = Object.entries(toolUrlMap).filter(function(t) {
                return t[0].toLowerCase().indexOf(query) !== -1;
            });

            if (label) {
                label.style.display = 'block';
                if (found.length === 0) {
                    label.textContent = '';
                    grid.innerHTML = '<div class="ts-no-result">No matching tool found — try another keyword (e.g. Age, PDF, BMI, SEO).</div>';
                    return;
                }
                label.textContent = `Found ${found.length} matching tool(s):`;
            }

            found.forEach(function(t) {
                var a = document.createElement('a');
                a.className = 'ts-result-card';
                a.href = 'https://freeonlinetools203.com/' + t[1];
                a.textContent = t[0];
                grid.appendChild(a);
            });
        };

        window.tsQuick = function(val) {
            var inp = document.getElementById('tsInput');
            if (inp) {
                inp.value = val;
                tsSearch();
            }
        };

        input.addEventListener('keyup', function(e) {
            var val = this.value;
            if (e.key === 'Enter' || val.length >= 2) {
                tsSearch();
            } else if (val.length === 0) {
                var lbl = document.getElementById('tsResultLabel');
                var grd = document.getElementById('tsResults');
                if (lbl) lbl.style.display = 'none';
                if (grd) grd.innerHTML = '';
            }
        });
    }
    attachSearchEvents();
})();

// =========================================================================
// 7. USER REVIEWS & SHARE SYSTEM (100% PRESERVED)
// =========================================================================
let selectedStar = 0;
let reviews = [];

function loadReviews() {
    try {
        const stored = localStorage.getItem('toolReviews');
        if (stored) {
            reviews = JSON.parse(stored);
        } else {
            reviews = [
                { name: "Michael R.", tool: "Age Calculator", rating: 5, comment: "Best age calculator I've ever used! Simple and accurate.", date: new Date(Date.now() - 86400000 * 2).toISOString() },
                { name: "Sarah K.", tool: "BMI Calculator", rating: 5, comment: "Very helpful tool! Helped me track my health journey.", date: new Date(Date.now() - 86400000 * 5).toISOString() },
                { name: "David M.", tool: "Keyword Density Checker", rating: 5, comment: "Perfect for SEO work. Saves me hours of manual checking.", date: new Date(Date.now() - 86400000 * 10).toISOString() }
            ];
            localStorage.setItem('toolReviews', JSON.stringify(reviews));
        }
    } catch (e) { reviews = []; }
    renderReviews();
}

function saveReviews() {
    try { localStorage.setItem('toolReviews', JSON.stringify(reviews)); } catch (e) {}
    renderReviews();
}

function renderReviews() {
    const list = document.getElementById('revList');
    const avgEl = document.getElementById('avgRating');
    const starsEl = document.getElementById('avgStars');
    const countEl = document.getElementById('totalReviews');
    if (!list) return;

    if (reviews.length === 0) {
        list.innerHTML = '<div class="rev-empty">Be the first to share your experience!</div>';
        return;
    }

    let total = reviews.reduce((acc, r) => acc + r.rating, 0);
    const avg = (total / reviews.length).toFixed(1);
    const starStr = '★'.repeat(Math.round(avg)) + '☆'.repeat(5 - Math.round(avg));
    if (avgEl) avgEl.textContent = avg;
    if (starsEl) starsEl.textContent = starStr;
    if (countEl) countEl.textContent = reviews.length + ' reviews';

    const sorted = [...reviews].reverse();
    list.innerHTML = sorted.map(r => {
        const dateStr = new Date(r.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
        const stars = '★'.repeat(r.rating) + '☆'.repeat(5 - r.rating);
        return `
        <div class="rev-item">
            <div class="ri-head">
                <span class="ri-name">${escapeHtml(r.name || 'Anonymous')}</span>
                <span class="ri-stars">${stars}</span>
            </div>
            <div class="ri-date">${r.tool ? escapeHtml(r.tool) + ' • ' : ''}${dateStr}</div>
            <p class="ri-text">${escapeHtml(r.comment)}</p>
        </div>`;
    }).join('');
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function submitReview() {
    const name = document.getElementById('revName');
    const tool = document.getElementById('revTool');
    const comment = document.getElementById('revComment');
    if (!comment || comment.value.trim().length < 5) {
        showToast('Please write at least 5 characters for your review.');
        return;
    }
    if (selectedStar === 0) {
        showToast('Please select a star rating.');
        return;
    }
    reviews.push({
        name: name ? name.value.trim() || 'Anonymous' : 'Anonymous',
        tool: tool ? tool.value.trim() || '' : '',
        rating: selectedStar,
        comment: comment.value.trim(),
        date: new Date().toISOString()
    });
    saveReviews();
    if (name) name.value = '';
    if (tool) tool.value = '';
    if (comment) comment.value = '';
    selectedStar = 0;
    updateStars();
    document.getElementById('reviewForm').style.display = 'none';
    document.getElementById('reviewCtaBox').style.display = 'block';
    showToast('Thank you! Your review has been published.');
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('#starSelector button').forEach(btn => {
        btn.addEventListener('click', function() {
            selectedStar = parseInt(this.dataset.star);
            updateStars();
        });
    });

    const ctaBtn = document.getElementById('reviewCtaBtn');
    const reviewForm = document.getElementById('reviewForm');
    const ctaBox = document.getElementById('reviewCtaBox');
    if (ctaBtn && reviewForm && ctaBox) {
        ctaBtn.addEventListener('click', function(e) {
            e.preventDefault();
            reviewForm.style.display = 'block';
            ctaBox.style.display = 'none';
            selectedStar = 5;
            updateStars();
        });
    }
});

function updateStars() {
    document.querySelectorAll('#starSelector button').forEach((btn, i) => {
        if (i < selectedStar) {
            btn.textContent = '★';
            btn.classList.add('active');
        } else {
            btn.textContent = '☆';
            btn.classList.remove('active');
        }
    });
}

function showToast(message) {
    let toast = document.createElement('div');
    toast.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#0F172A;color:#FFFFFF;padding:10px 22px;border-radius:999px;font-size:0.88rem;font-weight:600;z-index:10000;box-shadow:0 6px 20px rgba(15,23,42,0.25);';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

function sharePage(platform) {
    let url = encodeURIComponent(window.location.href);
    let title = encodeURIComponent(document.title || "Free Online Tools");
    let shareUrl = "";
    if (platform === "whatsapp") shareUrl = "https://wa.me/?text=" + title + "%20" + url;
    else if (platform === "facebook") shareUrl = "https://www.facebook.com/sharer/sharer.php?u=" + url;
    else if (platform === "twitter") shareUrl = "https://twitter.com/intent/tweet?text=" + title + "&url=" + url;
    else if (platform === "linkedin") shareUrl = "https://www.linkedin.com/shareArticle?mini=true&url=" + url + "&title=" + title;
    if (shareUrl) window.open(shareUrl, "_blank", "width=600,height=500");
}

function copyPageLink() {
    let url = window.location.href;
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(() => showToast('Link copied to clipboard!'));
    } else {
        let ta = document.createElement('textarea');
        ta.value = url;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        showToast('Link copied to clipboard!');
    }
}

// Back to Top Button
document.addEventListener('DOMContentLoaded', function() {
    const topBtn = document.createElement('button');
    topBtn.innerHTML = '↑';
    topBtn.setAttribute('aria-label', 'Back to Top');
    topBtn.style.cssText = 'position:fixed;bottom:24px;right:24px;width:44px;height:44px;background:#2563EB;color:#FFFFFF;border:none;border-radius:50%;font-size:18px;font-weight:700;cursor:pointer;box-shadow:0 4px 14px rgba(37,99,235,0.35);display:none;z-index:9990;align-items:center;justify-content:center;';
    document.body.appendChild(topBtn);
    window.addEventListener('scroll', () => {
        topBtn.style.display = window.scrollY > 320 ? 'flex' : 'none';
    });
    topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
});
