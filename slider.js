let slideNumber = -1;
const slides = document.querySelectorAll('section');
const length = slides.length - 1;


function hideAll(slides) {
    slides.forEach(slide => {
      slide.classList.add('animate__animated', 'animate__fadeInLeft');
      slide.style.display = 'none';
    })
}
  
function showSlide() {
  if(slideNumber < length) {
    slideNumber++;
  } else {
    slideNumber = 0;
  }
  
  slides[slideNumber].style.display = 'block';
}

hideAll(slides)
showSlide();
setTimeout(showSlide, 1000);
setTimeout(showSlide, 2000);
