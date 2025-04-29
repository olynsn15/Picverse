document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger-icon");
    const menuWrapper = document.querySelector(".nav-responsive-menu");

    let menuOpen = false;

    hamburger.addEventListener("click", function () {
        menuOpen = !menuOpen;

        if (menuOpen) {
            menuWrapper.classList.add("show");
            hamburger.src = "./assets/icons/X_responsive.png"; // make sure this file exists
        } else {
            menuWrapper.classList.remove("show");
            hamburger.src = "./assets/icons/hamburger.png";
        }
    });
});
