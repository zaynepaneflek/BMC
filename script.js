document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".reveal").forEach((section) => observer.observe(section));

  const brandImage = document.querySelector(".brand-mark img");
  if (brandImage) {
    brandImage.addEventListener("error", () => {
      brandImage.style.display = "none";
      brandImage.parentElement.classList.add("fallback");
    });
  }

  // Carousel initialization
  let currentSlideIndex = 1;
  let carouselInterval;

  function showSlide(n) {
    const slides = document.querySelectorAll(".carousel-slide");
    const dots = document.querySelectorAll(".dot");

    if (n > slides.length) {
      currentSlideIndex = 1;
    }
    if (n < 1) {
      currentSlideIndex = slides.length;
    }

    slides.forEach((slide) => slide.classList.remove("active"));
    dots.forEach((dot) => dot.classList.remove("active"));

    if (slides[currentSlideIndex - 1]) {
      slides[currentSlideIndex - 1].classList.add("active");
    }
    if (dots[currentSlideIndex - 1]) {
      dots[currentSlideIndex - 1].classList.add("active");
    }
  }

  window.changeSlide = function (n) {
    currentSlideIndex += n;
    clearInterval(carouselInterval);
    showSlide(currentSlideIndex);
    autoRotate();
  };

  window.currentSlide = function (n) {
    currentSlideIndex = n;
    clearInterval(carouselInterval);
    showSlide(currentSlideIndex);
    autoRotate();
  };

  function autoRotate() {
    carouselInterval = setInterval(() => {
      currentSlideIndex++;
      showSlide(currentSlideIndex);
    }, 5000);
  }

  // Initialize carousel
  showSlide(currentSlideIndex);
  autoRotate();
});
