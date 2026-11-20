
 
 document.getElementById("header").innerHTML = `


 <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&display=swap" rel="stylesheet">








 <header class="futuristic-menu" style="background-image: url(./assets/img/img.projetos.jpeg);background-position: center">

        <div class="container-menu-container">
            <!-- Logo na esquerda -->
            <div class="logo-container">
                <!-- Imagem da logo -->
                <img src="./assets/img/logo.home.jpeg"  alt="Viniemidia" class="logo-img">
            </div>
<button class="menu-toggle" id="menuToggle" aria-label="Abrir menu" aria-expanded="false">
    <span></span>
    <span></span>
    <span></span>
</button>
            <nav class="nav-container" id="navContainer">
    <ul class="nav-menu">

        <li class="nav-item">
            <a href="#" class="nav-link active"
               onclick="scrollToSection(event, 'inicio')">
                <span>INÍCIO</span>
            </a>
        </li>

        <li class="nav-item">
            <a href="#"
               onclick="scrollToSection(event, 'projetos')">
                <span>PROJETOS</span>
            </a>
        </li>

        <li class="nav-item">
            <a href="#"
               onclick="scrollToSection(event, 'QuemSomos')">
                <span>QUEM SOMOS</span>
            </a>
        </li>

        <li class="nav-item">
            <a href="#"
               onclick="scrollToSection(event, 'contacto')">
                <span>CONTACTO</span>
            </a>
        </li>

    </ul>
</nav>

        </div>
    </header>  
        `

