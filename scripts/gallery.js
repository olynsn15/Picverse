document.addEventListener("DOMContentLoaded", function () {
    const portraits = document.querySelectorAll('.gallery-item.portrait');
    portraits.forEach(portrait => {
        portrait.addEventListener("click", function () {
            const modalId = this.dataset.modalId;
            const modal = document.getElementById(modalId);
            if (modal) modal.style.display = "flex";
        });
    });

    const closeButtons = document.querySelectorAll('.modal-close img');
    closeButtons.forEach(button => {
        button.addEventListener("click", function () {
            const modal = this.closest('.modal');
            if (modal) modal.style.display = "none";
        });
    });

    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.addEventListener("click", function (e) {
            if (e.target === modal) modal.style.display = "none";
        });
    });
});

function filterGallery(category, selectedTag) {
    const items = document.querySelectorAll('.gallery-item');
    const tags = document.querySelectorAll('.tags');
    const galleryStatus = document.querySelector('.gallery-status');
    
    const tagName = selectedTag.textContent.trim();
    const isActive = selectedTag.classList.contains('active');

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