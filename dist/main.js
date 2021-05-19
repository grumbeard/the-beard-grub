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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction updateMainImage() {\n  const mainImage = document.querySelector(\".main-image\");\n\n  mainImage.setAttribute(\"src\", \"https://source.unsplash.com/FsyuKH9iFI8\");\n  mainImage.setAttribute(\"alt-text\", \"Moist Raspberry Chocolate Cake\");\n\n  const imageCredit = document.querySelector(\".main-image-container .image-credit\");\n  imageCredit.innerText = \"unsplash.com/@jasmine_waheed\";\n}\n\nfunction updateHeader() {\n  const title = document.querySelector(\"header h1\");\n  title.innerText = \"The Beard Grub\";\n\n  const tagline = document.querySelector(\"header p\");\n  tagline.innerText = \"Beard-Soakingly Good Grub\";\n}\n\nfunction updateSection() {\n  const section = document.querySelector(\"section\");\n  // EMPTY SECTION\n  section.innerHTML = \"\";\n\n  // POPULATE SECTION\n  const info1 = document.createElement(\"p\");\n  info1.innerText = \"Mon - Fri: 7 - 10 AM | 5PM - 11 PM\";\n\n  const info2 = document.createElement(\"p\");\n  info2.innerText = \"Sat / Public Holidays: 5PM - 2 AM\";\n\n  const info3 = document.createElement(\"a\");\n  info3.setAttribute(\"href\", \"#\");\n  info3.innerText = \"Join the waitlist\"\n\n  section.append(info1, info2, info3);\n}\n\n\nfunction loadAbout() {\n  updateMainImage();\n  updateHeader();\n  updateSection();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAbout);\n\n\n//# sourceURL=webpack://restaurant/./src/about.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ \"./src/website.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _locations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locations */ \"./src/locations.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n\n\n\n\n\n\nfunction initTabs() {\n  const tabs = document.querySelectorAll(\".tab\");\n\n  tabs.forEach(tab => {\n    tab.addEventListener(\"click\", toggleTab);\n  });\n}\n\nfunction toggleTab(e) {\n  // CHECK IF TAB ALREADY ACTIVE\n  if (e.target.classList.contains(\"active\")) return;\n\n  // CLEAR CONTENTS\n  const content = document.getElementById(\"content\");\n\n  switch(e.target.dataset.tab) {\n    case \"about\":\n      (0,_about__WEBPACK_IMPORTED_MODULE_3__.default)();\n      break;\n    case \"menu\":\n      (0,_menu__WEBPACK_IMPORTED_MODULE_1__.default)();\n      break;\n    case \"locations\":\n      (0,_locations__WEBPACK_IMPORTED_MODULE_2__.default)();\n      break;\n  }\n  let active = document.querySelector(\".active\");\n  active.classList.remove(\"active\");\n\n  e.target.classList.add(\"active\");\n}\n\n(0,_website__WEBPACK_IMPORTED_MODULE_0__.default)();\ninitTabs();\n(0,_menu__WEBPACK_IMPORTED_MODULE_1__.default)();\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/locations.js":
/*!**************************!*\
  !*** ./src/locations.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction updateMainImage() {\n  const mainImage = document.querySelector(\".main-image\");\n\n  mainImage.setAttribute(\"src\", \"https://source.unsplash.com/hhhNjjzUMsI\");\n  mainImage.setAttribute(\"alt-text\", \"Forest Hut\");\n\n  const imageCredit = document.querySelector(\".main-image-container .image-credit\");\n  imageCredit.innerText = \"unsplash.com/@nelsonbuchanan\";\n}\n\nfunction updateHeader() {\n  const title = document.querySelector(\"header h1\");\n  title.innerText = \"Our Hideouts\";\n\n  const tagline = document.querySelector(\"header p\");\n  tagline.innerText = \"Absolute discretion painstakenly ensured\";\n}\n\nfunction updateSection() {\n  const section = document.querySelector(\"section\");\n  // EMPTY SECTION\n  section.innerHTML = \"\";\n\n  // POPULATE SECTION\n  const address = document.createElement(\"p\");\n  address.innerText = \"An oasis awaits close to any of these locations:\";\n\n  const imageContainer = document.createElement(\"div\");\n  imageContainer.classList.add(\"image-container\", \"map-image-container\");\n\n  const image = document.createElement(\"img\");\n  image.classList.add(\"image\", \"map-image\");\n  image.setAttribute(\"src\", \"https://source.unsplash.com/Gw_UOoFk4Wk\");\n  image.setAttribute(\"alt-text\", \"Map\");\n\n  const imageCredit = document.createElement(\"p\");\n  imageCredit.classList.add(\"image-credit\");\n  imageCredit.innerText = \"unsplash.com/@britishlibrary\";\n\n  imageContainer.append(image, imageCredit)\n\n  // CREATE LOCATION PINS\n  for (let i = 0; i < 10; i++) {\n    let pin = document.createElement(\"img\");\n    pin.classList.add(\"pin\");\n    pin.setAttribute(\"src\", \"./images/pin.svg\");\n\n    // RANDOMIZE LOCATION\n    let bottom = Math.floor(Math.random() * 80);\n    let right = Math.floor(Math.random() * 80);\n    pin.setAttribute(\"style\", `bottom:${bottom}%; right: ${right}%`);\n\n    imageContainer.append(pin);\n  }\n\n  section.append(address, imageContainer);\n}\n\n\nfunction loadLocations() {\n  updateMainImage();\n  updateHeader();\n  updateSection();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadLocations);\n\n\n//# sourceURL=webpack://restaurant/./src/locations.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mains = [\n  {\n    name: \"Double Cheese Dribble\",\n    description: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula libero nisi, eu pharetra sapien varius vel.\",\n    price: 21,\n    image: \"https://source.unsplash.com/rUmET8NYXFU\",\n    imageCredit: \"unsplash.com/@alexhaney\",\n  },\n  {\n    name: \"Ink Fix\",\n    description: \"Maecenas placerat dictum felis, ornare pulvinar nunc gravida non.\",\n    price: 22,\n    image: \"https://source.unsplash.com/tOaVS1skf20\",\n    imageCredit: \"unsplash.com/@jackiepark_\",\n  },\n  {\n    name: \"Wet Gnaws\",\n    description: \"Sed a sagittis ex, sed eleifend risus. Quisque varius erat at quam dignissim, sed condimentum ex aliquam.\",\n    price: 25,\n    image: \"https://source.unsplash.com/y_wGdAJMdOo\",\n    imageCredit: \"unsplash.com/@__menglong\",\n  },\n  {\n    name: \"Delicately\",\n    description: \"Duis eget purus pretium, eleifend purus vel, scelerisque lorem. Sed et ullamcorper turpis. Vestibulum interdum sem at dignissim sagittis.\",\n    price: 14,\n    image: \"https://source.unsplash.com/Heu40Pe6A48\",\n    imageCredit: \"unsplash.com/@covertnine\",\n  }\n];\n\nconst desserts = [\n  {\n    name: \"Creamy Revolution\",\n    description: \"Praesent maximus metus arcu. Vestibulum ullamcorper, ipsum sed viverra scelerisque, metus neque vulputate lorem, eu tincidunt risus nibh vitae turpis.\",\n    price: 6,\n    image: \"https://source.unsplash.com/0fyS-gk0h4w\",\n    imageCredit: \"unsplash.com/@micheile\"\n  },\n    {\n    name: \"The Quick Wax\",\n    description: \"Suspendisse et arcu ultricies, fermentum purus nec, tristique nisl. Ut tempus sed quam quis luctus. Fusce blandit nulla velit, et interdum elit cursus a.\",\n    price: 12,\n    image: \"https://source.unsplash.com/4CwxnXWPDMQ\",\n    imageCredit: \"unsplash.com/@portuguesegravity\"\n  },\n  {\n    name: \"Meltdown Waddle\",\n    description: \"Nam et felis rhoncus, luctus tellus at, porta magna. Praesent porta sollicitudin mi ut tristique. Phasellus mattis sed nulla in lacinia. \",\n    price: 12,\n    image: \"https://source.unsplash.com/B5uXKlluUQE\",\n    imageCredit: \"unsplash.com/@notethanum\"\n  },\n  {\n    name: \"Assorted Crumblers\",\n    description: \"Praesent tempus interdum eros, ut dictum felis sodales ut. Fusce mollis in justo eget rhoncus.\",\n    price: 3,\n    image: \"https://source.unsplash.com/-tR4fnNJW2A\",\n    imageCredit: \"unsplash.com/@aesullivan2010\"\n  }\n];\n\nfunction updateMainImage() {\n  const mainImage = document.querySelector(\".main-image\");\n\n  mainImage.setAttribute(\"src\", \"https://source.unsplash.com/Bt5VbQ8HSwc\");\n  mainImage.setAttribute(\"alt-text\", \"Drenched Beard\");\n\n  const imageCredit = document.querySelector(\".main-image-container .image-credit\");\n  imageCredit.innerText = \"unsplash.com/@mishaalzahed\";\n}\n\nfunction updateHeader() {\n  const title = document.querySelector(\"header h1\");\n  title.innerText = \"Beard-Soakers\"\n\n  const tagline = document.querySelector(\"header p\");\n  tagline.innerText = \"Just what you need to add a splash to your day\";\n}\n\nfunction updateSection() {\n  const section = document.querySelector(\"section\");\n  // EMPTY SECTION\n  section.innerHTML = \"\";\n\n  const mainsTitle = document.createElement(\"h2\");\n  mainsTitle.innerText = \"Moist Mains\";\n\n  section.append(mainsTitle);\n\n  mains.forEach(dish => {\n    let item = createMenuItem(dish.name, dish.description, dish.price, dish.image, dish.imageCredit);\n    section.append(item);\n  });\n\n  const dessertsTitle = document.createElement(\"h2\");\n  dessertsTitle.innerText = \"Decadent Desserts\";\n\n  section.append(dessertsTitle);\n\n  desserts.forEach(dish => {\n    let item = createMenuItem(dish.name, dish.description, dish.price, dish.image, dish.imageCredit);\n    section.append(item);\n  });\n}\n\nfunction createMenuItem(name, description, price, image, imageCredit) {\n  const item = document.createElement(\"div\");\n  item.classList.add(\"item-container\");\n\n  // MAKE INFO CONTAINER\n  const itemInfoContainer = document.createElement(\"div\");\n  itemInfoContainer.classList.add(\"item-info-container\");\n\n  const itemName = document.createElement(\"h3\");\n  itemName.classList.add(\"item-name\");\n  itemName.innerText = name;\n\n  const itemDescription = document.createElement(\"p\");\n  itemDescription.classList.add(\"item-description\");\n  itemDescription.innerText = description;\n\n  const itemPrice = document.createElement(\"p\");\n  itemPrice.classList.add(\"item-price\");\n  itemPrice.innerText = \"$\" + price;\n\n  itemInfoContainer.append(itemName, itemDescription, itemPrice);\n\n  // MAKE IMAGE CONTAINER\n  const itemImageContainer = document.createElement(\"div\");\n  itemImageContainer.classList.add(\"image-container\", \"item-image-container\");\n\n  const itemImage = document.createElement(\"img\");\n  itemImage.classList.add(\"image\", \"item-image\");\n  itemImage.setAttribute(\"src\", image);\n  itemImage.setAttribute(\"alt-text\", name);\n\n  const itemImageCredit = document.createElement(\"p\");\n  itemImageCredit.classList.add(\"image-credit\");\n  itemImageCredit.innerText = imageCredit;\n\n  itemImageContainer.append(itemImage, itemImageCredit);\n\n  // COMPOSE MENU ITEM\n  item.append(itemImageContainer, itemInfoContainer);\n\n  return item\n}\n\n\nfunction loadMenu() {\n  updateMainImage();\n  updateHeader();\n  updateSection();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createNavBar() {\n  const navBarContainer = document.createElement(\"div\");\n  navBarContainer.id = \"nav-bar-container\";\n\n  const tabNames = [\"Menu\", \"Locations\", \"About\"];\n  tabNames.forEach(tabName => {\n    let tab = document.createElement(\"div\");\n    tab.classList.add(\"tab\");\n    tab.setAttribute(\"data-tab\", tabName.toLowerCase());\n    tab.innerText = tabName;\n\n    // SET FIRST TAB AS ACTIVE TAB\n    if (tabName == tabNames[0]) tab.classList.add(\"active\");\n\n    navBarContainer.append(tab);\n  });\n\n  return navBarContainer;\n}\n\n\nfunction createMainImage() {\n  const mainImageContainer = document.createElement(\"div\");\n  mainImageContainer.classList.add(\"image-container\", \"main-image-container\");\n\n  const mainImage = document.createElement(\"img\");\n  mainImage.classList.add(\"image\", \"main-image\")\n\n  const imageCredit = document.createElement(\"p\");\n  imageCredit.classList.add(\"image-credit\");\n\n  mainImageContainer.append(mainImage, imageCredit);\n\n  return mainImageContainer;\n}\n\n\nfunction createMainContent() {\n  const mainContentContainer = document.createElement(\"main\");\n  mainContentContainer.classList.add(\"main-content-container\");\n\n  // MAKE HEADER\n  const headerContainer = document.createElement(\"header\");\n\n  const title = document.createElement(\"h1\");\n\n  const tagline = document.createElement(\"p\");\n\n  headerContainer.append(title, tagline);\n\n  // MAKE CONTENT\n  const infoContainer = document.createElement(\"section\");\n\n  mainContentContainer.append(headerContainer, infoContainer);\n\n  return mainContentContainer;\n}\n\n\nfunction createFooter() {\n  const footer = document.createElement(\"footer\");\n\n  const linkWrapper = document.createElement(\"a\");\n  linkWrapper.classList.add(\"link-wrapper\");\n  linkWrapper.setAttribute(\"href\", \"https://github.com/grumbeard/the-beard-grub\");\n\n  const githubLogoContainer = document.createElement(\"div\");\n  githubLogoContainer.classList.add(\"image-container\", \"logo-container\");\n\n  const githubLogo = document.createElement(\"img\");\n  githubLogo.classList.add(\"image\", \"logo\");\n  githubLogo.setAttribute(\"src\", \"./images/github-logo.png\");\n\n  githubLogoContainer.append(githubLogo);\n\n  const footerText = document.createElement(\"p\");\n  footerText.classList.add(\"footer-text\");\n  footerText.innerText = \"Visit Repository\";\n\n  linkWrapper.append(githubLogoContainer, footerText);\n  footer.append(linkWrapper);\n\n  return footer\n}\n\n\nfunction initStylesheet() {\n  const head = document.querySelector(\"head\");\n  const stylesheet = document.createElement(\"link\");\n  stylesheet.setAttribute(\"rel\", \"stylesheet\");\n  stylesheet.setAttribute(\"href\", \"./styles/main.css\");\n  stylesheet.setAttribute(\"type\", \"text/css\");\n\n  head.append(stylesheet);\n}\n\n\nfunction initWebsite() {\n  const content = document.getElementById(\"content\");\n  const navBar = createNavBar();\n  const mainImage = createMainImage();\n  const mainContent = createMainContent();\n  const footer = createFooter();\n\n  content.append(navBar, mainImage, mainContent, footer);\n\n  initStylesheet();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initWebsite);\n\n\n//# sourceURL=webpack://restaurant/./src/website.js?");

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