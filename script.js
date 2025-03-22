document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in");

    function checkScroll() {
        fadeElements.forEach((el) => {
            let position = el.getBoundingClientRect().top;
            let screenHeight = window.innerHeight;

            if (position < screenHeight * 0.9) { // Adjust threshold as needed
                el.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Run on page load
});