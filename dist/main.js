/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createContact: () => (/* binding */ createContact)\n/* harmony export */ });\nfunction createContact() {\r\n  content.innerHTML = '';\r\n\r\n  const contentDiv = document.querySelector('#content');\r\n\r\n  const heading = document.createElement('h1');\r\n  heading.classList.add('contact-heading');\r\n  heading.textContent = \"Contact Us\";\r\n  contentDiv.appendChild(heading);\r\n\r\n  const forInquiries = document.createElement('p');\r\n  forInquiries.classList.add('contact-info');\r\n  forInquiries.textContent = \"For inquiries and reservations, please contact us at:\";\r\n  contentDiv.appendChild(forInquiries);\r\n\r\n  const phone = document.createElement('p');\r\n  phone.classList.add('contact-info');\r\n  phone.textContent = \"Phone: 123-456-7890\";\r\n  contentDiv.appendChild(phone);\r\n  \r\n  const email = document.createElement('p');\r\n  email.classList.add('contact-info');\r\n  email.textContent = \"Email: info@burgerandfries.com\";\r\n  contentDiv.appendChild(email);\r\n\r\n  const locationHeading = document.createElement('h2');\r\n  locationHeading.classList.add('location-heading');\r\n  locationHeading.textContent = \"Our Location\";\r\n  contentDiv.appendChild(locationHeading);\r\n\r\n  const addy1 = document.createElement('p');\r\n  addy1.classList.add('contact-info');\r\n  addy1.textContent = \"123 Main Street\";\r\n  contentDiv.appendChild(addy1);\r\n\r\n  const addy2 = document.createElement('p');\r\n  addy2.classList.add('contact-info');\r\n  addy2.textContent = \"Cityville, State 12345\";\r\n  contentDiv.appendChild(addy2);\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHomePage: () => (/* binding */ loadHomePage)\n/* harmony export */ });\n\r\n\r\nfunction loadHomePage() {\r\n  content.innerHTML = '';\r\n\r\n  const contentDiv = document.querySelector('#content');\r\n\r\n  const imgContainer = document.createElement('div');\r\n  imgContainer.classList.add('image-container');\r\n  contentDiv.appendChild(imgContainer);\r\n\r\n  const burgerFriesImg = document.createElement('img');\r\n  burgerFriesImg.classList.add('burger-fries-img');\r\n  burgerFriesImg.src = '../src/burger-fries.jpg';\r\n  burgerFriesImg.alt = 'Image of burger and fries'\r\n  imgContainer.appendChild(burgerFriesImg);\r\n\r\n  const burgerFriesImg2 = document.createElement('img');\r\n  burgerFriesImg2.classList.add('burger-fries-img');\r\n  burgerFriesImg2.src = '../src/burger-fries2.jpg';\r\n  burgerFriesImg2.alt = 'Image of burger and fries'\r\n  imgContainer.appendChild(burgerFriesImg2);\r\n\r\n  const burgerFriesImg3 = document.createElement('img');\r\n  burgerFriesImg3.classList.add('burger-fries-img');\r\n  burgerFriesImg3.src = '../src/burger-fries3.jpg';\r\n  burgerFriesImg3.alt = 'Image of burger and fries'\r\n  imgContainer.appendChild(burgerFriesImg3);\r\n\r\n  const paraContainer = document.createElement('div');\r\n  paraContainer.classList.add('para-container');\r\n  contentDiv.appendChild(paraContainer);\r\n  \r\n  const heading = document.createElement('h2');\r\n  heading.classList.add('welcome-heading');\r\n  heading.textContent = 'Welcome to Burgers and Fries';\r\n  paraContainer.appendChild(heading);\r\n\r\n  const welcomePara = document.createElement('p');\r\n  welcomePara.classList.add('welcome-para');\r\n  welcomePara.textContent = \"your go-to place for delicious burgers, crispy fries, and refreshing beverages. We take pride in serving high-quality, mouthwatering food that will leave you craving for more. Our friendly staff is dedicated to providing you with an exceptional dining experience. Whether you're dining in or grabbing takeout, we guarantee satisfaction with every bite.\";\r\n  paraContainer.appendChild(welcomePara);\r\n\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\n(0,_home__WEBPACK_IMPORTED_MODULE_0__.loadHomePage)();\r\n\r\nconst homeButton = document.querySelector('#home-button');\r\nconst menuButton = document.querySelector('#menu-button');\r\nconst contactButton = document.querySelector('#contact-button');\r\n\r\nhomeButton.addEventListener('click', _home__WEBPACK_IMPORTED_MODULE_0__.loadHomePage);\r\nmenuButton.addEventListener('click', _menu__WEBPACK_IMPORTED_MODULE_1__.createMenu);\r\ncontactButton.addEventListener('click', _contact__WEBPACK_IMPORTED_MODULE_2__.createContact);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMenu: () => (/* binding */ createMenu)\n/* harmony export */ });\n\r\nfunction createMenu() {\r\n  content.innerHTML = '';\r\n\r\n  let contentDiv = document.querySelector('#content');\r\n\r\n  const heading = document.createElement('h1');\r\n  heading.classList.add('menu-heading');\r\n  heading.textContent = \"Our Menu\";\r\n  contentDiv.appendChild(heading);\r\n\r\n  const para = document.createElement('p');\r\n  para.classList.add('menu-para');\r\n  para.textContent = \"Explore our delicious offerings:\";\r\n  contentDiv.appendChild(para);\r\n\r\n  const burger = document.createElement('h3');\r\n  burger.classList.add('menu-item');\r\n  burger.textContent = \"Burger Deluxe\";\r\n  contentDiv.appendChild(burger);\r\n\r\n  const cheeseburger = document.createElement('h3');\r\n  cheeseburger.classList.add('menu-item');\r\n  cheeseburger.textContent = \"Classic Cheeseburger\";\r\n  contentDiv.appendChild(cheeseburger);\r\n\r\n  const vegBurger = document.createElement('h3');\r\n  vegBurger.classList.add('menu-item');\r\n  vegBurger.textContent = \"Vegetarian Burger\";\r\n  contentDiv.appendChild(vegBurger);\r\n\r\n  const regFries = document.createElement('h3');\r\n  regFries.classList.add('menu-item');\r\n  regFries.textContent = \"Crispy Fries\";\r\n  contentDiv.appendChild(regFries);\r\n\r\n  const curlyFries = document.createElement('h3');\r\n  curlyFries.classList.add('menu-item');\r\n  curlyFries.textContent = \"Seasoned Curly Fries\";\r\n  contentDiv.appendChild(curlyFries);\r\n\r\n  const onionRings = document.createElement('h3');\r\n  onionRings.classList.add('menu-item');\r\n  onionRings.textContent = \"Onion Rings\";\r\n  contentDiv.appendChild(onionRings);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;