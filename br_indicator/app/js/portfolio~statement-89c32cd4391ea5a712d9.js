(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["portfolio~statement"],{

/***/ "./src/javascript/app_2/App/Components/Elements/DataTable/data-table.jsx":
/*!*******************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/DataTable/data-table.jsx ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _mobxReact = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");

var _ttReactCustomScrollbars = __webpack_require__(/*! tt-react-custom-scrollbars */ "./node_modules/tt-react-custom-scrollbars/lib/index.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _tableRow = __webpack_require__(/*! ./table-row.jsx */ "./src/javascript/app_2/App/Components/Elements/DataTable/table-row.jsx");

var _tableRow2 = _interopRequireDefault(_tableRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* TODO:
      1. implement sorting by column (ASC/DESC)
      2. implement filtering per column
*/

var DataTable = function (_React$PureComponent) {
    _inherits(DataTable, _React$PureComponent);

    function DataTable() {
        _classCallCheck(this, DataTable);

        return _possibleConstructorReturn(this, (DataTable.__proto__ || Object.getPrototypeOf(DataTable)).apply(this, arguments));
    }

    _createClass(DataTable, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.alignHeader();
        }
    }, {
        key: 'alignHeader',
        value: function alignHeader() {
            // scrollbar inside table-body can push content (depending on the browser and if mouse is plugged in)
            if (!this.props.data_source.length) return;
            var first_body_row = this.el_table_body.firstChild;
            var scrollbar_offset = this.el_table_head.offsetWidth - first_body_row.offsetWidth;
            this.el_table_head.style.paddingRight = scrollbar_offset + 'px';
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                children = _props.children,
                columns = _props.columns,
                footer = _props.footer,
                getRowLink = _props.getRowLink,
                is_empty = _props.is_empty,
                onScroll = _props.onScroll;


            var TableData = _react2.default.createElement(
                _react2.default.Fragment,
                null,
                this.props.data_source.map(function (row_obj, id) {
                    return _react2.default.createElement(_tableRow2.default, {
                        className: _this2.props.className,
                        row_obj: row_obj,
                        columns: columns,
                        key: id,
                        to: getRowLink && getRowLink(row_obj)
                    });
                }),
                children
            );

            return _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)('table', _defineProperty({}, this.props.className + '__table', this.props.className)) },
                _react2.default.createElement(
                    'div',
                    { className: 'table__head', ref: function ref(el) {
                            _this2.el_table_head = el;
                        } },
                    _react2.default.createElement(_tableRow2.default, { className: this.props.className, columns: columns, is_header: true })
                ),
                _react2.default.createElement(
                    'div',
                    {
                        className: 'table__body',
                        onScroll: onScroll,
                        ref: function ref(el) {
                            _this2.el_table_body = el;
                        }
                    },
                    is_empty ? TableData : _react2.default.createElement(
                        _ttReactCustomScrollbars.Scrollbars,
                        {
                            style: { width: '100%', height: 'calc(100vh - 35px)' },
                            autoHide: true
                        },
                        TableData
                    )
                ),
                this.props.footer && _react2.default.createElement(
                    'div',
                    { className: 'table__foot' },
                    _react2.default.createElement(_tableRow2.default, {
                        className: this.props.className,
                        row_obj: footer,
                        columns: columns,
                        is_footer: true
                    })
                )
            );
        }
    }]);

    return DataTable;
}(_react2.default.PureComponent);

DataTable.propTypes = {
    children: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.arrayOf(_propTypes2.default.node)]),
    className: _propTypes2.default.string,
    columns: _propTypes2.default.array,
    data_source: _mobxReact.PropTypes.arrayOrObservableArray,
    footer: _propTypes2.default.object,
    getRowLink: _propTypes2.default.func,
    onScroll: _propTypes2.default.func
};

exports.default = DataTable;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Elements/DataTable/index.js":
/*!*************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/DataTable/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _dataTable = __webpack_require__(/*! ./data-table.jsx */ "./src/javascript/app_2/App/Components/Elements/DataTable/data-table.jsx");

var _dataTable2 = _interopRequireDefault(_dataTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _dataTable2.default;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Elements/DataTable/table-cell.jsx":
/*!*******************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/DataTable/table-cell.jsx ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableCell = function TableCell(_ref) {
    var col_index = _ref.col_index,
        children = _ref.children;
    return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('table__cell', col_index) },
        children
    );
};

TableCell.propTypes = {
    children: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.string]),
    col_index: _propTypes2.default.string
};

exports.default = TableCell;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Elements/DataTable/table-row.jsx":
/*!******************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/DataTable/table-row.jsx ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _tableCell = __webpack_require__(/*! ./table-cell.jsx */ "./src/javascript/app_2/App/Components/Elements/DataTable/table-cell.jsx");

var _tableCell2 = _interopRequireDefault(_tableCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TableRow = function TableRow(_ref) {
    var className = _ref.className,
        columns = _ref.columns,
        is_footer = _ref.is_footer,
        is_header = _ref.is_header,
        _ref$row_obj = _ref.row_obj,
        row_obj = _ref$row_obj === undefined ? {} : _ref$row_obj,
        to = _ref.to;

    var cells = columns.map(function (_ref2) {
        var col_index = _ref2.col_index,
            renderCellContent = _ref2.renderCellContent,
            title = _ref2.title;

        var cell_content = title;
        if (!is_header) {
            var cell_value = row_obj[col_index] || '';
            cell_content = renderCellContent ? renderCellContent({ cell_value: cell_value, col_index: col_index, row_obj: row_obj, is_footer: is_footer }) : cell_value;
        }

        return _react2.default.createElement(
            _tableCell2.default,
            { col_index: col_index, key: col_index },
            cell_content
        );
    });

    var row_class_name = (0, _classnames2.default)('table__row', { 'table__row-link': to }, _defineProperty({}, className + '__row', className));

    return to ? _react2.default.createElement(
        _reactRouterDom.NavLink,
        { className: row_class_name, to: to },
        cells
    ) : _react2.default.createElement(
        'div',
        { className: row_class_name },
        cells
    );
};

TableRow.propTypes = {
    className: _propTypes2.default.string,
    columns: _propTypes2.default.array,
    is_footer: _propTypes2.default.bool,
    is_header: _propTypes2.default.bool,
    row_obj: _propTypes2.default.object,
    to: _propTypes2.default.string
};

exports.default = TableRow;

/***/ }),

/***/ "./src/templates/_common/components/loading.jsx":
/*!******************************************************!*\
  !*** ./src/templates/_common/components/loading.jsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
*   TODO: Remove the extra classes when splitting the project.
*   Binary 1.0 and Binary Nex is using different classNames
*   to accomplish the same loader effect.
*
*   Classes for Binary 1.0 :
*       <div className={barspinner dark}
*           <div className={rect${inx+1}}
*
*   Classes for Binary Nex :
*       <div className={barspinner barspinner--${ theme || 'dark'}}
*           <div className={barspinner__rect barspinner__rect--${inx + 1}}
*
*   As a temporary solution, we will add both classes for 1.0 and Nex,
*   however we should remove it in the future.
*/

var Loading = function Loading(_ref) {
    var is_invisible = _ref.is_invisible,
        theme = _ref.theme,
        id = _ref.id;
    return _react2.default.createElement(
        'div',
        { id: id, className: 'barspinner barspinner--' + (theme || 'dark') + (is_invisible ? ' invisible' : '') + ' dark' },
        Array.from(new Array(5)).map(function (x, inx) {
            return _react2.default.createElement('div', { key: inx, className: 'barspinner__rect barspinner__rect--' + (inx + 1) + ' rect' + (inx + 1) });
        })
    );
};

exports.default = Loading;

/***/ })

}]);