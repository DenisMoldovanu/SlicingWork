const swiper = new Swiper(".swiper", {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
// Get references to the elements
const burgerBtn = document.querySelector(".burger-btn");
const closeBtn = document.querySelector(".close-btn");
const mobileNav = document.querySelector(".mobile-nav");
const body = document.querySelector("body");

// Function to add 'active' class to mobile-nav
function openMobileNav() {
    mobileNav.classList.add("active");
    body.classList.add("overflow");
}

// Function to remove 'active' class from mobile-nav
function closeMobileNav() {
    mobileNav.classList.remove("active");
    body.classList.remove("overflow");
}

// Event listener for burger button click
burgerBtn.addEventListener("click", openMobileNav);

// Event listener for close button click
closeBtn.addEventListener("click", closeMobileNav);

window.addEventListener("resize", () => {
    if (window.innerWidth > 992) {
        body.classList.remove("overflow");
    }
});

document.addEventListener("click", function (event) {
    const isClickInsideMobileNav = mobileNav.contains(event.target);
    const isClickBurgerBtn = burgerBtn.contains(event.target);
    if (!isClickInsideMobileNav && !isClickBurgerBtn) {
        closeMobileNav();
    }
});
