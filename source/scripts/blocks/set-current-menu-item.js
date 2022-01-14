const setCurrentMenuItem = () => {
  const isScrolledIntoView = (elem) => {
    const rect = elem.getBoundingClientRect();

    const elemTop = rect.top;
    const elemBottom = rect.bottom;

    const isVisible = (elemTop < (window.innerHeight / 2) && Math.sign(elemTop) != -1) || ((elemBottom > window.innerHeight / 2) && elemBottom < window.innerHeight);
    return isVisible;
  };

  const allSections = document.querySelectorAll('section');
  const allNavLinks = document.querySelectorAll('.nav__link');

  const secArr = [...allSections];

  // if you need add for this logick other blocks =>
  //  const footerBlock = document.querySelector('.footer');
  //  const secArr = [...allSections, footerBlock];

  const markCurrentMenuItem = () => {
    secArr.forEach((section) => {
      let sectionClass;
      if(isScrolledIntoView(section)) {
        sectionClass = section.className;

        allNavLinks.forEach((link) => {
          link.classList.remove('nav__link--current');
          if(link.getAttribute('data-nav-name') === sectionClass){
            link.classList.add('nav__link--current');
          }
        })
      }
    })
  };

  window.addEventListener('scroll', markCurrentMenuItem);
}

export {setCurrentMenuItem};
