(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["financial_assessment"],{

/***/ "./src/javascript/app_2/Modules/settings/components/section.jsx":
/*!**********************************************************************!*\
  !*** ./src/javascript/app_2/Modules/settings/components/section.jsx ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Section = function Section(_ref) {
    var title = _ref.title,
        description = _ref.description,
        children = _ref.children;
    return _react2.default.createElement(
        'div',
        { className: 'section' },
        _react2.default.createElement(
            'h2',
            { className: 'section__title' },
            title
        ),
        _react2.default.createElement(
            'h4',
            { className: 'section__description' },
            description
        ),
        children
    );
};

Section.propTypes = {
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
    description: _propTypes2.default.string,
    title: _propTypes2.default.string
};

exports.default = Section;

/***/ }),

/***/ "./src/javascript/app_2/Modules/settings/sections/financial-assessment.jsx":
/*!*********************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/settings/sections/financial-assessment.jsx ***!
  \*********************************************************************************/
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

var _section = __webpack_require__(/*! ../components/section.jsx */ "./src/javascript/app_2/Modules/settings/components/section.jsx");

var _section2 = _interopRequireDefault(_section);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FinancialAssessment = function FinancialAssessment(_ref) {
    var title = _ref.title,
        description = _ref.description;
    return _react2.default.createElement(_section2.default, { title: title, description: description });
};

FinancialAssessment.propTypes = {
    description: _propTypes2.default.string,
    title: _propTypes2.default.string
};

exports.default = FinancialAssessment;

/***/ })

}]);