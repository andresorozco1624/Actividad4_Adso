

var username = document.getElementById("username");
var password = document.getElementById("password");
var data;
var sentInfo;

/* Form Submission Protocol: This doesn't allow to submit the form, if it is empty */

function createObjUser() {
    var objUser = {
        "username": username.value,
        "password": password.value,
    };

    return JSON.stringify(objUser);

}

function login() {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8080/auth/login");
    objetjson = createObjUser();
    xhr.setRequestHeader("Content-Type", "application/json");
    console.log(objetjson);
    xhr.send(objetjson);
    xhr.onload = () => {

        if (xhr.readyState == 4 && xhr.status == 200) {
            data = xhr.response;
            data = JSON.parse(data);
            localStorage.removeItem("dataUser");
            localStorage.removeItem("token");
            localStorage.setItem("token", data.jwt)
            localStorage.setItem("dataUser", data)
            window.location.href = "services.html";


        } else {
            window.location.href = "login.html";
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
                    alert("Hola");
                    event.preventDefault()
                    event.stopPropagation()
                    login();
                }

                form.classList.add('was-validated')
            }, false)
        })
})();




