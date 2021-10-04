export default function scrollup() {
  const fastscroll = document.querySelector('.fastscroll');
  const scrollUpBtn = document.querySelector('.fastscroll__btn--up');
  const scrollDownBtn = document.querySelector('.fastscroll__btn--down');

  const scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );

  window.addEventListener('scroll', showUpBtn);

  function showUpBtn() {
    if (window.pageYOffset > 500) {
      fastscroll.classList.add('fastscroll--open');
      scrollUp();
      scrollDown();
    } else {
      fastscroll.classList.remove('fastscroll--open');
    }
  };

  function scrollUp() {
    scrollUpBtn.addEventListener('click', () => {
      window.scrollTo(0,0);
    })
  };

  function scrollDown() {
    scrollDownBtn.addEventListener('click', () => {
      window.scrollTo(0,scrollHeight);
    })
  };
}
