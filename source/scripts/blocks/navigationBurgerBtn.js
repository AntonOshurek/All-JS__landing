export  default function navigationBurgerBtn() {
  const navBtn = document.querySelector('.nav__btn');
  const navBtnBurger = document.querySelector('.nav__btn-burger');
  const navList = document.querySelector('.nav__list');

  let navOpen = false;

  navBtn.addEventListener('click', () => {
    if(!navOpen) {
      navBtn.classList.add('nav__btn--open');
      navBtnBurger.classList.add('nav__btn-burger--open');
      navList.classList.add('nav__list--open');
      navOpen = true;
    } else {
      navBtn.classList.remove('nav__btn--open');
      navBtnBurger.classList.remove('nav__btn-burger--open');
      navList.classList.remove('nav__list--open');
      navOpen = false;
    }
  })
}
