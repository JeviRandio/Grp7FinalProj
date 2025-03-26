console.log(`
Group 7 - DW21
Carreon, Lanz Jeri Tyler F.
Erandio, Jayvee P.
Malanay, Gery Ashen P.
Sycayco, Nikko Jett
Utsumi, Ryoshio

An Advanced Web Design Project - FEU Diliman's Admission Department
`);

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
function populateYears(index) {
	try{
		let yearSelect = document.querySelectorAll(".dateField")[index].querySelector(".yearInput");

		let currentYear = new Date().getFullYear() - 5;
		for (let i = currentYear; i >= 1950; i--) {
			let option = document.createElement("option");
			option.value = i;
			option.text = i;
			yearSelect.appendChild(option);
		}
	} catch {}
}

function populateDays(index) {
	try{
		let daySelect = document.querySelectorAll(".dateField")[index].querySelector(".dayInput");
		for (let i = 1; i <= 31; i++) {
			let option = document.createElement("option");
			option.value = i;
			option.text = i;
			daySelect.appendChild(option);
		}
	}catch{}
}

populateYears();
populateDays();

const levelsForm = document.querySelector("#levelsForm");
const levelsOptions = document.querySelector("#levelsOptions");


let levelsPreview = document.querySelector("#levelsPreview")
let previewImage, previewText, levelLists; 

function refreshLevel(){
	levelsPreview = document.querySelector("#levelsPreview");
	previewImage = document.querySelector("#previewImage");
	previewText = levelsPreview.querySelector("p.text-small");
	levelLists = document.querySelector("#levelLists");
}

function enrollPrimary() {
	refreshLevel()
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
	populateYears(0)
	populateDays(0)
}

function enrollSecondary() {
	refreshLevel()
    // Show secondary form, hide others
    document.getElementById("primaryForm").style.display = "none";
    document.getElementById("secondaryForm").style.display = "block";
    document.getElementById("tertiaryForm").style.display = "none";

    // Change preview content
	previewImage.setAttribute("src", "images/preview_secondary.png")
    previewText.textContent = "FEU Diliman’s Secondary level strengthens analytical and critical thinking skills. Our curriculum prepares students for higher education with a strong academic foundation.";
    levelLists.innerHTML = "<p class='mb-0'>• Junior High</p><p class='mb-1'>• Senior High</p>";

    // Update button active state
    updateActiveButton(1);
	populateYears(1)
	populateDays(1)
}

function enrollTertiary() {
	refreshLevel()
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
	populateYears(2)
	populateDays(2)
}

function updateActiveButton(index) {
    const buttons = document.querySelectorAll("#levelsOptions button");
    buttons.forEach((btn, i) => {
        btn.classList.toggle("active-level", i === index);
    });
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
