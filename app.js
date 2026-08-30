(function () {
  "use strict";

  /* ---------- Header: solid background after scroll ---------- */
  function initHeaderScroll() {
    const header = document.querySelector(".site-header");
    if (!header) return;
    const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- Mobile off-canvas menu ---------- */
  function initMobileMenu() {
    const toggle = document.querySelector(".hamburger");
    const menu = document.querySelector(".mobile-menu");
    if (!toggle || !menu) return;
    const close = document.querySelector(".mobile-menu-close");
    const scrim = document.querySelector(".mobile-menu-scrim");

    const open = () => {
      menu.classList.add("open");
      document.body.classList.add("menu-open");
      toggle.setAttribute("aria-expanded", "true");
    };
    const shut = () => {
      menu.classList.remove("open");
      document.body.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
    };

    toggle.addEventListener("click", open);
    close && close.addEventListener("click", shut);
    scrim && scrim.addEventListener("click", shut);
    menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", shut));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") shut();
    });
  }

  /* ---------- Live open/closed status (ekte klokke mot ekte åpningstider) ---------- */
  function getOsloParts() {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/Oslo",
      weekday: "short",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    const parts = fmt.formatToParts(new Date());
    const map = {};
    parts.forEach((p) => (map[p.type] = p.value));
    const weekdayIdx = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }[map.weekday];
    return { weekday: weekdayIdx, minutes: parseInt(map.hour, 10) * 60 + parseInt(map.minute, 10) };
  }
  function toMinutes(hhmm) {
    const [h, m] = hhmm.split(":").map(Number);
    return h * 60 + m;
  }
  function toLabel(hhmm) {
    return hhmm;
  }
  function initStatus() {
    const els = document.querySelectorAll("[data-status]");
    if (!els.length || typeof HOURS_BY_WEEKDAY === "undefined") return;
    const { weekday, minutes } = getOsloParts();
    const today = HOURS_BY_WEEKDAY[weekday];
    const openMin = toMinutes(today.open);
    const closeMin = toMinutes(today.close);

    let html, closedState;
    if (minutes >= openMin && minutes < closeMin) {
      html = `<span class="txt">Open now &middot; closes ${toLabel(today.close)}</span>`;
      closedState = false;
    } else if (minutes < openMin) {
      html = `<span class="txt">Closed &middot; opens today ${toLabel(today.open)}</span>`;
      closedState = true;
    } else {
      const nextDay = HOURS_BY_WEEKDAY[(weekday + 1) % 7];
      html = `<span class="txt">Closed &middot; opens tomorrow ${toLabel(nextDay.open)}</span>`;
      closedState = true;
    }
    els.forEach((el) => {
      el.classList.toggle("closed", closedState);
      const dot = el.querySelector(".dot");
      el.innerHTML = "";
      if (dot) el.appendChild(dot);
      else {
        const d = document.createElement("span");
        d.className = "dot";
        el.appendChild(d);
      }
      el.insertAdjacentHTML("beforeend", html);
    });
  }

  /* ---------- Scroll reveal (IntersectionObserver + CSS, ingen GSAP) ---------- */
  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!items.length) return;
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    items.forEach((el) => io.observe(el));
  }

  /* ---------- Full menu tabs (delt av index.html og meny.html) ---------- */
  function initMenuTabs() {
    const bar = document.querySelector("[data-menu-tabs]");
    const list = document.querySelector("[data-menu-items]");
    if (!bar || !list || typeof MENU_CATEGORIES === "undefined") return;

    bar.innerHTML = MENU_CATEGORIES.map(
      (cat, i) => `<button class="menu-tab${i === 0 ? " active" : ""}" data-key="${cat.key}">${cat.label}</button>`
    ).join("");

    function renderItems(key) {
      const cat = MENU_CATEGORIES.find((c) => c.key === key) || MENU_CATEGORIES[0];
      list.innerHTML = cat.items
        .map(
          (it) => `<article class="menu-item">${it.num ? `<span class="num">${it.num}</span>` : ""}<div><h4>${it.name}</h4><p>${it.desc}</p></div></article>`
        )
        .join("");
    }

    bar.addEventListener("click", (e) => {
      const btn = e.target.closest(".menu-tab");
      if (!btn) return;
      bar.querySelectorAll(".menu-tab").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderItems(btn.dataset.key);
    });

    renderItems(MENU_CATEGORIES[0].key);
  }

  /* ---------- Footer year ---------- */
  function initYear() {
    document.querySelectorAll("[data-year]").forEach((el) => {
      el.textContent = new Date().getFullYear();
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initHeaderScroll();
    initMobileMenu();
    initStatus();
    initReveal();
    initMenuTabs();
    initYear();
  });
})();
