/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const canvas = document.getElementById('background');\r\nconst context = canvas.getContext('2d');\r\ncanvas.width = window.innerWidth; // Set canvas width to window width\r\ncanvas.height = window.innerHeight; // Set canvas height to window height\r\n\r\nconst gradient = context.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2);\r\ngradient.addColorStop(1, '#060026');\r\ngradient.addColorStop(0, '#002640');\r\n\r\ncontext.fillStyle = gradient;\r\ncontext.fillRect(0, 0, canvas.width, canvas.height);\r\n\r\n// Procedural Rain\r\nconst numDrops = 300;\r\nconst drops = [];\r\n\r\nfunction createDrop() {\r\n  return {\r\n    x: Math.random() * canvas.width,\r\n    y: Math.random() * canvas.height,\r\n    length: Math.random() * 15 + 5,\r\n    speed: Math.random() * 15 + 5,\r\n  };\r\n}\r\n\r\nfunction draw() {\r\n  context.clearRect(0, 0, canvas.width, canvas.height);\r\n  context.fillStyle = gradient;\r\n  context.fillRect(0, 0, canvas.width, canvas.height);\r\n\r\n  drops.forEach(drop => {\r\n    context.fillStyle = \"#4A6583\"; // Set fill color\r\n    context.fillRect(drop.x, drop.y, 0.75, drop.length); // Draw thinner raindrops\r\n\r\n    drop.y += drop.speed;\r\n\r\n    if (drop.y - drop.length > canvas.height) {\r\n      drops[drops.indexOf(drop)] = createDrop();\r\n    }\r\n  });\r\n\r\n  requestAnimationFrame(draw);\r\n}\r\n\r\nfor (let i = 0; i < numDrops; i++) {\r\n  drops.push(createDrop());\r\n}\r\n\r\ndraw();\r\n\r\nwindow.addEventListener(\"resize\", ()=>{\r\n  canvas.width = window.innerWidth; // Set canvas width to window width\r\ncanvas.height = window.innerHeight; // Set canvas height to window height\r\n\r\n})\n\n//# sourceURL=webpack://portfolio/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;