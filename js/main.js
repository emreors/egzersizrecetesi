document.addEventListener("DOMContentLoaded", () => {
  // Sayfa açılışta fade-in
  document.body.classList.add("fade-in");

  // CTA ve footer görünür olsun (eğer varsa)
  const cta = document.querySelector("#call-to-action");
  if (cta) cta.classList.add("reveal");

  const footer = document.querySelector("footer");
  if (footer) footer.classList.add("reveal");

  // === "Öğrenmeye Başla" Butonu (Anasayfa için) ===
  const startBtn = document.getElementById("start-btn");
  if (startBtn) {
    startBtn.addEventListener("click", e => {
      e.preventDefault();
      document.body.classList.add("fade-out");
      const target = startBtn.getAttribute("href");
      setTimeout(() => {
        window.location.href = target;
      }, 600);
    });
  }

  // === Kartlara tıklanınca fade-out + yönlendirme (directory ve alt sayfalar) ===
  document.querySelectorAll(".feature-card").forEach(card => {
    card.addEventListener("click", e => {
      e.preventDefault();
      document.body.classList.add("fade-out");
      const target = card.dataset.link;
      setTimeout(() => {
        window.location.href = target;
      }, 500);
    });
  });

  // === ScrollReveal Animasyonları ===
  if (typeof ScrollReveal !== "undefined") {
    ScrollReveal().reveal(".feature-card.large, #features, footer", {
      delay: 100,
      distance: "40px",
      origin: "bottom",
      duration: 900,
      easing: "ease-out",
      interval: 120
    });
  }
});
