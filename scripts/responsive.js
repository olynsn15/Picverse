document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger-icon");
    const menuWrapper = document.querySelector(".nav-responsive-menu");

    let menuOpen = false;

    hamburger.addEventListener("click", function () {
        menuOpen = !menuOpen;

        if (menuOpen) {
            menuWrapper.classList.add("show");
            hamburger.src = "./assets/icons/X_responsive.png";
        } else {
            menuWrapper.classList.remove("show");
            hamburger.src = "./assets/icons/hamburger.png";
        }
    });

    const arrowQuickLinks = document.getElementById("arrrow-quick-links");
    const quickLinksMenu = document.querySelector(".quick-links-menu");
    const arrowContactUs = document.getElementById("arrow-contact-us");
    const contactUsMenu = document.querySelector(".contact-us-menu");

    let quickLinksMenuOpen = false;
    let contactUsMenuOpen = false;
    
    arrowQuickLinks.addEventListener("click", function () {
        quickLinksMenuOpen = !quickLinksMenuOpen;

        if (quickLinksMenuOpen) {
            quickLinksMenu.classList.add("show");
            arrowQuickLinks.src = "./assets/icons/arrow-up.png"; 
        } else {
            quickLinksMenu.classList.remove("show");
            arrowQuickLinks.src = "./assets/icons/arrow-down.png";
        }
    });

    arrowContactUs.addEventListener("click", function () {
        contactUsMenuOpen = !contactUsMenuOpen;

        if (contactUsMenuOpen) {
            contactUsMenu.classList.add("show");
            arrowContactUs.src = "./assets/icons/arrow-up.png"; 
        } else {
            contactUsMenu.classList.remove("show");
            arrowContactUs.src = "./assets/icons/arrow-down.png";
        }
    });
});
