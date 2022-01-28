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

/***/ "./src/client/index.jsx":
/*!******************************!*\
  !*** ./src/client/index.jsx ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst React = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nconst ReactDom = __importStar(__webpack_require__(/*! react-dom */ \"./node_modules/@hot-loader/react-dom/index.js\"));\r\nconst StarWarsNameFunction_1 = __webpack_require__(/*! ../shared/StateExamples/StarWarsNameFunction/StarWarsNameFunction */ \"./src/shared/StateExamples/StarWarsNameFunction/StarWarsNameFunction.tsx\");\r\n// window.addEventListener('load', () => {\r\n// \tReactDom.hydrate(<Header />, document.getElementById('react_root'))\r\n// });\r\nwindow.addEventListener('load', () => {\r\n    ReactDom.hydrate(React.createElement(StarWarsNameFunction_1.StarWarsNameFunction, null), document.getElementById('react_root'));\r\n});\r\n\n\n//# sourceURL=webpack://app_1/./src/client/index.jsx?");

/***/ }),

/***/ "./src/shared/StateExamples/StarWarsNameFunction/StarWarsNameFunction.tsx":
/*!********************************************************************************!*\
  !*** ./src/shared/StateExamples/StarWarsNameFunction/StarWarsNameFunction.tsx ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.StarWarsNameFunction = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nfunction StarWarsNameFunction() {\r\n    return (react_1.default.createElement(\"section\", { className: 'container' },\r\n        react_1.default.createElement(\"span\", { className: 'name' }, this.state.name),\r\n        react_1.default.createElement(\"div\", { className: 'gap' }),\r\n        react_1.default.createElement(\"button\", { className: 'button', onClick: this.handleClick }, \"\\u041C\\u043D\\u0435 \\u043D\\u0443\\u0436\\u043D\\u043E\")));\r\n}\r\nexports.StarWarsNameFunction = StarWarsNameFunction;\r\n\n\n//# sourceURL=webpack://app_1/./src/shared/StateExamples/StarWarsNameFunction/StarWarsNameFunction.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8a5a46da793bfd14b87a")
/******/ })();
/******/ 
/******/ }
);