

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
// Idioma

(() => {
    const DEFAULT_LANGUAGE = "pt";
    const SUPPORTED_LANGUAGES = ["pt", "en"];
    const STORAGE_KEY = "viniemedia-language";

    let translations = {};

    function getValue(object, path) {
        return path.split(".").reduce((value, key) => value?.[key], object);
    }

    async function loadLanguage(language) {
        const lang = SUPPORTED_LANGUAGES.includes(language)
            ? language
            : DEFAULT_LANGUAGE;

        try {
            const response = await fetch(`./locales/${lang}.json`);

            if (!response.ok) {
                throw new Error(`Erro ao carregar ${lang}.json`);
            }

            translations = await response.json();

            document.documentElement.lang = lang === "pt" ? "pt-PT" : "en";

            document.querySelectorAll("[data-i18n]").forEach(element => {
                const key = element.dataset.i18n;
                const value = getValue(translations, key);

                if (value !== undefined) {
                    element.innerHTML = value;
                }
            });

            document.querySelectorAll("[data-i18n-attr]").forEach(element => {
                const [attribute, key] = element.dataset.i18nAttr.split(":");
                const value = getValue(translations, key);

                if (value !== undefined) {
                    element.setAttribute(attribute, value);
                }
            });

            const title = getValue(translations, "page.title");

            if (title) {
                document.title = title;
            }

            document.querySelectorAll("[data-language]").forEach(button => {
                const isActive = button.dataset.language === lang;

                button.classList.toggle("active", isActive);
                button.setAttribute("aria-pressed", String(isActive));
            });

            localStorage.setItem(STORAGE_KEY, lang);

        } catch (error) {
            console.error("Erro ao mudar idioma:", error);
        }
    }

    document.addEventListener("click", event => {
        const button = event.target.closest("[data-language]");

        if (button) {
            loadLanguage(button.dataset.language);
        }
    });

    window.ViniemediaI18n = {
        changeLanguage: loadLanguage
    };

    const savedLanguage = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANGUAGE;

    loadLanguage(savedLanguage);
})();
