

//Menu Hamburguer que faz abrir e fechar 
  const menuToggle = document.getElementById("menuToggle");
  const navContainer = document.getElementById("navContainer");

  menuToggle.addEventListener("click", () => {
    const isOpen = navContainer.classList.toggle("active");
    menuToggle.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", isOpen);
  });

  // Fecha o menu ao clicar em um link (mobile)
  document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
      navContainer.classList.remove("active");
      menuToggle.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });




// Carrossel de imagens


document.addEventListener("DOMContentLoaded", () => {

    const gallery = document.querySelector(".gallery");
    const next = document.querySelector(".carousel-btn.next");
    const prev = document.querySelector(".carousel-btn.prev");

    if (!gallery || !next || !prev) {
        console.error("Elementos do carrossel não encontrados.");
        return;
    }

    next.addEventListener("click", () => {

        const item = gallery.querySelector(".gallery-item");
        const gap = parseFloat(getComputedStyle(gallery).gap) || 0;
        const distance = item.getBoundingClientRect().width + gap;

        gallery.scrollBy({
            left: distance,
            behavior: "smooth"
        });

    });

    prev.addEventListener("click", () => {

        const item = gallery.querySelector(".gallery-item");
        const gap = parseFloat(getComputedStyle(gallery).gap) || 0;
        const distance = item.getBoundingClientRect().width + gap;

        gallery.scrollBy({
            left: -distance,
            behavior: "smooth"
        });

    });

});

// Link no site para poder ir até o ponto desejado
function scrollToSection(event, sectionId) {
    event.preventDefault();

    const section = document.getElementById(sectionId);

    if (section) {
        const menuHeight = document.getElementById("navContainer").offsetHeight;

        const sectionPosition = section.getBoundingClientRect().top
            + window.scrollY
            - menuHeight;

        window.scrollTo({
            top: sectionPosition,
            behavior: "smooth"
        });
    }
}