(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["open_positions~profit_table~statement"],{

/***/ "./src/javascript/app_2/App/Components/Elements/Label/index.js":
/*!*********************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/Label/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _label = __webpack_require__(/*! ./label.jsx */ "./src/javascript/app_2/App/Components/Elements/Label/label.jsx");

var _label2 = _interopRequireDefault(_label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _label2.default;

/***/ }),

/***/ "./src/javascript/app_2/App/Components/Elements/Label/label.jsx":
/*!**********************************************************************!*\
  !*** ./src/javascript/app_2/App/Components/Elements/Label/label.jsx ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var available_modes = ['default', 'success', 'warn', 'danger'];

var Label = function Label(_ref) {
    var mode = _ref.mode,
        children = _ref.children;

    var type = available_modes.some(function (m) {
        return m === mode;
    }) ? mode : 'default';

    return _react2.default.createElement(
        'span',
        { className: (0, _classnames2.default)('label', _defineProperty({}, 'label--' + type, type))
        },
        children
    );
};
Label.propTypes = {
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
    mode: _propTypes2.default.oneOf(available_modes)
};
exports.default = Label;

/***/ }),

/***/ "./src/javascript/app_2/App/Containers/ProgressSliderStream/index.js":
/*!***************************************************************************!*\
  !*** ./src/javascript/app_2/App/Containers/ProgressSliderStream/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _progressSliderStream = __webpack_require__(/*! ./progress-slider-stream.jsx */ "./src/javascript/app_2/App/Containers/ProgressSliderStream/progress-slider-stream.jsx");

var _progressSliderStream2 = _interopRequireDefault(_progressSliderStream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _progressSliderStream2.default;

/***/ }),

/***/ "./src/javascript/app_2/App/Containers/ProgressSliderStream/progress-slider-stream.jsx":
/*!*********************************************************************************************!*\
  !*** ./src/javascript/app_2/App/Containers/ProgressSliderStream/progress-slider-stream.jsx ***!
  \*********************************************************************************************/
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

var _helpers = __webpack_require__(/*! ../../Components/Elements/PositionsDrawer/helpers */ "./src/javascript/app_2/App/Components/Elements/PositionsDrawer/helpers/index.js");

var _positionsProgressSlider = __webpack_require__(/*! ../../Components/Elements/PositionsDrawer/ProgressSlider/positions-progress-slider.jsx */ "./src/javascript/app_2/App/Components/Elements/PositionsDrawer/ProgressSlider/positions-progress-slider.jsx");

var _positionsProgressSlider2 = _interopRequireDefault(_positionsProgressSlider);

var _connect = __webpack_require__(/*! ../../../Stores/connect */ "./src/javascript/app_2/Stores/connect.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProgressSliderStream = function ProgressSliderStream(_ref) {
    var id = _ref.id,
        is_loading = _ref.is_loading,
        getPositionById = _ref.getPositionById,
        server_time = _ref.server_time;

    var position = getPositionById(id);
    if (!position) {
        return _react2.default.createElement('div', null);
    }

    var contract_info = position.contract_info;

    var percentage = (0, _helpers.getTimePercentage)(server_time, contract_info.purchase_time, contract_info.date_expiry);

    return _react2.default.createElement(_positionsProgressSlider2.default, {
        is_loading: is_loading,
        remaining_time: contract_info.date_expiry,
        percentage: percentage,
        has_result: false,
        current_tick: position.current_tick,
        ticks_count: contract_info.ticks_count
    });
};

ProgressSliderStream.propTypes = {
    getPositionById: _propTypes2.default.func,
    id: _propTypes2.default.oneOfType(_propTypes2.default.number, _propTypes2.default.string),
    is_loading: _propTypes2.default.bool,
    server_time: _propTypes2.default.object
};

exports.default = (0, _connect.connect)(function (_ref2) {
    var modules = _ref2.modules,
        common = _ref2.common;
    return {
        is_loading: modules.portfolio.is_loading,
        server_time: common.server_time,
        getPositionById: modules.portfolio.getPositionById
    };
})(ProgressSliderStream);

/***/ }),

/***/ "./src/javascript/app_2/Modules/Reports/Components/empty-trade-history-message.jsx":
/*!*****************************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Reports/Components/empty-trade-history-message.jsx ***!
  \*****************************************************************************************/
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

var EmptyTradeHistoryMessage = function EmptyTradeHistoryMessage(_ref) {
    var has_selected_date = _ref.has_selected_date,
        component_icon = _ref.component_icon,
        localized_message = _ref.localized_message,
        localized_period_message = _ref.localized_period_message;

    var ComponentIcon = component_icon;

    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
            'div',
            { className: 'empty-trade-history' },
            _react2.default.createElement(ComponentIcon, { className: 'empty-trade-history__icon' }),
            _react2.default.createElement(
                'span',
                { className: 'empty-trade-history__text' },
                !has_selected_date ? localized_message : localized_period_message
            )
        )
    );
};

EmptyTradeHistoryMessage.propTypes = {
    component_icon: _propTypes2.default.func,
    has_selected_date: _propTypes2.default.bool,
    localized_message: _propTypes2.default.string,
    localized_period_message: _propTypes2.default.string
};

exports.default = EmptyTradeHistoryMessage;

/***/ }),

/***/ "./src/javascript/app_2/Modules/Reports/Components/market-symbol-icon-row.jsx":
/*!************************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Reports/Components/market-symbol-icon-row.jsx ***!
  \************************************************************************************/
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

var _underlyingIcon = __webpack_require__(/*! ../../../App/Components/Elements/underlying-icon.jsx */ "./src/javascript/app_2/App/Components/Elements/underlying-icon.jsx");

var _Types = __webpack_require__(/*! ../../../Assets/Trading/Types */ "./src/javascript/app_2/Assets/Trading/Types/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getMarketInformation = function getMarketInformation(payload) {
    var pattern = new RegExp('^([A-Z]+)_((OTC_[A-Z0-9]+)|R_[\\d]{2,3}|[A-Z]+)_'); // Used to get market name from shortcode
    var extracted = pattern.exec(payload.shortcode);
    if (extracted !== null) {
        return {
            category: extracted[1].toLowerCase(),
            underlying: extracted[2]
        };
    }
    return null;
};

var MarketSymbolIconRow = function MarketSymbolIconRow(_ref) {
    var payload = _ref.payload,
        show_description = _ref.show_description;

    var should_show_category_icon = typeof payload.shortcode === 'string';
    var market_information = getMarketInformation(payload);

    if (should_show_category_icon && market_information) {
        return _react2.default.createElement(
            'div',
            { className: 'market-symbol-icon' },
            _react2.default.createElement(
                'div',
                { className: 'market-symbol-icon-name' },
                _react2.default.createElement(_underlyingIcon.UnderlyingIcon, { market: market_information.underlying }),
                show_description && payload.display_name
            ),
            _react2.default.createElement(
                'div',
                { className: 'market-symbol-icon-category' },
                _react2.default.createElement(_Types.IconTradeType, { type: market_information.category }),
                show_description && market_information.category
            )
        );
    }

    return _react2.default.createElement(
        'svg',
        { width: '32', height: '32', className: 'unknown-icon' },
        _react2.default.createElement('rect', { width: '32', height: '32' })
    );
};

MarketSymbolIconRow.propTypes = {
    action: _propTypes2.default.string,
    payload: _propTypes2.default.object,
    show_description: _propTypes2.default.bool
};

exports.default = MarketSymbolIconRow;

/***/ }),

/***/ "./src/javascript/app_2/Modules/Reports/Components/placeholder-component.jsx":
/*!***********************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Reports/Components/placeholder-component.jsx ***!
  \***********************************************************************************/
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

var _loading = __webpack_require__(/*! ../../../../../templates/_common/components/loading.jsx */ "./src/templates/_common/components/loading.jsx");

var _loading2 = _interopRequireDefault(_loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlaceholderComponent = function PlaceholderComponent(props) {
    var EmptyMessageComponent = props.empty_message_component;
    return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        props.is_empty && _react2.default.createElement(EmptyMessageComponent, {
            component_icon: props.component_icon,
            has_selected_date: props.has_selected_date,
            localized_message: props.localized_message
        }),
        props.is_loading && _react2.default.createElement(_loading2.default, null)
    );
};

PlaceholderComponent.propTypes = {
    component_icon: _propTypes2.default.func,
    empty_message_component: _propTypes2.default.func,
    has_selected_date: _propTypes2.default.bool,
    localized_message: _propTypes2.default.string
};

exports.default = PlaceholderComponent;

/***/ }),

/***/ "./src/javascript/app_2/Modules/Reports/Components/profit_loss_cell.jsx":
/*!******************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Reports/Components/profit_loss_cell.jsx ***!
  \******************************************************************************/
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

var _profitLoss = __webpack_require__(/*! ../Helpers/profit-loss */ "./src/javascript/app_2/Modules/Reports/Helpers/profit-loss.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProfitLossCell = function ProfitLossCell(_ref) {
    var value = _ref.value,
        children = _ref.children;

    var status = (0, _profitLoss.getProfitOrLoss)(value);

    return _react2.default.createElement(
        'span',
        { className: 'amount--' + status },
        children
    );
};

ProfitLossCell.propTypes = {
    value: _propTypes2.default.string
};

exports.default = ProfitLossCell;

/***/ }),

/***/ "./src/javascript/app_2/Modules/Reports/Components/reports-meta.jsx":
/*!**************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Reports/Components/reports-meta.jsx ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ReportsMeta = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReportsMeta = function ReportsMeta(_ref) {
    var i18n_heading = _ref.i18n_heading,
        i18n_message = _ref.i18n_message;
    return _react2.default.createElement(
        'div',
        { className: 'reports__meta' },
        _react2.default.createElement(
            'div',
            { className: 'reports__meta-description' },
            _react2.default.createElement(
                'h1',
                { className: 'reports__meta-description--heading' },
                i18n_heading
            ),
            _react2.default.createElement(
                'p',
                { className: 'reports__meta-description--paragraph' },
                i18n_message
            )
        )
    );
};

exports.ReportsMeta = ReportsMeta;

/***/ }),

/***/ "./src/javascript/app_2/Modules/Reports/Constants/data-table-constants.js":
/*!********************************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Reports/Constants/data-table-constants.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getOpenPositionsColumnsTemplate = exports.getProfitTableColumnsTemplate = exports.getStatementTableColumnsTemplate = undefined;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _localize = __webpack_require__(/*! ../../../../_common/localize */ "./src/javascript/_common/localize.js");

var _Label = __webpack_require__(/*! ../../../App/Components/Elements/Label */ "./src/javascript/app_2/App/Components/Elements/Label/index.js");

var _Label2 = _interopRequireDefault(_Label);

var _money = __webpack_require__(/*! ../../../App/Components/Elements/money.jsx */ "./src/javascript/app_2/App/Components/Elements/money.jsx");

var _money2 = _interopRequireDefault(_money);

var _ProgressSliderStream = __webpack_require__(/*! ../../../App/Containers/ProgressSliderStream */ "./src/javascript/app_2/App/Containers/ProgressSliderStream/index.js");

var _ProgressSliderStream2 = _interopRequireDefault(_ProgressSliderStream);

var _indicativeCell = __webpack_require__(/*! ../../Portfolio/Components/indicative-cell.jsx */ "./src/javascript/app_2/Modules/Portfolio/Components/indicative-cell.jsx");

var _indicativeCell2 = _interopRequireDefault(_indicativeCell);

var _profitLoss = __webpack_require__(/*! ../Helpers/profit-loss */ "./src/javascript/app_2/Modules/Reports/Helpers/profit-loss.js");

var _marketSymbolIconRow = __webpack_require__(/*! ../Components/market-symbol-icon-row.jsx */ "./src/javascript/app_2/Modules/Reports/Components/market-symbol-icon-row.jsx");

var _marketSymbolIconRow2 = _interopRequireDefault(_marketSymbolIconRow);

var _profit_loss_cell = __webpack_require__(/*! ../Components/profit_loss_cell.jsx */ "./src/javascript/app_2/Modules/Reports/Components/profit_loss_cell.jsx");

var _profit_loss_cell2 = _interopRequireDefault(_profit_loss_cell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getModeFromValue = function getModeFromValue(key) {
    var map = {
        deposit: 'warn',
        sell: 'danger',
        buy: 'success',
        default: 'default'
    };

    if (Object.keys(map).find(function (x) {
        return x === key;
    })) {
        return map[key];
    }

    return map.default;
};
/* eslint-disable react/display-name, react/prop-types */
var getStatementTableColumnsTemplate = exports.getStatementTableColumnsTemplate = function getStatementTableColumnsTemplate(currency) {
    return [{
        key: 'icon',
        title: '',
        col_index: 'action_type',
        renderCellContent: function renderCellContent(_ref) {
            var cell_value = _ref.cell_value,
                row_obj = _ref.row_obj;
            return _react2.default.createElement(_marketSymbolIconRow2.default, {
                action: cell_value,
                key: row_obj.transaction_id,
                payload: row_obj
            });
        }
    }, {
        title: (0, _localize.localize)('Ref. ID'),
        col_index: 'refid'
    }, {
        title: (0, _localize.localize)('Transaction time'),
        col_index: 'date'
    }, {
        key: 'mode',
        title: (0, _localize.localize)('Transaction'),
        col_index: 'action_type',
        renderCellContent: function renderCellContent(_ref2) {
            var cell_value = _ref2.cell_value,
                row_obj = _ref2.row_obj;
            return _react2.default.createElement(
                _Label2.default,
                { mode: getModeFromValue(cell_value) },
                row_obj.action
            );
        }
    }, {
        title: (0, _localize.localize)('Credit/Debit'),
        col_index: 'amount',
        renderCellContent: function renderCellContent(_ref3) {
            var cell_value = _ref3.cell_value;
            return _react2.default.createElement(
                'div',
                { className: 'amount--' + (0, _profitLoss.getProfitOrLoss)(cell_value) },
                _react2.default.createElement(_money2.default, { has_sign: true, amount: cell_value.replace(/[,]+/g, ''), currency: currency })
            );
        }
    }, {
        title: (0, _localize.localize)('Balance'),
        col_index: 'balance',
        renderCellContent: function renderCellContent(_ref4) {
            var cell_value = _ref4.cell_value;
            return _react2.default.createElement(_money2.default, { amount: cell_value.replace(/[,]+/g, ''), currency: currency });
        }
    }];
};
var getProfitTableColumnsTemplate = exports.getProfitTableColumnsTemplate = function getProfitTableColumnsTemplate() {
    return [{
        key: 'icon',
        title: '',
        col_index: 'action_type',
        renderCellContent: function renderCellContent(_ref5) {
            var cell_value = _ref5.cell_value,
                row_obj = _ref5.row_obj,
                is_footer = _ref5.is_footer;

            if (is_footer) return (0, _localize.localize)('Total profit/loss');

            return _react2.default.createElement(_marketSymbolIconRow2.default, {
                action: cell_value,
                key: row_obj.transaction_id,
                payload: row_obj
            });
        }
    }, {
        title: (0, _localize.localize)('Ref. ID'),
        col_index: 'transaction_id'
    }, {
        title: (0, _localize.localize)('Buy time'),
        col_index: 'purchase_time'
    }, {
        title: (0, _localize.localize)('Buy price'),
        col_index: 'buy_price',
        renderCellContent: function renderCellContent(_ref6) {
            var cell_value = _ref6.cell_value,
                is_footer = _ref6.is_footer;

            if (is_footer) return '';

            return _react2.default.createElement(_money2.default, { amount: cell_value });
        }
    }, {
        title: (0, _localize.localize)('Sell time'),
        col_index: 'sell_time'
    }, {
        title: (0, _localize.localize)('Sell price'),
        col_index: 'sell_price',
        renderCellContent: function renderCellContent(_ref7) {
            var cell_value = _ref7.cell_value,
                is_footer = _ref7.is_footer;

            if (is_footer) return '';

            return _react2.default.createElement(_money2.default, { amount: cell_value });
        }
    }, {
        title: (0, _localize.localize)('Profit/Loss'),
        col_index: 'profit_loss',
        renderCellContent: function renderCellContent(_ref8) {
            var cell_value = _ref8.cell_value;
            return _react2.default.createElement(
                _profit_loss_cell2.default,
                { value: cell_value },
                _react2.default.createElement(_money2.default, { amount: cell_value })
            );
        }
    }];
};
var getOpenPositionsColumnsTemplate = exports.getOpenPositionsColumnsTemplate = function getOpenPositionsColumnsTemplate(currency) {
    return [{
        title: '',
        col_index: 'type',
        renderCellContent: function renderCellContent(_ref9) {
            var cell_value = _ref9.cell_value,
                row_obj = _ref9.row_obj,
                is_footer = _ref9.is_footer;

            if (is_footer) return (0, _localize.localize)('Total');

            return _react2.default.createElement(_marketSymbolIconRow2.default, {
                action: cell_value,
                key: row_obj.id,
                payload: row_obj.contract_info
            });
        }
    }, {
        title: (0, _localize.localize)('Ref. ID'),
        col_index: 'reference'
    }, {
        title: (0, _localize.localize)('Buy price'),
        col_index: 'buy_price',
        renderCellContent: function renderCellContent(_ref10) {
            var cell_value = _ref10.cell_value;
            return _react2.default.createElement(_money2.default, { amount: cell_value, currency: currency });
        }
    }, {
        title: (0, _localize.localize)('Potential payout'),
        col_index: 'payout',
        renderCellContent: function renderCellContent(_ref11) {
            var cell_value = _ref11.cell_value;
            return _react2.default.createElement(_money2.default, { amount: cell_value, currency: currency });
        }
    }, {
        title: (0, _localize.localize)('Indicative price'),
        col_index: 'indicative',
        renderCellContent: function renderCellContent(_ref12) {
            var cell_value = _ref12.cell_value,
                row_obj = _ref12.row_obj;
            return _react2.default.createElement(_indicativeCell2.default, { amount: +cell_value, currency: currency, status: row_obj.status });
        }
    }, {
        title: (0, _localize.localize)('Remaining time'),
        col_index: 'id',
        renderCellContent: function renderCellContent(_ref13) {
            var cell_value = _ref13.cell_value;
            return _react2.default.createElement(_ProgressSliderStream2.default, { id: cell_value });
        }
    }];
};
/* eslint-enable react/display-name, react/prop-types */

/***/ }),

/***/ "./src/javascript/app_2/Modules/Reports/Helpers/profit-loss.js":
/*!*********************************************************************!*\
  !*** ./src/javascript/app_2/Modules/Reports/Helpers/profit-loss.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getProfitOrLoss = exports.getProfitOrLoss = function getProfitOrLoss(value) {
  return +value.replace(/,/g, '') >= 0 ? 'profit' : 'loss';
};

/***/ })

}]);