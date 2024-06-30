
function addBabysits(data) {
    const babysitGroup = document.querySelector(".babysitGroup");
    const newBabysit = document.createElement('div');
    newBabysit.classList.add("col-6");
    newBabysit.classList.add("d-flex");
    newBabysit.classList.add("justify-content-between");
    newBabysit.classList.add("containerBabysits");
    newBabysit.innerHTML = `
        <div class="card mb-3">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img src="Images/user.jpg" class="img-fluid rounded-start" alt="...">
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body pt-2">
                                            <div class="row">
                                                <div class="col d-flex flex-row justify-content-between  ">
                                                    <div>
                                                        <h5 class="card-title text-start d-inline">Andrés O</h5>

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
                                                    <span class="card-text">Medellin</span>
                                                </div-col>
                                            </div>

                                            <p class="card-text text-start fw-light">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius omnis
                                                adipisci
                                                reiciendis similique aperiam earum, illum dolor numquam dolores,
                                                expedita
                                                officia ut
                                                facilis, itaque perspiciatis repudiandae officiis sed dignissimos nulla!
                                            </p>
                                            <div class="dataSensible d-flex justify-content-between">
                                                <p class="p-1" id="correo"><small class="fw-bold">27
                                                        años</small>
                                                </p>
                                                <p class="p-1 text-start d-inline " id="correo"><small
                                                        class="fw-bold">15.0000/h</small>
                                                </p>



                                            </div>









                                        </div>
                                    </div>
                                </div>
                            </div>
    
    
    `;

    babysitGroup.appendChild(newBabysit);

}

window.addEventListener("load", () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8080/user");
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            const data = xhr.response;
            console.log(data);
            addBabysits(data);
        } else {
            console.log(`Error: ${xhr.status}`);
        }
    };

})

function getAllBabysit() {

}

