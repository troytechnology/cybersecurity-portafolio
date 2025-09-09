// -------- Navegación con scroll suave --------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// -------- Efecto de animación al hacer scroll --------
const sections = document.querySelectorAll("section");

const options = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-section");
      observer.unobserve(entry.target);
    }
  });
}, options);

sections.forEach(section => {
  section.classList.add("hidden-section");
  observer.observe(section);
});

// -------- Mensaje en la consola (branding) --------
console.log("%cPortafolio Profesional de Libardo Beltrán Yepes 🚀",
            "color:#58a6ff; font-size:16px; font-weight:bold;");
