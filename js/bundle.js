/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
  let users = [{
    name: 'name1',
    surname: 'surname1',
    age: 30
  }, {
    name: 'name2',
    surname: 'surname2',
    age: 30
  }, {
    name: 'name3',
    surname: 'surname3',
    age: 30
  }, {
    name: 'name4',
    surname: 'surname4',
    age: 30
  }, {
    name: 'name5',
    surname: 'surname5',
    age: 30
  }, {
    name: 'name6',
    surname: 'surname6',
    age: 30
  }, {
    name: 'name7',
    surname: 'surname7',
    age: 30
  }, {
    name: 'name8',
    surname: 'surname8',
    age: 30
  }, {
    name: 'name9',
    surname: 'surname9',
    age: 30
  }, {
    name: 'name10',
    surname: 'surname10',
    age: 30
  }, {
    name: 'name11',
    surname: 'surname11',
    age: 30
  }, {
    name: 'name12',
    surname: 'surname12',
    age: 30
  }, {
    name: 'name13',
    surname: 'surname13',
    age: 30
  }, {
    name: 'name14',
    surname: 'surname14',
    age: 30
  }, {
    name: 'name15',
    surname: 'surname15',
    age: 30
  }, {
    name: 'name16',
    surname: 'surname16',
    age: 30
  }, {
    name: 'name17',
    surname: 'surname17',
    age: 30
  }];
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
        <td class="table__item">${elem.surname}</td>
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
/* harmony import */ var _blocks_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/slider */ "./source/scripts/blocks/slider.js");
/* harmony import */ var _blocks_sliderfull__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/sliderfull */ "./source/scripts/blocks/sliderfull.js");
/* harmony import */ var _blocks_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/tabs */ "./source/scripts/blocks/tabs.js");
/* harmony import */ var _blocks_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/popup */ "./source/scripts/blocks/popup.js");
/* harmony import */ var _blocks_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/pagination */ "./source/scripts/blocks/pagination.js");





window.addEventListener('DOMContentLoaded', () => {
  (0,_blocks_slider__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_blocks_sliderfull__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_blocks_tabs__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_blocks_popup__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_blocks_pagination__WEBPACK_IMPORTED_MODULE_4__["default"])();
});
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map