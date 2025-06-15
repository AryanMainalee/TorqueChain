//image slider
const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;
let index = 0;
let interval = setInterval(nextSlide, 5000);

document.getElementById('prev').addEventListener('click', () => {
  index = (index - 1 + slideCount) % slideCount;
  updateSlide();
  resetInterval();
});

document.getElementById('next').addEventListener('click', () => {
  nextSlide();
  resetInterval();
});

function nextSlide() {
  index = (index + 1) % slideCount;
  updateSlide();
}

function updateSlide() {
  slides.style.transform = `translateX(-${index * 100}%)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(nextSlide, 5000);
}