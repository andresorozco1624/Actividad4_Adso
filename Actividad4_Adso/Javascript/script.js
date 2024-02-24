
/* this function allows the header and footer to be dynamic".*/
(function () {
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");

    currentWindow = window.location.pathname;
    registerBtnFlag = `display:none;`;
    loginBtnFlag = `display:none;`;

    switch (currentWindow) {
        case "/index.html":
            console.log("entre en el index");
            registerBtnFlag = ``;
            loginBtnFlag = ``;
            break;

        case "/login.html":
            console.log("entre en el login");
            registerBtnFlag = ``;
            loginBtnFlag = `display:none;`;
            break;
        case "/registro.html":
            console.log("entre en el register");
            registerBtnFlag = `display:none;`;
            loginBtnFlag = ``;
            break;
        default:
            registerBtnFlag = `display:none;`;
            loginBtnFlag = `display:none;`;
            break;
    }

    header.innerHTML = `<div class="container">
    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/index.html" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 448 512">
                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <style>
                    svg {
                        fill: white;
                    }
                </style>
                <path
                    d="M224 0a80 80 0 1 1 0 160A80 80 0 1 1 224 0zM436.8 382.8L373.5 462c-16.6 20.7-46.8 24.1-67.5 7.5c-17.6-14.1-22.7-38.1-13.5-57.7l-.8-.1c-38.9-5.6-74.3-25.1-99.7-54.8V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v48c0 .8 0 1.6 .1 2.4l101.4 50.7c23.7 11.9 33.3 40.7 21.5 64.4s-40.7 33.3-64.4 21.5L27.2 427.3c-1.1-.5-2.2-1.1-3.3-1.7c-4.9-2.8-9.2-6.4-12.6-10.6c-4.6-5.4-7.8-11.7-9.6-18.4c-3.3-12-1.9-25.2 4.8-36.6c.6-1.1 1.3-2.2 2-3.2L75.6 256.1c26.7-40.1 71.7-64.1 119.8-64.1h75.2c46.5 0 90.1 22.5 117.2 60.3l50.7 70.9c2.2 3 4 6.1 5.5 9.4c2.9 6.7 4.3 13.8 4 20.8c-.3 10.6-4.2 21-11.2 29.4zM320 332a44 44 0 1 0 -88 0 44 44 0 1 0 88 0z" />
            </svg>
        </a>
    
        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><a href="/index.html" class="nav-link px-2 text-secondary">Inicio</a></li>
            <li>
                <a href="#" class="nav-link px-2 text-white">Encuentra un niñera</a>
            </li>
            <li>
                <a href="#" class="nav-link px-2 text-white">Trabajar con nosostros</a>
            </li>
            <li><a href="#" class="nav-link px-2 text-white">Conocenos</a></li>
        </ul>
    
        <div class="text-end">
    
            <a class="btn btn-outline-light me-2" href="login.html" style="` + loginBtnFlag + `"role="button">Ingresa</a>
    
            <a class="btn" style="background-color: #3c302b; color: #ffff;  ` + registerBtnFlag + `" href="registro.html"
                role="button">Registrate</a>
        </div>
    </div>
    </div>`;
}());


/* This function add bootstrap styles dynamically like is- valid or is-invalid using 
the method blur()  (which works when we remove focus from an element) 
to know if the emails are the same or not, 
this was also applied to the password textboxes */

(function () {
    try {
        document.getElementById("passwordConfirm").addEventListener("blur", (e) => {
            password = document.getElementById("password");
            passwordConfirm = document.getElementById("passwordConfirm");
            passwordFeedback = document.getElementById("passwordFeedback");
            passwordConfirmFeedback = document.getElementById("passwordConfirmFeedback");

            if (password.value != passwordConfirm.value) {
                console.log("Contraseñas diferentes");
                password.classList.add("is-invalid");
                passwordConfirm.classList.add("is-invalid");

                passwordFeedback.innerHTML = "Las contraseñas no coinciden";
                passwordFeedback.classList.add("invalid-feedback");
                passwordFeedback.classList.remove("valid-feedback");

                passwordConfirmFeedback.classList.add("invalid-feedback");
                passwordConfirmFeedback.innerHTML = "Las contraseñas no coinciden";
                passwordConfirmFeedback.classList.remove("valid-feedback");

            }
            else {
                console.log("Contraseñas iguales");
                password.classList.remove("is-invalid");
                passwordConfirm.classList.remove("is-invalid");
                password.classList.add("is-valid");
                passwordConfirm.classList.add("is-valid");



                passwordFeedback.innerHTML = "Las contraseñas iguales";
                passwordFeedback.classList.remove("invalid-feedback");
                passwordFeedback.classList.add("valid-feedback");



                passwordConfirmFeedback.innerHTML = "Las contraseñas iguales";
                passwordConfirmFeedback.classList.remove("invalid-feedback");
                passwordConfirmFeedback.classList.add("valid-feedback");
            }

        }
        );
        document.getElementById("emailConfirm").addEventListener("blur", (e) => {
            email = document.getElementById("email");
            emailConfirm = document.getElementById("emailConfirm");

            if (email.value != emailConfirm.value) {
                console.log("Correos diferentes");
                email.classList.add("is-invalid");
                emailConfirm.classList.add("is-invalid");

                emailFeedback.innerHTML = "Los correos no coinciden";
                emailFeedback.classList.add("invalid-feedback");
                emailFeedback.classList.remove("valid-feedback");

                emailConfirmFeedback.classList.add("invalid-feedback");
                emailConfirmFeedback.innerHTML = "Los correos no coinciden";
                emailConfirmFeedback.classList.remove("valid-feedback");
            }
            else {
                console.log("Correos iguales");

                email.classList.remove("is-invalid");
                emailConfirm.classList.remove("is-invalid");
                email.classList.add("is-valid");
                emailConfirm.classList.add("is-valid");



                emailFeedback.innerHTML = "Los correos son iguales";
                emailFeedback.classList.remove("invalid-feedback");
                emailFeedback.classList.add("valid-feedback");



                emailConfirmFeedback.innerHTML = "Los correos son iguales";
                emailConfirmFeedback.classList.remove("invalid-feedback");
                emailConfirmFeedback.classList.add("valid-feedback");
            }
        }
        );
    } catch (error) {

    }
}());

/* Form Submission Protocol: This doesn't allow to submit the form, if it is empty */
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()


function getAllUser() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8080/user");
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            const data = xhr.response;
            console.log(data);
        } else {
            console.log(`Error: ${xhr.status}`);
        }
    };
}

