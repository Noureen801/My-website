/* ==========================================================
   App logic: hash router, page rendering, filters, forms.
   Edit content in data.js, not here.
   ========================================================== */

const app = document.getElementById("app");
const $ = (sel, root = document) => root.querySelector(sel);

function waLink(message) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function waButton(serviceTitle, label = "Ask about this service on WhatsApp") {
  return `<a class="btn btn-whatsapp" href="${waLink(WA_TEMPLATE(serviceTitle))}" target="_blank" rel="noopener">${label}</a>`;
}

/* Profile photo with initials fallback. If the image is missing, the <img> is removed
   (see handlePhotoErrors below) and the initials behind it stay visible. */
function photoHTML(cls, alt) {
  return `<div class="${cls}">
    <span class="photo-fallback" aria-hidden="true">NA</span>
    <img data-photo src="${SITE.profilePhoto}" alt="${alt}" loading="lazy" />
  </div>`;
}

function pageHead(eyebrow, title, lead, crumbs = "") {
  return `<section class="page-head"><div class="container">
    ${crumbs ? `<div class="crumbs">${crumbs}</div>` : ""}
    <p class="eyebrow">${eyebrow}</p>
    <h1>${title}</h1>
    ${lead ? `<p class="lead">${lead}</p>` : ""}
  </div></section>`;
}

/* ---------- Pages ---------- */

function renderHome() {
  const featuredCats = SERVICE_CATEGORIES.filter(c => ["seo", "local-seo", "content-writing", "social-media-marketing"].includes(c.slug));
  const featuredProjects = PROJECTS.slice(0, 3);
  return `
  <section class="hero">
    <div class="container hero-grid">
      <div>
        <p class="eyebrow">${SITE.title}</p>
        <h1>${HERO.heading}</h1>
        <p class="lead">${HERO.sub}</p>
        <p class="skills-line">${HERO.skillsLine}</p>
        <div class="btn-group">
          <a class="btn btn-gold" href="#/portfolio">Explore My Work</a>
          <a class="btn btn-light" href="#/services">Explore My Services</a>
          <a class="btn btn-whatsapp" href="${waLink("Hello Noreen, I visited your portfolio and would like to discuss a project.")}" target="_blank" rel="noopener">Chat on WhatsApp</a>
          <a class="btn btn-light" href="${SITE.cvFile}" download>Download My CV</a>
        </div>
      </div>
      <div class="hero-card">
        ${photoHTML("avatar", "Noreen Aslam, profile photo")}
        <h2 class="hero-name">${SITE.name}</h2>
        <p class="role">Digital Marketer</p>
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="section-head"> <h1>Services</h1> <h3>How I Can Help</h3>
        <p>Explore my services to find the right solution for your needs. Each service includes details about what I offer, what you will receive, and an easy way to connect with me on WhatsApp or Linkedin. It's Upto you</p></div>
      <div class="grid grid-4">
        ${featuredCats.map(c => `
          <a class="card card-link reveal" href="#/services/${c.slug}">
            <span class="count">${c.services.length} services</span>
            <h3>${c.name}</h3>
            <p class="muted">${c.short}</p>
            <span class="btn btn-outline">View services</span>
          </a>`).join("")}
      </div>
    </div>
  </section>

  <section class="section-alt">
    <div class="container">
      <div class="section-head"> <h1> Projects </h1> 
        <p>Here is a look at some of my work in SEO, Local SEO, content writing, and social media. Each project reflects my skills, creativity, and focus on helping brands build their online presence and reach the right audience.</p></div>
      <div class="grid grid-3">
        ${featuredProjects.map(projectCard).join("")}
      </div>
      <p class="mt-24"><a class="btn btn-outline" href="#/portfolio">See all projects</a></p>
    </div>
  </section>

  <section>
    <div class="container grid grid-2 align-start">
      <div>
        <h1> About me </h1>
        <h3>Emerging digital marketer with practical experience in digital marketing journey.</h3>
        <p class="muted">${ABOUT.paragraphs[0]}</p>
        <p><a href="#/about">Read more about me &rarr;</a></p>
      </div>
      <div>
        <h1> Experience </h1>
        <h3>Recent roles</h3>
        ${EXPERIENCE.map(e => `<div class="card card-gap"><h3>${e.role}</h3><p class="muted">${e.company} | ${e.dates}</p></div>`).join("")}
        <p><a href="#/experience">View full experience &rarr;</a></p>
      </div>
    </div>
  </section>

  <section class="section-alt">
    <div class="container">
      <div class="section-head"><h1> My Working Process </h1> <h3>How I work with clients</h3></div>
      <div class="grid grid-4">
        ${PROCESS.map((s, i) => `<div class="card reveal"><div class="step-num">${i + 1}</div><h3>${s.t}</h3><p class="muted">${s.d}</p></div>`).join("")}
      </div>
    </div>
  </section>

  <section>
    <div class="container text-center">
      <h1> Contact Me </h1>
      <h3> Let's Discuss Your Next Project </h3>
      <p class="lead lead-center">Looking for support with SEO, content writing, local search visibility, or social media planning? Tell me about your goals, and let's explore how I can help You to achievieng your goal.</p>
      <div class="btn-group btn-group-center">
        <a class="btn btn-gold" href="#/contact">Send a Message</a>
        <a class="btn btn-whatsapp" href="${waLink("Hello Noreen, I visited your portfolio and would like to discuss a project.")}" target="_blank" rel="noopener">WhatsApp Me</a>
      </div>
    </div>
  </section>`;
}

function projectCard(p) {
  return `<article class="card reveal">
    <div class="project-thumb" aria-hidden="true">${p.thumb}</div>
    <span class="tag">${p.label}</span>
    <h3>${p.title}</h3>
    <p class="muted">${p.overview}</p>
    <a class="btn btn-outline" href="#/portfolio/${p.slug}">View Project</a>
  </article>`;
}

function renderAbout() {
  return `${pageHead("<h1> About me </h1>", "<h3>Digital Marketing Driven by Research & Strategy</h3>", "Research-driven digital marketer with practical experience and a focus on SEO,Digital Marketing,Content Writing,content strategy, and continuous learning.", `<a href="#/">Home</a> / About`)}
  <section>
    <div class="container about-grid">
      <div class="about-text">
        ${ABOUT.paragraphs.map(p => `<p class="muted">${p}</p>`).join("")}
        <h2 class="h-md mt-24">Core skills</h2>
        <ol class="skill-list">${SKILLS.map(s => `<li>${s}</li>`).join("")}</ol>
        <div class="btn-group"><a class="btn btn-gold" href="#/services">View services</a><a class="btn btn-outline" href="${SITE.cvFile}" download>Download CV</a></div>
      </div>
      <aside class="about-photo" aria-label="Profile">
        ${photoHTML("portrait", "Noureen Aslam, digital marketing executive")}
        <h3>${SITE.name}</h3>
        <p class="muted flush">${SITE.location}</p>
      </aside>
    </div>
  </section>
  <section class="section-alt">
    <div class="container">
      <div class="section-head"> <h1> Working process </h1> <h3> How I Work With Clients</h3></div>
      <div class="grid grid-4">${PROCESS.map((s, i) => `<div class="card"><div class="step-num">${i + 1}</div><h3>${s.t}</h3><p class="muted">${s.d}</p></div>`).join("")}</div>
    </div>
  </section>
  <section>
    <div class="container">
      <div class="section-head"> <h1> Why work with me </h1> <h3>My Approach to Your Growth</h3>
        <p>Clear communication, research-backed strategies, and practical recommendations focused on your business goals—without unrealistic promises or guaranteed results. I do not promise rankings or results I cannot control.</p></div>
      <div class="grid grid-3">${WHY_ME.map(w => `<div class="card"><h3>${w.t}</h3><p class="muted">${w.d}</p></div>`).join("")}</div>
    </div>
  </section>`;
}

function renderServicesIndex() {
  return `${pageHead("<h1> Services </h1>", "<h3> Digital Marketing Services & Tailored Solutions </h3>", "Explore my services in SEO, content writing, social media management, and Google Business Profile optimization. Each service focuses on understanding your business needs, researching opportunities, and providing practical solutions to improve online visibility and connect with your target audience.From keyword research and content planning to profile optimization and SEO improvements, I follow a structured, research-driven approach tailored to your goals.", `<a href="#/">Home</a> / Services`)}
  <section>
    <div class="container grid grid-3">
      ${SERVICE_CATEGORIES.map(c => `
        <a class="card card-link reveal" href="#/services/${c.slug}">
          <span class="count">${c.services.length} services</span>
          <h3>${c.name}</h3>
          <p class="muted">${c.short}</p>
          <span class="btn btn-outline">Open category</span>
        </a>`).join("")}
    </div>
    <p class="muted note-after">Have a project in mind?Let’s discuss your goals and explore how my digital marketing services can support your business growth. <a href="#/contact"></a> or <a href="${waLink("Hello Noreen, I visited your portfolio and I am not sure which service I need. Could we talk?")}" target="_blank" rel="noopener">Let's Connect on Whatsapp</a>.</p>
  </section>`;
}

function renderCategory(slug) {
  const cat = SERVICE_CATEGORIES.find(c => c.slug === slug);
  if (!cat) return renderNotFound();
  return `${pageHead("Service category", cat.name, cat.short, `<a href="#/">Home</a> / <a href="#/services">Services</a> / ${cat.name}`)}
  <section>
    <div class="container">
      <div class="card mb-30">
        <h3>Typical deliverables</h3>
        <ul>${cat.deliverables.map(d => `<li>${d}</li>`).join("")}</ul>
        <p class="muted mt-10"><strong>Suitable for:</strong> ${cat.audience}</p>
        <div class="btn-group">${waButton(cat.name, "WhatsApp about this category")}<a class="btn btn-outline" href="#/contact">Send a message</a></div>
      </div>
      <p class="muted mb-24">${cat.services.length} services in this category.</p>
      ${cat.services.map((s, i) => `
        <article class="service-item reveal">
          <h3>${i + 1}. ${s.t}</h3>
          <p>${s.d}</p>
          <p class="label">Business problem it solves</p>
          <p class="muted flush">${s.p}</p>
          <p class="label">Deliverables</p>
          <ul>${cat.deliverables.map(d => `<li>${d}</li>`).join("")}</ul>
          <p class="label">Suitable for</p>
          <p class="muted flush">${cat.audience}</p>
          <div class="mt-14">${waButton(s.t)}</div>
        </article>`).join("")}
    </div>
  </section>`;
}

const FILTERS = ["All", "SEO", "Local SEO", "Content Writing", "Social Media", "LinkedIn", "Research"];

function renderPortfolio() {
  return `${pageHead("<h1> Portfolio </h1>", "<h3> Projects & Practical Experience </h3>", "Digital Marketing, SEO, local SEO, Technical SEO, content writing, and social media projects showcasing my skills, research, and practical learning through internship tasks and self-initiated case studies.", `<a href="#/">Home</a> / Portfolio`)}
  <section>
    <div class="container">
      <div class="filters" role="group" aria-label="Filter projects by category">
        ${FILTERS.map((f, i) => `<button class="filter-btn" type="button" data-filter="${f}" aria-pressed="${i === 0}">${f}</button>`).join("")}
      </div>
      <div class="grid grid-3" id="project-grid">
        ${PROJECTS.map(p => `<div data-cat="${p.category}">${projectCard(p)}</div>`).join("")}
      </div>
      <p id="no-results" class="muted mt-20" hidden>No projects in this category yet.</p>
    </div>
  </section>`;
}

function renderCase(slug) {
  const p = PROJECTS.find(x => x.slug === slug);
  if (!p) return renderNotFound();
  const block = (title, body) => `<div class="card case-block"><h2 class="h-md">${title}</h2>${body}</div>`;
  const list = (items) => `<ul>${items.map(i => `<li>${i}</li>`).join("")}</ul>`;
  const ph = (t) => `<p class="placeholder">${t}</p>`;
  return `
  <section class="page-head"><div class="container">
    <div class="crumbs"><a href="#/">Home</a> / <a href="#/portfolio">Portfolio</a> / ${p.title}</div>
    <span class="tag tag-gold">${p.label}</span>
    <h1>${p.title}</h1>
    <div class="case-meta"><span>${p.category}</span><span>Portfolio work</span></div>
  </div></section>
  <section>
    <div class="container container-narrow">
      ${block("Project overview", `<p>${p.overview}</p>`)}
      ${block("Objective", `<p>${p.objective}</p>`)} 
      ${block("Deliverables", list(p.deliverables))}
      <div class="btn-group">
        ${waButton(p.title, "Discuss a similar project on WhatsApp")}
        <a class="btn btn-outline" href="#/portfolio">Back to portfolio</a>
      </div>
    </div>
  </section>`;
}

function renderExperience() {
  return `${pageHead("<h1> Experience <h1>", "<h3> Professional Experience </h3>", "Hands-on experience in SEO, local SEO, content writing, and digital marketing through Practice and internship roles, with a focus on research, optimization, and online visibility.", `<a href="#/">Home</a> / Experience`)}
  <section>
    <div class="container">
      <div class="timeline">
        ${EXPERIENCE.map(e => `
          <div class="timeline-item">
            <h3>${e.role} | ${e.company}</h3>
            <p class="date">${e.dates}</p>
            <ul>${e.duties.map(d => `<li>${d}</li>`).join("")}</ul>
          </div>`).join("")}
      </div>

    </div>
  </section>`;
}

function renderEducation() {
  return `${pageHead("<h1> Education and certifications <h1>", "<h3> Academic Background & Certifications </h3> ", "My academic background and completed certifications reflect my commitment to continuous learning and developing practical digital marketing skills.", `<a href="#/">Home</a> / Education`)}
  <section>
    <div class="container">
      <h2>Education</h2>
      <div class="grid grid-2 mb-50">
        ${EDUCATION.map(e => `<div class="card"><h3>${e.degree}</h3><p class="muted flush">${e.school}</p>${e.dates ? `<p class="muted">${e.dates}</p>` : ""}</div>`).join("")}
      </div>
      <h2>Certifications</h2>
      <p class="muted mb-24">Select a certificate image for a larger preview, or open the original PDF.</p>
      <div class="cert-grid">
        ${CERTIFICATES.map(certCard).join("")}
      </div>

    </div>
  </section>`;
}

function certCard(c, i) {
  const idText = /^serial/i.test(c.id) ? c.id : `Certificate ID: ${c.id}`;
  return `<article class="cert-card">
    <button type="button" class="cert-thumb" data-lightbox="${i}" aria-label="Open larger preview of the ${c.title} certificate">
      <img data-cert src="${c.image}" alt="${c.title} certificate from ${c.provider}" loading="lazy" />
      <span class="cert-fallback" aria-hidden="true">Preview image not added yet</span>
    </button>
    <div class="cert-body">
      <span class="tag">${c.category}</span>
      <h3>${c.title}</h3>
      <p class="muted flush">${c.provider}</p>
      <p class="muted cert-date">${c.date}</p>
      <p class="cert-id">${idText}</p>
      <div class="cert-actions">
        <a class="btn btn-gold" href="${c.pdf}" target="_blank" rel="noopener">View Certificate</a>
        <a class="btn btn-outline" href="${c.pdf}" download>Download Certificate</a>
      </div>
    </div>
  </article>`;
}

/* ---------- Pricing ---------- */

/* Wraps [bracketed placeholders] in a highlight so they are easy to spot and replace. */
function phText(s) {
  return s.replace(/\[[^\]]+\]/g, m => `<span class="placeholder">${m}</span>`);
}

function priceCard(svc, p) {
  const isCustom = p.tier === "Custom";
  const waMsg = `Hello Noreen, I would like a quote for the ${isCustom ? "custom plan" : `${p.name} package`} (${svc}).`;
  return `<article class="card price-card${isCustom ? " price-card-custom" : ""}">
    <p class="price-tier">${p.tier}</p>
    <p class="price-service-name">${svc}</p>
    <h3>${p.name}</h3>
    <div class="price-box">
      ${p.from ? `<span class="price-from">Starting from</span>` : ""}
      <span class="price">${phText(p.pkr)}</span>
      ${p.usd ? `<span class="price-usd">${phText(p.usd)}</span>` : ""}
    </div>
    <p class="label">Duration</p>
    <p class="muted">${phText(p.duration)}</p>
    <p class="label">What is included</p>
    <ul class="price-list">${p.deliverables.map(d => `<li>${phText(d)}</li>`).join("")}</ul>
    <p class="label">Suitable for</p>
    <p class="muted">${p.audience}</p>
    <div class="price-actions">
      <a class="btn btn-gold" href="${SITE.calendly}" target="_blank" rel="noopener">Get a Quote</a>
      <a class="btn btn-outline" href="${waLink(waMsg)}" target="_blank" rel="noopener">WhatsApp</a>
    </div>
  </article>`;
}

function renderPricing() {
  const filters = ["All", ...PRICING.map(s => s.service)];
  return `${pageHead("Pricing", "Service Packages & Pricing", "Clear packages for SEO, Local SEO, Content Writing, Social Media Marketing, Profile Optimization and Social Media Management. Every package lists what is included, and you can ask for a custom plan if your needs are different.", `<a href="#/">Home</a> / Pricing`)}
  <section>
    <div class="container">
      <div class="card price-note mb-30"><p class="flush"><strong>How pricing works.</strong> ${PRICING_NOTE}</p></div>
      <div class="filters" role="group" aria-label="Filter packages by service">
        ${filters.map((f, i) => `<button class="filter-btn" type="button" data-price-filter="${f}" aria-pressed="${i === 0}">${f}</button>`).join("")}
      </div>
      ${PRICING.map(s => `
        <div class="price-service" data-service="${s.service}">
          <h2>${s.service}</h2>
          <p class="muted price-intro">${s.intro}</p>
          <div class="grid grid-4 price-grid">
            ${[...s.packages, CUSTOM_PLAN].map(p => priceCard(s.service, p)).join("")}
          </div>
        </div>`).join("")}
    </div>
  </section>
  <section class="section-alt">
    <div class="container text-center">
      <h2>Not sure which package fits?</h2>
      <p class="lead lead-center">Book a call and tell me about your business. We can choose a package together or build a custom plan.</p>
      <div class="btn-group btn-group-center">
        <a class="btn btn-gold" href="${SITE.calendly}" target="_blank" rel="noopener">Schedule free consultation</a>
        <a class="btn btn-whatsapp" href="${waLink("Hello Noreen, I visited your pricing page and would like to discuss a package.")}" target="_blank" rel="noopener">WhatsApp Me</a>
      </div>
    </div>
  </section>`;
}

function renderContact() {
  const options = SERVICE_CATEGORIES.map(c => `<option>${c.name}</option>`).join("") + `<option>Not sure yet</option>`;
  return `${pageHead("<h1> Contact Me </h1>", "<h3> Let's Discuss Your Next Project </h3> ", "Looking for support with SEO, content writing, local search visibility, or social media planning? Tell me about your goals, and let's explore how I can help You to grow your business.", `<a href="#/">Home</a> / Contact`)}
  <section>
    <div class="container grid grid-2 align-start">
      <div>
        <h2 class="h-md">Let's Connect</h2>
        <ul class="contact-list">
          <li><strong>Email</strong><a href="mailto:${SITE.email}">${SITE.email}</a></li>
          <li><strong>LinkedIn</strong><a href="${SITE.linkedin}" target="_blank" rel="noopener">linkedin.com/in/noureen-digitalmarketing</a></li>
          <li><strong>WhatsApp</strong><a href="${SITE.whatsappLink}" target="_blank" rel="noopener">+92 347 6792159</a></li>
          <li><strong>Location</strong>${SITE.location}</li>
        </ul>
        <a class="btn btn-whatsapp" href="${waLink("Hello Noreen, I visited your portfolio and would like to discuss a project.")}" target="_blank" rel="noopener">Chat on WhatsApp</a>
      </div>
      <div class="card">
        <h2 class="h-md">Send a message</h2>
        <p class="muted">Share your details and message, and I’ll be happy to connect with you about your needs.</p>
        <form class="form" id="contact-form" novalidate>
          <div class="hp-field" aria-hidden="true"><label>Website <input type="text" name="website" tabindex="-1" autocomplete="off" /></label></div>
          <label>Your name
            <input type="text" name="name" required autocomplete="name" maxlength="80" />
          </label>
          <label>Your email
            <input type="email" name="email" required autocomplete="email" maxlength="120" />
          </label>
          <label>Service required
            <select name="service" required>
              <option value="">Choose one</option>${options}
            </select>
          </label>
          <label>Project details
            <textarea name="details" required maxlength="2000" placeholder="Tell me about your business, goals and timeline."></textarea>
          </label>
          <button class="btn btn-gold" type="submit">Open email with my message</button>
          <div class="status" id="form-status" role="status" aria-live="polite"></div>
        </form>
      </div>
    </div>
  </section>`;
}

function renderNotFound() {
  return `${pageHead("Not found", "This page does not exist", "The link may be out of date.", "")}
  <section><div class="container"><p><a class="btn btn-outline" href="#/">Back to home</a></p></div></section>`;
}

/* ---------- Router ---------- */

const ROUTES = [
  { re: /^\/?$/, render: renderHome, title: "Noureen Aslam | Digital Marketing Executive, SEO & Content", desc: "Noureen Aslam, Digital Marketing Executive offering SEO, local SEO, social media and content writing." },
  { re: /^\/about$/, render: renderAbout, title: "About | Noureen Aslam", desc: "About Noureen Aslam, a research-driven digital marketing professional." },
  { re: /^\/services$/, render: renderServicesIndex, title: "Services | Noreen Aslam", desc: "SEO, local SEO, content writing and social media services." },
  { re: /^\/services\/([a-z-]+)$/, render: (m) => renderCategory(m[1]), title: "Services | Noureen Aslam", desc: "Detailed service list for Noureen Aslam." },
  { re: /^\/pricing$/, render: renderPricing, title: "Pricing | Noureen Aslam", desc: "Service packages for SEO, local SEO, content writing, social media marketing, profile optimization and social media management, with a custom plan option." },
  { re: /^\/portfolio$/, render: renderPortfolio, title: "Portfolio | Noureen Aslam", desc: "Sample SEO, local SEO, content and social media projects. Demo projects are labeled." },
  { re: /^\/portfolio\/([a-z-]+)$/, render: (m) => renderCase(m[1]), title: "Case Study | Noureen Aslam", desc: "Case study by Noureen Aslam." },
  { re: /^\/experience$/, render: renderExperience, title: "Experience | Noureen Aslam", desc: "Internship experience in SEO and digital marketing." },
  { re: /^\/education$/, render: renderEducation, title: "Education and Certifications | Noureen Aslam", desc: "Education and certifications." },
  { re: /^\/contact$/, render: renderContact, title: "Contact | Noureen Aslam", desc: "Contact Noureen Aslam by WhatsApp, email or LinkedIn." }
];

function currentPath() {
  const hash = window.location.hash.replace(/^#/, "");
  const path = hash.split("?")[0];
  return path.startsWith("/") ? path : "/" + path;
}

function setMeta(title, desc) {
  document.title = title;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", desc);
}

function setActiveNav(path) {
  document.querySelectorAll(".main-nav a").forEach(a => {
    const href = a.getAttribute("href").replace("#", "");
    const active = href === "/" ? path === "/" : path.startsWith(href) && href !== "";
    a.classList.toggle("active", active && !a.classList.contains("nav-cta"));
  });
}

function route() {
  const path = currentPath();
  let html = null, meta = null;
  for (const r of ROUTES) {
    const m = path.match(r.re);
    if (m) { html = r.render(m); meta = r; break; }
  }
  if (!html) { html = renderNotFound(); meta = { title: "Not found | Noureen Aslam", desc: "Page not found." }; }
  closeLightbox();
  app.innerHTML = html;
  setMeta(meta.title, meta.desc);
  setActiveNav(path);
  window.scrollTo({ top: 0, behavior: "auto" });
  app.focus({ preventScroll: true });
  bindPage(path);
  closeMenu();
}

/* ---------- Page behaviors ---------- */

function bindPage(path) {
  if (path === "/portfolio") {
    const buttons = document.querySelectorAll(".filter-btn");
    buttons.forEach(btn => btn.addEventListener("click", () => {
      const f = btn.dataset.filter;
      buttons.forEach(b => b.setAttribute("aria-pressed", String(b === btn)));
      let visible = 0;
      document.querySelectorAll("#project-grid > div").forEach(item => {
        const show = f === "All" || item.dataset.cat === f || (f === "Social Media" && item.dataset.cat === "Social Media");
        item.style.display = show ? "" : "none";
        if (show) visible++;
      });
      $("#no-results").hidden = visible > 0;
    }));
  }
  if (path === "/pricing") {
    const buttons = document.querySelectorAll("[data-price-filter]");
    buttons.forEach(btn => btn.addEventListener("click", () => {
      const f = btn.dataset.priceFilter;
      buttons.forEach(b => b.setAttribute("aria-pressed", String(b === btn)));
      document.querySelectorAll(".price-service").forEach(sec => {
        sec.style.display = (f === "All" || sec.dataset.service === f) ? "" : "none";
      });
    }));
  }
  if (path === "/contact") bindContactForm();
  observeReveal();
}

function bindContactForm() {
  const form = $("#contact-form");
  const status = $("#form-status");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    // Honeypot: real visitors never fill this hidden field. Bots often do.
    if (data.get("website")) { status.className = "status show ok"; status.textContent = "Thank you. Your message has been prepared."; return; }

    const name = (data.get("name") || "").trim();
    const email = (data.get("email") || "").trim();
    const service = data.get("service") || "";
    const details = (data.get("details") || "").trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);

    if (!name || !emailOk || !service || !details) {
      status.className = "status show err";
      status.textContent = "Please fill in your name, a valid email, a service and project details.";
      return;
    }

    const subject = `Project inquiry: ${service}`;
    const body = `Name: ${name}\nEmail: ${email}\nService required: ${service}\n\nProject details:\n${details}`;
    status.className = "status show ok";
    status.textContent = "Your email app should open with your message. Review it and press send. If nothing opens, email me directly at " + SITE.email + ".";
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
  /* To receive messages on a server instead of the visitor's email app, replace the
     mailto redirect with a POST to a form service such as Formspree, then show the
     success or error response in #form-status. */
}

function observeReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { items.forEach(i => i.classList.add("in")); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.12 });
  items.forEach(i => io.observe(i));
}

/* ---------- Mobile menu ---------- */

const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("main-nav");
function closeMenu() { nav.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); }
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});

/* ---------- Photos and CV button ---------- */

function handlePhotoErrors() {
  // error events do not bubble, so listen in the capture phase; this covers photos rendered later.
  document.addEventListener("error", (e) => {
    if (e.target.matches && e.target.matches("img[data-photo]")) e.target.remove();
  }, true);
  // Images that already failed before this script ran.
  document.querySelectorAll("img[data-photo]").forEach(img => {
    if (img.complete && img.naturalWidth === 0) img.remove();
  });
}
handlePhotoErrors();

/* ---------- Certificate previews and lightbox ---------- */

/* If a preview image has not been uploaded yet, show a plain tile instead of a broken image. */
document.addEventListener("error", (e) => {
  const t = e.target;
  if (t.matches && t.matches("img[data-cert]")) {
    const btn = t.closest(".cert-thumb");
    if (btn) { btn.classList.add("cert-missing"); btn.disabled = true; }
    t.remove();
  }
}, true);

let lbOpener = null;
let lbCurrent = -1;

function ensureLightbox() {
  let lb = document.getElementById("lightbox");
  if (lb) return lb;
  lb = document.createElement("div");
  lb.id = "lightbox";
  lb.className = "lightbox";
  lb.hidden = true;
  lb.setAttribute("role", "dialog");
  lb.setAttribute("aria-modal", "true");
  lb.setAttribute("aria-label", "Certificate preview");
  lb.innerHTML = `<div class="lb-inner">
    <button type="button" class="lb-close" aria-label="Close preview">&times;</button>
    <button type="button" class="lb-nav lb-prev" aria-label="Previous certificate">&#8249;</button>
    <figure class="lb-figure">
      <img id="lb-img" alt="" />
      <figcaption id="lb-cap"></figcaption>
    </figure>
    <button type="button" class="lb-nav lb-next" aria-label="Next certificate">&#8250;</button>
  </div>`;
  document.body.appendChild(lb);
  lb.addEventListener("click", (e) => {
    if (e.target === lb || e.target.closest(".lb-close")) closeLightbox();
    else if (e.target.closest(".lb-prev")) stepLightbox(-1);
    else if (e.target.closest(".lb-next")) stepLightbox(1);
  });
  return lb;
}

function showLightbox(i) {
  const c = CERTIFICATES[i];
  if (!c) return;
  lbCurrent = i;
  const img = document.getElementById("lb-img");
  img.src = c.image;
  img.alt = `${c.title} certificate from ${c.provider}`;
  document.getElementById("lb-cap").innerHTML =
    `<strong>${c.title}</strong><span>${c.provider} | ${c.date}</span>
     <a class="btn btn-gold" href="${c.pdf}" target="_blank" rel="noopener">View Certificate</a>`;
}

function openLightbox(i, opener) {
  const lb = ensureLightbox();
  lbOpener = opener || null;
  showLightbox(i);
  lb.hidden = false;
  document.body.classList.add("lb-open");
  lb.querySelector(".lb-close").focus();
}

function closeLightbox() {
  const lb = document.getElementById("lightbox");
  if (!lb || lb.hidden) return;
  lb.hidden = true;
  document.body.classList.remove("lb-open");
  if (lbOpener && document.contains(lbOpener)) lbOpener.focus();
  lbOpener = null;
}

/* Previous/next only visit certificates whose preview image actually loaded. */
function stepLightbox(dir) {
  const ids = [...document.querySelectorAll(".cert-thumb:not(.cert-missing)")].map(b => Number(b.dataset.lightbox));
  if (ids.length < 2) return;
  const pos = ids.indexOf(lbCurrent);
  showLightbox(ids[(pos + dir + ids.length) % ids.length]);
}

document.addEventListener("click", (e) => {
  const btn = e.target.closest && e.target.closest("[data-lightbox]");
  if (btn && !btn.disabled) openLightbox(Number(btn.dataset.lightbox), btn);
});

document.addEventListener("keydown", (e) => {
  const lb = document.getElementById("lightbox");
  if (!lb || lb.hidden) return;
  if (e.key === "Escape") closeLightbox();
  else if (e.key === "ArrowLeft") stepLightbox(-1);
  else if (e.key === "ArrowRight") stepLightbox(1);
  else if (e.key === "Tab") {
    // Keep keyboard focus inside the open preview.
    const f = [...lb.querySelectorAll("button, a[href]")].filter(el => el.offsetParent !== null);
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});

document.getElementById("cv-float").href = SITE.cvFile;

document.getElementById("year").textContent = new Date().getFullYear();
window.addEventListener("hashchange", route);
route();
