

var email = document.getElementById("email");
var password = document.getElementById("password");

/* Form Submission Protocol: This doesn't allow to submit the form, if it is empty */

function createObjUser() {
    var objUser = {
        "email": email.value,
        "password": password.value,
    };

    return JSON.stringify(objUser);

}

function login() {

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8080/login");
    objetjson = createObjUser();
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(objetjson);
    xhr.onload = () => {

        if (xhr.readyState == 4 && xhr.status == 200) {
            const data = xhr.response;
            alert(data);
            if (data != "services.html") {
                window.location.href = "login.html";
            }
            else {
                window.location.href = "services.html";
            }
        } else {
            alert("No funcina");
            console.log(`Error: ${xhr.status}`);
        }
    };

}

function logout() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8080/logout");
    xhr.send();
    xhr.responseType = "json";

    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            data = xhr.response;

        } else {
            console.log(`Error: ${xhr.status}`);
        }
    };
}


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
                    login();

                }

                form.classList.add('was-validated')
            }, false)
        })
})();