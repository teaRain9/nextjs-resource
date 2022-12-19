webpackHotUpdate_N_E("pages/new-meetup",{

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
false,

/***/ "./pages/new-meetup/index.js":
/*!***********************************!*\
  !*** ./pages/new-meetup/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewMeetupPage; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/meetups/NewMeetupForm */ "./components/meetups/NewMeetupForm.js");
/* harmony import */ var next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");
/* harmony import */ var next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\ah1004_sa\\Personal\\nextjs-resource\\pages\\new-meetup\\index.js";


function NewMeetupPage() {
  function addMeetupHandler(enteredMeetupData) {
    fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type:': 'application/json'
      }
    }).then(function (data) {
      return console.log(data);
    }); // const response = await fetch('/api/new-meetup', {
    //     method: 'POST',
    //     body: JSON.stringify(enteredMeetupData),
    //     headers: {
    //         'Content-Type:': 'application/json'
    //     }
    // })
    // const data = await response.json();
    // console.log(data)
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onAddMeetup: addMeetupHandler
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 12
  }, this);
}
_c = NewMeetupPage;

var _c;

$RefreshReg$(_c, "NewMeetupPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3LW1lZXR1cC9pbmRleC5qcyJdLCJuYW1lcyI6WyJOZXdNZWV0dXBQYWdlIiwiYWRkTWVldHVwSGFuZGxlciIsImVudGVyZWRNZWV0dXBEYXRhIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsYUFBVCxHQUF5QjtBQUNwQyxXQUFTQyxnQkFBVCxDQUEwQkMsaUJBQTFCLEVBQTZDO0FBQ3pDQyxTQUFLLENBQUMsaUJBQUQsRUFBb0I7QUFDakJDLFlBQU0sRUFBRSxNQURTO0FBRWpCQyxVQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlTCxpQkFBZixDQUZXO0FBR2pCTSxhQUFPLEVBQUU7QUFDTCx5QkFBaUI7QUFEWjtBQUhRLEtBQXBCLENBQUwsQ0FNR0MsSUFOSCxDQU1TLFVBQUFDLElBQUk7QUFBQSxhQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWixDQUFKO0FBQUEsS0FOYixFQUR5QyxDQVF6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7QUFDRCxzQkFBTyxxRUFBQyx5RUFBRDtBQUFlLGVBQVcsRUFBRVQ7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ0g7S0FwQnVCRCxhIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL25ldy1tZWV0dXAuOGUwYTNkMDNkZjU5NzgxMDFlZWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXdNZWV0dXBGb3JtIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbWVldHVwcy9OZXdNZWV0dXBGb3JtJ1xyXG5pbXBvcnQge2xvYWRHZXRJbml0aWFsUHJvcHN9IGZyb20gXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdNZWV0dXBQYWdlKCkge1xyXG4gICAgZnVuY3Rpb24gYWRkTWVldHVwSGFuZGxlcihlbnRlcmVkTWVldHVwRGF0YSkge1xyXG4gICAgICAgIGZldGNoKCcvYXBpL25ldy1tZWV0dXAnLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGVudGVyZWRNZWV0dXBEYXRhKSxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlOic6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLnRoZW4oIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSkpXHJcbiAgICAgICAgLy8gY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9uZXctbWVldHVwJywge1xyXG4gICAgICAgIC8vICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAvLyAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZW50ZXJlZE1lZXR1cERhdGEpLFxyXG4gICAgICAgIC8vICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgLy8gICAgICAgICAnQ29udGVudC1UeXBlOic6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICAvLyBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gPE5ld01lZXR1cEZvcm0gb25BZGRNZWV0dXA9e2FkZE1lZXR1cEhhbmRsZXJ9Lz5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=