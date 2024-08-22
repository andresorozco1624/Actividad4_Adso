

var date = document.getElementById("date");
var duration = document.getElementById("duration");
var nchildren = document.getElementById("nchildren");
var indications = document.getElementById("indications");
var fare = document.getElementById("fare");





var all = document.getElementById("all");
var requested = document.getElementById("requested");
var reserved = document.getElementById("reserved");
var inProgress = document.getElementById("inProgress");
var canceled = document.getElementById("canceled");
var completed = document.getElementById("completed");


var cards;
var selectedService;


const States = Object.freeze({
    REQUESTED: 'REQUESTED',
    RESERVED: 'RESERVED',
    IN_PROGRESS: 'IN_PROGRESS',
    CANCELED: 'CANCELED',
    COMPLETED: 'COMPLETED'
});



const url = "http://localhost:8080/service";




var data;
var userData;
var nameFile;

function createObjectService() {
    var objService = {
        "date": date.value,
        "hour": "PT" + duration.value + "H",
        "noChildren": nchildren.value,
        "indication": indications.value,
        "fare": fare.value,
        "userId": userId
    };
    return JSON.stringify(objService);
}


function createService() {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url);
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


function addServices(data) {

    //data = JSON.stringify(data);
    const servicesCard = document.querySelector(".servicesCard");

    servicesCard.innerHTML = ``;

    for (i = 0; i < data.length; i++) {
        const newService = document.createElement('div');
        serviceId = 1000 + data[i].id
        newService.id = data[i].id;
        newService.setAttribute("state", data[i].state);
        newService.classList.add("card", "border-primary", "mb-3", "ms-2");

        var babysitName = "";
        var clientName = "";

        var gruopButtons = "d-none";

        var waitText = "d-none";

        var changeBtn = "d-none";
        var textBtn = "¿En curso?";
        var paymentFile = "d-none";
        var paymentCol = "col";
        var payFileDiv = "d-none";
        var btnDanger = "d-none";
        var textBtnCanceled = "Cancelar";








        if (data[i].babysitName != null && userData.rol.title == "CLIENT") {
            babysitName = data[i].babysitName;
            if (data[i].state == States.REQUESTED) {
                gruopButtons = "d-none";
                btnDanger = "";
            }
            if (data[i].state == States.RESERVED) {

                gruopButtons = "d-none";
                changeBtn = "";
                btnDanger = "col-6";
                if (data[i].flagClient == true) {
                    changeBtn = "d-none";
                    waitText = "";
                }
            }
            if (data[i].state == States.IN_PROGRESS) {
                gruopButtons = "d-none";
                changeBtn = "";
                paymentFile = "";
                paymentCol = "col-3";
                textBtn = "Pagar";

                if (data[i].flagClient == true) {
                    changeBtn = "d-none";
                    gruopButtons = "d-none";
                    waitText = "";
                }
            }
            if (data[i].state == States.COMPLETED) {
                gruopButtons = "d-none";
                changeBtn = "d-none";
            }
        }

        if (data[i].clientName != null && userData.rol.title == "BABYSIT") {
            clientName = data[i].clientName;
            if (data[i].state == States.REQUESTED) {
                gruopButtons = "";
            }
            if (data[i].state == States.RESERVED) {
                gruopButtons = "d-none";
                changeBtn = "";
                btnDanger = "col-6";

                if (data[i].flagBabysit == true) {
                    changeBtn = "d-none";
                    waitText = "";
                }
            }
            if (data[i].state == States.IN_PROGRESS) {

                if (data[i].flagClient == true) {
                    gruopButtons = "d-none";
                    changeBtn = "";
                    paymentFile = "d-none";
                    payFileDiv = "";
                    paymentCol = "col-3";
                    btnDanger = "col-3";
                    textBtn = "Aceptar";
                    textBtnCanceled = "Recobrar";
                }
                else {
                    gruopButtons = "d-none";
                    changeBtn = "d-none";
                    waitText = "";
                }

            }
            if (data[i].state == States.COMPLETED) {
                gruopButtons = "d-none";
                changeBtn = "d-none";

            }
        }







        newService.innerHTML = ` 
                            <div class="card-header d-flex justify-content-around">
                                <div><span>`+ serviceId + `</span></div>
                                <div><span id="requester">`+ babysitName + clientName + ` </span></div>
                                <div><span>$ `+ data[i].fare + `  </span>(` + data[i].hour.split("T")[1].toLowerCase() + `)</div>

                            </div>
                            <div class="card-body   m-0 pt-2 pb-0">
                                <div class="row card-text d-flex justify-content-center" style="max-height: 27vh;">
                                    <div class=" col">
                                        <ul class="">
                                            <li>`+ data[i].date.split("T")[0] + `</li>
                                            <li>`+ data[i].state + `</li>
                                        </ul>
                                    </div>
                                    <div class="col">
                                        <ul class="">
                                            <li>`+ data[i].date.split("T")[1] + `</li>
                                            <li># Niños: `+ data[i].noChildren + `</li>
                                        </ul>
                                    </div>
                                    
                                </div>

                                <div class="seeMore">
                                    <hr class="mb">
                                    <button class="btn btn-primary btnSeeMore" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseExample`+ i + `" aria-expanded="false"
                                        aria-controls="collapseExample">
                                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                                            <path
                                                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
                                        </svg>
                                    </button>
                                </div>

                                <div class="collapse  mb-4" id="collapseExample`+ i + `">
                                    <div class="descriptionService">
                                        `+ data[i].indication + `
                                    </div>
                                </div>
                                
                                
                                        <p class="`+ waitText + `">Esperando confirmación...</p>
                                        <div class="row btn-group shadow border mt-0 w-100 mb-2 `+ gruopButtons + `" role="group" >
                                            <a href="#" class="btn border-end btn-danger col-6"><strong>Cancelar</strong></a>
                                            <a href="#" class="btn btn-success col-6"><strong>Aceptar</strong> </a>
        
                                        </div>
                                        <div class="row shadow  border mt-0 w-100 mb-2 rounded `+ changeBtn + `"  >
                                            <input type="file" placeholder="Sube tu soporte"   class="form-control payDocument col  `+ paymentFile + `" />
                                            <a href="http://localhost/payments/" class="btn col documentBtn d-flex align-items-baseline justify-content-center ` + payFileDiv + `"><svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z"/> <style>
                        .documentBtn svg {
                            fill: gray;
                        }
                    </style></svg>Soporte de Pago</a>
                                            <a href="#" class="btn border-end btn-danger  `+ btnDanger + `"><strong>` + textBtnCanceled + `</strong></a>
                                            <a href="#" class="btn btn-success `+ paymentCol + `"><strong>` + textBtn + `</strong></a>
        
                                        </div>


                                        
                               
                            </div>
                        `;


        servicesCard.appendChild(newService);
        getNameFile(1000 + parseInt(data[i].id), i);


    }


}

all.addEventListener("click", () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url + "/" + userId);
    xhr.setRequestHeader("Authorization", "Bearer " + localStorage.getItem("token"));
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            data = xhr.response;
            console.log(data);
            addServices(data);
        } else {
            console.log(`Error: ${xhr.status}`);
        }
    };


});

requested.addEventListener("click", () => {
    console.log("Entre");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url + "/" + userId + "/state/" + States.REQUESTED);
    xhr.setRequestHeader("Authorization", "Bearer " + localStorage.getItem("token"));

    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            data = xhr.response;
            console.log(data);
            addServices(data);
            cards = document.querySelectorAll(".card");
            cards.forEach(card => {
                card.addEventListener("click", () => {
                    console.log("click");
                })
            })

        } else {
            console.log(`Error: ${xhr.status}`);
        }
    };

});

window.addEventListener("load", () => {

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8080/user/currentUser");
    xhr.setRequestHeader("Authorization", "Bearer " + localStorage.getItem("token"));

    xhr.send();
    xhr.responseType = "json";

    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            userData = xhr.response;
            localStorage.setItem("dataUser", JSON.stringify(userData));
            userId = userData.id;

            getAllRequested();
            cards = document.querySelectorAll(".card");
            cards.forEach(card => {
                card.addEventListener("click", () => {
                    console.log("click");
                })
            })


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

});

reserved.addEventListener("click", () => {
    console.log("Entre");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url + "/" + userId + "/state/" + States.RESERVED);
    xhr.setRequestHeader("Authorization", "Bearer " + localStorage.getItem("token"));

    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            data = xhr.response;
            console.log(data);
            addServices(data);
            cards = document.querySelectorAll(".card");
            cards.forEach(card => {
                btn = card.querySelectorAll(".btn-success")[1];
                btnCanceled = card.querySelectorAll(".btn-danger")[1];

                btn.addEventListener("click", () => {
                    if (card.getAttribute("state") == States.RESERVED) {
                        changeFlag(card.id, userData.id);
                    }
                })

                btnCanceled.addEventListener("click", () => {
                    canceledService(card.id);
                })



            })
        } else {
            console.log(`Error: ${xhr.status}`);
        }
    };

});

inProgress.addEventListener("click", () => {
    console.log("Entre");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url + "/" + userId + "/state/" + States.IN_PROGRESS);
    xhr.setRequestHeader("Authorization", "Bearer " + localStorage.getItem("token"));

    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            data = xhr.response;
            console.log(data);
            addServices(data);

            cards = document.querySelectorAll(".card");
            cards.forEach(card => {
                btn = card.querySelectorAll(".btn-success")[1];
                btnCanceled = card.querySelectorAll(".btn-danger")[1];

                btn.addEventListener("click", () => {

                    if (card.getAttribute("state") == States.IN_PROGRESS) {

                        if (btn.text == "Pagar") {
                            var files = card.querySelector(".payDocument").files;
                            var formData = new FormData();
                            formData.append("file", files[0]);
                            savePaymentDocument(formData, 1000 + parseInt(card.id));
                            changeFlag(card.id, userData.id);
                            console.log(card.id);
                        }

                        if (btn.text == "Aceptar") {
                            changeFlag(card.id, userData.id);

                        }

                    }

                })

                btnCanceled.addEventListener("click", () => {
                    paymentCanceled(card.id);
                })



            })



        } else {
            console.log(`Error: ${xhr.status}`);
        }
    };

});

completed.addEventListener("click", () => {
    console.log("Entre");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url + "/" + userId + "/state/" + States.COMPLETED);
    xhr.setRequestHeader("Authorization", "Bearer " + localStorage.getItem("token"));

    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            data = xhr.response;
            console.log(data);
            addServices(data);
        } else {
            console.log(`Error: ${xhr.status}`);
        }
    };

});

canceled.addEventListener("click", () => {
    console.log("Entre");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url + "/" + userId + "/state/" + States.CANCELED);
    xhr.setRequestHeader("Authorization", "Bearer " + localStorage.getItem("token"));

    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            data = xhr.response;
            console.log(data);
            addServices(data);
        } else {
            console.log(`Error: ${xhr.status}`);
        }
    };

});

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


function getAllRequested() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url + "/" + userId + "/state/" + States.REQUESTED);
    xhr.setRequestHeader("Authorization", "Bearer " + localStorage.getItem("token"));

    xhr.send();
    xhr.responseType = "json";

    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            data = xhr.response;
            console.log(data);
            addServices(data);
            cards = document.querySelectorAll(".card");
            cards.forEach(card => {
                btn = card.querySelectorAll(".btn-success")[0];

                btn.addEventListener("click", () => {
                    if (userData.rol.title == "BABYSIT" && card.getAttribute("state") == States.REQUESTED) {

                        changeState(card.id);
                    }



                })



            })


        } else {
            console.log(`Error: ${xhr.status}`);
        }
    };
}



function changeState(serviceId) {
    const xhr = new XMLHttpRequest();
    xhr.open("PUT", url + "/reserved/" + serviceId);
    objetjson = JSON.stringify({
        "state": States.RESERVED
    })
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

function paymentCanceled(serviceId) {
    const xhr = new XMLHttpRequest();
    xhr.open("PUT", url + "/paymentCanceled/" + serviceId);

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", "Bearer " + localStorage.getItem("token"));
    xhr.send();
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

function changeFlag(serviceId, userId) {
    const xhr = new XMLHttpRequest();
    xhr.open("PUT", url + "/change/" + serviceId + "/" + userId);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", "Bearer " + localStorage.getItem("token"));
    xhr.send();
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

function savePaymentDocument(file, serviceId) {
    const xhr = new XMLHttpRequest();

    xhr.open("POST", url + "/saveFile");
    //xhr.setRequestHeader("Content-Type", "multipart/form-data; boundary=<calculated when request is sent>");
    xhr.setRequestHeader("Authorization", "Bearer " + localStorage.getItem("token"));

    xhr.send(file);
    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            const data = xhr.response;
            console.log(data);
            updatePaymentInProgress(data, serviceId);
            //location.reload();

        } else {
            alert("No funcina");
            console.log(`Error: ${xhr.status}`);
        }
    };

}

function updatePaymentInProgress(nameFile, paymentId) {

    const xhr = new XMLHttpRequest();
    xhr.open("PUT", "http://localhost:8080/payment/state/inprogress/" + paymentId);
    objetjson = JSON.stringify(
        {
            "date": new Date(),
            "state": States.IN_PROGRESS,
            "type": "CASH",
            "file": nameFile
        }
    );

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", "Bearer " + localStorage.getItem("token"));

    xhr.send(objetjson);
    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            const data = xhr.response;
            console.log(data);
            //location.reload();

        } else {
            alert("No funcina");
            console.log(`Error: ${xhr.status}`);
        }
    };
}

function canceledService(serviceId) {
    const xhr = new XMLHttpRequest();
    xhr.open("PUT", url + "/canceled/" + serviceId);

    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", "Bearer " + localStorage.getItem("token"));
    xhr.send();
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


async function getNameFile(paymentId, cardId) {

    myPromise = new Promise(function (resolve) {

        const xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:8080/payment/" + paymentId + "/nameFile");
        xhr.setRequestHeader("Authorization", "Bearer " + localStorage.getItem("token"));

        xhr.send();
        // xhr.responseType = "json";
        xhr.onload = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {

                resolve(xhr.response);


            } else {
                console.log(`Error: ${xhr.status}`);
            }
        };
    });

    document.querySelectorAll(".card")[cardId].querySelector(".documentBtn").setAttribute("href", "http://localhost/payments/" + await myPromise);

}

