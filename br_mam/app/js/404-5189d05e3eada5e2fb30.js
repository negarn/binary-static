(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["404"],{

/***/ "./src/javascript/app_2/Modules/Page404/Components/Page404.jsx":
/*!*********************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Page404/Components/Page404.jsx ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Constants = __webpack_require__(/*! ../../../Constants */ "./src/javascript/app_2/Constants/index.js");

var _localize = __webpack_require__(/*! ../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _PageError = __webpack_require__(/*! ../../PageError */ "./src/javascript/app_2/Modules/PageError/index.js");

var _PageError2 = _interopRequireDefault(_PageError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Page404 = function Page404() {
    return _react2.default.createElement(_PageError2.default, {
        header: (0, _localize.localize)('Oops, page not available.'),
        error_code: 404,
        messages: [(0, _localize.localize)('The page you requested could not be found. Either it no longer exists or the address is wrong. Please check for any typos.')],
        redirect_url: _Constants.routes.trade,
        redirect_label: (0, _localize.localize)('Return to Trade')
    });
};

exports.default = Page404;

/***/ }),

/***/ "./src/javascript/app_2/Modules/Page404/index.js":
/*!*******************************************************!*\
  !*** ./src/javascript/app_2/Modules/Page404/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Page = __webpack_require__(/*! ./Components/Page404.jsx */ "./src/javascript/app_2/Modules/Page404/Components/Page404.jsx");

var _Page2 = _interopRequireDefault(_Page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Page2.default;

/***/ })

}]);