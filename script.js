const galleryImages = document.querySelectorAll(".gallery-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

function showImage(index) {
    currentIndex = index;
    lightboxImg.src = galleryImages[currentIndex].src;
    lightbox.style.display = "flex";
}

galleryImages.forEach((img, index) => {
    img.addEventListener("click", () => {
        showImage(index);
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});

prevBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    currentIndex =
        (currentIndex - 1 + galleryImages.length) %
        galleryImages.length;
    showImage(currentIndex);
});

nextBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    currentIndex =
        (currentIndex + 1) %
        galleryImages.length;
    showImage(currentIndex);
});

document.addEventListener("keydown", (e) => {
    if (lightbox.style.display !== "flex") return;

    if (e.key === "ArrowRight") {
        currentIndex =
            (currentIndex + 1) %
            galleryImages.length;
        showImage(currentIndex);
    }

    if (e.key === "ArrowLeft") {
        currentIndex =
            (currentIndex - 1 + galleryImages.length) %
            galleryImages.length;
        showImage(currentIndex);
    }

    if (e.key === "Escape") {
        lightbox.style.display = "none";
    }
});
let startX = 0;

lightbox.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

lightbox.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;

    if (startX - endX > 50) {
        nextBtn.click();
    }

    if (endX - startX > 50) {
        prevBtn.click();
    }
});
/* ===========================
   BURGER MENU
=========================== */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        menuToggle.classList.toggle("active");
        navLinks.classList.toggle("active");

    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            menuToggle.classList.remove("active");
            navLinks.classList.remove("active");

        });

    });

}
