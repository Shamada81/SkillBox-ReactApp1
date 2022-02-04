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

/***/ "./src/hooks/useUserData.tsx":
/*!***********************************!*\
  !*** ./src/hooks/useUserData.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.useUserData = void 0;\r\nconst axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nconst react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nfunction useUserData(token) {\r\n    const [data, setData] = (0, react_1.useState)({});\r\n    (0, react_1.useEffect)(() => {\r\n        axios_1.default.get('https://oauth.reddit.com/api/v1/me', {\r\n            headers: {\r\n                'Authorization': `bearer ${token}`,\r\n            }\r\n        })\r\n            .then((res) => {\r\n            const userData = res.data;\r\n            const img = userData.icon_img.split('?');\r\n            setData({\r\n                name: userData.name,\r\n                iconImg: img[0],\r\n            });\r\n        })\r\n            .catch(console.log);\r\n    }, [token]);\r\n    return [data];\r\n}\r\nexports.useUserData = useUserData;\r\n\n\n//# sourceURL=webpack://app_1/./src/hooks/useUserData.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3b703a4427585907afef")
/******/ })();
/******/ 
/******/ }
);