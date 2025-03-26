document.getElementById('file-upload').addEventListener('change', function() {
    const fileNameDisplay = document.getElementById('file-name');
    const fileThumbnail = document.getElementById('file-thumbnail');
    const uploadButton = document.querySelector('.buttons');

    if (this.files.length > 0) {
        const file = this.files[0];
        fileNameDisplay.textContent = file.name;

        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(e) {
                fileThumbnail.src = e.target.result;
                fileThumbnail.hidden = false;
            };
            reader.readAsDataURL(file);
        } else {
            fileThumbnail.hidden = true;
        }

        // Hide the button
        uploadButton.style.display = 'none';
    } else {
        fileNameDisplay.textContent = "No file chosen";
        fileThumbnail.hidden = true;
        uploadButton.style.display = 'inline-block'; // Show the button again
    }
});

// Show the button again if user clicks on the upload box
document.querySelector('.upload-box').addEventListener('click', function() {
    const uploadButton = document.querySelector('.buttons');
    uploadButton.style.display = 'inline-block';
});
