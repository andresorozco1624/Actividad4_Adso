/*Mi Cuenta*/



document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    const ratingValue = document.getElementById('rating-value');

    stars.forEach(star => {
        star.addEventListener('click', () => {
            console.log("entre")
            const value = star.getAttribute('data-value');
            ratingValue.textContent = value;

            // Remove 'selected' class from all stars
            stars.forEach(s => s.classList.remove('selected'));

            // Add 'selected' class to the clicked star and previous stars
            star.classList.add('selected');
            let previousSibling = star.previousElementSibling;
            while (previousSibling) {
                previousSibling.classList.add('selected');
                previousSibling = previousSibling.previousElementSibling;
            }
        });
    });
});

dataUser = JSON.parse(localStorage.getItem("dataUser"));

window.addEventListener("load", () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8080/user/currentUser");
    xhr.setRequestHeader("Authorization", "Bearer " + localStorage.getItem("token"));

    xhr.send();
    xhr.responseType = "json";

    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            data = xhr.response;
        }
        else if (xhr.status == 403) {
            window.location.href = "login.html";
            localStorage.removeItem("dataUser");
            localStorage.removeItem("token");
        }
        else {

            console.log(`Error: ${xhr.status}`);
        }
    };

})


window.addEventListener("load", () => {








    const main = document.querySelector("main");
    var card = document.createElement("div");
    card.classList.add("card", "mb-3", "w-100");
    card.innerHTML = `
                <div class="row g-0">
                        <div class="col-md-4">
                            <img src="Images/user.jpg" class="img-thumbnail rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">

                                <div class="row">
                                    <div class="col d-flex flex-row justify-content-center">
                                        <h5 class="card-title text-start d-inline">`+ dataUser.firstName + `  ` + dataUser.lastName + `</h5>
                                        <div class="rating ms-2  d-flex flex-row-reverse" disabled>
                                            <span class="star fs-6" data-value="5">&#9733;</span>
                                            <span class="star fs-6" data-value="4">&#9733;</span>
                                            <span class="star fs-6" data-value="3">&#9733;</span>
                                            <span class="star fs-6" data-value="2">&#9733;</span>
                                            <span class="star fs-6" data-value="1">&#9733;</span>
                                        </div>
                                        <p><small><span class="fs-6" id="rating-value">(5)</span></small></p>


                                    </div>
                                </div>

                                <p class="card-text text-start fw-light">
                                    `+ dataUser.description + `
                                </p>


                                <div class="dataSensible d-flex justify-content-evenly">
                                    <p class="card-text text-start d-inline " id="correo"><small
                                            class="fw-bold">Correo</small>
                                    </p>
                                    <p class="card-text text-start d-inline nofija" id="correoInfo"><small
                                            class="">`+ dataUser.email + `</small>
                                    </p>

                                    <p class="card-text text-start d-inline" id="phone"><small
                                            class="fw-bold">Móvil</small>
                                    </p>

                                    <p class="card-text text-start d-inline nofija" id="phoneInfo"><small
                                            class="">`+ dataUser.phone + `</small>
                                    </p>


                                    <p class="card-text text-start d-inline " id="address"><small class="fw-bold">
                                            Ubicación</small> </p>

                                    <p class="card-text text-start d-inline nofija " id="addressInfo"><small
                                            class="">Atlantico
                                            -Colombia</small> </p>


                                </div>





                            </div>
                        </div>
                    </div>`;
    main.appendChild(card);

});


/*
function domReady() {
    return new Promise((resolve) => {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', resolve);
        } else {
            resolve();
        }
    });
}

domReady().then(() => {
    correo = document.getElementById("correo");
    correoInfo = document.getElementById("correoInfo");

    phone = document.getElementById("phone");
    phoneInfo = document.getElementById("phoneInfo");

    address = document.getElementById("address");
    addressInfo = document.getElementById("addressInfo");

    correo.addEventListener('mouseover', () => {
        correo.classList.add('nofija');
        correoInfo.classList.remove('nofija');
        correoInfo.classList.add('fija');

    })

    correoInfo.addEventListener('mouseleave', () => {
        correo.classList.remove('nofija');
        correoInfo.classList.add('nofija');
        correoInfo.classList.remove('fija');
    })

    phone.addEventListener('mouseover', () => {
        phone.classList.add('nofija');
        phoneInfo.classList.remove('nofija');
        phoneInfo.classList.add('fija');

    });

    phoneInfo.addEventListener('mouseleave', () => {
        phone.classList.remove('nofija');
        phoneInfo.classList.add('nofija');
        phoneInfo.classList.remove('fija');
    });


    address.addEventListener('mouseover', () => {
        address.classList.add('nofija');
        addressInfo.classList.remove('nofija');
        addressInfo.classList.add('fija');

    });

    addressInfo.addEventListener('mouseleave', () => {
        address.classList.remove('nofija');
        addressInfo.classList.add('nofija');
        addressInfo.classList.remove('fija');
    });

})*/











/***************************/