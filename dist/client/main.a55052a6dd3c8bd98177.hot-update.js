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

/***/ "./src/shared/StateExamples/StarWarsNameFunction/StarWarsNameFunction.tsx":
/*!********************************************************************************!*\
  !*** ./src/shared/StateExamples/StarWarsNameFunction/StarWarsNameFunction.tsx ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.StarWarsNameFunction = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nconst unique_names_generator_1 = __webpack_require__(/*! unique-names-generator */ \"./node_modules/unique-names-generator/dist/index.m.js\");\r\nfunction StarWarsNameFunction() {\r\n    const randomName = () => {\r\n        return (0, unique_names_generator_1.uniqueNamesGenerator)({ dictionaries: [unique_names_generator_1.starWars], length: 1 });\r\n    };\r\n    // //Первый способ (мой)\r\n    // const [name, setName] = React.useState(randomName);\r\n    // const [count, setCount] = React.useState(0);\r\n    // const handleClick = () => {\r\n    // \tsetName(randomName)\r\n    // }\r\n    // useEffect(() => {\r\n    // \tsetCount(prevCount => prevCount + 1);\r\n    // \tconsole.log(count)\r\n    // }, [name])\r\n    // второй способ (от сенсея)\r\n    const [state, setState] = react_1.default.useState({ name: randomName(), count: 0 });\r\n    const handleClick = () => {\r\n        setState((prevState) => ({\r\n            name: randomName(),\r\n            count: prevState.count + 1\r\n        }));\r\n        console.log(state.count);\r\n    };\r\n    return (react_1.default.createElement(\"section\", { className: 'container' },\r\n        react_1.default.createElement(\"span\", { className: 'name' }, state.name),\r\n        react_1.default.createElement(\"div\", { className: 'gap' }),\r\n        react_1.default.createElement(\"button\", { className: 'button', onClick: handleClick }, \"\\u041C\\u043D\\u0435 \\u043D\\u0443\\u0436\\u043D\\u043E\")));\r\n}\r\nexports.StarWarsNameFunction = StarWarsNameFunction;\r\n\n\n//# sourceURL=webpack://app_1/./src/shared/StateExamples/StarWarsNameFunction/StarWarsNameFunction.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("176f11fb26fd14829817")
/******/ })();
/******/ 
/******/ }
);