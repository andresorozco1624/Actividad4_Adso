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







/***************************/