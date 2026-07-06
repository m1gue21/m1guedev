import {
  DEFAULT_LOCALE,
  STORAGE_KEY,
  translations,
  type Locale,
  getNestedValue,
} from "../i18n/translations";

let currentLocale: Locale = DEFAULT_LOCALE;
let countersInitialized = false;
let i18nInitialized = false;
let revealInitialized = false;
let navSpyInitialized = false;
let mobileMenuInitialized = false;

function getLocale(): Locale {
  const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
  return stored === "en" || stored === "es" ? stored : DEFAULT_LOCALE;
}

function getValue(key: string): string {
  const value = getNestedValue(translations[currentLocale], key);
  return typeof value === "string" ? value : "";
}

function updateMeta() {
  const t = translations[currentLocale].meta;
  document.title = t.title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", t.description);
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", t.title);
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", t.description);
  document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", t.title);
  document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", t.description);
  document.documentElement.lang = currentLocale;
  document.querySelector('meta[property="og:locale"]')?.setAttribute(
    "content",
    currentLocale === "es" ? "es_CO" : "en_US"
  );
}

function updateLangToggle() {
  document.querySelectorAll<HTMLButtonElement>("[data-lang-btn]").forEach((btn) => {
    const lang = btn.dataset.langBtn as Locale;
    const isActive = lang === currentLocale;
    btn.classList.toggle("bg-primary/20", isActive);
    btn.classList.toggle("text-secondary", isActive);
    btn.classList.toggle("text-muted", !isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });
}

function applyTranslations() {
  document.querySelectorAll<HTMLElement>("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (!key) return;
    const value = getValue(key);
    if (value) el.textContent = value;
  });

  document.querySelectorAll<HTMLElement>("[data-i18n-html]").forEach((el) => {
    const key = el.dataset.i18nHtml;
    if (!key) return;
    const value = getValue(key);
    if (value) el.innerHTML = value;
  });

  document.querySelectorAll<HTMLElement>("[data-i18n-highlight-label]").forEach((el) => {
    const index = el.dataset.i18nHighlightLabel;
    if (index === undefined) return;
    const label = translations[currentLocale].about.highlights[Number(index)]?.label;
    if (label) el.textContent = label;
  });

  document.querySelectorAll<HTMLElement>("[data-i18n-hero-stat-label]").forEach((el) => {
    const index = el.dataset.i18nHeroStatLabel;
    if (index === undefined) return;
    const label = translations[currentLocale].hero.stats[Number(index)]?.label;
    if (label) el.textContent = label;
  });

  updateLangToggle();
  updateMeta();
  window.dispatchEvent(new CustomEvent("localechange", { detail: { locale: currentLocale } }));
}

function setLocale(locale: Locale) {
  currentLocale = locale;
  localStorage.setItem(STORAGE_KEY, locale);
  applyTranslations();
}

function initI18n() {
  currentLocale = getLocale();
  applyTranslations();

  if (i18nInitialized) return;
  i18nInitialized = true;

  document.querySelectorAll<HTMLButtonElement>("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.langBtn as Locale;
      if (lang && lang !== currentLocale) setLocale(lang);
    });
  });
}

function animateCounter(el: HTMLElement) {
  const target = el.dataset.counter;
  if (!target || el.dataset.counted === "true") return;

  const match = target.match(/^([\d,]+)(\+?)$/);
  if (!match) {
    el.textContent = target;
    el.dataset.counted = "true";
    return;
  }

  const numeric = parseInt(match[1].replace(/,/g, ""), 10);
  const suffix = match[2] ?? "";
  const hasComma = match[1].includes(",");
  const duration = 1500;
  const start = performance.now();

  el.dataset.counted = "true";

  function format(n: number) {
    const rounded = Math.floor(n);
    return hasComma ? rounded.toLocaleString("en-US") + suffix : String(rounded) + suffix;
  }

  function tick(now: number) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = format(numeric * eased);
    if (progress < 1) requestAnimationFrame(tick);
    else el.textContent = target;
  }

  requestAnimationFrame(tick);
}

function initCounters() {
  if (countersInitialized) return;
  countersInitialized = true;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll<HTMLElement>("[data-counter]").forEach((el) => observer.observe(el));
}

function initScrollReveal() {
  if (revealInitialized) return;
  revealInitialized = true;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  document.querySelectorAll<HTMLElement>("[data-stagger]").forEach((container) => {
    const children = container.querySelectorAll<HTMLElement>(":scope > .reveal-item");
    children.forEach((child, i) => {
      child.style.transitionDelay = `${i * 100}ms`;
      observer.observe(child);
    });
  });
}

function initNavSpy() {
  if (navSpyInitialized) return;
  navSpyInitialized = true;

  const sections = ["about", "stack", "projects", "experience", "contact"];
  const navLinks = document.querySelectorAll<HTMLAnchorElement>(".nav-link");

  function update() {
    const scrollY = window.scrollY + 120;
    let current = "";

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollY) current = id;
    });

    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      link.classList.toggle("active", href === `#${current}`);
    });

    document.querySelectorAll<HTMLAnchorElement>(".mobile-nav-link").forEach((link) => {
      const href = link.getAttribute("href");
      link.classList.toggle("active", href === `#${current}`);
    });
  }

  window.addEventListener("scroll", update, { passive: true });
  update();
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function initMobileMenu() {
  if (mobileMenuInitialized) return;
  mobileMenuInitialized = true;

  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const backdrop = document.getElementById("mobile-menu-backdrop");
  const hamburger = document.getElementById("hamburger");

  function setMenuOpen(isOpen: boolean) {
    mobileMenu?.classList.toggle("is-open", isOpen);
    mobileMenu?.classList.toggle("translate-x-full", !isOpen);
    backdrop?.classList.toggle("hidden", !isOpen);
    backdrop?.classList.toggle("is-open", isOpen);
    menuToggle?.setAttribute("aria-expanded", String(isOpen));
    mobileMenu?.setAttribute("aria-hidden", String(!isOpen));
    backdrop?.setAttribute("aria-hidden", String(!isOpen));
    hamburger?.classList.toggle("open", isOpen);
    document.body.classList.toggle("overflow-hidden", isOpen);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  menuToggle?.addEventListener("click", () => {
    const isOpen = !mobileMenu?.classList.contains("is-open");
    setMenuOpen(isOpen);
  });

  backdrop?.addEventListener("click", closeMenu);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileMenu?.classList.contains("is-open")) {
      closeMenu();
    }
  });

  document.querySelectorAll(".mobile-nav-link").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

export function initApp() {
  initI18n();
  initCounters();
  initScrollReveal();
  initNavSpy();
  initSmoothScroll();
  initMobileMenu();
}

initApp();
document.addEventListener("astro:page-load", initApp);
