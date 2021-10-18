/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./source/scripts/blocks/custom-video.js":
/*!***********************************************!*\
  !*** ./source/scripts/blocks/custom-video.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ customVideo; }
/* harmony export */ });
function customVideo() {
  const video = document.querySelector('.player__video');
  const playBtn = document.querySelector('.player__play');
  const replayBtn = document.querySelector('.player__replay');
  const progressBar = document.querySelector('.player__status-bar');
  const playerTime = document.querySelector('.player__time');

  const getZero = num => {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  };

  const toggleVideoStatus = () => {
    if (video.paused) {
      video.play();
      playBtn.style.backgroundImage = 'url("../../img//custom-video/pause.svg")';
    } else {
      video.pause();
      playBtn.style.backgroundImage = 'url("../../img//custom-video/play.svg")';
    }
  };

  playBtn.addEventListener('click', toggleVideoStatus);
  video.addEventListener('click', toggleVideoStatus);
  replayBtn.addEventListener('click', () => {
    video.currentTime = 0;
    video.pause();
  });
  video.addEventListener('timeupdate', () => {
    progressBar.value = video.currentTime / video.duration * 100;
    let minutes = Math.floor(video.currentTime / 60);
    let seconds = Math.floor(video.currentTime % 60);
    playerTime.textContent = `${getZero(minutes)} : ${getZero(seconds)}`;
  });
  progressBar.addEventListener('change', () => {
    video.currentTime = progressBar.value * video.duration / 100;
  });
}
;

/***/ }),

/***/ "./source/scripts/blocks/navigationBurgerBtn.js":
/*!******************************************************!*\
  !*** ./source/scripts/blocks/navigationBurgerBtn.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ navigationBurgerBtn; }
/* harmony export */ });
function navigationBurgerBtn() {
  const body = document.querySelector('.body');
  const navBtn = document.querySelector('.nav__btn');
  const navBtnBurger = document.querySelector('.nav__btn-burger');
  const navList = document.querySelector('.nav__list');
  const navLink = document.querySelectorAll('.nav__link');
  const noTouchBG = document.querySelector('.nav__background-notouch');
  let navOpen = false;
  navBtn.addEventListener('click', () => {
    if (!navOpen) {
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
    navLink.forEach(link => {
      link.addEventListener('click', () => {
        closeNavigation();
      });
    });
    noTouchBG.addEventListener('click', () => {
      closeNavigation();
    });
    window.addEventListener('resize', e => {
      console.log(e);

      if (window.screen.width > 900) {
        closeNavigation();
      }

      ;
    });
    navOpen = true;
  }

  ;

  function closeNavigation() {
    navBtn.classList.remove('nav__btn--open');
    navBtnBurger.classList.remove('nav__btn-burger--open');
    navList.classList.remove('nav__list--open');
    body.classList.remove('body--scrolloff');
    noTouchBG.classList.remove('nav__background-notouch--on');
    navOpen = false;
  }

  ;
}

/***/ }),

/***/ "./source/scripts/blocks/pagination.js":
/*!*********************************************!*\
  !*** ./source/scripts/blocks/pagination.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ pagination; }
/* harmony export */ });
function pagination() {
  const getRandomInt = (minValue, maxValue) => {
    if (Math.sign(minValue) === -1 || Math.sign(maxValue) === -1 || minValue >= maxValue) {
      throw new Error('minValue or maxValue they have the wrong value');
    }

    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  };

  const usersNames = ['Abraham', 'Addison', 'Adrian', 'Albert', 'Alec', 'Alfred', 'Alvin', 'Andrew', 'Andy', 'Archibald', 'Archie', 'Arlo', 'Arthur', 'Arthur', 'Austen', 'Barnabe', 'Bartholomew', 'Bertram', 'Bramwell', 'Byam', 'Cardew', 'Chad', 'Chance', 'Colin', 'Coloman', 'Curtis', 'Cuthbert', 'Daniel', 'Darryl', 'David', 'Dickon', 'Donald', 'Dougie', 'Douglas', 'Earl', 'Ebenezer', 'Edgar', 'Edmund', 'Edward', 'Edwin', 'Elliot', 'Emil', 'Floyd', 'Franklin', 'Frederick', 'Gabrie', 'Galton', 'Gareth', 'George', 'Gerard', 'Gilbert', 'Gorden', 'Gordon', 'Graham', 'Grant', 'Henry', 'Hervey', 'Hudson', 'Hugh', 'Ian', 'Jack', 'Jaime', 'James', 'Jason', 'Jeffrey', 'Joey', 'John', 'Jolyon', 'Jonas', 'Joseph', 'Joshua', 'Julian', 'Justin', 'Kurt', 'Lanny', 'Larry', 'Laurence', 'Lawton', 'Lester', 'Malcolm', 'Marcus', 'Mark', 'Marshall', 'Martin', 'Marvin', 'Matt', 'Maximilian', 'Michael', 'Miles', 'Murray', 'Myron', 'Nate', 'Nathan', 'Neil', 'Nicholas', 'Nicolas', 'Norman', 'Oliver', 'Oscar', 'Osric', 'Owen', 'Patrick', 'Paul', 'Peleg', 'Philip', 'Phillipps', 'Raymond', 'Reginald', 'Rhys', 'Richard', 'Robert', 'Roderick', 'Rodger', 'Roger', 'Ronald', 'Rowland', 'Rufus', 'Russell', 'Sebastian', 'Shahaf', 'Simon', 'Stephen', 'Swaine', 'Thomas', 'Tobias', 'Travis', 'Victor', 'Vincent', 'Vincent', 'Vivian', 'Wayne', 'Wilfred', 'William', 'Winston', 'Zadoc'];
  const citys = ['Абаза', 'Абакан', 'Абдулино', 'Абинск', 'Агидель', 'Гдов', 'Геленджик', 'Георгиевск', 'Глазов', 'Голицыно', 'Киселёвск', 'Кисловодск', 'Клин', 'НовыйУренгой', 'Ногинск', 'Нолинск', 'Норильск', 'Ноябрьск', 'Нурлат', 'Нытва', 'Нюрба', 'Нягань', 'Нязепетровск', 'Няндома', 'Облучье', 'Обнинск', 'Обоянь', 'Обь', 'Североуральск', 'Трёхгорный', 'Усолье', 'Лабинск', 'Уссурийск'];
  let users = [];

  class User {
    constructor(name, city, age) {
      this.name = name;
      this.city = city;
      this.age = age;
    }

  }

  ;
  const numberOfNotes = 32;

  function pushToUsers(value) {
    for (let i = 0; i < value; i++) {
      const user = new User(usersNames[getRandomInt(0, usersNames.length - 1)], citys[getRandomInt(0, citys.length - 1)], getRandomInt(15, 50));
      users.push(user);
    }
  }

  ;
  pushToUsers(numberOfNotes);
  let notesOnPage = 5;

  function createPaginationBtns() {
    const paginationControls = document.querySelector('.pagination-controls');
    let btns = [];

    for (let i = 0; i < Math.ceil(users.length / notesOnPage); i++) {
      btns += `
        <li class="pagination-controls__elem">
          <button class="pagination-controls__btn" type="button">${i + 1}</button>
        </li>
      `;
      paginationControls.innerHTML = btns;
    }

    ;
  }

  ;
  createPaginationBtns();
  const paginationBtns = document.querySelectorAll('.pagination-controls__btn');
  paginationBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      searchPaginationList(this);
    });
  });

  function searchPaginationList(event = paginationBtns[0]) {
    buttonLabeling(event);
    let pageNum = +event.innerHTML; //get page number

    let start = (pageNum - 1) * notesOnPage;
    let end = start + notesOnPage;
    let notes = users.slice(start, end);
    showPaginationList(notes);
  }

  ;
  searchPaginationList();

  function buttonLabeling(button) {
    paginationBtns.forEach(btn => {
      btn.classList.remove('pagination-controls__btn--active');
    });
    button.classList.add('pagination-controls__btn--active');
  }

  ;

  function showPaginationList(notes) {
    const tableBody = document.querySelector('.table__body');
    let list = [];
    notes.forEach(elem => {
      list += `
      <tr class="table__row">
        <th class="table__item table__item--row" scope="row">${elem.name}</th>
        <td class="table__item">${elem.city}</td>
        <td class="table__item">${elem.age}</td>
      </tr>
      `;
      tableBody.innerHTML = list;
    });
    tableHeightProp(tableBody);
  }

  ;

  function tableHeightProp(tableBody) {
    const tableHeight = window.getComputedStyle(document.querySelector('.table__row')).height;
    const height = +tableHeight.slice(0, tableHeight.length - 2) * notesOnPage;
    tableBody.style.height = `${height}px`;
  }

  ;
}
;

/***/ }),

/***/ "./source/scripts/blocks/popup.js":
/*!****************************************!*\
  !*** ./source/scripts/blocks/popup.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ popup; }
/* harmony export */ });
function popup() {
  const body = document.querySelector('.body');
  const popupOpenBtn = document.querySelector('.popup-block__btn');
  const popup = document.querySelector('.popup');
  const popupArea = document.querySelector('.popup__area');
  const popupCloseBtn = document.querySelector('.popup__close-btn');

  const closeModal = e => {
    e.preventDefault();
    popup.classList.remove('popup--target');
    body.classList.remove("body--scrolloff");
  };

  const openModal = e => {
    e.preventDefault();
    popup.classList.add('popup--target');
    body.classList.add("body--scrolloff");
    popupCloseBtn.focus();
    modalKeyOpt();
  };

  function modalKeyOpt() {
    window.onkeydown = event => {
      if (event.keyCode == 27) closeModal(event);
    };
  }

  ;
  popupOpenBtn.addEventListener('click', e => openModal(e));
  popupCloseBtn.addEventListener('click', e => closeModal(e));
  popupArea.addEventListener('click', e => closeModal(e));
}
;

/***/ }),

/***/ "./source/scripts/blocks/scrollup.js":
/*!*******************************************!*\
  !*** ./source/scripts/blocks/scrollup.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ scrollup; }
/* harmony export */ });
function scrollup() {
  const fastscroll = document.querySelector('.fastscroll');
  const scrollUpBtn = document.querySelector('.fastscroll__btn--up');
  const scrollDownBtn = document.querySelector('.fastscroll__btn--down');
  const scrollHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
  window.addEventListener('scroll', showUpBtn);

  function showUpBtn() {
    if (window.pageYOffset > 500) {
      fastscroll.classList.add('fastscroll--open');
      scrollUp();
      scrollDown();
    } else {
      fastscroll.classList.remove('fastscroll--open');
    }
  }

  ;

  function scrollUp() {
    scrollUpBtn.addEventListener('click', () => {
      window.scrollTo(0, 0);
    });
  }

  ;

  function scrollDown() {
    scrollDownBtn.addEventListener('click', () => {
      window.scrollTo(0, scrollHeight);
    });
  }

  ;
}

/***/ }),

/***/ "./source/scripts/blocks/slider.js":
/*!*****************************************!*\
  !*** ./source/scripts/blocks/slider.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ slider; }
/* harmony export */ });
function slider() {
  //btn
  const sliderBtnPrev = document.querySelector('.sleder-controls__button--prev');
  const sliderBtnNext = document.querySelector('.sleder-controls__button--next'); //slides counter

  const sliderCounterCurrent = document.querySelector('.sleder-controls__total--current');
  const sliderCounterTotal = document.querySelector('.sleder-controls__total--total'); //all sledes

  const slides = document.querySelectorAll('.slider-items__item');
  let slideIndex = 1;

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  ;
  sliderCounterTotal.innerHTML = getZero(slides.length);

  function showSlides(n) {
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
    slides.forEach(item => item.classList.add('slider-items__item--hidden'));
    slides[slideIndex - 1].classList.remove('slider-items__item--hidden');
    sliderCounterCurrent.innerHTML = getZero(slideIndex);
  }

  ;

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  ;
  sliderBtnPrev.addEventListener('click', () => {
    plusSlides(-1);
  });
  sliderBtnNext.addEventListener('click', () => {
    plusSlides(1);
  });
}
;

/***/ }),

/***/ "./source/scripts/blocks/sliderfull.js":
/*!*********************************************!*\
  !*** ./source/scripts/blocks/sliderfull.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ sliderFull; }
/* harmony export */ });
function sliderFull() {
  //btn
  const sliderBtnPrev = document.querySelector('.sliderfull-items__button--prev');
  const sliderBtnNext = document.querySelector('.sliderfull-items__button--next'); //slides counter

  const sliderCounterCurrent = document.querySelector('.slederfull-controls__total--current');
  const sliderCounterTotal = document.querySelector('.slederfull-controls__total--total'); //slides wrpper

  const slidesWrapper = document.querySelector('.sliderfull-items');
  const slidesField = document.querySelector('.sliderfull-items__inner'); //all sledes

  const slides = document.querySelectorAll('.sliderfull-items__item');
  let slideIndex = 1;
  let offset = 0;
  const width = window.getComputedStyle(slidesWrapper).width;
  slides.forEach(slide => {
    slide.style.width = width;
  });
  slidesField.style.width = 100 * slides.length + '%';

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  ;
  const sliderIndicatorBlock = document.querySelector('.sliderfull-indicators');

  function createIndicatorBtn() {
    let element = '';

    for (let i = 0; i < slides.length; i++) {
      element += `
        <li class="sliderfull-indicators__item">
          <button class="sliderfull-indicators__button" data-slide-index = "${i + 1}"></button>
        </li>
      `;
      sliderIndicatorBlock.innerHTML = element;
    }
  }

  ;
  createIndicatorBtn();
  const indicatorsBtn = document.querySelectorAll('.sliderfull-indicators__button');
  indicatorsBtn.forEach(btn => {
    btn.addEventListener('click', selectbtn);
  });

  function selectbtn() {
    let atribute = this.getAttribute('data-slide-index');
    slideIndex = atribute;
    offset = +width.slice(0, width.length - 2) * (atribute - 1);
    slidesField.style.transform = `translate(-${offset}px)`;
    showCurrentNumber();
  }

  ;

  function showCurrentNumber() {
    if (slideIndex > slides.length) slideIndex = 1;
    if (slideIndex < 1) slideIndex = slides.length;
    sliderCounterCurrent.innerHTML = getZero(slideIndex);
    indicatorsBtn.forEach(btn => {
      btn.classList.remove('sliderfull-indicators__button--active');
    });
    indicatorsBtn[slideIndex - 1].classList.add('sliderfull-indicators__button--active');
  }

  ;
  showCurrentNumber();
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
}
;

/***/ }),

/***/ "./source/scripts/blocks/tabs.js":
/*!***************************************!*\
  !*** ./source/scripts/blocks/tabs.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ tabs; }
/* harmony export */ });
function tabs() {
  const tab = function () {
    const tab = document.querySelectorAll('.tab');
    const tabButton = document.querySelectorAll('.tabs-controls__btn');
    let tabName;
    tabButton.forEach(btn => {
      btn.addEventListener('click', selectTabNav);
    });

    function selectTabNav() {
      tabName = this.getAttribute('data-tab-name');
      selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
      tab.forEach(item => {
        item.classList.contains(tabName) ? item.classList.add('tab--current') : item.classList.remove('tab--current');
      });
    }
  };

  tab();
}
;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*********************************!*\
  !*** ./source/scripts/index.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_custom_video__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/custom-video */ "./source/scripts/blocks/custom-video.js");
/* harmony import */ var _blocks_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/slider */ "./source/scripts/blocks/slider.js");
/* harmony import */ var _blocks_sliderfull__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/sliderfull */ "./source/scripts/blocks/sliderfull.js");
/* harmony import */ var _blocks_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/tabs */ "./source/scripts/blocks/tabs.js");
/* harmony import */ var _blocks_popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/popup */ "./source/scripts/blocks/popup.js");
/* harmony import */ var _blocks_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/pagination */ "./source/scripts/blocks/pagination.js");
/* harmony import */ var _blocks_navigationBurgerBtn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blocks/navigationBurgerBtn */ "./source/scripts/blocks/navigationBurgerBtn.js");
/* harmony import */ var _blocks_scrollup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blocks/scrollup */ "./source/scripts/blocks/scrollup.js");








window.addEventListener('DOMContentLoaded', () => {
  (0,_blocks_custom_video__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_blocks_navigationBurgerBtn__WEBPACK_IMPORTED_MODULE_6__["default"])();
  (0,_blocks_slider__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_blocks_sliderfull__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_blocks_tabs__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_blocks_popup__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_blocks_pagination__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_blocks_scrollup__WEBPACK_IMPORTED_MODULE_7__["default"])();
});
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map