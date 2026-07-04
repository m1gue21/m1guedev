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
}

function updateLangToggle() {
  document.querySelectorAll<HTMLButtonElement>("[data-lang-btn]").forEach((btn) => {
    const lang = btn.dataset.langBtn as Locale;
    const isActive = lang === currentLocale;
    btn.classList.toggle("bg-primary/20", isActive);
    btn.classList.toggle("text-primary", isActive);
    btn.classList.toggle("border-primary/50", isActive);
    btn.classList.toggle("text-muted", !isActive);
    btn.classList.toggle("border-white/10", !isActive);
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

  document.querySelectorAll<HTMLElement>("[data-i18n-highlight-label]").forEach((el) => {
    const index = el.dataset.i18nHighlightLabel;
    if (index === undefined) return;
    const label = translations[currentLocale].about.highlights[Number(index)]?.label;
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

function initNavbar() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  function update() {
    if (window.scrollY > 20) {
      navbar!.classList.add(
        "bg-navy/75",
        "backdrop-blur-xl",
        "backdrop-saturate-150",
        "border-b",
        "border-white/10"
      );
    } else {
      navbar!.classList.remove(
        "bg-navy/75",
        "backdrop-blur-xl",
        "backdrop-saturate-150",
        "border-b",
        "border-white/10"
      );
    }
  }

  window.addEventListener("scroll", update, { passive: true });
  update();
}

function initMobileMenu() {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const iconOpen = document.getElementById("menu-icon-open");
  const iconClose = document.getElementById("menu-icon-close");

  menuToggle?.addEventListener("click", () => {
    const isOpen = mobileMenu?.classList.toggle("hidden") === false;
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    iconOpen?.classList.toggle("hidden", isOpen);
    iconClose?.classList.toggle("hidden", !isOpen);
  });

  document.querySelectorAll(".mobile-nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu?.classList.add("hidden");
      menuToggle?.setAttribute("aria-expanded", "false");
      iconOpen?.classList.remove("hidden");
      iconClose?.classList.add("hidden");
    });
  });
}

function initApp() {
  initI18n();
  initCounters();
  initSmoothScroll();
  initNavbar();
  initMobileMenu();
}

initApp();
document.addEventListener("astro:page-load", initApp);
