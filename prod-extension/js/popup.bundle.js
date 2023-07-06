var MyLibrary;
(self["webpackChunkMyLibrary"] = self["webpackChunkMyLibrary"] || []).push([["popup"],{

/***/ "./src/popup/popup.js":
/*!****************************!*\
  !*** ./src/popup/popup.js ***!
  \****************************/
/***/ (() => {

/**
 * When the popup loads, inject a content script into the active tab,
 * and add a click handler.
 * If we couldn't inject the script, handle the error.
 */

window.addEventListener("load", 
function (e) {
  console.log("loaded!");
  document.getElementById("settingsButton").addEventListener(
    "click",
    function (e) {
      chrome.runtime.openOptionsPage();
      close();
    },
    false
  );
}
,false) 


/**
 * There was an error executing the script.
 * Display the popup's error message, and hide the normal UI.
 */
function reportExecuteScriptError(error) {
  document.querySelector("#popup-content").classList.add("hidden");
  document.querySelector("#error-content").classList.remove("hidden");
  console.error(
    `Failed to execute prod_booster content script: ${error.message}`
  );
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/popup/popup.js"));
/******/ (MyLibrary = typeof MyLibrary === "undefined" ? {} : MyLibrary).popup = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxjQUFjO0FBQ3BFO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NeUxpYnJhcnkvLi9zcmMvcG9wdXAvcG9wdXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFdoZW4gdGhlIHBvcHVwIGxvYWRzLCBpbmplY3QgYSBjb250ZW50IHNjcmlwdCBpbnRvIHRoZSBhY3RpdmUgdGFiLFxyXG4gKiBhbmQgYWRkIGEgY2xpY2sgaGFuZGxlci5cclxuICogSWYgd2UgY291bGRuJ3QgaW5qZWN0IHRoZSBzY3JpcHQsIGhhbmRsZSB0aGUgZXJyb3IuXHJcbiAqL1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIFxyXG5mdW5jdGlvbiAoZSkge1xyXG4gIGNvbnNvbGUubG9nKFwibG9hZGVkIVwiKTtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNldHRpbmdzQnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICBcImNsaWNrXCIsXHJcbiAgICBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBjaHJvbWUucnVudGltZS5vcGVuT3B0aW9uc1BhZ2UoKTtcclxuICAgICAgY2xvc2UoKTtcclxuICAgIH0sXHJcbiAgICBmYWxzZVxyXG4gICk7XHJcbn1cclxuLGZhbHNlKSBcclxuXHJcblxyXG4vKipcclxuICogVGhlcmUgd2FzIGFuIGVycm9yIGV4ZWN1dGluZyB0aGUgc2NyaXB0LlxyXG4gKiBEaXNwbGF5IHRoZSBwb3B1cCdzIGVycm9yIG1lc3NhZ2UsIGFuZCBoaWRlIHRoZSBub3JtYWwgVUkuXHJcbiAqL1xyXG5mdW5jdGlvbiByZXBvcnRFeGVjdXRlU2NyaXB0RXJyb3IoZXJyb3IpIHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BvcHVwLWNvbnRlbnRcIikuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Vycm9yLWNvbnRlbnRcIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICBjb25zb2xlLmVycm9yKFxyXG4gICAgYEZhaWxlZCB0byBleGVjdXRlIHByb2RfYm9vc3RlciBjb250ZW50IHNjcmlwdDogJHtlcnJvci5tZXNzYWdlfWBcclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==