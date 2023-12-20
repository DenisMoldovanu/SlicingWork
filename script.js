const swiper = new Swiper(".swiper", {
    // Optional parameters
    loop: false,

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
const swiperabout = new Swiper(".linkedin-section .swiper", {
    // Optional parameters
    loop: false,
    slidesPerView: 4,
    spaceBetween: 20,
    breakpoints: {
        // when window width is >= 320px
        270: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        420: {
            slidesPerView: 2,
        },
        // when window width is >= 480px
        767: {
            slidesPerView: 3,
        },
        // when window width is >= 640px
        992: {
            slidesPerView: 4,
        },
    },
    // If we need pagination
    pagination: {
        el: ".swiper-pagination-about",
        clickable: true,
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

const clickBlock = document.querySelector(".click-block");
const variants = document.querySelectorAll(".hero-img-variant");

clickBlock?.addEventListener("click", () => {
    const activeVariant = document.querySelector(".hero-img-variant.active");
    const activeIndex = parseInt(
        activeVariant.classList[1].replace("variant", "")
    );

    variants.forEach((variant) => variant.classList.remove("active"));

    if (activeIndex === 3) {
        // Set 'active' class to variant4 when clicking variant3
        const variant4 = document.querySelector(".variant4");
        variant4.classList.add("active");

        // After 2 seconds, change to variant5
        setTimeout(() => {
            variant4.classList.remove("active");
            const variant5 = document.querySelector(".variant5");
            variant5.classList.add("active");
            clickBlock.className = "click-block variant5";
        }, 2000);
    } else {
        // Calculate the index of the next variant
        const nextIndex = (activeIndex % variants.length) + 1;

        // Set 'active' class to the next variant
        const nextVariant = document.querySelector(`.variant${nextIndex}`);
        nextVariant.classList.add("active");

        // Set click-block class to the name of the active variant
        clickBlock.className = `click-block variant${nextIndex}`;
    }
});

// Array of image sources
const imageSources = [
    "images/Brandlogos/1.png",
    "images/Brandlogos/2.png",
    "images/Brandlogos/3.png",
    "images/Brandlogos/4.png",
    "images/Brandlogos/5.png",
    "images/Brandlogos/6.png",
    "images/Brandlogos/7.png",
    "images/Brandlogos/8.png",
    "images/Brandlogos/9.png",
    "images/Brandlogos/10.png",
    "images/Brandlogos/11.png",
    "images/Brandlogos/12.png",
    "images/Brandlogos/13.png",
    "images/Brandlogos/14.png",
    "images/Brandlogos/15.png",
    "images/Brandlogos/16.png",
    "images/Brandlogos/17.png",
    "images/Brandlogos/18.png",
    "images/Brandlogos/20.png",
    "images/Brandlogos/21.png",
    "images/Brandlogos/22.png",
    "images/Brandlogos/23.png",
    "images/Brandlogos/24.png",
    "images/Brandlogos/25.png",
    "images/Brandlogos/26.png",
    "images/Brandlogos/27.png",
    "images/Brandlogos/28.png",
    "images/Brandlogos/29.png",
    "images/Brandlogos/30.png",
    "images/Brandlogos/31.png",
    "images/Brandlogos/32.png",
    "images/Brandlogos/33.png",
    "images/Brandlogos/34.png",
    "images/Brandlogos/35.png",
    "images/Brandlogos/36.png",
    "images/Brandlogos/37.png",
    "images/Brandlogos/38.png",
    "images/Brandlogos/39.png",
    "images/Brandlogos/40.png",
    "images/Brandlogos/41.png",
    "images/Brandlogos/42.png",
    "images/Brandlogos/43.png",
    "images/Brandlogos/44.png",
    "images/Brandlogos/45.png",
    "images/Brandlogos/46.png",
    "images/Brandlogos/47.png",
    "images/Brandlogos/48.png",
    "images/Brandlogos/49.png",
    "images/Brandlogos/50.png",
    "images/Brandlogos/51.png",
    "images/Brandlogos/52.png",
    "images/Brandlogos/53.png",
    "images/Brandlogos/54.png",
    "images/Brandlogos/55.png",
    "images/Brandlogos/56.png",
    "images/Brandlogos/57.png",
    "images/Brandlogos/58.png",
    "images/Brandlogos/59.png",
    "images/Brandlogos/60.png",
    "images/Brandlogos/61.png",
    "images/Brandlogos/62.png",
    "images/Brandlogos/63.png",
    "images/Brandlogos/64.png",
];
// Function to display images
function displayImages() {
    const brandsList = document.getElementById("brandsList");

    // Loop through the imageSources array
    imageSources.forEach((src) => {
        // Create an img element for each image source
        const img = document.createElement("img");
        img.src = src;
        img.alt = "Brand Logo"; // Set alt attribute for accessibility

        // Append the img element to the brandsList div
        brandsList?.appendChild(img);
    });
}

displayImages();

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight)
    );
}

function handleScroll() {
    var partnersSections = document.querySelectorAll(
        ".animated-brands-content"
    );

    partnersSections.forEach(function (section) {
        if (isElementInViewport(section)) {
            section.classList.add("active");
        } else {
            section.classList.remove("active");
        }
    });
}

// Initial check on page load
handleScroll();

// Add scroll event listener
window.addEventListener("scroll", handleScroll);
