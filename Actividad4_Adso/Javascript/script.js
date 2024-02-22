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

