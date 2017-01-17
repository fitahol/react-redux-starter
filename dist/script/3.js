webpackJsonp([3],{

/***/ 432:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.actions = exports.doubleAsync = exports.COUNTER_DOUBLE_ASYNC = exports.COUNTER_INCREMENT = undefined;

var _defineProperty2 = __webpack_require__(435);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _promise = __webpack_require__(220);

var _promise2 = _interopRequireDefault(_promise);

var _ACTION_HANDLERS;

exports.increment = increment;
exports.default = counterReducer;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------------------------
// Constants
// ------------------------------------
var COUNTER_INCREMENT = exports.COUNTER_INCREMENT = 'COUNTER_INCREMENT';
var COUNTER_DOUBLE_ASYNC = exports.COUNTER_DOUBLE_ASYNC = 'COUNTER_DOUBLE_ASYNC';

// ------------------------------------
// Actions
// ------------------------------------
function increment() {
	var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

	return {
		type: COUNTER_INCREMENT,
		payload: value
	};
}

/*  This is a thunk, meaning it is a function that immediately
		returns a function for lazy evaluation. It is incredibly useful for
		creating async actions, especially when combined with redux-thunk! */

var doubleAsync = exports.doubleAsync = function doubleAsync() {
	return function (dispatch, getState) {
		return new _promise2.default(function (resolve) {
			setTimeout(function () {
				dispatch({
					type: COUNTER_DOUBLE_ASYNC,
					payload: getState().counter
				});
				resolve();
			}, 200);
		});
	};
};

var actions = exports.actions = {
	increment: increment,
	doubleAsync: doubleAsync
};

// ------------------------------------
// Action Handlers
// ------------------------------------
var ACTION_HANDLERS = (_ACTION_HANDLERS = {}, (0, _defineProperty3.default)(_ACTION_HANDLERS, COUNTER_INCREMENT, function (state, action) {
	return state + action.payload;
}), (0, _defineProperty3.default)(_ACTION_HANDLERS, COUNTER_DOUBLE_ASYNC, function (state, action) {
	return state * 2;
}), _ACTION_HANDLERS);

// ------------------------------------
// Reducer
// ------------------------------------
var initialState = 0;
function counterReducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	var handler = ACTION_HANDLERS[action.type];

	return handler ? handler(state, action) : state;
}

/***/ },

/***/ 433:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Counter = undefined;

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Counter = exports.Counter = function Counter(props) {
	return _react2.default.createElement(
		'div',
		{ style: { margin: '0 auto' } },
		_react2.default.createElement(
			'h2',
			null,
			'Counter: ',
			props.counter
		),
		_react2.default.createElement(
			'button',
			{ className: 'btn btn-default', onClick: props.increment },
			'Increment'
		),
		' ',
		_react2.default.createElement(
			'button',
			{ className: 'btn btn-default', onClick: props.doubleAsync },
			'Double (Async)'
		)
	);
};

Counter.propTypes = {
	counter: _react2.default.PropTypes.number.isRequired,
	doubleAsync: _react2.default.PropTypes.func.isRequired,
	increment: _react2.default.PropTypes.func.isRequired
};

exports.default = Counter;

/***/ },

/***/ 434:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});

var _reactRedux = __webpack_require__(205);

var _counterRedux = __webpack_require__(432);

var _counterCompontent = __webpack_require__(433);

var _counterCompontent2 = _interopRequireDefault(_counterCompontent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*  Object of action creators (can also be function that returns object).
		Keys will be passed as props to presentational components. Here we are
		implementing our wrapper around increment; the component doesn't care   */

var mapDispatchToProps = {
		increment: function increment() {
				return (0, _counterRedux.increment)(1);
		},
		doubleAsync: _counterRedux.doubleAsync
};

/*  This is a container component. Notice it does not contain any JSX,
		nor does it import React. This component is **only** responsible for
		wiring in the actions and state necessary to render a presentational
		component - in this case, the counter:   */

var mapStateToProps = function mapStateToProps(state) {
		return {
				counter: state.counter
		};
};

/*  Note: mapStateToProps is where you should use `reselect` to create selectors, ie:
		import { createSelector } from 'reselect'
		const counter = (state) => state.counter
		const tripleCount = createSelector(counter, (count) => count * 3)
		const mapStateToProps = (state) => ({
			counter: tripleCount(state)
		})
		Selectors can compute derived data, allowing Redux to store the minimal possible state.
		Selectors are efficient. A selector is not recomputed unless one of its arguments change.
		Selectors are composable. They can be used as input to other selectors.
		https://github.com/reactjs/reselect    */

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_counterCompontent2.default);

/***/ },

/***/ 435:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";

exports.__esModule = true;

var _defineProperty = __webpack_require__(217);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }

});