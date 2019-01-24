(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["portfolio"],{

/***/ "./src/javascript/app_2/App/Components/Elements/DataTable/data_table.jsx":
/*!*******************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/DataTable/data_table.jsx ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mobxReact = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");

var _ttReactCustomScrollbars = __webpack_require__(/*! tt-react-custom-scrollbars */ "./node_modules/tt-react-custom-scrollbars/lib/index.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _table_row = __webpack_require__(/*! ./table_row.jsx */ "./src/javascript/app_2/App/Components/Elements/DataTable/table_row.jsx");

var _table_row2 = _interopRequireDefault(_table_row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
                    return _react2.default.createElement(_table_row2.default, {
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
                { className: 'table' },
                _react2.default.createElement(
                    'div',
                    { className: 'table__head', ref: function ref(el) {
                            _this2.el_table_head = el;
                        } },
                    _react2.default.createElement(_table_row2.default, { columns: columns, is_header: true })
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
                    _react2.default.createElement(_table_row2.default, { row_obj: footer, columns: columns, is_footer: true })
                )
            );
        }
    }]);

    return DataTable;
}(_react2.default.PureComponent);

DataTable.propTypes = {
    children: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.arrayOf(_propTypes2.default.node)]),
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

var _data_table = __webpack_require__(/*! ./data_table.jsx */ "./src/javascript/app_2/App/Components/Elements/DataTable/data_table.jsx");

var _data_table2 = _interopRequireDefault(_data_table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _data_table2.default;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Elements/DataTable/table_cell.jsx":
/*!*******************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/DataTable/table_cell.jsx ***!
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

/***/ "./src/javascript/app_2/App/Components/Elements/DataTable/table_row.jsx":
/*!******************************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/DataTable/table_row.jsx ***!
  \******************************************************************************/
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

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _table_cell = __webpack_require__(/*! ./table_cell.jsx */ "./src/javascript/app_2/App/Components/Elements/DataTable/table_cell.jsx");

var _table_cell2 = _interopRequireDefault(_table_cell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableRow = function TableRow(_ref) {
    var to = _ref.to,
        columns = _ref.columns,
        is_footer = _ref.is_footer,
        is_header = _ref.is_header,
        _ref$row_obj = _ref.row_obj,
        row_obj = _ref$row_obj === undefined ? {} : _ref$row_obj;

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
            _table_cell2.default,
            { col_index: col_index, key: col_index },
            cell_content
        );
    });

    return to ? _react2.default.createElement(
        _reactRouterDom.NavLink,
        { className: 'table__row', to: to },
        cells
    ) : _react2.default.createElement(
        'div',
        { className: 'table__row' },
        cells
    );
};

TableRow.propTypes = {
    columns: _propTypes2.default.array,
    is_footer: _propTypes2.default.bool,
    is_header: _propTypes2.default.bool,
    row_obj: _propTypes2.default.object,
    to: _propTypes2.default.string
};

exports.default = TableRow;

/***/ }),

/***/ "./src/javascript/app_2/Modules/Portfolio/Components/card_list.jsx":
/*!*************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Portfolio/Components/card_list.jsx ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _mobxReact = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/index.module.js");

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _portfolio_card = __webpack_require__(/*! ./portfolio_card.jsx */ "./src/javascript/app_2/Modules/Portfolio/Components/portfolio_card.jsx");

var _portfolio_card2 = _interopRequireDefault(_portfolio_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardList = function CardList(_ref) {
    var data = _ref.data,
        currency = _ref.currency;
    return _react2.default.createElement(
        'div',
        { className: 'card-list' },
        data.map(function (portfolio_position, id) {
            return _react2.default.createElement(_portfolio_card2.default, _extends({
                key: id
            }, portfolio_position, {
                currency: currency
            }));
        })
    );
};

CardList.propTypes = {
    currency: _propTypes2.default.string,
    data: _mobxReact.PropTypes.arrayOrObservableArray
};

exports.default = CardList;

/***/ }),

/***/ "./src/javascript/app_2/Modules/Portfolio/Components/indicative_cell.jsx":
/*!*******************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Portfolio/Components/indicative_cell.jsx ***!
  \*******************************************************************************/
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

var _localize = __webpack_require__(/*! ../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _money = __webpack_require__(/*! ../../../App/Components/Elements/money.jsx */ "./src/javascript/app_2/App/Components/Elements/money.jsx");

var _money2 = _interopRequireDefault(_money);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IndicativeCell = function IndicativeCell(_ref) {
    var amount = _ref.amount,
        currency = _ref.currency,
        status = _ref.status;

    var status_class_name = status ? 'indicative--' + status : undefined;

    return _react2.default.createElement(
        'div',
        { className: status_class_name },
        _react2.default.createElement(_money2.default, { amount: amount, currency: currency }),
        status === 'no-resale' && _react2.default.createElement(
            'div',
            { className: 'indicative__no-resale-msg' },
            (0, _localize.localize)('Resale not offered')
        )
    );
};

IndicativeCell.propTypes = {
    amount: _propTypes2.default.number,
    currency: _propTypes2.default.string,
    status: _propTypes2.default.string
};

exports.default = IndicativeCell;

/***/ }),

/***/ "./src/javascript/app_2/Modules/Portfolio/Components/portfolio_card.jsx":
/*!******************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Portfolio/Components/portfolio_card.jsx ***!
  \******************************************************************************/
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

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _money = __webpack_require__(/*! ../../../App/Components/Elements/money.jsx */ "./src/javascript/app_2/App/Components/Elements/money.jsx");

var _money2 = _interopRequireDefault(_money);

var _helpers = __webpack_require__(/*! ../../../App/Components/Routes/helpers */ "./src/javascript/app_2/App/Components/Routes/helpers.js");

var _remaining_time = __webpack_require__(/*! ../../../App/Containers/remaining_time.jsx */ "./src/javascript/app_2/App/Containers/remaining_time.jsx");

var _remaining_time2 = _interopRequireDefault(_remaining_time);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PortfolioCard = function PortfolioCard(_ref) {
    var currency = _ref.currency,
        details = _ref.details,
        expiry_time = _ref.expiry_time,
        id = _ref.id,
        indicative = _ref.indicative,
        payout = _ref.payout,
        purchase = _ref.purchase,
        reference = _ref.reference,
        status = _ref.status;
    return _react2.default.createElement(
        _reactRouterDom.NavLink,
        { className: 'portfolio-card card-list__card', activeClassName: 'active', to: (0, _helpers.getContractPath)(id) },
        _react2.default.createElement(
            'div',
            { className: 'portfolio-card__header' },
            _react2.default.createElement(
                'span',
                { className: 'portfolio-card__date' },
                _react2.default.createElement(_remaining_time2.default, { end_time: expiry_time })
            ),
            _react2.default.createElement(
                'span',
                { className: 'portfolio-card__refid' },
                reference
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'portfolio-card__body' },
            _react2.default.createElement(
                'div',
                { className: 'portfolio-card__desc' },
                details
            ),
            _react2.default.createElement(
                'div',
                { className: 'portfolio-card__row' },
                _react2.default.createElement(
                    'div',
                    { className: 'portfolio-card__cell portfolio-card__purchase' },
                    _react2.default.createElement(
                        'span',
                        { className: 'portfolio-card__cell-text' },
                        _react2.default.createElement(_money2.default, { amount: purchase, currency: currency })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'portfolio-card__cell portfolio-card__payout' },
                    _react2.default.createElement(
                        'span',
                        { className: 'portfolio-card__cell-text' },
                        _react2.default.createElement(_money2.default, { amount: payout, currency: currency })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'portfolio-card__cell portfolio-card__indicative portfolio-card__indicative--' + status },
                    _react2.default.createElement(
                        'span',
                        { className: 'portfolio-card__cell-text' },
                        _react2.default.createElement(_money2.default, { amount: indicative, currency: currency })
                    )
                )
            )
        )
    );
};

PortfolioCard.propTypes = {
    currency: _propTypes2.default.string,
    details: _propTypes2.default.string,
    expiry_time: _propTypes2.default.number,
    id: _propTypes2.default.number,
    indicative: _propTypes2.default.number,
    payout: _propTypes2.default.number,
    purchase: _propTypes2.default.number,
    reference: _propTypes2.default.number,
    status: _propTypes2.default.string
};

exports.default = PortfolioCard;

/***/ }),

/***/ "./src/javascript/app_2/Modules/Portfolio/Constants/data_table_constants.js":
/*!**********************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Portfolio/Constants/data_table_constants.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getTableColumnsTemplate = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _localize = __webpack_require__(/*! ../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _money = __webpack_require__(/*! ../../../App/Components/Elements/money.jsx */ "./src/javascript/app_2/App/Components/Elements/money.jsx");

var _money2 = _interopRequireDefault(_money);

var _remaining_time = __webpack_require__(/*! ../../../App/Containers/remaining_time.jsx */ "./src/javascript/app_2/App/Containers/remaining_time.jsx");

var _remaining_time2 = _interopRequireDefault(_remaining_time);

var _contract_type_cell = __webpack_require__(/*! ../Components/contract_type_cell.jsx */ "./src/javascript/app_2/Modules/Portfolio/Components/contract_type_cell.jsx");

var _contract_type_cell2 = _interopRequireDefault(_contract_type_cell);

var _indicative_cell = __webpack_require__(/*! ../Components/indicative_cell.jsx */ "./src/javascript/app_2/Modules/Portfolio/Components/indicative_cell.jsx");

var _indicative_cell2 = _interopRequireDefault(_indicative_cell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/display-name, react/prop-types */
var getTableColumnsTemplate = exports.getTableColumnsTemplate = function getTableColumnsTemplate(currency) {
    return [{
        title: (0, _localize.localize)('Reference No.'),
        col_index: 'reference',
        renderCellContent: function renderCellContent(_ref) {
            var cell_value = _ref.cell_value,
                is_footer = _ref.is_footer;
            return is_footer ? (0, _localize.localize)('Total') : cell_value;
        }
    }, {
        title: (0, _localize.localize)('Contract Type'),
        col_index: 'type',
        renderCellContent: function renderCellContent(_ref2) {
            var cell_value = _ref2.cell_value,
                is_footer = _ref2.is_footer;

            if (is_footer) return '';
            return _react2.default.createElement(_contract_type_cell2.default, { type: cell_value });
        }
    }, {
        title: (0, _localize.localize)('Contract Details'),
        col_index: 'details'
    }, {
        title: (0, _localize.localize)('Remaining Time'),
        col_index: 'expiry_time',
        renderCellContent: function renderCellContent(_ref3) {
            var cell_value = _ref3.cell_value,
                is_footer = _ref3.is_footer;
            return is_footer ? '' : _react2.default.createElement(_remaining_time2.default, { end_time: cell_value });
        }
    }, {
        title: (0, _localize.localize)('Potential Payout'),
        col_index: 'payout',
        renderCellContent: function renderCellContent(_ref4) {
            var cell_value = _ref4.cell_value;
            return _react2.default.createElement(_money2.default, { amount: cell_value, currency: currency });
        }
    }, {
        title: (0, _localize.localize)('Purchase'),
        col_index: 'purchase',
        renderCellContent: function renderCellContent(_ref5) {
            var cell_value = _ref5.cell_value;
            return _react2.default.createElement(_money2.default, { amount: cell_value, currency: currency });
        }
    }, {
        title: (0, _localize.localize)('Indicative'),
        col_index: 'indicative',
        renderCellContent: function renderCellContent(_ref6) {
            var cell_value = _ref6.cell_value,
                row_obj = _ref6.row_obj;
            return _react2.default.createElement(_indicative_cell2.default, { amount: +cell_value, currency: currency, status: row_obj.status });
        }
    }];
};
/* eslint-enable react/display-name, react/prop-types */

/***/ }),

/***/ "./src/javascript/app_2/Modules/Portfolio/Containers/portfolio.jsx":
/*!*************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Portfolio/Containers/portfolio.jsx ***!
  \*************************************************************************/
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

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _DataTable = __webpack_require__(/*! ../../../App/Components/Elements/DataTable */ "./src/javascript/app_2/App/Components/Elements/DataTable/index.js");

var _DataTable2 = _interopRequireDefault(_DataTable);

var _helpers = __webpack_require__(/*! ../../../App/Components/Routes/helpers */ "./src/javascript/app_2/App/Components/Routes/helpers.js");

var _connect = __webpack_require__(/*! ../../../Stores/connect */ "./src/javascript/app_2/Stores/connect.js");

var _card_list = __webpack_require__(/*! ../Components/card_list.jsx */ "./src/javascript/app_2/Modules/Portfolio/Components/card_list.jsx");

var _card_list2 = _interopRequireDefault(_card_list);

var _empty_portfolio_message = __webpack_require__(/*! ../Components/empty_portfolio_message.jsx */ "./src/javascript/app_2/Modules/Portfolio/Components/empty_portfolio_message.jsx");

var _empty_portfolio_message2 = _interopRequireDefault(_empty_portfolio_message);

var _data_table_constants = __webpack_require__(/*! ../Constants/data_table_constants */ "./src/javascript/app_2/Modules/Portfolio/Constants/data_table_constants.js");

var _loading = __webpack_require__(/*! ../../../../../templates/_common/components/loading.jsx */ "./src/templates/_common/components/loading.jsx");

var _loading2 = _interopRequireDefault(_loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Portfolio = function (_React$Component) {
    _inherits(Portfolio, _React$Component);

    function Portfolio() {
        _classCallCheck(this, Portfolio);

        return _possibleConstructorReturn(this, (Portfolio.__proto__ || Object.getPrototypeOf(Portfolio)).apply(this, arguments));
    }

    _createClass(Portfolio, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.onMount();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.props.onUnmount();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                active_positions = _props.active_positions,
                is_mobile = _props.is_mobile,
                is_tablet = _props.is_tablet,
                is_loading = _props.is_loading,
                error = _props.error,
                totals = _props.totals,
                is_empty = _props.is_empty,
                currency = _props.currency;


            if (error) {
                return _react2.default.createElement(
                    'p',
                    null,
                    error
                );
            }

            if (is_loading) {
                return _react2.default.createElement(_loading2.default, null);
            }

            if (is_empty) {
                return _react2.default.createElement(_empty_portfolio_message2.default, null);
            }

            var should_show_cards = is_mobile || is_tablet;

            return _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)('portfolio container', { 'portfolio--card-view': should_show_cards }) },
                should_show_cards ? _react2.default.createElement(_card_list2.default, { data: active_positions, currency: currency }) : _react2.default.createElement(_DataTable2.default, {
                    columns: (0, _data_table_constants.getTableColumnsTemplate)(currency),
                    data_source: active_positions,
                    footer: totals,
                    has_fixed_header: true,
                    getRowLink: function getRowLink(row_obj) {
                        return (0, _helpers.getContractPath)(row_obj.id);
                    }
                })
            );
        }
    }]);

    return Portfolio;
}(_react2.default.Component);

Portfolio.propTypes = {
    active_positions: _mobxReact.PropTypes.arrayOrObservableArray,
    currency: _propTypes2.default.string,
    error: _propTypes2.default.string,
    history: _propTypes2.default.object,
    is_empty: _propTypes2.default.bool,
    is_loading: _propTypes2.default.bool,
    is_mobile: _propTypes2.default.bool,
    is_tablet: _propTypes2.default.bool,
    onMount: _propTypes2.default.func,
    onUnmount: _propTypes2.default.func,
    totals: _propTypes2.default.object
};

exports.default = (0, _connect.connect)(function (_ref) {
    var modules = _ref.modules,
        client = _ref.client,
        ui = _ref.ui;
    return {
        currency: client.currency,
        active_positions: modules.portfolio.active_positions,
        error: modules.portfolio.error,
        is_empty: modules.portfolio.is_empty,
        is_loading: modules.portfolio.is_loading,
        totals: modules.portfolio.totals,
        onMount: modules.portfolio.onMount,
        onUnmount: modules.portfolio.onUnmount,
        is_mobile: ui.is_mobile,
        is_tablet: ui.is_tablet
    };
})((0, _reactRouterDom.withRouter)(Portfolio));

/***/ }),

/***/ "./src/javascript/app_2/Modules/Portfolio/index.js":
/*!*********************************************************!*\
  !*** ./src/javascript/app_2/Modules/Portfolio/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _portfolio = __webpack_require__(/*! ./Containers/portfolio.jsx */ "./src/javascript/app_2/Modules/Portfolio/Containers/portfolio.jsx");

var _portfolio2 = _interopRequireDefault(_portfolio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _portfolio2.default;

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

var Loading = function Loading(_ref) {
    var is_invisible = _ref.is_invisible,
        theme = _ref.theme;
    return _react2.default.createElement(
        'div',
        { className: 'barspinner ' + (theme || 'dark') + (is_invisible ? ' invisible' : '') },
        Array.from(new Array(5)).map(function (x, inx) {
            return _react2.default.createElement('div', { key: inx, className: 'rect' + (inx + 1) });
        })
    );
};

exports.default = Loading;

/***/ })

}]);