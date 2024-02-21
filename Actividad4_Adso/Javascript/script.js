function getAllUser() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8080/user");
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            const data = xhr.response;
            console.log(data);
        } else {
            console.log(`Error: ${xhr.status}`);

        }
    };
}

window.addEventListener("load", (e) => {
    console.log("Entre");
    getAllUser();
});