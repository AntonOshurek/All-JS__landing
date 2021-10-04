export default function scrollup() {
  const scrollup = document.querySelector('.scrollup');
  const scrollupBtn = document.querySelector('.scrollup__btn');


  window.addEventListener('scroll', showUpBtn);

  const scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );


  function showUpBtn() {
    if (window.pageYOffset > 500) {
      scrollup.classList.add('scrollup--open');
      scrollDown()
    } else {
      scrollup.classList.remove('scrollup--open');
    }
  };

  function scrollDown() {
    scrollupBtn.addEventListener('click', () => {
      window.scrollTo(0,0);
    })
  }
}
