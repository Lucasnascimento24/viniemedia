
document.getElementById("header").innerHTML = `

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&display=swap" rel="stylesheet">

<header class="futuristic-menu"
        style="background-image: url(./assets/img/img.projetos.jpeg); background-position: center;">

    <div class="container-menu-container">

        <div class="logo-container">
            <img src="./assets/img/logo.home.jpeg"
                 alt="Viniemedia"
                 class="logo-img">
        </div>

        <button class="menu-toggle"
                id="menuToggle"
                aria-label="Menu"
                aria-expanded="false">

            <span></span>
            <span></span>
            <span></span>

        </button>

        <nav class="nav-container" id="navContainer">

            <ul class="nav-menu">

                <li class="nav-item">
                    <a href="#"
                       class="nav-link active"
                       onclick="scrollToSection(event, 'inicio')">
                        <span data-i18n="header.home"></span>
                    </a>
                </li>

                <li class="nav-item">
                    <a href="#"
                       class="nav-link"
                       onclick="scrollToSection(event, 'projetos')">
                        <span data-i18n="header.projects"></span>
                    </a>
                </li>

                <li class="nav-item">
                    <a href="#"
                       class="nav-link"
                       onclick="scrollToSection(event, 'QuemSomos')">
                        <span data-i18n="header.about"></span>
                    </a>
                </li>

                <li class="nav-item">
                    <a href="#"
                       class="nav-link"
                       onclick="scrollToSection(event, 'contacto')">
                        <span data-i18n="header.contact"></span>
                    </a>
                </li>

                <li class="nav-item">
                    <div class="language-selector">
                        <button type="button" data-language="pt" class="active">PT</button><p>|</p>
                        <button type="button" data-language="en">EN</button>
                    </div>
                </li>

            </ul>

        </nav>

    </div>

</header>

`;
