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

/***/ "./src/achievements.js":
/*!*****************************!*\
  !*** ./src/achievements.js ***!
  \*****************************/
/***/ (() => {

eval("$(document).ready(() => {\r\n\r\n    fetch(\"https://api.jsonsilo.com/public/6e9db586-73bc-4207-b8af-fb32badf02ba\")\r\n        .then(response => {\r\n            if (!response.ok) {\r\n                throw new Error('Could not load data');\r\n            }\r\n            return response.json();\r\n        })\r\n        .then(data => {\r\n            let achievements = data[\"achievements\"]\r\n\r\n            let certIcon = `\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" fill=\"currentColor\"\r\n            class=\"bi bi-calendar-fill icon-svg\" viewBox=\"0 0 16 16\">\r\n            <path\r\n                d=\"M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5\" />\r\n            </svg>\r\n            `\r\n\r\n            let awardIcon = `\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" fill=\"currentColor\"\r\n            class=\"bi bi-award-fill icon-svg\" viewBox=\"0 0 16 16\">\r\n            <path\r\n                d=\"m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864z\" />\r\n            <path d=\"M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z\" />\r\n        </svg>\r\n            `\r\n            let objects = []\r\n\r\n            achievements.forEach(key => {\r\n                let icon = certIcon;\r\n                if (key[\"icon\"] == \"award\") {\r\n                    icon = awardIcon;\r\n                }\r\n                var obj = `\r\n                    <div class=\"card bg-info text-white mb-1 link grow\">\r\n                    <div class=\"card-body p-4\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-1 d-flex justify-content-center align-items-center\">\r\n                                ${icon}\r\n                            </div>\r\n                            <div class=\"col\">\r\n                                <h5 class=\"fs-4\">\r\n                                    ${key[\"name\"]}\r\n                                    <span class=\"bg-primary rounded fs-6 p-1 date\"> \r\n                                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-calendar-check-fill\" viewBox=\"0 0 16 16\">\r\n                                    <path d=\"M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2m-5.146-5.146-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708\"/>\r\n                                  </svg>\r\n                                    ${key[\"date\"]}\r\n\r\n                                    </span>\r\n                                </h5>\r\n                                <p class=\"mb-0\">\r\n                                    ${key[\"description\"]}\r\n                                </p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                `\r\n\r\n                objects.push(obj)\r\n            });\r\n\r\n            objects.forEach(element => {\r\n                $(\"#achievements\").append(element)\r\n            });\r\n\r\n        })\r\n        .catch(error => {\r\n            console.error('Could not load data: ', error);\r\n        });\r\n});\n\n//# sourceURL=webpack://portfolio/./src/achievements.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/achievements.js"]();
/******/ 	
/******/ })()
;