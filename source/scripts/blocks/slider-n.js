export default function slider__n() {
  //btn
  const sliderBtnPrev = document.querySelector('.sleder-n-controls__button--prev');
  const sliderBtnNext = document.querySelector('.sleder-n-controls__button--next');
  //slides counter
  const sliderCounterCurrent = document.querySelector('.sleder-n-controls__total--current');
  const sliderCounterTotal = document.querySelector('.sleder-n-controls__total--total');
  //all sledes
  const slides = document.querySelectorAll('.slider-n-items__item');

  let slideIndex = 1;

  function getZero (num) {
    if (num >= 0 && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
  };

  sliderCounterTotal.innerHTML = getZero(slides.length);

  function showSlides(n) {
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    slides.forEach(item => item.classList.add('slider-n-items__item--hidden'));
    slides[slideIndex - 1].classList.remove('slider-n-items__item--hidden');

    sliderCounterCurrent.innerHTML = getZero(slideIndex);
  };

  function plusSlides(n) {
    showSlides(slideIndex += n);
  };

  sliderBtnPrev.addEventListener('click', () => {
    plusSlides(-1);
  });

  sliderBtnNext.addEventListener('click', () => {
    plusSlides(1);
  });

};
