var data;
const url = "http://localhost:8080/service/state/REQUESTED";

function addServices(data) {

    //data = JSON.stringify(data);
    const servicesCard = document.querySelector(".servicesCard");

    servicesCard.innerHTML = ``;

    for (i = 0; i < data.length; i++) {
        const newService = document.createElement('div');
        serviceId = 100000 + data[i].id
        newService.classList.add("card", "border-primary", "mb-3", "ms-2");
        newService.innerHTML = ` 
                            <div class="card-header d-flex justify-content-around">
                                <div><span>`+ serviceId + `</span></div>
                                <div><span id="requester"></span></div>
                                <div><span>$ `+ data[i].fare + `  </span>(` + data[i].hour.split("T")[1].toLowerCase() + `)</div>

                            </div>
                            <div class="card-body   m-0 pt-2 pb-0">
                                <div class="row card-text d-flex justify-content-center" style="max-height: 8vh;">
                                    <div class=" col">
                                        <ul class="">
                                            <li>`+ data[i].date.split("T")[0] + `</li>
                                            <li>`+ data[i].state + `</li>
                                        </ul>
                                    </div>
                                    <div class="col">
                                        <ul class="">
                                            <li>`+ data[i].date.split("T")[1] + `</li>
                                            <li>Nequi</li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="seeMore">
                                    <hr class="mb">
                                    <button class="btn btn-primary btnSeeMore" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseExample" aria-expanded="false"
                                        aria-controls="collapseExample">
                                        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                                            <path
                                                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
                                        </svg>
                                    </button>
                                </div>

                                <div class="collapse  mb-4" id="collapseExample">
                                    <div class="descriptionService">
                                        `+ data[i].indication + `
                                    </div>
                                </div>
                            </div>
                        `;

        servicesCard.appendChild(newService);


    }


}

window.addEventListener("load", () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.setRequestHeader("Authorization", "Bearer " + localStorage.getItem("token"));
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            data = xhr.response;

            console.log(data);
            addServices(data);
        }
        else if (xhr.status == 403) {
            window.location.href = "login.html";
        }
        else {
            console.log(`Error: ${xhr.status}`);
        }
    };

});