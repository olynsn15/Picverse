document.addEventListener("DOMContentLoaded", function () {
    var firstIndex = 0;
    var firstIndexNew = 0;

    function automaticSlideHero() {
        const images = document.querySelectorAll('.slider-image');
        const artworkInfo = document.querySelector('.artwork-info');
        const artworkTitle = document.getElementById('artwork-title');
        const artworkArtist = document.getElementById('artwork-artist');

        setTimeout(automaticSlideHero, 3500);

        artworkInfo.style.transition = "opacity 1.5s ease-in-out";
        artworkInfo.style.opacity = "0";

        images.forEach(img => {
            img.style.transition = "opacity 3s ease-in-out";
            img.style.opacity = "0";
        });

        firstIndex = (firstIndex + 1) % images.length;
        const activeImage = images[firstIndex];

        setTimeout(() => {
            activeImage.style.opacity = "1";
        }, 100);

        setTimeout(() => {
            artworkTitle.textContent = activeImage.dataset.title;
            artworkArtist.textContent = activeImage.dataset.artist;
            artworkInfo.style.opacity = "1";
        }, 1500);
    }

    function automaticSlideAbout() {
        const images = document.querySelectorAll('.about-slider-image');

        setTimeout(automaticSlideAbout, 2500);

        images.forEach(img => {
            img.style.transition = "opacity 2s ease-in-out";
            img.style.opacity = "0";
        });

        firstIndexNew = (firstIndexNew + 1) % images.length;
        const activeImage = images[firstIndexNew];

        setTimeout(() => {
            activeImage.style.opacity = "1";
        }, 100);
    }

    if (document.querySelector('.slider-image')) {
        automaticSlideHero();
    }

    if (document.querySelector('.about-slider-image')) {
        automaticSlideAbout();
    }
});
