(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["404"],{

/***/ "./src/javascript/app_2/App/Components/Elements/ErrorBox/error-box.jsx":
/*!*****************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/ErrorBox/error-box.jsx ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorBox = function ErrorBox(_ref) {
    var header = _ref.header,
        icon = _ref.icon,
        message = _ref.message,
        children = _ref.children;
    return _react2.default.createElement(
        'div',
        { className: 'page-error__box' },
        icon,
        _react2.default.createElement(
            'h3',
            { className: 'page-error__header' },
            header
        ),
        _react2.default.createElement(
            'div',
            { className: 'page-error__message-wrapper' },
            _react2.default.createElement(
                'p',
                { className: 'page-error__message' },
                message
            )
        ),
        children
    );
};

ErrorBox.propTypes = {
    children: _propTypes2.default.node,
    header: _propTypes2.default.string,
    icon: _propTypes2.default.node,
    message: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node])
};

exports.default = ErrorBox;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Elements/ErrorBox/index.js":
/*!************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/ErrorBox/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _errorBox = __webpack_require__(/*! ./error-box.jsx */ "./src/javascript/app_2/App/Components/Elements/ErrorBox/error-box.jsx");

var _errorBox2 = _interopRequireDefault(_errorBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _errorBox2.default;

/***/ }),

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

var _Routes = __webpack_require__(/*! ../../../App/Components/Routes */ "./src/javascript/app_2/App/Components/Routes/index.js");

var _ErrorBox = __webpack_require__(/*! ../../../App/Components/Elements/ErrorBox */ "./src/javascript/app_2/App/Components/Elements/ErrorBox/index.js");

var _ErrorBox2 = _interopRequireDefault(_ErrorBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Page404 = function Page404() {
    return _react2.default.createElement(
        'div',
        { className: 'page-error__container' },
        _react2.default.createElement(
            _ErrorBox2.default,
            {
                header: (0, _localize.localize)('Oops, page not available.'),
                message: _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    (0, _localize.localize)('The page you requested could not be found. Either it no longer exists or the address is wrong. Please check for any typos.'),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                        'span',
                        { className: 'page-error__code' },
                        (0, _localize.localize)('Error code: 404')
                    )
                )
            },
            _react2.default.createElement(
                _Routes.ButtonLink,
                {
                    className: 'page-error__btn btn--primary btn--primary--orange',
                    to: _Constants.routes.trade
                },
                _react2.default.createElement(
                    'span',
                    { className: 'page-error__btn-text btn__text' },
                    (0, _localize.localize)('Return to Trade')
                )
            )
        )
    );
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