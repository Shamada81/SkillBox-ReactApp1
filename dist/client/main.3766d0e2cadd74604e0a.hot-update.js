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

/***/ "./src/shared/StateExamples/StarWarsNameClass/StarWarsNameClass.tsx":
/*!**************************************************************************!*\
  !*** ./src/shared/StateExamples/StarWarsNameClass/StarWarsNameClass.tsx ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.StarWarsNameClass = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nconst unique_names_generator_1 = __webpack_require__(/*! unique-names-generator */ \"./node_modules/unique-names-generator/dist/index.m.js\");\r\nconst StarWarsNameClass_module_css_1 = __importDefault(__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './StarWarsNameClass.module.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));\r\nclass StarWarsNameClass extends react_1.default.PureComponent {\r\n    render() {\r\n        return (\r\n        // <section className='container'>\r\n        react_1.default.createElement(\"section\", { className: StarWarsNameClass_module_css_1.default.container },\r\n            react_1.default.createElement(\"span\", { className: 'name' }, this.randomName()),\r\n            react_1.default.createElement(\"div\", { className: 'gap' }),\r\n            react_1.default.createElement(\"button\", { className: 'button' }, \"\\u041C\\u043D\\u0435 \\u043D\\u0443\\u0436\\u043D\\u043E\")));\r\n    }\r\n    randomName() {\r\n        return (0, unique_names_generator_1.uniqueNamesGenerator)({ dictionaries: [unique_names_generator_1.starWars], length: 1 });\r\n    }\r\n}\r\nexports.StarWarsNameClass = StarWarsNameClass;\r\n// export const SWNameClass = hot(StarWarsNameClass);\r\n\n\n//# sourceURL=webpack://app_1/./src/shared/StateExamples/StarWarsNameClass/StarWarsNameClass.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("96e2d70aeb74f7d208a2")
/******/ })();
/******/ 
/******/ }
);