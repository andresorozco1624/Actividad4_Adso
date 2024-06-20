/*** CONFIGURACIONES***/

(function () {

    checkboxCity = document.getElementById("checkboxCity");
    checkboxState = document.getElementById("checkboxState");
    checkboxCountry = document.getElementById("checkboxCountry");

    checkboxCity.addEventListener("change", () => {

        if (checkboxCity.checked) {
            checkboxState.checked = true;
            checkboxState.disabled = true;
            checkboxCountry.checked = true;
            checkboxCountry.disabled = true;
        }
        else {
            checkboxState.checked = false;
            checkboxState.disabled = false;
            checkboxCountry.checked = false;
            checkboxCountry.disabled = false;
        }
    })

    checkboxState.addEventListener("change", () => {

        if (checkboxState.checked) {

            checkboxCountry.checked = true;
            checkboxCountry.disabled = true;
        }
        else {

            checkboxCountry.checked = false;
            checkboxCountry.disabled = false;
        }
    })




}())

/*********************/