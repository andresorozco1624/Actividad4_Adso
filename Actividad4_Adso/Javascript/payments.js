var data;

function showPayments(data) {

    //data = JSON.stringify(data);
    const paymentList = document.querySelector(".paymentList");
    console.log(data);

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

window.addEventListener("load", () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8080/payment/1");
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