var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var email = document.getElementById("email");
var password = document.getElementById("password");
var address = document.getElementById("address");
var phone = document.getElementById("phone");
var country = document.getElementById("country");
var state = document.getElementById("state");
var city = document.getElementById("city");
var description = document.getElementById("description");



function createObjUser() {
    var objUser = {
        "firstName": firstName.value,
        "lastName": lastName.value,
        "email": email.value,
        "password": password.value,
        "address": address.value,
        "phone": phone.value,
        "country": country.value,
        "state": state.value,
        "city": city.value,
        "description": description.value,

    };

    return JSON.stringify(objUser);

}

function createUser() {

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8080/user");
    objetjson = createObjUser();
    console.log(objetjson);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(objetjson);
    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            const data = xhr.response;
            console.log(data);
        } else {
            alert("No funcina");
            console.log(`Error: ${xhr.status}`);
        }
    };

}

function addUserCard(data) {

    squareGroup = document.getElementById("clientsGroup");
    console.log(data.length)
    for (var i = 0; i < data.length; i++) {
        console.log("data")
        const nuevoDiv = document.createElement("div");
        nuevoDiv.className = "col";
        nuevoDiv.innerHTML = `<div class="card">
            <img src="Images/user.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title"> `+ data[i].firstName + ` ` + data[i].lastName + `</h5>
                <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                In ipsa cupiditate repellat doloremque,
                quisquam sunt dolores nihil nostrum nam similique sed,.</p>

                    <ul class="list-group list-group-flush">
    <li class="list-group-item"><small class="text-muted">`+ data[i].country + `,` + data[i].state + `,` + data[i].city + `</small></li>
  </ul>
                    <a href="#" class="btn btn-primary">Go somewhere</a>       
                    </div>
        </div>`;
        squareGroup.appendChild(nuevoDiv);
    }



};






/* this function allows the header and footer to be dynamic".*/
(function () {
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");

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
    <div class="container">
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
                <a href="/findbabysister.html" class="nav-link px-2 text-white">Encuentra un niñera</a>
            </li>
            <li>
                <a href="/workwithus.html" class="nav-link px-2 text-white">Trabajar con nosostros</a>
            </li>
            <li><a href="/aboutus.html" class="nav-link px-2 text-white">Conocenos</a></li>
        </ul>
    
        <div class="text-end">
    
            <a class="btn btn-outline-light me-2" href="login.html" style="` + loginBtnFlag + `"role="button">Ingresa</a>
    
            <a class="btn" style="background-color: #3c302b; color: #ffff;  ` + registerBtnFlag + `" href="register.html"
                role="button">Registrate</a>
        </div>
    </div>
    </div>`;



    footer.innerHTML = `        <div class="col-md-4 d-flex align-items-center">
    <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
        <svg class="bi" width="30" height="24">
            <use xlink:href="#bootstrap"></use>
        </svg>
    </a>
    <span class="mb-3 mb-md-0 text-body-secondary">© 2023 Company, Inc</span>
</div>

<ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
    <li class="ms-3">
        <a class="text-body-secondary" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                <path
                    d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
            </svg></a>
    </li>
    <li class="ms-3">
        <a class="text-body-secondary" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                <path
                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
            </svg></a>
    </li>
    <li class="ms-3">
        <a class="text-body-secondary" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                <path
                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
            </svg>
        </a>
    </li>
</ul>`;
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
                else {
                    createUser();
                }

                form.classList.add('was-validated')
            }, false)
        })
})();

(function () {
    if (window.location.pathname == "/workwithus.html") {
        getAllUser();

    }
}());

function getAllUser() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8080/user");
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            const data = xhr.response;

            addUserCard(data);
        } else {
            console.log(`Error: ${xhr.status}`);
        }
    };
}

