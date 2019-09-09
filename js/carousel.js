const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.button-right');
const prevButton = document.querySelector('.button-left');
const navDots = document.querySelector('.carousel-nav');
const dots = Array.from(navDots.children);

// Gets the width of a slide in the array
const slideWidth = slides[0].getBoundingClientRect().width;

// Arrange slides next to one another
// slides[0].style.left = slideWidth * 0 + 'px';
// slides[1].style.left = slideWidth * 1 + 'px';
// slides[2].style.left = slideWidth * 2 + 'px';

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

// When I click left button move slides to the left

// When I click right button move slides to the right
nextButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;

  // Move to the next slide
});

// When I click the nav indicators, move to that slide
