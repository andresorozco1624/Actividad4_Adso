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


(function () {
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

    })

    phoneInfo.addEventListener('mouseleave', () => {
        phone.classList.remove('nofija');
        phoneInfo.classList.add('nofija');
        phoneInfo.classList.remove('fija');
    })


    address.addEventListener('mouseover', () => {
        address.classList.add('nofija');
        addressInfo.classList.remove('nofija');
        addressInfo.classList.add('fija');

    })

    addressInfo.addEventListener('mouseleave', () => {
        address.classList.remove('nofija');
        addressInfo.classList.add('nofija');
        addressInfo.classList.remove('fija');
    })

}())





/***************************/