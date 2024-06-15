/* this function allows the header and footer to be dynamic".*/
(function () {
    const header = document.querySelector("header");


    currentWindow = window.location.pathname;
    registerBtnFlag = `display:none;`;
    loginBtnFlag = `display:none;`;

    switch (currentWindow) {
        case "/index.html":

            registerBtnFlag = ``;
            loginBtnFlag = ``;
            break;

        case "/login.html":

            registerBtnFlag = ``;
            loginBtnFlag = `display:none;`;
            break;
        case "/register.html":

            registerBtnFlag = `display:none;`;
            loginBtnFlag = ``;
            break;
        default:
            registerBtnFlag = ``;
            loginBtnFlag = ``;
            break;
    }

    header.innerHTML = `
    <nav class="col navbar py-1  ">

            <a class="col-2 navbar-brand" href="/"
                class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <svg xmlns="http://www.w3.org/2000/svg" height="3rem" viewBox="0 0 448 512">
                    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <style>
                        svg {
                            fill: white;
                        }
                    </style>
                    <path
                        d="M224 0a80 80 0 1 1 0 160A80 80 0 1 1 224 0zM436.8 382.8L373.5 462c-16.6 20.7-46.8 24.1-67.5 7.5c-17.6-14.1-22.7-38.1-13.5-57.7l-.8-.1c-38.9-5.6-74.3-25.1-99.7-54.8V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v48c0 .8 0 1.6 .1 2.4l101.4 50.7c23.7 11.9 33.3 40.7 21.5 64.4s-40.7 33.3-64.4 21.5L27.2 427.3c-1.1-.5-2.2-1.1-3.3-1.7c-4.9-2.8-9.2-6.4-12.6-10.6c-4.6-5.4-7.8-11.7-9.6-18.4c-3.3-12-1.9-25.2 4.8-36.6c.6-1.1 1.3-2.2 2-3.2L75.6 256.1c26.7-40.1 71.7-64.1 119.8-64.1h75.2c46.5 0 90.1 22.5 117.2 60.3l50.7 70.9c2.2 3 4 6.1 5.5 9.4c2.9 6.7 4.3 13.8 4 20.8c-.3 10.6-4.2 21-11.2 29.4zM320 332a44 44 0 1 0 -88 0 44 44 0 1 0 88 0z" />
                </svg>
                <span style="color: white;"><Strong class="fs-4">BabySit</Strong></span>
            </a>
            <ul class="col-7 navbar-nav flex-row flex-wrap justify-content-center ps-5">
                <li class="nav-item "><a class="nav-link px-4 text-white" href="">Inicio</a></li>
                <li class="nav-item "><a class="nav-link px-4 text-white" href="">Niñeras</a></li>
                <li class="nav-item "><a class="nav-link px-4 text-white" href="">Trabajos</a></li>
                <li class="nav-item "><a class="nav-link px-4 text-white" href="">Conocenos</a></li>

            </ul>
            <div class="col">
                <div class="dropdown">
                    <a href="#"
                        class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle justify-content-center "
                        id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
                        <span class="userName">Andrés O</span>
                    </a>
                    <ul class="dropdown-menu menu-profile text-small shadow  " aria-labelledby="dropdownUser2">
                        <li><a class="dropdown-item" href="myaccount.html">Mi cuenta</a></li>
                        <li><a class="dropdown-item" href="settings.html">Configuraciones</a></li>
                        <li><a class="dropdown-item" href="faq.html">FAQ</a></li>


                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="#">Salir</a></li>
                    </ul>
                </div>
            </div>

        </nav>`;

}());
