export default function slider__n() {
  //btn
  const sliderBtnPrev = document.querySelector('.slederfull-controls__button--prev');
  const sliderBtnNext = document.querySelector('.slederfull-controls__button--next');
  //slides counter
  const sliderCounterCurrent = document.querySelector('.slederfull-controls__total--current');
  const sliderCounterTotal = document.querySelector('.slederfull-controls__total--total');
  //slides wrpper
  const slidesWrapper = document.querySelector('.sliderfull-items');
  const slidesField = document.querySelector('.sliderfull-items__inner');
  //all sledes
  const slides = document.querySelectorAll('.sliderfull-items__item');

  let slideIndex = 1;
  let offset = 0;
  const width = window.getComputedStyle(slidesWrapper).width;

  //????????????????????
  /*slides.forEach(slide => {
    slide.style.width = width;
  });*/

  slidesField.style.width = 100 * slides.length + '%';

  function getZero (num) {
    if (num >= 0 && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
  };

  const sliderIndicatorBlock = document.querySelector('.sliderfull-indicators');
  function createIndicatorBtn() {
    let element = '';

    for(let i = 0; i < slides.length; i++) {
      element += `
        <li class="sliderfull-indicators__item">
          <button class="sliderfull-indicators__button" data-slide-index = "${i}"></button>
        </li>
      `;

      sliderIndicatorBlock.innerHTML = element;
    }
  };
  createIndicatorBtn();

  sliderCounterTotal.innerHTML = getZero(slides.length);
  function showCurrentNumber() {
    if (slideIndex > slides.length) slideIndex = 1;
    if (slideIndex < 1) slideIndex = slides.length;
    sliderCounterCurrent.innerHTML = getZero(slideIndex);
  };

  sliderBtnNext.addEventListener('click', () => {
    if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += +width.slice(0, width.length - 2);
    }

    slideIndex++;

    slidesField.style.transform = `translate(-${offset}px)`;

    showCurrentNumber();
  });

  sliderBtnPrev.addEventListener('click', () => {
    if (offset == 0) {
      offset = +width.slice(0, width.length - 2) * (slides.length - 1);
    } else {
      offset -= +width.slice(0, width.length - 2);
    }

    slideIndex--;

    slidesField.style.transform = `translate(-${offset}px)`;

    showCurrentNumber();
  });
};
