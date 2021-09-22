export default function slider() {
  //btn
  const sliderBtnPrev = document.querySelector('.sleder-controls__button--prev');
  const sliderBtnNext = document.querySelector('.sleder-controls__button--next');
  //slides counter
  const sliderCounterCurrent = document.querySelector('.sleder-controls__total--current');
  const sliderCounterTotal = document.querySelector('.sleder-controls__total--total');
  //all sledes
  const slides = document.querySelectorAll('.slider-items__item');

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

    slides.forEach(item => item.classList.add('slider-items__item--hidden'));
    slides[slideIndex - 1].classList.remove('slider-items__item--hidden');

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
