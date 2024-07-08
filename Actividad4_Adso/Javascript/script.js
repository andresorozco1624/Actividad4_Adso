var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var identification = document.getElementById("idSelect");
var noIdentification = document.getElementById("noIdentification");
var email = document.getElementById("email");
var password = document.getElementById("password");
var ubication = document.getElementById("ubication");
var phone = document.getElementById("phone");
var country = document.getElementById("country");
var state = document.getElementById("state");
var city = document.getElementById("city");
var description = document.getElementById("description");
var babysitFare = document.getElementById("babysitFare");
var rolSelect = document.getElementById("rolSelect");
var age = document.getElementById("age");
var ageContainer = document.getElementById("ageContainer");
var fare = document.getElementById("fare");



function createObjUser() {
    var objUser = {
        "firstName": firstName.value,
        "lastName": lastName.value,
        "identification": identification.selectedIndex,
        "noIdentification": noIdentification.value,
        "email": email.value,
        "password": password.value,
        "ubication": ubication.value,
        "phone": phone.value,
        "address": findIdAdrress(),
        "rol": rolSelect.selectedIndex,
        "age": age.value,
        "fare": fare.value,
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


function findIdAdrress() {
    for (i = 0; i < data.length; i++) {
        if (data[i].city == city.value) {
            return data[i].id;
        }
    }
}

rolSelect.addEventListener("change", () => {

    if (rolSelect.value == "Niñera") {
        babysitFare.hidden = false;
        fare.required = true;

        try {
            ageContainer.classList.remove("col-6");
            ageContainer.classList.add("col-3");

        } catch (error) {

        }



    }
    else {
        babysitFare.hidden = true;
        fare.required = false;
        fare.value = "";
        try {

            ageContainer.classList.remove("col-3");
            ageContainer.classList.add("col-6");

        } catch (error) {

        }


    }
});



function organizeCountries(data) {
    var flag;
    for (i = 0; i < data.length; i++) {
        for (j = 0; j < country.length; j++) {
            if (data[i].country == country.options[j].value) {
                flag = "NoCreateOption"
            }

        }
        if (flag != "NoCreateOption") {
            newOption = document.createElement("option");
            newOption.innerHTML = `` + data[i].country + ``;
            country.appendChild(newOption);
        }

    }

}



window.addEventListener("load", () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8080/address");
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            data = xhr.response;
            console.log(data);
            organizeCountries(data);
        } else {
            console.log(`Error: ${xhr.status}`);
        }
    };

});


function organizeState(data) {
    var flag;
    for (i = 0; i < data.length; i++) {
        for (j = 0; j < state.length; j++) {
            flag = "Create";
            if (data[i].state == state.options[j].value) {
                flag = "NoCreateOption"
            }

        }
        if (flag != "NoCreateOption") {
            newOption = document.createElement("option");
            newOption.innerHTML = `` + data[i].state + ``;
            state.appendChild(newOption);
            flag = "Create";
        }

    }

}

country.addEventListener("change", () => {

    state.disabled = false;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8080/address/country/" + country.value + "");
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            data = xhr.response;
            console.log(data);
            organizeState(data);
        } else {
            console.log(`Error: ${xhr.status}`);
        }
    };
});


function organizeCity(data1) {

    for (i = 0; i < data1.length; i++) {
        newOption = document.createElement("option");
        newOption.innerHTML = `` + data1[i].city + ``;
        city.appendChild(newOption);
    }

}

state.addEventListener("change", () => {

    city.disabled = false;
    city.innerHTML = `<option></option>`;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8080/address/state/" + state.value + "");
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            data1 = xhr.response;
            console.log(data1);
            organizeCity(data1);
        } else {
            console.log(`Error: ${xhr.status}`);
        }
    };
});














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








