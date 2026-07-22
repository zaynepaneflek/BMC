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
});
