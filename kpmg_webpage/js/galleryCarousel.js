
let galleryIndex = 1;
showgallery(galleryIndex);

// Next/previous controls
function gallerySlides(n) {
  showgallery(galleryIndex += n);
}

// Thumbnail image controls
function currentGallery(n) {
  showgallery(galleryIndex = n);
}

function showgallery(n) {
  let i;
  let slides = document.getElementsByClassName("gallerySlides");
  let galleryDots = document.getElementsByClassName("head");
  if (n > slides.length) {galleryIndex = 1}
  if (n < 1) {galleryIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < galleryDots.length; i++) {
    galleryDots[i].className = galleryDots[i].className.replace(" active", "");
  }
  slides[galleryIndex-1].style.display = "block";
  galleryDots[galleryIndex-1].className += " active";
}