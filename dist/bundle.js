(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define('rollupTest', factory) :
	(global.rollupTest = factory());
}(this, (function () { 'use strict';

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/**
 * @author michael / https://github.com/z996345
 */

var CustonVariable = Symbol('custonVariable');

var Foo = function () {
	/**
  * Foo Constructor
  * @constructor
  * @memberOf Foo
  */
	function Foo() {
		classCallCheck(this, Foo);

		this[CustonVariable] = 'Hello World';
	}

	createClass(Foo, [{
		key: 'get',
		value: function get$$1() {
			return this[CustonVariable];
		}
	}, {
		key: 'set',
		value: function set$$1(value) {
			if (!value || typeof value !== 'string') {
				throw 'Invalid Value';
			}
			this[CustonVariable] = value;
		}
	}, {
		key: 'showOnConsole',
		value: function showOnConsole() {
			console.log(this[CustonVariable]);
		}
	}]);
	return Foo;
}();

/**
 * @author michael / https://github.com/z996345
 */

var Test = {
  Foo: Foo
};

return Test;

})));

//# sourceMappingURL=bundle.js.map
