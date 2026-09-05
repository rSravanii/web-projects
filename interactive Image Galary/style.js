const galleryFigures = document.querySelectorAll(".gallery figure");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const caption = document.getElementById("caption");
const closeBtn = document.getElementById("close");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 0;

// Open lightbox when image is clicked
galleryFigures.forEach((figure, index) => {
  const img = figure.querySelector("img");
  img.addEventListener("click", () => {
    currentIndex = index;
    showImage();
    lightbox.classList.remove("hidden");
  });
});

function showImage() {
  const figure = galleryFigures[currentIndex];
  lightboxImg.src = figure.querySelector("img").src;
  caption.textContent = figure.querySelector("figcaption").textContent;
}

// Close lightbox
closeBtn.addEventListener("click", () => {
  lightbox.classList.add("hidden");
});

// Navigation buttons
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + galleryFigures.length) % galleryFigures.length;
  showImage();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % galleryFigures.length;
  showImage();
});

// Close when clicking outside image
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.classList.add("hidden");
  }
});

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("hidden")) {
    if (e.key === "ArrowLeft") prevBtn.click();
    if (e.key === "ArrowRight") nextBtn.click();
    if (e.key === "Escape") closeBtn.click();
  }
});
