let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}
if (slides.length > 0) {
  showSlide(currentSlide);
  setInterval(nextSlide, 5000);
}
const filterButtons = document.querySelectorAll(".filter-btn");
const newsCards = document.querySelectorAll(".news-card");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.getAttribute("data-filter");

    newsCards.forEach((card) => {
      if (category === "all" || card.dataset.category === category) {
        card.style.display = "block";
        card.style.opacity = 1;
      } else {
        card.style.opacity = 0;
        setTimeout(() => (card.style.display = "none"), 200);
      }
    });
  });
});
const logoLetters = document.querySelectorAll(".logo-text span");
logoLetters.forEach((letter, index) => {
  letter.style.animation = `fadeInUp 0.5s ease ${(index * 0.1).toFixed(
    1
  )}s both`;
});
document
  .querySelectorAll("a.btn-more, .btn-career, .btn-verify")
  .forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      btn.style.transform = "scale(1.05)";
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "scale(1)";
    });
  });
const style = document.createElement("style");
style.textContent = `
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}`;
document.head.appendChild(style);
