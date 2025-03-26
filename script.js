document.addEventListener("DOMContentLoaded", function () {
    const specializationOptions = {
        IT: ["Web and Mobile Applications", "Animation and Game Development", "Cybersecurity"],
        CS: ["Software Engineering"],
        ACC: ["N/A"],
        BA: ["Marketing Management", "Financial Management", "Operations Management"]
    };

    const programSelect = document.getElementById("programOfferings");
    const specializationSelect = document.getElementById("specialization");

    if (!programSelect) {
        console.error("Error: #programOfferings not found.");
        return;
    }
    if (!specializationSelect) {
        console.error("Error: #specialization not found.");
        return;
    }

    console.log("Both dropdowns found. Attaching event listener...");

    programSelect.addEventListener("change", function () {
        const selectedProgram = this.value;
        console.log("Program selected:", selectedProgram);

        // Clear old options
        specializationSelect.innerHTML = '<option value="" disabled selected>Select a specialization</option>';

        // Populate with new options
        if (specializationOptions[selectedProgram]) {
            specializationOptions[selectedProgram].forEach(spec => {
                const option = document.createElement("option");
                option.textContent = spec;
                option.value = spec;
                specializationSelect.appendChild(option);
            });
            console.log("Specialization options updated for:", selectedProgram);
        } else {
            console.warn("No specializations found for:", selectedProgram);
        }
    });
});

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

const levelsPreview = document.querySelector("#levelsPreview");
const previewImage = document.querySelector("#previewImage");
const previewText = levelsPreview.querySelector("p.text-small");
const levelLists = document.querySelector("#levelLists");

function enrollPrimary() {
    // Show primary form, hide others
    document.getElementById("primaryForm").style.display = "block";
    document.getElementById("secondaryForm").style.display = "none";
    document.getElementById("tertiaryForm").style.display = "none";

    // Change preview content
    previewImage.src = "images/preview_primary.png";
    previewText.textContent = "FEU Diliman’s Primary level sparks curiosity through fun, numbers, and language. With interactive learning, we build a strong foundation for young minds while nurturing character and creativity.";
    levelLists.innerHTML = "<p class='mb-0'>• Kinder</p><p class='mb-1'>• Grade School</p>";

    // Update button active state
    updateActiveButton(0);
}

function enrollSecondary() {
    // Show secondary form, hide others
    document.getElementById("primaryForm").style.display = "none";
    document.getElementById("secondaryForm").style.display = "block";
    document.getElementById("tertiaryForm").style.display = "none";

    // Change preview content
    previewImage.src = "images/preview_secondary.png";
    previewText.textContent = "FEU Diliman’s Secondary level strengthens analytical and critical thinking skills. Our curriculum prepares students for higher education with a strong academic foundation.";
    levelLists.innerHTML = "<p class='mb-0'>• Junior High</p><p class='mb-1'>• Senior High</p>";

    // Update button active state
    updateActiveButton(1);
}

function enrollTertiary() {
    // Show tertiary form, hide others
    document.getElementById("primaryForm").style.display = "none";
    document.getElementById("secondaryForm").style.display = "none";
    document.getElementById("tertiaryForm").style.display = "block";

    // Change preview content
    previewImage.src = "images/preview_tertiary.png";
    previewText.textContent = "FEU Diliman’s Tertiary level empowers students with industry-relevant skills and knowledge, preparing them for professional careers.";
    levelLists.innerHTML = "<p class='mb-0'>• Bachelor Degrees</p><p class='mb-1'></p>";

	
    // Update button active state
    updateActiveButton(2);
}

function updateActiveButton(index) {
    const buttons = document.querySelectorAll("#levelsOptions button");
    buttons.forEach((btn, i) => {
        btn.classList.toggle("active-level", i === index);
    });
}


// Handle URL Parameters on Load
document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    if (params.get("enroll") === "secondary") {
        enrollSecondary();
    } else if (params.get("enroll") === "tertiary") {
        enrollTertiary();
    } else {
        enrollPrimary();
    }
});





