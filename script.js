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
