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
          (it) => `<article class="menu-item">
            <div class="menu-item-media"><img src="${it.img}" alt="${it.name}" loading="lazy" width="800" height="600"></div>
            <div class="menu-item-body">
              <div class="menu-item-row"><h4>${it.num ? `${it.num} ` : ""}${it.name}</h4><span class="price">${it.price}</span></div>
              <p>${it.desc}</p>
              ${it.tags && it.tags.length ? `<div class="menu-item-tags">${it.tags.map((t) => `<span>${t}</span>`).join("")}</div>` : ""}
            </div>
          </article>`
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
    initReveal();
    initMenuTabs();
    initYear();
  });
})();
