export  default function navigationBurgerBtn() {
  const body = document.querySelector('.body');
  const navBtn = document.querySelector('.nav__btn');
  const navBtnBurger = document.querySelector('.nav__btn-burger');
  const navList = document.querySelector('.nav__list');
  const navLink = document.querySelectorAll('.nav__link');
  const noTouchBG = document.querySelector('.nav__background-notouch');

  let navOpen = false;

  navBtn.addEventListener('click', () => {
    if(!navOpen) {
      openNavigation();
    } else {
      closeNavigation();
    }
  });

  function openNavigation() {
    navBtn.classList.add('nav__btn--open');
    navBtnBurger.classList.add('nav__btn-burger--open');
    navList.classList.add('nav__list--open');
    body.classList.add('body--scrolloff');
    noTouchBG.classList.add('nav__background-notouch--on');

    navLink.forEach((link) => {
      link.addEventListener('click', () => {
        closeNavigation();
      });
    });

    noTouchBG.addEventListener('click', () => {
      closeNavigation();
    });

    window.addEventListener('resize', (e) => {
      if (window.screen.width > 900) {
        closeNavigation();
      };
    });

    navOpen = true;
  };

  function closeNavigation() {
    navBtn.classList.remove('nav__btn--open');
    navBtnBurger.classList.remove('nav__btn-burger--open');
    navList.classList.remove('nav__list--open');
    body.classList.remove('body--scrolloff');
    noTouchBG.classList.remove('nav__background-notouch--on');
    navOpen = false;
  };

}
