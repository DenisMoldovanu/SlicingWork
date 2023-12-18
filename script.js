const swiper = new Swiper(".swiper", {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
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


const clickBlock = document.querySelector('.click-block');
const variants = document.querySelectorAll('.hero-img-variant');

clickBlock?.addEventListener('click', () => {
    const activeVariant = document.querySelector('.hero-img-variant.active');
    const activeIndex = parseInt(activeVariant.classList[1].replace('variant', ''));

    variants.forEach(variant => variant.classList.remove('active'));

    if (activeIndex === 3) {
        // Set 'active' class to variant4 when clicking variant3
        const variant4 = document.querySelector('.variant4');
        variant4.classList.add('active');

        // After 2 seconds, change to variant5
        setTimeout(() => {
            variant4.classList.remove('active');
            const variant5 = document.querySelector('.variant5');
            variant5.classList.add('active');
            clickBlock.className = 'click-block variant5';
        }, 2000);
    } else {
        // Calculate the index of the next variant
        const nextIndex = (activeIndex % variants.length) + 1;

        // Set 'active' class to the next variant
        const nextVariant = document.querySelector(`.variant${nextIndex}`);
        nextVariant.classList.add('active');

        // Set click-block class to the name of the active variant
        clickBlock.className = `click-block variant${nextIndex}`;
    }
});