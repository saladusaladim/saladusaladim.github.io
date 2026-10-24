(() => {
  "use strict";

  /* Lightbox ---------------------------------------------------------------- */

  const groups = new Map();

  document.querySelectorAll(".gallery-link[data-lightbox]").forEach((link) => {
    const key = link.dataset.lightbox;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(link);
  });

  if (groups.size > 0) {
    const dialog = document.createElement("dialog");
    dialog.className = "lightbox";
    dialog.setAttribute("aria-label", "Bildvisare");
    dialog.innerHTML = `
      <button class="lightbox-close" type="button" aria-label="Stäng bildvisaren">×</button>
      <button class="lightbox-nav lightbox-prev" type="button" aria-label="Föregående bild">‹</button>
      <figure>
        <img alt="" decoding="async">
        <figcaption></figcaption>
      </figure>
      <button class="lightbox-nav lightbox-next" type="button" aria-label="Nästa bild">›</button>`;
    document.body.append(dialog);

    const image = dialog.querySelector("img");
    const caption = dialog.querySelector("figcaption");
    const closeButton = dialog.querySelector(".lightbox-close");
    const prevButton = dialog.querySelector(".lightbox-prev");
    const nextButton = dialog.querySelector(".lightbox-next");
    let current = [];
    let index = 0;

    const render = () => {
      const link = current[index];
      image.src = link.href;
      image.alt = link.dataset.alt || "";
      caption.textContent = `${image.alt} · ${index + 1} av ${current.length}`;
      const multiple = current.length > 1;
      prevButton.hidden = !multiple;
      nextButton.hidden = !multiple;
    };

    const open = (list, start) => {
      current = list;
      index = start;
      render();
      dialog.showModal();
    };

    const move = (step) => {
      index = (index + step + current.length) % current.length;
      render();
    };

    groups.forEach((list) => {
      list.forEach((link, i) => {
        link.addEventListener("click", (event) => {
          if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
          event.preventDefault();
          open(list, i);
        });
      });
    });

    closeButton.addEventListener("click", () => dialog.close());
    prevButton.addEventListener("click", () => move(-1));
    nextButton.addEventListener("click", () => move(1));

    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });

    dialog.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        move(1);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        move(-1);
      }
    });
  }

  /* Webcam ----------------------------------------------------------------- */

  const webcam = document.querySelector("[data-webcam]");
  if (webcam) {
    const card = webcam.closest(".now-card");
    const base = webcam.getAttribute("src").split("?")[0];

    webcam.addEventListener("error", () => card.classList.add("is-offline"));
    webcam.addEventListener("load", () => card.classList.remove("is-offline"));

    window.setInterval(() => {
      if (document.hidden) return;
      webcam.src = `${base}?t=${Date.now()}`;
    }, 60000);
  }
})();
