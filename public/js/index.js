$(document).ready(function () {
  var currentIndex = 0;
  var slides = $(".slide");
  var totalSlides = slides.length;

  // Show the first slide
  slides.eq(currentIndex).show();

  // Function to show next slide
  function nextSlide() {
    slides.eq(currentIndex).fadeOut(500);
    currentIndex = (currentIndex + 1) % totalSlides;
    slides.eq(currentIndex).fadeIn(500);
  }

  // Function to show previous slide
  function prevSlide() {
    slides.eq(currentIndex).fadeOut(500);
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    slides.eq(currentIndex).fadeIn(500);
  }

  // Show next slide on button click
  $("#next").click(nextSlide);

  // Show previous slide on button click
  $("#prev").click(prevSlide);

  // Automatic slideshow
  var slideshowInterval = setInterval(nextSlide, 3000);

  // Pause slideshow on hover
  $("#slideshow").hover(
    function () {
      clearInterval(slideshowInterval);
    },
    function () {
      slideshowInterval = setInterval(nextSlide, 3000);
    }
  );
});
