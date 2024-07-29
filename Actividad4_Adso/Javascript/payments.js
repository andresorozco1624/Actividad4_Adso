var data;


var url = "http://localhost:8080/payment";

var all = document.getElementById("all");
var pending = document.getElementById("pending");
var inProgress = document.getElementById("inProgress");
var paid = document.getElementById("paid");
var failed = document.getElementById("canceled");
var userId;

const States = Object.freeze({
    PENDING: 'PENDING',
    IN_PROGRESS: 'IN_PROGRESS',
    FAILED: 'FAILED',
    PAID: 'PAID'
});



function showPayments(data) {

    //data = JSON.stringify(data);
    const paymentList = document.querySelector(".paymentList");
    console.log(data);

    paymentList.innerHTML = ``;

    for (i = 0; i < data.length; i++) {
        const newPayment = document.createElement('tr');
        //newBabysit.classList.add("col-6", "d-flex", "justify-content-between", "containerBabysits");
        item = i + 1;
        newPayment.innerHTML = `
            <th scope="row">`+ item + `</th>
            <td>`+ data[i].id + `</td>
            <td>`+ data[i].service + `</td>
            <td>$`+ data[i].fare + `</td>
            <td>`+ data[i].state + `</td>
        
        `;

        paymentList.appendChild(newPayment);


    }


}

all.addEventListener("click", () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url + "/" + userId);
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            data = xhr.response;
            //console.log(data);
            showPayments(data);
        } else {
            console.log(`Error: ${xhr.status}`);
        }
    };

})

window.addEventListener("load", () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8080/user/currentUser");
    xhr.setRequestHeader("Authorization", "Bearer " + localStorage.getItem("token"));

    xhr.send();
    xhr.responseType = "json";

    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            data = xhr.response;
            userId = data.id;
            getAll();
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

paid.addEventListener("click", () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url + "/" + userId + "/state/" + States.PAID);
    xhr.setRequestHeader("Authorization", "Bearer " + localStorage.getItem("token"));
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            data = xhr.response;
            //console.log(data);
            showPayments(data);
        } else {
            console.log(`Error: ${xhr.status}`);
        }
    };

})

pending.addEventListener("click", () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url + "/" + userId + "/state/" + States.PENDING);
    xhr.setRequestHeader("Authorization", "Bearer " + localStorage.getItem("token"));
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            data = xhr.response;
            //console.log(data);
            showPayments(data);
        } else {
            console.log(`Error: ${xhr.status}`);
        }
    };

})

inProgress.addEventListener("click", () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url + "/" + userId + "/state/" + States.IN_PROGRESS);
    xhr.setRequestHeader("Authorization", "Bearer " + localStorage.getItem("token"));

    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            data = xhr.response;
            //console.log(data);
            showPayments(data);
        } else {
            console.log(`Error: ${xhr.status}`);
        }
    };

})

failed.addEventListener("click", () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url + "/" + userId + "/state/" + States.FAILED);
    xhr.setRequestHeader("Authorization", "Bearer " + localStorage.getItem("token"));

    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            data = xhr.response;
            //console.log(data);
            showPayments(data);
        } else {
            console.log(`Error: ${xhr.status}`);
        }
    };

})

function getAll() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url + "/" + userId);
    xhr.setRequestHeader("Authorization", "Bearer " + localStorage.getItem("token"));

    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            data = xhr.response;
            //console.log(data);
            showPayments(data);
        } else {
            console.log(`Error: ${xhr.status}`);
        }
    };
}