function validateForm(form) {
    const fileInput = document.getElementById("file-upload");
    const emailInput = document.getElementById("email-input");
    const titleInput = document.getElementById("title-input");
    const descriptionInput = document.getElementById("description-input");
    const tagsInput = document.getElementById("tags-input");
    const yes = document.getElementById("yes");
    const no = document.getElementById("no");

    if (!validateEmail(emailInput)) return false;
    else if (!validateTitle(titleInput)) return false;
    else if (!validateDescription(descriptionInput)) return false;
    else if (!validateTags(tagsInput)) return false;
    else if (!validateFile(fileInput)) return false;
    else if (!validateAIRadio(yes, no)) return false;

    alert("Submission successful!");
    return true;
}

function validateEmail(emailInput) {
    let email = emailInput.value;
    let hasAt = false;
    let hasDot = false;

    for (let i = 0; i < email.length; i++) {
        if (email[i] === "@") {
            hasAt = true;
        }
        if (email[i] === ".") {
            hasDot = true;
        }
    }

    if (email.trim() === "") {
        alert("Email cannot be empty");
        return false;
    }

    else if (!hasAt || !hasDot) {
        alert("Email must contain '@' and '.'");
        return false;
    }

    else {
        return true;
    }
}

function validateTitle(titleInput) {
    let title = titleInput.value;

    if (title.trim() === "") {
        alert("Title cannot be empty");
        return false;
    }

    else if (title.trim().length < 3) {
        alert("Title must be at least 3 characters long");
        return false;
    }

    else {
        return true;
    }
}

function validateDescription(descriptionInput) {
    let desc = descriptionInput.value;

    if (desc.trim() === "") {
        alert("Description cannot be empty");
        return false;
    }

    else if (desc.trim().length < 10) {
        alert("Description must be at least 10 characters long");
        return false;
    }

    else {
        return true;
    }
}

function validateTags(tagsInput) {
    let tag = tagsInput.value;

    if (tag === "") {
        alert("Please select a valid tag.");
        return false;
    }

    else {
        return true;
    }
}

function validateFile(fileInput) {
    let file = fileInput.files[0];
    let fileNameDisplay = document.getElementById("file-name");
    let fileThumbnail = document.getElementById("file-thumbnail");

    if (!file) {
        alert("You must upload an image.");
        return false;
    }

    else if (!file.type.startsWith("image/")) {
        alert("Only image files are supported.");
        return false;
    }

    else {
        fileNameDisplay.textContent = file.name;

        let reader = new FileReader();
        reader.onload = function(e) {
            fileThumbnail.src = e.target.result;
            fileThumbnail.hidden = false;
        }
        reader.readAsDataURL(file);

        return true;
    }
}

function validateAIRadio(yes, no) {
    if (!yes.checked && !no.checked) {
        alert("Please select an option for AI generated content.");
        return false;
    }

    else {
        return true;
    }
}
