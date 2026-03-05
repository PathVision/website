document.addEventListener("DOMContentLoaded", () => {

  const animatedElements = document.querySelectorAll(
    ".fade-up, .fade-in, .reveal"
  );

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // stops observing after animation
      }
    });
  }, {
    threshold: 0.2
  });

  animatedElements.forEach(el => observer.observe(el));

});