const popup = document.querySelector("#popup")

function disableScroll() {
	document.body.style.overflow = "hidden";
}

function removeModal() {
	document.body.style.overflow = "auto";
	popup.querySelector("div").style.transform = "translate(-50%, -50%) scale(0.01)"
	setTimeout(() => {popup.style.display = "none"}, 350)
}

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


// Birthdate Field
function populateYears() {
    let yearSelect = document.querySelector(".dateField").querySelector(".yearInput");
    let currentYear = new Date().getFullYear() - 5;
    for (let i = currentYear; i >= 1950; i--) {
        let option = document.createElement("option");
        option.value = i;
        option.text = i;
        yearSelect.appendChild(option);
    }
}

function populateDays() {
    let daySelect = document.querySelector(".dateField").querySelector(".dayInput");
    for (let i = 1; i <= 31; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.text = i;
        daySelect.appendChild(option);
    }
}

populateYears();
populateDays();

const levelsForm = document.querySelector("#levelsForm");
const levelsOptions = document.querySelector("#levelsOptions");

function enrollPrimary(){
	let child = levelsForm.children;
	child[0].style.display = "block"
	child[1].style.display = "none"
	child[2].style.display = "none";
	levelsOptions.children[0].classList.add("active-level");
	levelsOptions.children[1].classList.remove("active-level");
	levelsOptions.children[2].classList.remove("active-level");
}
function enrollSecondary(){
	let child = levelsForm.children;
	child[0].style.display = "none"
	child[1].style.display = "block"
	child[2].style.display = "none";
	levelsOptions.children[0].classList.remove("active-level");
	levelsOptions.children[1].classList.add("active-level");
	levelsOptions.children[2].classList.remove("active-level");
}
function enrollTertiary(){
	let child = levelsForm.children;
	child[0].style.display = "none"
	child[1].style.display = "none"
	child[2].style.display = "block";
	levelsOptions.children[0].classList.remove("active-level");
	levelsOptions.children[1].classList.remove("active-level");
	levelsOptions.children[2].classList.add("active-level");
}

const params = new URLSearchParams(window.location.search);
	if (params.get("enroll") === "secondary") {
		enrollSecondary();
	}
	else if (params.get("enroll") === "tertiary") {
		enrollTertiary();
	}
  
function admissionPage(level){
	window.location.href = "admission.html?enroll=" + level;
}

//Script sa scholarship.html

const hiddenElements = document.querySelectorAll(".hidden");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});
hiddenElements.forEach(el => observer.observe(el));

document.addEventListener("DOMContentLoaded", function () {
    const applyButton = document.querySelector(".btn-success");
    if (applyButton) {
        applyButton.addEventListener("click", function () {
            window.location.href = "admission.html";
        });
    }
});

//Hanggang dito, script sa scholarship.html
