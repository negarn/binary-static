(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["portfolio"],{

/***/ "./src/javascript/app_2/Modules/Portfolio/Components/card-list.jsx":
/*!*************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Portfolio/Components/card-list.jsx ***!
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

var _portfolioCard = __webpack_require__(/*! ./portfolio-card.jsx */ "./src/javascript/app_2/Modules/Portfolio/Components/portfolio-card.jsx");

var _portfolioCard2 = _interopRequireDefault(_portfolioCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardList = function CardList(_ref) {
    var data = _ref.data,
        currency = _ref.currency;
    return _react2.default.createElement(
        'div',
        { className: 'card-list' },
        data.map(function (portfolio_position, id) {
            return _react2.default.createElement(_portfolioCard2.default, _extends({
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

/***/ "./src/javascript/app_2/Modules/Portfolio/Components/contract-type-cell.jsx":
/*!**********************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Portfolio/Components/contract-type-cell.jsx ***!
  \**********************************************************************************/
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

var _contract = __webpack_require__(/*! ../../../Constants/contract */ "./src/javascript/app_2/Constants/contract.js");

var _icon = __webpack_require__(/*! ../../../Assets/Common/icon.jsx */ "./src/javascript/app_2/Assets/Common/icon.jsx");

var _Types = __webpack_require__(/*! ../../../Assets/Trading/Types */ "./src/javascript/app_2/Assets/Trading/Types/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContractTypeCell = function ContractTypeCell(_ref) {
    var type = _ref.type;
    return _react2.default.createElement(
        'div',
        { className: 'contract-type' },
        _react2.default.createElement(
            'div',
            { className: 'type-wrapper' },
            _react2.default.createElement(_icon.Icon, { icon: _Types.IconTradeType, type: type.toLowerCase(), className: 'type' })
        ),
        _react2.default.createElement(
            'span',
            null,
            (0, _contract.getContractTypeDisplay)(type) || ''
        )
    );
};

ContractTypeCell.propTypes = {
    type: _propTypes2.default.string
};

exports.default = ContractTypeCell;

/***/ }),

/***/ "./src/javascript/app_2/Modules/Portfolio/Components/indicative-cell.jsx":
/*!*******************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Portfolio/Components/indicative-cell.jsx ***!
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

/***/ "./src/javascript/app_2/Modules/Portfolio/Components/portfolio-card.jsx":
/*!******************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Portfolio/Components/portfolio-card.jsx ***!
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

var _remainingTime = __webpack_require__(/*! ../../../App/Containers/remaining-time.jsx */ "./src/javascript/app_2/App/Containers/remaining-time.jsx");

var _remainingTime2 = _interopRequireDefault(_remainingTime);

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
        {
            className: 'portfolio-card card-list__card card-list__card-link',
            activeClassName: 'active',
            to: (0, _helpers.getContractPath)(id)
        },
        _react2.default.createElement(
            'div',
            { className: 'portfolio-card__header' },
            _react2.default.createElement(
                'span',
                { className: 'portfolio-card__date' },
                _react2.default.createElement(_remainingTime2.default, { end_time: expiry_time })
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

/***/ "./src/javascript/app_2/Modules/Portfolio/Constants/data-table-constants.js":
/*!**********************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Portfolio/Constants/data-table-constants.js ***!
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

var _remainingTime = __webpack_require__(/*! ../../../App/Containers/remaining-time.jsx */ "./src/javascript/app_2/App/Containers/remaining-time.jsx");

var _remainingTime2 = _interopRequireDefault(_remainingTime);

var _contractTypeCell = __webpack_require__(/*! ../Components/contract-type-cell.jsx */ "./src/javascript/app_2/Modules/Portfolio/Components/contract-type-cell.jsx");

var _contractTypeCell2 = _interopRequireDefault(_contractTypeCell);

var _indicativeCell = __webpack_require__(/*! ../Components/indicative-cell.jsx */ "./src/javascript/app_2/Modules/Portfolio/Components/indicative-cell.jsx");

var _indicativeCell2 = _interopRequireDefault(_indicativeCell);

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
            return _react2.default.createElement(_contractTypeCell2.default, { type: cell_value });
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
            return is_footer ? '' : _react2.default.createElement(_remainingTime2.default, { end_time: cell_value });
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
            return _react2.default.createElement(_indicativeCell2.default, { amount: +cell_value, currency: currency, status: row_obj.status });
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

var _cardList = __webpack_require__(/*! ../Components/card-list.jsx */ "./src/javascript/app_2/Modules/Portfolio/Components/card-list.jsx");

var _cardList2 = _interopRequireDefault(_cardList);

var _emptyPortfolioMessage = __webpack_require__(/*! ../Components/empty-portfolio-message.jsx */ "./src/javascript/app_2/Modules/Portfolio/Components/empty-portfolio-message.jsx");

var _emptyPortfolioMessage2 = _interopRequireDefault(_emptyPortfolioMessage);

var _dataTableConstants = __webpack_require__(/*! ../Constants/data-table-constants */ "./src/javascript/app_2/Modules/Portfolio/Constants/data-table-constants.js");

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
                return _react2.default.createElement(_emptyPortfolioMessage2.default, null);
            }

            var should_show_cards = is_mobile || is_tablet;

            return _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)('portfolio container', { 'portfolio--card-view': should_show_cards }) },
                should_show_cards ? _react2.default.createElement(_cardList2.default, { data: active_positions, currency: currency }) : _react2.default.createElement(_DataTable2.default, {
                    className: 'portfolio',
                    columns: (0, _dataTableConstants.getTableColumnsTemplate)(currency),
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

/***/ })

}]);