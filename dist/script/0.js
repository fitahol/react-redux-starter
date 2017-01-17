webpackJsonp([0],{

/***/ 426:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reducers = __webpack_require__(204);

var _module = __webpack_require__(430);

var _module2 = _interopRequireDefault(_module);

var _homeContainer = __webpack_require__(429);

var _homeContainer2 = _interopRequireDefault(_homeContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Sync route definition
exports.default = function (store, cb) {
	(0, _reducers.injectReducer)(store, { key: 'home', reducer: _module2.default });
	cb(null, _homeContainer2.default);
};

/***/ },

/***/ 427:
/***/ function(module, exports) {



/***/ },

/***/ 428:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(427);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HomeView = function HomeView() {
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			'h4',
			null,
			'Welcome!'
		),
		_react2.default.createElement('img', {
			alt: 'This is a duck, because Redux!',
			className: 'duck',
			src: './assets/wechat.png' })
	);
};
// import DuckImage from './assets/wechat.png'
exports.default = HomeView;

/***/ },

/***/ 429:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(205);

var _actions = __webpack_require__(127);

var _homeComponent = __webpack_require__(428);

var _homeComponent2 = _interopRequireDefault(_homeComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapActionCreators = {
  fetchRequest: function fetchRequest(url, options, key, filter) {
    return (0, _actions.fetchRequest)(url, options, key, filter);
  },
  fetchFailed: function fetchFailed(message) {
    return (0, _actions.fetchFailed)(message);
  }
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    homeInfo: state.home.homeInfo
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapActionCreators)(_homeComponent2.default);

/***/ },

/***/ 430:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(75);

var _extends3 = _interopRequireDefault(_extends2);

exports.default = homeReducer;

var _reducers = __webpack_require__(204);

var _config = __webpack_require__(126);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ACTION_HANDLERS = (0, _extends3.default)({}, _reducers.globleHandler);

var initialState = {
  homeInfo: {}
};

function homeReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  if (location.pathname !== _config.rootPath + '/') return state;
  var handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}

/***/ }

});