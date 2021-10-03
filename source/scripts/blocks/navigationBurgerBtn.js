export  default function navigationBurgerBtn() {
  const navBtn = document.querySelector('.nav__btn');
  let navOpen = false;

  navBtn.addEventListener('click', () => {
    if(!navOpen) {
      navBtn.classList.add('nav__btn--open');
      navOpen = true;
    } else {
      navBtn.classList.remove('nav__btn--open');
      navOpen = false;
    }
  })
}
