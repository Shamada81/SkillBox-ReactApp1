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

/***/ "./src/shared/Header/SearchBlock/SearchBlock.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/SearchBlock.tsx ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.SearchBlock = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nconst searchblock_css_1 = __importDefault(__webpack_require__(/*! ./searchblock.css */ \"./src/shared/Header/SearchBlock/searchblock.css\"));\r\nconst UserBlock_1 = __webpack_require__(/*! ./UserBlock */ \"./src/shared/Header/SearchBlock/UserBlock/index.ts\");\r\nconst useUserData_1 = __webpack_require__(/*! ../../../hooks/useUserData */ \"./src/hooks/useUserData.tsx\");\r\n// interface ISearchBlockProps {\r\n//   token: string;\r\n// }\r\n// export function SearchBlock({ token }: ISearchBlockProps) {\r\n// const [ data ] = useUserData(token);\r\nfunction SearchBlock() {\r\n    const [data] = (0, useUserData_1.useUserData)();\r\n    return (react_1.default.createElement(\"div\", { className: searchblock_css_1.default.searchBlock },\r\n        react_1.default.createElement(UserBlock_1.UserBlock, { avatarSrc: data.iconImg, username: data.name })));\r\n}\r\nexports.SearchBlock = SearchBlock;\r\n\n\n//# sourceURL=webpack://app_1/./src/shared/Header/SearchBlock/SearchBlock.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d5dddcb943ee88ecaa90")
/******/ })();
/******/ 
/******/ }
);