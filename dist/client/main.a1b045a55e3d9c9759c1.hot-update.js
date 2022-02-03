"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateapp_1"]("main",{

/***/ "./src/shared/Text/Text.tsx":
/*!**********************************!*\
  !*** ./src/shared/Text/Text.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Text = exports.ECOlors = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nconst text_css_1 = __importDefault(__webpack_require__(/*! ./text.css */ \"./src/shared/Text/text.css\"));\r\nconst classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\"));\r\nvar ECOlors;\r\n(function (ECOlors) {\r\n    ECOlors[\"black\"] = \"black\";\r\n    ECOlors[\"orange\"] = \"orange\";\r\n    ECOlors[\"green\"] = \"green\";\r\n    ECOlors[\"white\"] = \"white\";\r\n    ECOlors[\"grayF4\"] = \"grayF4\";\r\n    ECOlors[\"grayF3\"] = \"grayF3\";\r\n    ECOlors[\"grayD9\"] = \"grayD9\";\r\n    ECOlors[\"grayC4\"] = \"grayC4\";\r\n    ECOlors[\"gray99\"] = \"gray99\";\r\n    ECOlors[\"gray66\"] = \"gray66\";\r\n})(ECOlors = exports.ECOlors || (exports.ECOlors = {}));\r\nfunction Text(props) {\r\n    const { As = 'span', color = ECOlors.black, bold = false, children, size, mobileSize, tabletSize, desktopSize, } = props;\r\n    const classes = (0, classnames_1.default)(text_css_1.default[`s${size}`], text_css_1.default[color], { [text_css_1.default[`m${mobileSize}`]]: mobileSize }, { [text_css_1.default[`t${tabletSize}`]]: tabletSize }, { [text_css_1.default[`d${desktopSize}`]]: desktopSize });\r\n    return (react_1.default.createElement(As, { className: classes }, children));\r\n}\r\nexports.Text = Text;\r\n\n\n//# sourceURL=webpack://app_1/./src/shared/Text/Text.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("54b6049b209c0f9e41d0")
/******/ })();
/******/ 
/******/ }
);