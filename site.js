(() => {
  "use strict";

  const links = window.OUR_ENGINE_LINKS || {};

  document.querySelectorAll("[data-link]").forEach((element) => {
    const key = element.getAttribute("data-link");
    const value = typeof links[key] === "string" ? links[key].trim() : "";

    if (/^https:\/\//i.test(value)) {
      element.href = value;
      element.target = "_blank";
      element.rel = "noopener noreferrer";
      element.hidden = false;
    }
  });

  const hasSupportLink = Boolean(links.sponsors || links.kofi);
  const pendingMessage = document.getElementById("support-pending");
  if (pendingMessage && hasSupportLink) {
    pendingMessage.hidden = true;
  }

  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  const menuButton = document.getElementById("menu-button");
  const navigation = document.getElementById("main-nav");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isExpanded));
      navigation.classList.toggle("is-open", !isExpanded);
    });

    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menuButton.setAttribute("aria-expanded", "false");
        navigation.classList.remove("is-open");
      });
    });
  }
})();
