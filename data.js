/* ==========================================================
   EDIT YOUR CONTENT HERE. Every page reads from this file.
   Items marked [PLACEHOLDER] need your confirmation or files.
   ========================================================== */

const SITE = {
  name: "Noureen Aslam",
  title: "<h2>Digital Marketing Executive | SEO Executive | Content Writer | Social Media Manager & Marketer</h2> ",
  email: "noureenaslam73@gmail.com",
  linkedin: "https://www.linkedin.com/in/noureen-digitalmarketing/",
  whatsappNumber: "923476792159",
  whatsappLink: "https://wa.me/923476792159",
  location: "Gujranwala, Punjab, Pakistan",
  calendly: "https://calendly.com/noureenaslam73",
  cvFile: "assets/Noreen_Aslam_CV.pdf",      // [PLACEHOLDER] place your CV PDF here
  profilePhoto: "assets/images/Noureen-Digital-Profile.png"   // [PLACEHOLDER] if missing, NA monogram is shown
};

const HERO = {
  heading: "<h4>Helping Businesses To Grow Them Through Digital marketing, SEO, Content Writing  & Social media management</h4>",
  sub: "I help businesses strengthen their online presence through search-focused content, practical SEO strategies, local search optimization, and thoughtful social media planning.",
  skillsLine: "Digital Marketing| SEO | Content Writing | Local SEO | Google Business Profile | Social Media Management"
};

/* Seven skills, in the order you confirmed */
const SKILLS = [
  "Digital Marketing",
  "SEO",
  "On-Page SEO",
  "Technical SEO",
  "Local SEO",
  "Social Media Marketing and Management",
  "Content Writing",
];

const ABOUT = {
  paragraphs: [
    "I am a creative and passionate individual who loves turning ideas into reality through technology and design. I have 1 year of experience in my field, during which I’ve learned, worked on different projects, and continued to improve my skills.",
    "My journey has been all about learning new things, exploring creative ideas, solving problems, and growing with every experience. I believe that every project is an opportunity to learn something new and become better at what I do.",
    "I enjoy creating things that are not only visually appealing but also meaningful, user-friendly, and effective. I am always looking for new challenges, opportunities to grow, and ways to turn my ideas into something valuable.",
    "This portfolio represents my journey, my skills, and the work I have put my heart into over time. I am still learning, still growing, and excited to see where my journey takes me next."
  ]
};

/* Working process: five steps from your brief */
const PROCESS = [
  { t: "Understand the business", d: "I learn the business, its goals, its customers and what success looks like for it." },
  { t: "Research", d: "I study the audience, keywords, search intent and competitors before deciding anything." },
  { t: "Strategy", d: "I turn the research into a practical plan with clear priorities." },
  { t: "Create or optimize", d: "I write, optimize or design the agreed deliverables." },
  { t: "Review and next steps", d: "I review the work with you and recommend what to do next." }
];

const WHY_ME = [
  { t: "Research-driven approach", d: "Recommendations are based on keyword, audience and competitor research." },
  { t: "Clear communication", d: "You always know what is being done, why, and what happens next." },
  { t: "Attention to detail", d: "Titles, meta tags, headings and alt text are checked carefully." },
  { t: "Organized deliverables", d: "Work is delivered in clear, easy-to-use formats." },
  { t: "Honest, realistic recommendations", d: "I will not promise rankings or results I cannot control." },
  { t: "Willingness to learn", d: "I keep updating my skills as search and social platforms change." }
];

/* ==========================================================
   SERVICES: 7 categories, 71 services in total
   Each service: t = title, d = description, p = business problem it solves
   ========================================================== */

const SERVICE_CATEGORIES = [
  {
    slug: "seo",
    name: "SEO",
    short: "SEO audits, keyword research, on-page optimization, and technical SEO to improve your website’s visibility and search performance.",
    deliverables: ["Written findings with prioritized fixes", "Keyword or page-level recommendations", "Action checklist you can follow"],
    audience: "Saas Companies, Software brands, Service businesses, e-commerce stores, startups and small companies with a website",
    services: [
      { t: "Complete Website SEO Audit", d: "A full review of your site covering content, technical health, indexing and on-page elements.", p: "The site is not performing in search and the reason is unclear." },
      { t: "On-Page SEO Optimization", d: "Improving titles, headings, content and internal signals on individual pages.", p: "Key pages do not clearly tell search engines what they are about." },
      { t: "Technical SEO Audit and Implementation", d: "Checking crawlability, indexing, site speed, mobile usability and HTTPS, with fix guidance.", p: "Technical problems stop good pages from being found or indexed." },
      { t: "Off-Page SEO Strategy", d: "A plan for building trust and links from relevant external sources, without spammy tactics.", p: "The website has little authority compared with competitors." },
      { t: "Keyword Research and Keyword Mapping", d: "Finding relevant keywords and assigning each one to the right page.", p: "Pages compete with each other or target the wrong searches." },
      { t: "Competitor SEO Analysis", d: "Comparing your site with competitors on keywords, content, speed and structure.", p: "You do not know where competitors are winning and why." },
      { t: "Website Content Optimization", d: "Updating existing page content for search intent, structure and readability.", p: "Existing content is not matching what people search for." },
      { t: "SEO Recommendations and Action Plans", d: "A prioritized action plan with what to do first, second and third.", p: "There is too much to fix and no clear order." },
      { t: "Image SEO and Alt-Text Optimization", d: "Descriptive file names, alt text and compressed images for search and accessibility.", p: "Images are not helping search engines or screen reader users." },
      { t: "Internal Linking Strategy", d: "A map of links between related pages to help navigation and indexing.", p: "Important pages are hard to reach and get few internal links." },
      { t: "Meta Titles and Meta Descriptions", d: "Writing clear, keyword-aware titles and descriptions for each page.", p: "Search results show weak or duplicate titles and descriptions." },
      { t: "SEO Content Gap Analysis", d: "Finding topics and questions your audience searches for that your site does not cover.", p: "The site is missing content that competitors and searchers need." }
    ]
  },
  {
    slug: "local-seo",
    name: "Local SEO",
    short: "Helping local businesses improve their local search visibility, rank in Google Maps results, and attract more nearby customers.",
    deliverables: ["Local keyword list", "Profile or landing page recommendations", "Action checklist"],
    audience: "Clinics, restaurants, salons, agencies and any business serving a specific city or area",
    services: [
      { t: "Local SEO Audit", d: "Reviewing your local search presence, listings, pages and reviews.", p: "Customers in your area cannot find you in local results." },
      { t: "Google Business Profile Optimization", d: "Improving categories, description, services, photos and details on your profile.", p: "The Google profile is incomplete or outdated." },
      { t: "Google Business Profile Setup Assistance", d: "Guidance to set up or verify a profile with accurate information.", p: "The business has no Google profile or it is not verified." },
      { t: "Local Keyword Research", d: "Finding searches people use with a city or area name.", p: "The website does not target local search terms." },
      { t: "Local Competitor Analysis", d: "Comparing local competitors on profile completeness, reviews and content.", p: "Local competitors appear above you and it is unclear why." },
      { t: "Local Landing-Page Optimization", d: "Improving location and service pages so they are clear for both users and search engines.", p: "Location pages are thin or do not describe the local service." },
      { t: "Google Business Profile Post Content", d: "Writing short, useful posts for the profile around offers, updates and services.", p: "The profile looks inactive to potential customers." },
      { t: "Business Description and Service Optimization", d: "Writing a clear business description and service list for the profile.", p: "Visitors cannot quickly tell what the business offers." },
      { t: "Review Response Writing", d: "Drafting polite, professional replies to positive and negative reviews.", p: "Reviews go unanswered and reflect poorly on the business." },
      { t: "Local Citation Audit and Recommendations", d: "Checking business listings on directories for accuracy and consistency.", p: "Different listings show different business information." },
      { t: "NAP Consistency Checks", d: "Checking that business name, address and phone number match across platforms.", p: "Inconsistent details weaken local trust and search signals." },
      { t: "Local SEO Content Strategy", d: "A plan for local blog topics and service content for your area.", p: "There is no content that targets local customers." }
    ]
  },
  {
    slug: "content-writing",
    name: "Content Writing",
    short: "Creating SEO-optimized website content, engaging blog posts, and persuasive product descriptions that connect with readers and improve search visibility.",
    deliverables: ["Finished draft or outline", "Meta title and description", "One revision round"],
    audience: "Businesses publishing blogs, service pages, product listings and website copy",
    services: [
      { t: "SEO Blog Writing", d: "Original blog articles built around a target keyword and search intent.", p: "The business has no regular content to attract search traffic." },
      { t: "Website Content Writing", d: "Clear, search-aware copy for the main pages of a website.", p: "Website copy is vague or does not explain the offer." },
      { t: "Homepage and Service-Page Copywriting", d: "Persuasive headings and copy that explain value and invite action.", p: "Visitors leave without understanding how to start working with you." },
      { t: "SEO Article Writing", d: "In-depth articles that answer a topic completely and read naturally.", p: "Existing articles are too short to compete for search terms." },
      { t: "Blog Topic Research and Content Planning", d: "Finding topics that match search demand and planning them over time.", p: "Blog posts are published without a clear topic plan." },
      { t: "SEO Content Briefs and Outlines", d: "A brief with keyword, intent, headings and points to cover for a writer or team.", p: "Content is written without clear direction and misses search intent." },
      { t: "Product Descriptions", d: "Clear, benefit-led product descriptions with relevant keywords.", p: "Product pages are copied, thin or hard to scan." },
      { t: "Service Descriptions", d: "Concise descriptions of each service that explain what the client gets.", p: "Service listings do not explain outcomes or deliverables." },
      { t: "Meta Title and Meta Description Writing", d: "Writing search-result titles and descriptions that encourage clicks.", p: "Search results do not attract clicks to the page." },
      { t: "FAQ Content Writing", d: "Questions and answers that address real customer concerns.", p: "Customers ask the same questions before buying." },
      { t: "Website Content Refresh and Rewriting", d: "Updating outdated or weak pages with better structure and clarity.", p: "Old content is outdated or no longer matches the business." },
      { t: "Content Proofreading and Editing", d: "Checking grammar, clarity, consistency and tone.", p: "Errors reduce trust and make the brand look careless." }
    ]
  },
  {
    slug: "social-media-marketing",
    name: "Social Media Marketing",
    short: "Developing social media strategies, content calendars, engaging captions, and optimized profiles to strengthen your brand’s online presence and audience engagement.",
    deliverables: ["Content calendar or post set", "Captions with calls to action", "Monthly planning sheet"],
    audience: "Small brands, food businesses, service providers and creators building an online presence",
    services: [
      { t: "Social Media Strategy", d: "A platform-by-platform plan with goals, audience and content approach.", p: "Posting happens without a clear purpose." },
      { t: "Social Media Account Audit", d: "Reviewing profiles, posting consistency, engagement and content quality.", p: "The account is inactive or not performing." },
      { t: "Facebook Page Optimization", d: "Improving the page details, about section, call-to-action button and cover content.", p: "The Facebook page does not explain the business clearly." },
      { t: "Instagram Profile Optimization", d: "Optimizing the bio, highlights, link and grid layout.", p: "Profile visitors do not understand the offer or know what to do next." },
      { t: "Social Media Content Calendars", d: "A planned schedule of posts across the week or month.", p: "Posting is irregular and unplanned." },
      { t: "Social Media Post Ideas", d: "Practical post ideas matched to goals and audience interests.", p: "The team runs out of ideas for content." },
      { t: "Social Media Captions and Copywriting", d: "Engaging captions with clear calls to action.", p: "Posts get little engagement because captions are weak." },
      { t: "Content Pillar Development", d: "Defining the main themes the brand will consistently post about.", p: "Content feels random and does not build a recognizable identity." },
      { t: "Brand Storytelling", d: "Shaping the brand's story into posts that build trust.", p: "The brand does not connect with its audience emotionally." },
      { t: "Educational and Promotional Content Planning", d: "Balancing helpful content with offers so the feed does not feel like advertising only.", p: "Every post is a sales pitch, which drives people away." },
      { t: "Social Media Engagement Strategy", d: "Plans for replying to comments, messages and community interaction.", p: "Followers comment but never receive replies." },
      { t: "Competitor Social Media Analysis", d: "Reviewing competitor content, formats and posting patterns.", p: "The brand is not sure what works in its niche." },
      { t: "Content Repurposing", d: "Turning one piece of content into several posts for different platforms.", p: "Effort is wasted because content is used only once." },
      { t: "Monthly Social Media Content Planning", d: "A full month of planned posts, captions and posting dates.", p: "There is no time or system to plan content each month." }
    ]
  },
  {
    slug: "creative-branding",
    name: "Social Media Creative and Branding Support",
    short: "Creating eye-catching social media posts, professional banners, and optimized bios to maintain a consistent and professional brand identity across platforms.",
    deliverables: ["Design or concept file", "Copy for the design", "One revision round"],
    audience: "Businesses, creators and professionals who need consistent social visuals and profile text",
    services: [
      { t: "Social Media Post Design", d: "Clean, on-brand post designs for feed and story formats.", p: "Posts look inconsistent or unprofessional." },
      { t: "Carousel Content Planning and Design", d: "Multi-slide carousels that explain a topic step by step.", p: "Complex information is hard to share in a single post." },
      { t: "LinkedIn Banner Design", d: "A professional banner that matches the profile and personal brand.", p: "The LinkedIn profile looks plain or generic." },
      { t: "Social Media Bio Writing", d: "Short, clear bios that explain who you are and what you offer.", p: "Profile bios do not explain the value quickly." },
      { t: "Personal Brand Content Planning", d: "Planning posts that show expertise and personality for an individual.", p: "A professional has no clear online presence or message." },
      { t: "Promotional Campaign Creative Concepts", d: "Creative ideas and layouts for a promotion or campaign.", p: "A campaign needs fresh visual ideas quickly." }
    ]
  },
  {
    slug: "linkedin-personal-branding",
    name: "LinkedIn and Personal Branding",
    short: "Optimizing LinkedIn profiles, crafting compelling headlines, and developing content strategies to help professionals and job seekers build a strong personal brand and attract the right opportunities.",
    deliverables: ["Revised profile text", "Keyword list for the profile", "Content ideas or post drafts"],
    audience: "Job seekers, freelancers, consultants and professionals wanting recruiter or client visibility",
    services: [
      { t: "LinkedIn Profile Optimization", d: "Reviewing and improving every section of your LinkedIn profile.", p: "The profile does not attract recruiters or clients." },
      { t: "LinkedIn Headline and About Section Writing", d: "Writing a keyword-aware headline and a clear About section.", p: "The headline and About section do not explain the value offered." },
      { t: "LinkedIn Experience and Skills Optimization", d: "Describing experience with results-focused wording and relevant skills.", p: "Experience sections are a list of duties with no context." },
      { t: "LinkedIn Content Strategy", d: "A plan for the kind of posts that build your professional reputation.", p: "The profile is never updated or engaged with." },
      { t: "LinkedIn Post Writing", d: "Professional posts written in your voice.", p: "You want to post but do not know what to write." },
      { t: "LinkedIn Profile Keyword Optimization", d: "Adding relevant search terms to headline, About and skills so the profile is easier to find.", p: "Recruiters and clients search for skills that are missing from your profile." },
      { t: "Professional Portfolio Content Development", d: "Writing short, clear descriptions of your projects and sample work.", p: "Portfolio work is shown without context or explanation." }
    ]
  },
  {
    slug: "research-strategy",
    name: "Research and Digital Marketing Strategy",
    short: "Conducting audience, market, and competitor research to uncover valuable insights and develop data-driven marketing strategies that support business growth.",
    deliverables: ["Research summary", "Audience or competitor comparison table", "Recommendation brief"],
    audience: "Startups, small businesses and teams planning their digital marketing",
    services: [
      { t: "Target Audience Research", d: "Identifying who your customers are, what they search for and where they spend time online.", p: "Marketing is aimed at the wrong people." },
      { t: "Market Research", d: "Understanding demand, trends and opportunities in your market.", p: "The business is entering or growing in a market without enough information." },
      { t: "Competitor Research", d: "Mapping competitors' offers, content, channels and positioning.", p: "The business does not know how it compares." },
      { t: "Customer Pain-Point Research", d: "Finding the problems customers talk about and the questions they ask.", p: "Messaging does not address what customers actually need." },
      { t: "Content Strategy Development", d: "A plan covering content types, topics, channels and goals.", p: "Content is created without a clear strategy." },
      { t: "Digital Marketing Recommendations", d: "Practical recommendations on channels, priorities and next steps.", p: "There is no clear direction for digital marketing efforts." },
      { t: "SEO Content Planning", d: "A content calendar built around keyword research and search intent.", p: "Content is not planned around what people search for." },
      { t: "Website Visibility Improvement Roadmaps", d: "A step-by-step roadmap to improve how a website is found and used.", p: "Website improvements are random with no sequence or priorities." }
    ]
  }
];

/* ==========================================================
   PROJECTS: sample work. Every project is labeled as a real projects.
   Sections marked [PLACEHOLDER] need your content or screenshots.
   ========================================================== */

const PROJECTS = [
  {
    slug: "seo-audit-keyword-research",
    title: "SEO Audit and Keyword Research",
    category: "SEO",
    label: "SEO Project",
    thumb: "SEO Audit",
    overview: "A comprehensive SEO audit and keyword research project covering search intent analysis, title tags, meta descriptions, heading optimization, internal linking, and technical SEO recommendations to improve website visibility and search performance.",
    objective: "Presenting a structured SEO audit with clear findings, actionable recommendations, and a prioritized roadmap to improve website performance and search visibility.",
    deliverables: ["Keyword research table", "Search intent mapping", "Title and meta description rewrites", "Heading structure review", "Internal linking opportunities", "Technical SEO checklist", "Prioritized recommendations"],
    research: "[PLACEHOLDER: add keyword research notes and tool screenshots, clearly labeled as sample data]",
    recommendations: "[PLACEHOLDER: add prioritized recommendations with before and after examples]"
  },
  {
    slug: "seo-blog-writing",
    title: "SEO Blog Writing",
    category: "Content Writing",
    label: "Blog Writing Project",
    thumb: "SEO Blog",
    overview: "An SEO-optimized blog writing project featuring keyword research, search intent analysis, engaging content, meta tags, a structured outline, FAQs, and internal linking recommendations to improve search visibility and deliver value to readers.",
    objective: "Create valuable, reader-focused content that naturally incorporates relevant keywords, aligns with search intent, and supports better search visibility.",
    deliverables: ["Target and supporting keywords", "SEO title and meta description", "Article outline", "Complete article", "Internal linking suggestions", "FAQs", "Content strategy explanation"],
    research: "[PLACEHOLDER: add search intent analysis for the target keyword]",
    recommendations: "[PLACEHOLDER: add content refresh and promotion suggestions]"
  },
  {
    slug: "food-brand-social-campaign",
    title: "Food Brand Social Media Campaign",
    category: "Social Media",
    label: "Food compaign Project",
    thumb: "Food Campaign",
    overview: "A food brand social media campaign featuring a 7-day content calendar, a 14-day extended strategy, engaging captions, compelling calls to action, and Facebook and Instagram post creatives designed to boost brand awareness and audience engagement.",
    objective: "Develop a strategic social media campaign for a food business, combining content planning, creative direction, and audience engagement to strengthen brand awareness and encourage customer interaction.",
    deliverables: ["Brand overview and audience", "Content pillars", "Seven-day content calendar", "Fourteen-day extended plan", "Captions and calls to action", "Post mockups", "Engagement strategy"],
    research: "[PLACEHOLDER: add audience notes for the fictional brand]",
    recommendations: "[PLACEHOLDER: add creative direction notes]"
  },
  {
    slug: "google-business-profile-local-seo",
    title: "Google Business Profile and Local SEO",
    category: "Local SEO",
    label: "Local SEO Project",
    thumb: "Local SEO",
    overview: "A local SEO optimization project covering Google Business Profile audit, category selection, local keyword research, business description optimization, engaging posts, review response strategies, and a prioritized action plan to improve local search visibility and attract nearby customers.",
    objective: "Demonstrate practical ways to optimize a local business profile, strengthen local search visibility, and build customer trust using accurate business information and ethical SEO practices.",
    deliverables: ["Profile audit checklist", "Primary and secondary category recommendations", "Local keyword research", "Business description", "Service descriptions", "Sample profile posts", "Review response examples", "Competitor analysis template", "Prioritized action plan"],
    research: "[PLACEHOLDER: add local keyword research for the fictional business]",
    recommendations: "[PLACEHOLDER: add local landing page recommendations]"
  },
  {
    slug: "website-content-on-page-seo",
    title: "Website Content and On-Page SEO",
    category: "SEO",
    label: "On-page SEO Project",
    thumb: "On-Page SEO",
    overview: "A website content and on-page SEO optimization project featuring content improvements, SEO-friendly title tags and meta descriptions, structured headings, and descriptive image alt text to enhance content quality, user experience, and search visibility.",
    objective: "Demonstrate before-and-after on-page SEO improvements, explaining the purpose behind each change and how it supports better content quality, user experience, and search visibility.",
    deliverables: ["Original sample page content", "Proposed improved content", "Title tag and meta description", "H1 and H2 structure", "Keyword and search intent", "Internal linking recommendations", "Image alt text examples"],
    research: "[PLACEHOLDER: add keyword and intent notes]",
    recommendations: "[PLACEHOLDER: add explanation of each improvement]"
  },
  {
    slug: "linkedin-profile-optimization",
    title: "LinkedIn Profile Optimization",
    category: "LinkedIn",
    label: "Linkedin Profile optimization Project",
    thumb: "LinkedIn",
    overview: "A LinkedIn profile optimization project featuring an improved professional headline, a compelling About section, experience section enhancements, and strategic keyword recommendations to strengthen personal branding and attract relevant career opportunities.",
    objective: "Show how a profile can explain value clearly and be found by recruiters and clients.",
    deliverables: ["Weak sample headline", "Improved headline", "Improved About section", "Experience description examples", "Skills and keyword recommendations", "Banner design concept"],
    research: "[PLACEHOLDER: add keyword notes for the sample profile]",
    recommendations: "[PLACEHOLDER: add strategy explanation]"
  },
  {
    slug: "seo-competitor-analysis",
    title: "SEO Competitor Analysis",
    category: "Research",
    label: "Competitor Analysis Project",
    thumb: "Competitor Analysis",
    overview: "A competitor analysis project featuring a comparison matrix, keyword opportunities, content gap analysis, competitive strengths and weaknesses, and a prioritized action plan to identify growth opportunities and refine marketing strategy.",
    objective: "Show how competitor research turns into clear opportunities.",
    deliverables: ["Competitor comparison table", "Keyword opportunities", "Content gaps", "Strengths and weaknesses", "Content recommendations", "Prioritized next steps"],
    research: "[PLACEHOLDER: add sample competitor data, labeled as illustrative]",
    recommendations: "[PLACEHOLDER: add prioritized next steps]"
  }
];

/* ==========================================================
   EXPERIENCE. Dates and duties from your CV.
   ========================================================== */

const EXPERIENCE = [
  {
    role: "SEO Executive",
    company: "SoftCr8ors",
    dates: "11 May 2026 – 11 August 2026",
    duties: [
      "Conducted keyword research and competitor analysis to identify SEO opportunities and evaluate online visibility.",
      "Worked on on-page SEO, technical SEO, content structure, website optimization and SEO content development.",
      "Assisted with Google Business Profile optimization, local SEO activities and business-focused content planning."
    ]
  },
  {
    role: "Digital Marketing Intern",
    company: "Tech Life Fusion",
    dates: "15 June 2026 – 15 August 2026",
    duties: [
      "Supported SEO activities (on-page and technical SEO), keyword research and content optimization.",
      "Assisted with digital content planning, competitor research and social media marketing activities.",
      "Followed digital marketing workflows, collaborated on assigned tasks and coordinated work using project management tools."
    ]
  }
];

/* ==========================================================
   EDUCATION AND CERTIFICATIONS
   Only certificates you have actually earned. IDs are from the files you provided.
   ========================================================== */

const EDUCATION = [
  { degree: "Bachelor of Business and Information Technology (BBIT)", school: "Virtual University of Pakistan", dates: "Currently enrolled. Expected completion: March 2028" },
  { degree: "F.Sc Pre-Medical", school: "Punjab College for Women, Gujranwala", dates: "" }
];

/* Each certificate needs two files you upload yourself:
   pdf   = the ORIGINAL certificate PDF (opened by "View Certificate", saved by "Download Certificate")
   image = a JPG preview of that same PDF (shown in the gallery and the lightbox)
   Until a preview image exists, the card shows a plain "Preview image not added yet" tile. */
const CERTIFICATES = [
  { title: "Digital Marketing", category: "Digital Marketing", provider: "DigiSkills.pk / Ignite (Virtual University)", date: "Issued 24 October 2024", id: "3ABEYMMK5",
    pdf: "assets/certificates/digital-marketing.pdf", image: "assets/certificates/previews/digital-marketing.jpg" },
  { title: "Freelancing", category: "Professional Freelancing", provider: "DigiSkills.pk / Ignite (Virtual University)", date: "Issued 24 October 2024", id: "G2EPBAKMK",
    pdf: "assets/certificates/freelancing.pdf", image: "assets/certificates/previews/freelancing.jpg" },
  { title: "SEO (Search Engine Optimization)", category: "SEO", provider: "DigiSkills.pk / Ignite (Virtual University)", date: "Issued 14 March 2026", id: "9YTNPNYMK",
    pdf: "assets/certificates/seo.pdf", image: "assets/certificates/previews/seo.jpg" },
  { title: "Creative Writing", category: "Content Writing", provider: "DigiSkills.pk / Ignite (Virtual University)", date: "Issued 14 March 2026", id: "JSZWMH9MK",
    pdf: "assets/certificates/creative-writing.pdf", image: "assets/certificates/previews/creative-writing.jpg" },
  { title: "Social Media Marketing", category: "Social Media Marketing", provider: "HP LIFE / HP Foundation", date: "Presented 28 May 2025", id: "Serial: 38746014-3e54-44d9-9ffc-849ae49cc951",
    pdf: "assets/certificates/social-media-marketing.pdf", image: "assets/certificates/previews/social-media-marketing.jpg" },
  { title: "Marketing Benefits vs. Features", category: "Digital Marketing", provider: "HP LIFE / HP Foundation", date: "Presented 17 June 2025", id: "Serial: a4dc68d0-dd3f-44dc-893a-58b09f8825aa",
    pdf: "assets/certificates/marketing-benefits-vs-features.pdf", image: "assets/certificates/previews/marketing-benefits-vs-features.jpg" }
];

/* ==========================================================
   PRICING (page: #/pricing)
   Anything inside [square brackets] is a placeholder. It is highlighted on the
   page so you can spot it. Replace the WHOLE bracket, e.g.
     pkr: "PKR [Your Price]"  ->  pkr: "PKR 15,000"
   Edit prices, durations, deliverables and audiences freely. Nothing here is a
   final price, and no package promises rankings, traffic, leads or sales.
   ========================================================== */

const PRICING_NOTE = "All prices are placeholders until you confirm them. Final cost depends on the size and scope of your project, and I will confirm the scope with you before any work starts. My work follows good practice, but I cannot guarantee search rankings, traffic, leads or sales.";

/* The Custom Plan card is added automatically to every service below. */
const PRICING = [
  {
    service: "SEO",
    intro: "Research-led SEO work that tells you what to fix on your website and in what order.",
    packages: [
      {
        tier: "Basic", name: "SEO Starter",
        pkr: "PKR [Your Price]", usd: "$ [Your Price]", from: true,
        duration: "[Your duration]",
        deliverables: [
          "Keyword research for [number] target keywords",
          "On-page review of [number] key pages (titles, headings, meta tags)",
          "Written findings with prioritized fixes",
          "Action checklist you can follow"
        ],
        audience: "Startups and small businesses with a new or small website."
      },
      {
        tier: "Medium", name: "SEO Growth",
        pkr: "PKR [Your Price]", usd: "$ [Your Price]", from: true,
        duration: "[Your duration]",
        deliverables: [
          "Everything in SEO Starter",
          "Complete website SEO audit",
          "Technical SEO check (crawlability, indexing, mobile usability, HTTPS)",
          "Competitor SEO analysis and keyword mapping",
          "Image alt text and internal linking recommendations"
        ],
        audience: "Service businesses, e-commerce stores and software brands with an established website."
      },
      {
        tier: "Premium", name: "SEO Complete",
        pkr: "PKR [Your Price]", usd: "$ [Your Price]", from: true,
        duration: "[Your duration]",
        deliverables: [
          "Everything in SEO Growth",
          "SEO content gap analysis",
          "On-page optimization of [number] pages",
          "Off-page strategy plan",
          "Prioritized SEO action plan and website visibility roadmap",
          "Review call to walk through the findings"
        ],
        audience: "Growing businesses that want a full SEO plan to work from."
      }
    ]
  },
  {
    service: "Local SEO",
    intro: "Help for businesses that serve a specific city or area to be easier to find in local search and on Google Maps.",
    packages: [
      {
        tier: "Basic", name: "Local Starter",
        pkr: "PKR [Your Price]", usd: "$ [Your Price]", from: true,
        duration: "[Your duration]",
        deliverables: [
          "Local SEO audit of your listings, profile and reviews",
          "Google Business Profile optimization guidance (categories, description, services)",
          "Local keyword list",
          "Action checklist"
        ],
        audience: "Single-location businesses such as clinics, salons and restaurants."
      },
      {
        tier: "Medium", name: "Local Growth",
        pkr: "PKR [Your Price]", usd: "$ [Your Price]", from: true,
        duration: "[Your duration]",
        deliverables: [
          "Everything in Local Starter",
          "Google Business Profile setup assistance or optimization",
          "Local competitor analysis",
          "NAP (name, address, phone) consistency check",
          "Business description and service text for your profile",
          "Review response templates"
        ],
        audience: "Local businesses that already have a profile and want it to be complete and consistent."
      },
      {
        tier: "Premium", name: "Local Complete",
        pkr: "PKR [Your Price]", usd: "$ [Your Price]", from: true,
        duration: "[Your duration]",
        deliverables: [
          "Everything in Local Growth",
          "Local landing-page optimization for [number] pages",
          "Local citation audit and recommendations",
          "Google Business Profile post content for [number] posts",
          "Local SEO content strategy"
        ],
        audience: "Businesses with several services or areas that need a full local SEO plan."
      }
    ]
  },
  {
    service: "Content Writing",
    intro: "Original, search-aware writing for your website, blog and product or service pages.",
    packages: [
      {
        tier: "Basic", name: "Content Starter",
        pkr: "PKR [Your Price]", usd: "$ [Your Price]", from: true,
        duration: "[Your duration]",
        deliverables: [
          "[Number] SEO blog posts or web pages of up to [number] words each",
          "Meta title and meta description for each piece",
          "[Number] revision round(s)"
        ],
        audience: "Businesses that need a few well-written pieces to get started."
      },
      {
        tier: "Medium", name: "Content Growth",
        pkr: "PKR [Your Price]", usd: "$ [Your Price]", from: true,
        duration: "[Your duration]",
        deliverables: [
          "Everything in Content Starter",
          "Keyword research and an SEO content brief for each piece",
          "Homepage or service-page copywriting",
          "Proofreading and editing",
          "[Number] revision round(s)"
        ],
        audience: "Businesses publishing regularly or refreshing their main website pages."
      },
      {
        tier: "Premium", name: "Content Complete",
        pkr: "PKR [Your Price]", usd: "$ [Your Price]", from: true,
        duration: "[Your duration]",
        deliverables: [
          "Everything in Content Growth",
          "Blog topic research and a content plan",
          "FAQ content writing",
          "Product or service descriptions",
          "Website content refresh and rewriting for [number] pages"
        ],
        audience: "Businesses that need a full content plan and ongoing website copy."
      }
    ]
  },
  {
    service: "Social Media Marketing",
    intro: "Planning, profile optimization and content support so your social media presence is consistent and clear.",
    packages: [
      {
        tier: "Basic", name: "Social Starter",
        pkr: "PKR [Your Price]", usd: "$ [Your Price]", from: true,
        duration: "[Your duration]",
        deliverables: [
          "Social media account audit",
          "Profile optimization (bio, about section, call-to-action) for [number] platform(s)",
          "Content pillars for your brand",
          "Content calendar for [number] posts"
        ],
        audience: "Small brands and creators who are just starting to build a presence."
      },
      {
        tier: "Medium", name: "Social Growth",
        pkr: "PKR [Your Price]", usd: "$ [Your Price]", from: true,
        duration: "[Your duration]",
        deliverables: [
          "Everything in Social Starter",
          "Monthly content calendar",
          "Captions with calls to action for [number] posts",
          "Post ideas matched to your audience",
          "Engagement strategy (replying to comments and messages)"
        ],
        audience: "Food businesses, service providers and brands that post regularly."
      },
      {
        tier: "Premium", name: "Social Complete",
        pkr: "PKR [Your Price]", usd: "$ [Your Price]", from: true,
        duration: "[Your duration]",
        deliverables: [
          "Everything in Social Growth",
          "Platform-by-platform social media strategy",
          "Competitor social media analysis",
          "Educational and promotional content planning",
          "Content repurposing plan",
          "Monthly planning sheet"
        ],
        audience: "Brands that want a complete social media plan and ongoing monthly planning."
      }
    ]
  }
];

/* The extra card shown after the three packages of every service. */
const CUSTOM_PLAN = {
  tier: "Custom", name: "Custom Plan",
  pkr: "Custom Quote", usd: "", from: false,
  duration: "Agreed with you before work starts",
  deliverables: [
    "A mix of services chosen for your goals",
    "Scope, timeline and deliverables confirmed in writing before work starts",
    "Can combine services from different categories"
  ],
  audience: "Clients whose needs do not fit a standard package."
};

/* Service-page message template for WhatsApp */
const WA_TEMPLATE = (service) =>
  `Hello Noreen, I visited your portfolio and would like to discuss your ${service} service.`;
