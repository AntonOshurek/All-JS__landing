export default function popup() {
  const body = document.querySelector('.body');
  const popupOpenBtn = document.querySelector('.popup-block__btn');
  const popup = document.querySelector('.popup');
  const popupArea = document.querySelector('.popup__area');
  const popupCloseBtn = document.querySelector('.popup__close-btn');

  const closeModal = (e) => {
    e.preventDefault();
    popup.classList.remove('popup--target');
    body.classList.remove("body--scrolloff");
  };

  const openModal = (e) => {
    e.preventDefault();
    popup.classList.add('popup--target');
    body.classList.add("body--scrolloff");
    popupCloseBtn.focus();
    modalKeyOpt();
  };

  function modalKeyOpt () {
    window.onkeydown = ( event ) => {
      if ( event.keyCode == 27 ) closeModal(event);
    };
  };

  popupOpenBtn.addEventListener ('click', (e) => openModal(e));
  popupCloseBtn.addEventListener('click', (e) => closeModal(e));
  popupArea.addEventListener('click', (e) => closeModal(e));
};
