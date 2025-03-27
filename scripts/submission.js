document.addEventListener("DOMContentLoaded", function () {
    const fileInput = document.getElementById("file-upload");
    const fileError = document.getElementById("file-error");
    const fileNameDisplay = document.getElementById("file-name");
    const fileThumbnail = document.getElementById("file-thumbnail");
    const uploadButton = document.querySelector(".buttons");
    const uploadBox = document.querySelector(".upload-box");

    const emailInput = document.getElementById("email-input");
    const emailError = document.getElementById("email-error");
    const titleInput = document.getElementById("title-input");
    const titleError = document.getElementById("title-error");
    const descriptionInput = document.getElementById("description-input");
    const descriptionError = document.getElementById("description-error");
    const tagsInput = document.getElementById("tags-input");
    const tagsError = document.getElementById("tags-error");
    const aiRadioButtons = document.querySelectorAll('input[name="ai-generated"]');
    const aiError = document.getElementById("AI-radio-error");

    const submitButton = document.getElementById("submit-button");

    if (!fileInput || !fileNameDisplay || !fileThumbnail) {
        console.error("File input or related elements not found.");
        return;
    }

    fileInput.addEventListener("change", function () {
        if (fileInput.files.length === 0) {
            fileError.textContent = "You must upload an image.";
            fileError.style.display = "block";
            fileThumbnail.hidden = true;
            fileNameDisplay.textContent = "No file chosen";
            return;
        }

        fileError.textContent = "";
        fileError.style.display = "none";

        const file = fileInput.files[0];
        console.log("File selected:", file.name);  

        fileNameDisplay.textContent = file.name; 

        if (file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onload = function (e) {
                fileThumbnail.src = e.target.result;
                fileThumbnail.hidden = false; 
            };
            reader.readAsDataURL(file);
        } else {
            fileThumbnail.hidden = true;
        }

        if (uploadButton) {
            uploadButton.style.display = "none";
        }
    });

    if (uploadBox) {
        uploadBox.addEventListener("click", function () {
            if (uploadButton) {
                uploadButton.style.display = "inline-block";
            }
        });
    }

    function validateEmail() {
        if (!emailInput) return false;
        const email = emailInput.value.trim();
        if (email === "") {
            emailError.textContent = "Email cannot be empty";
            emailError.style.display = "flex";
            return false;
        } else if (!email.includes("@") || !email.includes(".")) {
            emailError.textContent = "Please enter a valid email (must contain '@' and '.')";
            emailError.style.display = "flex";
            return false;
        }
        emailError.textContent = "";
        emailError.style.display = "none";
        return true;
    }

    function validateTitle() {
        if (!titleInput) return false;
        const title = titleInput.value.trim();
        if (title === "") {
            titleError.textContent = "Title cannot be empty";
            titleError.style.display = "flex";
            return false;
        } else if (title.length < 3) {
            titleError.textContent = "Title must be at least 3 characters long";
            titleError.style.display = "flex";
            return false;
        }
        titleError.textContent = "";
        titleError.style.display = "none";
        return true;
    }


    function validateDescription() {
        if (!descriptionInput) return false;
        const description = descriptionInput.value.trim();
        if (description === "") {
            descriptionError.textContent = "Description cannot be empty";
            descriptionError.style.display = "flex";
            return false;
        } else if (description.length < 10) {
            descriptionError.textContent = "Description must be at least 10 characters long";
            descriptionError.style.display = "flex";
            return false;
        }
        descriptionError.textContent = "";
        descriptionError.style.display = "none";
        return true;
    }

    function validateTags() {
        if (!tagsInput) return false;
        if (tagsInput.selectedIndex == 0 || tagsInput.selectedIndex == 1) {
            tagsError.textContent = "Please select a valid tag.";
            tagsError.style.display = "flex";
            return false;
        }
        tagsError.textContent = "";
        tagsError.style.display = "none";
        return true;
    }

    function validateAIRadio() {
        const isChecked = [...aiRadioButtons].some(radio => radio.checked);
        if (!isChecked) {
            aiError.textContent = "Please select an option.";
            aiError.style.display = "flex";
            return false;
        }
        aiError.textContent = "";
        aiError.style.display = "none";
        return true;
    }
    
    let lastChecked = null;
    aiRadioButtons.forEach(radio => {
        radio.addEventListener("click", function () {
            if (lastChecked === this) {
                this.checked = false;
                lastChecked = null;
            } else {
                lastChecked = this;
            }
            validateAIRadio();
            validateFinalForm();
        });
    });

    function validateFinalForm() {
        const isValid =
            validateEmail() &&
            validateTitle() &&
            validateDescription() &&
            validateTags() &&
            validateAIRadio();

        if (isValid) {
            submitButton.style.pointerEvents = "auto";
            submitButton.style.opacity = "1";
        } else {
            submitButton.style.pointerEvents = "none";
            submitButton.style.opacity = "0.5";
        }
    }

    function clearForm() {
        fileInput.value = "";
        emailInput.value = "";
        titleInput.value = "";
        descriptionInput.value = "";
        tagsInput.value = "";
        aiRadioButtons.forEach(radio => (radio.checked = false));

        fileNameDisplay.textContent = "No file chosen";
        fileThumbnail.hidden = true;

        [fileError, emailError, titleError, descriptionError, tagsError, aiError].forEach(error => {
            error.textContent = "";
            error.style.display = "none";
        });

        validateFinalForm();
    }
    
    if (emailInput) emailInput.addEventListener("input", () => { validateEmail(); validateFinalForm(); });
    if (titleInput) titleInput.addEventListener("input", () => { validateTitle(); validateFinalForm(); });
    if (descriptionInput) descriptionInput.addEventListener("input", () => { validateDescription(); validateFinalForm(); });
    if (tagsInput) tagsInput.addEventListener("change", () => { validateTags(); validateFinalForm(); });
    if (aiRadioButtons.length > 0) aiRadioButtons.forEach(radio => 
        radio.addEventListener("click", () => { validateAIRadio(); validateFinalForm(); })
    );

    if (submitButton) {
        submitButton.addEventListener("click", function () {
            validateFinalForm();
            if (submitButton.style.pointerEvents === "auto") {
                alert("Submission successful!"); // Simulated success message
                clearForm();
            } else {
                alert("Please correct all errors before submitting.");
            }
        });
    }

    validateFinalForm();
    

});
