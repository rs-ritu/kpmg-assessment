// let reviewIndex = 1;
// showReview(reviewIndex);

// // Next/previous controls
// function plusReview(n) {
//   showReview(reviewIndex += n);
// }

// // Thumbnail image controls
// function currentReview(n) {
//   showReview(reviewIndex = n);
// }

// function showReview(n) {
//   let i;
//   let review = document.getElementsByClassName("reviewSlides");
//   let reviewDots = document.getElementsByClassName("dots");
//   if (n > review.length) {reviewIndex = 1}
//   if (n < 1) {reviewIndex = review.length}
//   for (i = 0; i < review.length; i++) {
//     review[i].style.display = "none";
//   }
//   for (i = 0; i < reviewDots.length; i++) {
//     reviewDots[i].className = reviewDots[i].className.replace(" active", "");
//   }
//   review[reviewIndex-1].style.display = "block";
//   reviewDots[reviewIndex-1].className += " active";
// }


let reviewIndex = 0;
showReview();

function showReview() {
  let i;
  let slides = document.getElementsByClassName("reviewSlides");
  let reviewDots = document.getElementsByClassName("dots");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    reviewDots[i].className = reviewDots[i].className.replace(" active", "");
  }
  reviewIndex++;
  if (reviewIndex > slides.length) {reviewIndex = 1}
  slides[reviewIndex-1].style.display = "block";
  reviewDots[reviewIndex-1].className += " active";
  setTimeout(showReview, 2000); // Change image every 2 seconds
}