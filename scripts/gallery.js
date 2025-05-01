document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll('.gallery-item');
    const tags = document.querySelectorAll('.tags');
    const galleryStatus = document.querySelector('.gallery-status');

    // Attach event listeners using data-category attributes
    tags.forEach(tag => {
        tag.addEventListener("click", function () {
            const category = this.dataset.category;
            filterGallery(category, this);
        });
    });

    function filterGallery(category, selectedTag) {
        const tagName = selectedTag.textContent.trim();
        const isActive = selectedTag.classList.contains('active');

        // Reset all tags
        tags.forEach(tag => tag.classList.remove('active'));

        if (isActive) {
            items.forEach(item => item.style.display = 'flex');
            galleryStatus.textContent = "Displaying all artworks";
        } else {
            selectedTag.classList.add('active');
            let count = 0;
            items.forEach(item => {
                if (item.classList.contains(category)) {
                    item.style.display = 'flex';
                    count++;
                } else {
                    item.style.display = 'none';
                }
            });

            galleryStatus.textContent = `Displaying ${count} artworks for ${tagName}`;
        }
    }

    // Portrait click opens corresponding modal
    const portraits = document.querySelectorAll('.gallery-item.portrait');

    portraits.forEach(portrait => {
        const modalId = portrait.dataset.modalId;
        portrait.addEventListener("click", function () {
            const modal = document.getElementById(modalId);
            if (modal) modal.style.display = "flex";
        });
    });

    // Close modal on button click
    const closeButtons = document.querySelectorAll('.modal-close img');

    closeButtons.forEach(button => {
        button.addEventListener("click", function () {
            const modal = this.closest('.modal');
            if (modal) modal.style.display = "none";
        });
    });

    // Close modal on outside click
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.addEventListener("click", function (e) {
            if (e.target === modal) modal.style.display = "none";
        });
    });
});
