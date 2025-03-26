function filterGallery(category) {
    let items = document.querySelectorAll('.gallery-item');
    let tags = document.querySelectorAll('.tags');
    let galleryStatus = document.querySelector('.gallery-status');

    let selectedTag = document.querySelector(`[onclick="filterGallery('${category}')"]`);

    let tagName = selectedTag.textContent.trim();      
    
    let isActive = selectedTag.classList.contains('active');

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
