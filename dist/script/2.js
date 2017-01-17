webpackJsonp([2],{

/***/ 431:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reducers = __webpack_require__(204);

exports.default = function (store) {
	return {
		path: 'counter',
		/*  Async getComponent is only invoked when route matches   */
		getComponent: function getComponent(nextState, cb) {
			/*  Webpack - use 'require.ensure' to create a split point
   		and embed an async module loader (jsonp) when bundling   */
			__webpack_require__.e/* nsure */(3).catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
				/*  Webpack - use require callback to define
    		dependencies for bundling   */
				var Counter = __webpack_require__(434).default;
				var reducer = __webpack_require__(432).default;

				/*  Add the reducer to the store on key 'counter'  */
				(0, _reducers.injectReducer)(store, { key: 'counter', reducer: reducer });

				/*  Return getComponent   */
				cb(null, Counter);

				/* Webpack named bundle   */
			}).bind(null, __webpack_require__));
		}
	};
};

/***/ }

});