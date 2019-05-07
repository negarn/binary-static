(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["statement"],{

/***/ "./src/javascript/app_2/Assets/Statement/index.js":
/*!********************************************************!*\
  !*** ./src/javascript/app_2/Assets/Statement/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _iconBuy = __webpack_require__(/*! ./icon-buy.jsx */ "./src/javascript/app_2/Assets/Statement/icon-buy.jsx");

Object.keys(_iconBuy).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _iconBuy[key];
    }
  });
});

var _iconDeposit = __webpack_require__(/*! ./icon-deposit.jsx */ "./src/javascript/app_2/Assets/Statement/icon-deposit.jsx");

Object.keys(_iconDeposit).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _iconDeposit[key];
    }
  });
});

var _iconPayout = __webpack_require__(/*! ./icon-payout.jsx */ "./src/javascript/app_2/Assets/Statement/icon-payout.jsx");

Object.keys(_iconPayout).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _iconPayout[key];
    }
  });
});

var _iconSell = __webpack_require__(/*! ./icon-sell.jsx */ "./src/javascript/app_2/Assets/Statement/icon-sell.jsx");

Object.keys(_iconSell).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _iconSell[key];
    }
  });
});

var _iconWallet = __webpack_require__(/*! ./icon-wallet.jsx */ "./src/javascript/app_2/Assets/Statement/icon-wallet.jsx");

Object.keys(_iconWallet).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _iconWallet[key];
    }
  });
});

var _iconWithdrawal = __webpack_require__(/*! ./icon-withdrawal.jsx */ "./src/javascript/app_2/Assets/Statement/icon-withdrawal.jsx");

Object.keys(_iconWithdrawal).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _iconWithdrawal[key];
    }
  });
});

/***/ }),

/***/ "./src/javascript/app_2/Modules/Statement/Components/amount-cell.jsx":
/*!***************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Statement/Components/amount-cell.jsx ***!
  \***************************************************************************/
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

var AmountCell = function AmountCell(_ref) {
    var value = _ref.value;

    var status = +value.replace(/,/g, '') >= 0 ? 'profit' : 'loss';

    return _react2.default.createElement(
        'span',
        { className: 'amount--' + status },
        value
    );
};

AmountCell.propTypes = {
    value: _propTypes2.default.string
};

exports.default = AmountCell;

/***/ }),

/***/ "./src/javascript/app_2/Modules/Statement/Components/empty-statement-message.jsx":
/*!***************************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Statement/Components/empty-statement-message.jsx ***!
  \***************************************************************************************/
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

var _Common = __webpack_require__(/*! ../../../Assets/Common */ "./src/javascript/app_2/Assets/Common/index.js");

var _NavBar = __webpack_require__(/*! ../../../Assets/Header/NavBar */ "./src/javascript/app_2/Assets/Header/NavBar/index.js");

var _Constants = __webpack_require__(/*! ../../../Constants */ "./src/javascript/app_2/Constants/index.js");

var _Routes = __webpack_require__(/*! ../../../App/Components/Routes */ "./src/javascript/app_2/App/Components/Routes/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EmptyStatementMessage = function EmptyStatementMessage(_ref) {
    var has_selected_date = _ref.has_selected_date;
    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
            'div',
            { className: 'statement-empty' },
            _react2.default.createElement(_Common.Icon, { icon: _NavBar.IconStatement, className: 'statement-empty__icon' }),
            _react2.default.createElement(
                'span',
                { className: 'statement-empty__text' },
                !has_selected_date ? (0, _localize.localize)('Your account has no trading activity.') : (0, _localize.localize)('Your account has no trading activity for the selected period.')
            ),
            !has_selected_date && _react2.default.createElement(
                _Routes.ButtonLink,
                {
                    className: 'btn--secondary btn--secondary--orange',
                    to: _Constants.routes.trade
                },
                _react2.default.createElement(
                    'span',
                    null,
                    (0, _localize.localize)('Trade now')
                )
            )
        )
    );
};

EmptyStatementMessage.propTypes = {
    has_selected_date: _propTypes2.default.bool
};

exports.default = EmptyStatementMessage;

/***/ }),

/***/ "./src/javascript/app_2/Modules/Statement/Components/statement-card-list.jsx":
/*!***********************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Statement/Components/statement-card-list.jsx ***!
  \***********************************************************************************/
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

var _statementCard = __webpack_require__(/*! ./statement-card.jsx */ "./src/javascript/app_2/Modules/Statement/Components/statement-card.jsx");

var _statementCard2 = _interopRequireDefault(_statementCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StatementCardList = function StatementCardList(_ref) {
    var data = _ref.data,
        onScroll = _ref.onScroll,
        children = _ref.children;
    return _react2.default.createElement(
        'div',
        { className: 'card-list statement__card-list', onScroll: onScroll },
        data.map(function (transaction, id) {
            return _react2.default.createElement(_statementCard2.default, _extends({ className: 'card-list__card card-list__card-link' }, transaction, { key: id }));
        }),
        children
    );
};

StatementCardList.propTypes = {
    children: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.arrayOf(_propTypes2.default.node)]),
    data: _mobxReact.PropTypes.arrayOrObservableArray,
    onScroll: _propTypes2.default.func
};

exports.default = StatementCardList;

/***/ }),

/***/ "./src/javascript/app_2/Modules/Statement/Components/statement-card.jsx":
/*!******************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Statement/Components/statement-card.jsx ***!
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

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _Common = __webpack_require__(/*! ../../../Assets/Common */ "./src/javascript/app_2/Assets/Common/index.js");

var _Statement = __webpack_require__(/*! ../../../Assets/Statement */ "./src/javascript/app_2/Assets/Statement/index.js");

var _helpers = __webpack_require__(/*! ../../../App/Components/Routes/helpers */ "./src/javascript/app_2/App/Components/Routes/helpers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StatementCard = function StatementCard(_ref) {
    var action = _ref.action,
        amount = _ref.amount,
        balance = _ref.balance,
        className = _ref.className,
        date = _ref.date,
        desc = _ref.desc,
        id = _ref.id,
        payout = _ref.payout,
        refid = _ref.refid;

    var icon = action.toLowerCase();

    var content = _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
            'div',
            { className: 'statement-card__header' },
            _react2.default.createElement(
                'span',
                { className: 'statement-card__date' },
                date
            ),
            _react2.default.createElement(
                'span',
                { className: 'statement-card__refid' },
                refid
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'statement-card__body' },
            _react2.default.createElement(
                'div',
                { className: 'statement-card__desc' },
                desc
            ),
            _react2.default.createElement(
                'div',
                { className: 'statement-card__row' },
                _react2.default.createElement(
                    'div',
                    { className: 'statement-card__cell statement-card__amount statement-card__amount--' + action.toLowerCase() },
                    icon === 'sell' && _react2.default.createElement(_Common.Icon, { icon: _Statement.IconSell, className: 'statement-card__icon' }),
                    icon === 'buy' && _react2.default.createElement(_Common.Icon, { icon: _Statement.IconBuy, className: 'statement-card__icon' }),
                    icon === 'deposit' && _react2.default.createElement(_Common.Icon, { icon: _Statement.IconDeposit, className: 'statement-card__icon' }),
                    icon === 'withdrawal' && _react2.default.createElement(_Common.Icon, { icon: _Statement.IconWithdrawal, className: 'statement-card__icon' }),
                    _react2.default.createElement(
                        'span',
                        { className: 'statement-card__cell-text' },
                        amount
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'statement-card__cell statement-card__payout' },
                    _react2.default.createElement(_Common.Icon, { icon: _Statement.IconPayout, className: 'statement-card__icon' }),
                    _react2.default.createElement(
                        'span',
                        { className: 'statement-card__cell-text' },
                        payout
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'statement-card__cell statement-card__balance' },
                    _react2.default.createElement(_Common.Icon, { icon: _Statement.IconWallet, className: 'statement-card__icon' }),
                    _react2.default.createElement(
                        'span',
                        { className: 'statement-card__cell-text' },
                        balance
                    )
                )
            )
        )
    );

    var class_name = (0, _classnames2.default)('statement-card', className);

    return id ? _react2.default.createElement(
        _reactRouterDom.NavLink,
        { className: class_name, activeClassName: 'active', to: (0, _helpers.getContractPath)(id) },
        content
    ) : _react2.default.createElement(
        'div',
        { className: class_name },
        content
    );
};

StatementCard.propTypes = {
    action: _propTypes2.default.string,
    amount: _propTypes2.default.string,
    balance: _propTypes2.default.string,
    className: _propTypes2.default.string,
    date: _propTypes2.default.string,
    desc: _propTypes2.default.string,
    id: _propTypes2.default.string,
    payout: _propTypes2.default.string,
    refid: _propTypes2.default.string
};

exports.default = StatementCard;

/***/ }),

/***/ "./src/javascript/app_2/Modules/Statement/Constants/data-table-constants.js":
/*!**********************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Statement/Constants/data-table-constants.js ***!
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

var _amountCell = __webpack_require__(/*! ../Components/amount-cell.jsx */ "./src/javascript/app_2/Modules/Statement/Components/amount-cell.jsx");

var _amountCell2 = _interopRequireDefault(_amountCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/display-name, react/prop-types */
var getTableColumnsTemplate = exports.getTableColumnsTemplate = function getTableColumnsTemplate() {
    return [{ title: (0, _localize.localize)('Date'), col_index: 'date' }, { title: (0, _localize.localize)('Ref.'), col_index: 'refid' }, { title: (0, _localize.localize)('Description'), col_index: 'desc' }, { title: (0, _localize.localize)('Action'), col_index: 'action' }, { title: (0, _localize.localize)('Potential Payout'), col_index: 'payout' }, { title: (0, _localize.localize)('Credit/Debit'), col_index: 'amount', renderCellContent: function renderCellContent(_ref) {
            var cell_value = _ref.cell_value;
            return _react2.default.createElement(_amountCell2.default, { value: cell_value });
        } }, { title: (0, _localize.localize)('Balance'), col_index: 'balance' }];
};
/* eslint-enable react/display-name, react/prop-types */

/***/ }),

/***/ "./src/javascript/app_2/Modules/Statement/Containers/statement-filter.jsx":
/*!********************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Statement/Containers/statement-filter.jsx ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _localize = __webpack_require__(/*! ../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _DatePicker = __webpack_require__(/*! ../../../App/Components/Form/DatePicker */ "./src/javascript/app_2/App/Components/Form/DatePicker/index.js");

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _connect = __webpack_require__(/*! ../../../Stores/connect */ "./src/javascript/app_2/Stores/connect.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Filter = function Filter(_ref) {
    var date_from = _ref.date_from,
        date_to = _ref.date_to,
        handleDateChange = _ref.handleDateChange,
        today = _ref.today,
        use_native_pickers = _ref.use_native_pickers;
    return _react2.default.createElement(
        'div',
        { className: 'statement__filter' },
        _react2.default.createElement(
            'div',
            { className: 'statement__filter-content' },
            _react2.default.createElement(
                'span',
                { className: 'statement__filter-label' },
                (0, _localize.localize)('Filter by date:')
            ),
            _react2.default.createElement(_DatePicker2.default, {
                name: 'date_from',
                placeholder: (0, _localize.localize)('Start date'),
                start_date: date_to || today,
                max_date: date_to || today,
                onChange: handleDateChange,
                value: date_from,
                is_nativepicker: use_native_pickers
            }),
            _react2.default.createElement(
                'span',
                { className: 'statement__filter-dash' },
                '\u2014'
            ),
            _react2.default.createElement(_DatePicker2.default, {
                name: 'date_to',
                placeholder: (0, _localize.localize)('End date'),
                start_date: today,
                min_date: date_from,
                max_date: today,
                has_today_btn: true,
                onChange: handleDateChange,
                value: date_to,
                is_nativepicker: use_native_pickers
            })
        )
    );
};

Filter.propTypes = {
    date_from: _propTypes2.default.string,
    date_to: _propTypes2.default.string,
    handleDateChange: _propTypes2.default.func,
    server_time: _propTypes2.default.object,
    today: _propTypes2.default.string,
    use_native_pickers: _propTypes2.default.bool
};

exports.default = (0, _connect.connect)(function (_ref2) {
    var common = _ref2.common,
        modules = _ref2.modules;
    return {
        today: (0, _moment2.default)(common.server_time).format('YYYY-MM-DD'),
        date_from: modules.statement.date_from,
        date_to: modules.statement.date_to,
        handleDateChange: modules.statement.handleDateChange
    };
})(Filter);

/***/ }),

/***/ "./src/javascript/app_2/Modules/Statement/Containers/statement.jsx":
/*!*************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Statement/Containers/statement.jsx ***!
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

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _DataTable = __webpack_require__(/*! ../../../App/Components/Elements/DataTable */ "./src/javascript/app_2/App/Components/Elements/DataTable/index.js");

var _DataTable2 = _interopRequireDefault(_DataTable);

var _helpers = __webpack_require__(/*! ../../../App/Components/Routes/helpers */ "./src/javascript/app_2/App/Components/Routes/helpers.js");

var _connect = __webpack_require__(/*! ../../../Stores/connect */ "./src/javascript/app_2/Stores/connect.js");

var _statementFilter = __webpack_require__(/*! ./statement-filter.jsx */ "./src/javascript/app_2/Modules/Statement/Containers/statement-filter.jsx");

var _statementFilter2 = _interopRequireDefault(_statementFilter);

var _statementCardList = __webpack_require__(/*! ../Components/statement-card-list.jsx */ "./src/javascript/app_2/Modules/Statement/Components/statement-card-list.jsx");

var _statementCardList2 = _interopRequireDefault(_statementCardList);

var _emptyStatementMessage = __webpack_require__(/*! ../Components/empty-statement-message.jsx */ "./src/javascript/app_2/Modules/Statement/Components/empty-statement-message.jsx");

var _emptyStatementMessage2 = _interopRequireDefault(_emptyStatementMessage);

var _dataTableConstants = __webpack_require__(/*! ../Constants/data-table-constants */ "./src/javascript/app_2/Modules/Statement/Constants/data-table-constants.js");

var _loading = __webpack_require__(/*! ../../../../../templates/_common/components/loading.jsx */ "./src/templates/_common/components/loading.jsx");

var _loading2 = _interopRequireDefault(_loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Statement = function (_React$Component) {
    _inherits(Statement, _React$Component);

    function Statement() {
        _classCallCheck(this, Statement);

        return _possibleConstructorReturn(this, (Statement.__proto__ || Object.getPrototypeOf(Statement)).apply(this, arguments));
    }

    _createClass(Statement, [{
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
                has_selected_date = _props.has_selected_date,
                data = _props.data,
                is_empty = _props.is_empty,
                is_loading = _props.is_loading,
                is_mobile = _props.is_mobile,
                is_tablet = _props.is_tablet,
                error = _props.error,
                handleScroll = _props.handleScroll;


            if (error) return _react2.default.createElement(
                'p',
                null,
                error
            );

            var columns = (0, _dataTableConstants.getTableColumnsTemplate)();
            var should_show_cards = is_mobile || is_tablet;

            var renderGUI = function renderGUI() {
                return _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    is_empty && _react2.default.createElement(_emptyStatementMessage2.default, { has_selected_date: has_selected_date }),
                    is_loading && _react2.default.createElement(_loading2.default, null)
                );
            };

            return _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)('statement container', { 'statement--card-view': should_show_cards }) },
                _react2.default.createElement(_statementFilter2.default, { use_native_pickers: should_show_cards }),
                _react2.default.createElement(
                    'div',
                    { className: 'statement__content' },
                    should_show_cards ? _react2.default.createElement(
                        _react2.default.Fragment,
                        null,
                        _react2.default.createElement(
                            _statementCardList2.default,
                            {
                                data: data,
                                onScroll: handleScroll
                            },
                            renderGUI()
                        )
                    ) : _react2.default.createElement(
                        _DataTable2.default,
                        {
                            className: 'statement',
                            data_source: data,
                            columns: columns,
                            onScroll: handleScroll,
                            getRowLink: function getRowLink(row_obj) {
                                return row_obj.id ? (0, _helpers.getContractPath)(row_obj.id) : undefined;
                            },
                            is_empty: is_empty
                        },
                        renderGUI()
                    )
                )
            );
        }
    }]);

    return Statement;
}(_react2.default.Component);

Statement.propTypes = {
    data: _mobxReact.PropTypes.arrayOrObservableArray,
    error: _propTypes2.default.string,
    handleScroll: _propTypes2.default.func,
    has_selected_date: _propTypes2.default.bool,
    history: _propTypes2.default.object,
    is_empty: _propTypes2.default.bool,
    is_loading: _propTypes2.default.bool,
    is_mobile: _propTypes2.default.bool,
    is_tablet: _propTypes2.default.bool,
    onMount: _propTypes2.default.func,
    onUnmount: _propTypes2.default.func
};

exports.default = (0, _connect.connect)(function (_ref) {
    var modules = _ref.modules,
        ui = _ref.ui;
    return {
        is_empty: modules.statement.is_empty,
        has_selected_date: modules.statement.has_selected_date,
        data: modules.statement.data,
        is_loading: modules.statement.is_loading,
        error: modules.statement.error,
        onMount: modules.statement.onMount,
        onUnmount: modules.statement.onUnmount,
        handleScroll: modules.statement.handleScroll,
        is_mobile: ui.is_mobile,
        is_tablet: ui.is_tablet
    };
})((0, _reactRouterDom.withRouter)(Statement));

/***/ }),

/***/ "./src/javascript/app_2/Modules/Statement/index.js":
/*!*********************************************************!*\
  !*** ./src/javascript/app_2/Modules/Statement/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _statement = __webpack_require__(/*! ./Containers/statement.jsx */ "./src/javascript/app_2/Modules/Statement/Containers/statement.jsx");

var _statement2 = _interopRequireDefault(_statement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _statement2.default;

/***/ })

}]);