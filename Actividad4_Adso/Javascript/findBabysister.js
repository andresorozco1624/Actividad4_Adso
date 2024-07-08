var data;

function addBabysits(data) {

    //data = JSON.stringify(data);
    const babysitGroup = document.querySelector(".babysitGroup");

    for (i = 0; i < data.length; i++) {
        const newBabysit = document.createElement('div');
        newBabysit.classList.add("col-6", "d-flex", "justify-content-between", "containerBabysits");
        newBabysit.innerHTML = `
            <div class="card mb-3 w-100 " data-bs-toggle="modal" data-bs-target="#staticBackdrop`+ i + `">
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

                            <p class="card-text text-start fw-light">
                                `+ data[i].description + `
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
        <div class="modal fade" id="staticBackdrop`+ i + `" data-bs-backdrop="static" data-bs-keyboard="false"
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
                                    <p class="card-text text-start fw-light">
                                        `+ data[i].description + `
                                    </p>
                                </div>
                            </div>
                                       

                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger"
                                        data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#hireService">Contratar</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="hireService" data-bs-backdrop="static" data-bs-keyboard="false"
                        tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog .modal-dialog-scrollable">            
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Nueva Solicitud</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form action="" class="needs-validation " novalidate>
                            <div class="row d-flex justify-content-center mb-3 ">
                                <div class="form-floating col-11">
                                    <input type="datetime-local" class="form-control" name="" id="">
                                    <label for="">¿Cuando y a qué hora nos necesitas?</label>
                                </div>
                            </div>
                            <div class="row d-flex justify-content-center mb-3 ">
                                <div class="form-floating col-11">
                                    <input type="number" name="" class="form-control" id="">
                                    <label for="">¿Cuantas horas?</label>
                                </div>
                            </div>

                            <div class="row d-flex justify-content-center mb-3 ">
                                <div class="form-floating col-11">
                                    <input type="number" name="" class="form-control" id="">
                                    <label for="">¿Cuantos niños son?</label>
                                </div>
                            </div>
                            <div class="row d-flex justify-content-center mb-3 ">
                                <div class="form-floating col-11">
                                    <textarea name="" class="form-control" id=""></textarea>
                                    <label for="">Cuentanos tus indicaciones</label>
                                </div>
                            </div>
                            <div class="row d-flex justify-content-center mb-3 ">
                                <div class="form-floating col-11">

                                    <input type="number" name="" class="form-control" id="" disabled>
                                    <label for="">Ofrece una tarifa</label>
                                </div>
                            </div>
                            <!-- <div class="row d-flex justify-content-center mb-3">
                                <div class="col-11 form-floating">
                                    <select name="" class="form-select" id="">
                                        <option value="">Escoge...</option>
                                        <option value="">Efectivo</option>
                                        <option value="">Transferencia</option>
                                    </select>
                                    <label for="">Metodo de pago</label>
                                </div>
                            </div> -->  

                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary"
                            data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" class="btn btn-primary">Crear</button>
                    </div>
                </div>
            </div>
        </div>
    
        
        `;

        babysitGroup.appendChild(newBabysit);


    }


}

window.addEventListener("load", () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8080/user");
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            data = xhr.response;
            console.log(data);
            addBabysits(data);
        } else {
            console.log(`Error: ${xhr.status}`);
        }
    };

})

function getAllBabysit() {

}

