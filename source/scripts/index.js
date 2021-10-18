import customvideo from './blocks/custom-video';
import slider from './blocks/slider';
import sliderFull from './blocks/sliderfull';
import tabs from './blocks/tabs';
import popup from './blocks/popup';
import pagination from './blocks/pagination';
import navigationBurgerBtn from './blocks/navigationBurgerBtn';
import scrollup from './blocks/scrollup';

window.addEventListener('DOMContentLoaded', () => {
  customvideo();
  navigationBurgerBtn();
  slider();
  sliderFull();
  tabs();
  popup();
  pagination();
  scrollup();
});

