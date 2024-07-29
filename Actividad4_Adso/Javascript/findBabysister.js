
var data;
var cards;
var babysitSelected;
var date;
var duration;
var nchildren;
var indications;
var fare;
var currentFare;
var modalForm;

var createBtn = document.getElementById("createBtn");

try {
    var userId = localStorage.getItem("dataUser");
    userId = JSON.parse(userId).id;

} catch (error) {

}



function addBabysits(data) {

    //data = JSON.stringify(data);
    const babysitGroup = document.querySelector(".babysitGroup");

    for (i = 0; i < data.length; i++) {
        const newBabysit = document.createElement('div');
        newBabysit.classList.add("col-6", "d-flex", "justify-content-between", "containerBabysits");
        newBabysit.innerHTML = `
            <div class="card mb-3 w-100 " data-bs-toggle="modal" data-bs-target="#staticBackdrop`+ data[i].id + `" id="` + data[i].id + `">
                <div class="row g-0">
                    <div class="col-4 d-flex align-items-center">
                        <img src="Images/user.jpg" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-8">
                        <div class="card-body pt-2">
                            <div class="row">
                                <div class="col d-flex flex-row justify-content-between  ">
                                    <div>
                                        <h5 class="card-title text-start d-inline">`+ data[i].firstName + ` ` + data[i].lastName.at() + `.` + `</h5>
                                        <svg class="bi saveUser  " width="15" height="15"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                                            <path
                                            d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                                            <style>
                                                svg {
                                                        fill: rgb(208, 206, 206);
                                                     }
                                            </style>
                                        </svg>
                                    </div>


                                    <div
                                        class="rating ms-2  d-flex flex-row-reverse align-items-center ">
                                        <span class="numServices " id="rating-value">(5)</span>
                                        <span class="star " data-value="4">&#9733;</span>
                                        <span class="star " data-value="3">&#9733;</span>
                                        <span class="star " data-value="2">&#9733;</span>
                                        <span class="star " data-value="5">&#9733;</span>
                                        <span class="star " data-value="1">&#9733;</span>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div-col class="text-start">
                                    <span class="card-text">`+ data[i].address.city + `</span>
                                </div-col>
                            </div>

                            <p class="card-text text-start fw-light overflow-hidden">
                                `+ data[i].description + `
                            </p>
                            <div class="dataSensible d-flex justify-content-between">
                                <p class="p-1" id="correo"><small class="fw-bold">`+ data[i].age + `
                                        años</small>
                                </p>
                                <p class="p-1 text-start d-inline " id="correo"><small
                                        class="fw-bold fare">$ `+ data[i].fare + `/h</small>
                                </p>
                            </div>
                        </div>
                    </div>
             </div>
         </div>
        <div class="modal fade" id="staticBackdrop`+ data[i].id + `" data-bs-backdrop="static" data-bs-keyboard="false"
                        tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog .modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">`+ data[i].firstName + ` ` + data[i].lastName + `</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="" class="needs-validation " novalidate>
                            <div class="row d-flex justify-content-center mb-3 ">
                                <div class="form-floating d-flex justify-content-center">
                                    <img src="Images/user.jpg" class="img-fluid rounded-start" alt="...">
                                </div>

                            </div>
                            <div class="row d-flex justify-content-center mb-3 ">
                                <div class="form-floating col-11">
                                    <span class="card-text">`+ data[i].address.city + `</span>
                                </div>
                            </div>

                            <div class="row d-flex justify-content-center mb-3 ">
                                <div class="form-floating col-11">
                                    <p class="card-text text-start fw-light mb-5">
                                        `+ data[i].description + `
                                    </p>
                                </div>
                            </div>
                                       

                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger"
                                        data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" class="btn hireBtn" data-bs-toggle="modal" data-bs-target="#hireService">Contratar</button>
                    </div>
                </div>
            </div>
        </div>

        
    
        
        `;

        babysitGroup.appendChild(newBabysit);


    }


}

var myToast = document.querySelector('.toast');
var toast = new bootstrap.Toast(myToast);












window.addEventListener("load", () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8080/user/babysits");
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            data = xhr.response;
            console.log(data);
            addBabysits(data);
            date = document.getElementById("date");
            duration = document.getElementById("duration");
            nchildren = document.getElementById("nchildren");
            indications = document.getElementById("indications");
            fare = document.getElementById("fare");

            cards = document.querySelectorAll(".card");
            cards.forEach(card => {
                card.addEventListener("click", (event) => {
                    babysitSelected = card.id;
                    currentFare = card.querySelector(".fare").getInnerHTML().split(" ")[1].split("/")[0];
                    document.querySelector(".backModal").setAttribute("data-bs-target", "#staticBackdrop" + card.id);
                    fare.value = currentFare;

                })
            });
            if (userId == null) {
                document.querySelectorAll(".hireBtn").forEach(createBtn => {
                    createBtn.removeAttribute("data-bs-toggle");
                    createBtn.removeAttribute("data-bs-target");
                    createBtn.setAttribute("data-bs-dismiss", "modal");

                    createBtn.addEventListener("click", (event) => {

                        toast.show();

                    })
                });
            }
            else {
                document.querySelectorAll(".hireBtn").forEach(createBtn => {

                    createBtn.removeAttribute("data-bs-dismiss");
                    createBtn.setAttribute("data-bs-toggle", "modal");
                    createBtn.setAttribute("data-bs-target", "#hireService");

                });

            }



        } else {
            console.log(`Error: ${xhr.status}`);
        }
    };

});

function createService() {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8080/service");
    objetjson = createObjectService();
    console.log(objetjson);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", "Bearer " + localStorage.getItem("token"));

    xhr.send(objetjson);
    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            const data = xhr.response;
            console.log(data);
            location.reload();

        } else {
            alert("No funcina");
            console.log(`Error: ${xhr.status}`);
        }
    };
}





function createObjectService() {
    var objService = {
        "date": date.value,
        "hour": "PT" + duration.value + "H",
        "noChildren": nchildren.value,
        "indication": indications.value,
        "fare": fare.value,
        "babysitId": babysitSelected,
        "userId": userId,
    };
    return JSON.stringify(objService);
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
                    createService();
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})();



function getAllBabysit() {

}

