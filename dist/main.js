/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dep.js":
/*!********************!*\
  !*** ./src/dep.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Dep; });\nlet uid = 0\r\nclass Dep {\r\n    constructor() {\r\n        this.id = uid++\r\n        // 订阅者数组\r\n        this.subs = []\r\n    }\r\n    depend() {\r\n        Dep.target.addDep(this)\r\n    }\r\n    addSub(sub) {\r\n        this.subs.push(sub)\r\n    }\r\n    removeSub(sub) {\r\n        const index = this.subs.indexOf(sub)\r\n        if(index > -1) {\r\n            this.subs.splice(index, 1)\r\n        }\r\n    }\r\n    notify() {\r\n        this.subs.forEach(sub => sub.update())\r\n    }\r\n} \r\n\r\nDep.target = null\n\n//# sourceURL=webpack:///./src/dep.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mvvm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mvvm */ \"./src/mvvm.js\");\n \r\n\r\n(function (global, mvvm) {\r\n    global.Mvvm = mvvm\r\n})(window, _mvvm__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/mvvm.js":
/*!*********************!*\
  !*** ./src/mvvm.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _watcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./watcher */ \"./src/watcher.js\");\n/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observer */ \"./src/observer.js\");\n\r\n\r\n\r\nclass Mvvm {\r\n    constructor(options) {\r\n        this.$options = options\r\n        let data = (this._data = this.$options.data)\r\n        Object.keys(data).forEach(key => this._proxy(key))\r\n        Object(_observer__WEBPACK_IMPORTED_MODULE_1__[\"observe\"])(data)\r\n    }\r\n    $watch(expOrFn, cb) {\r\n        new _watcher__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this, expOrFn, cb)\r\n    }\r\n    _proxy (key) {\r\n        Object.defineProperty(this, key, {\r\n            configurable: true,\r\n            enumerable: true,\r\n            get: () => {\r\n                this._data[key]\r\n            },\r\n            set: val => {\r\n                this._data[key] = val\r\n            }\r\n        })\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Mvvm);\n\n//# sourceURL=webpack:///./src/mvvm.js?");

/***/ }),

/***/ "./src/observer.js":
/*!*************************!*\
  !*** ./src/observer.js ***!
  \*************************/
/*! exports provided: default, observe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Observer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"observe\", function() { return observe; });\n/* harmony import */ var _dep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dep */ \"./src/dep.js\");\n\r\n\r\nclass Observer {\r\n    constructor(value){\r\n        this.value = value\r\n        this.walk(value)\r\n        Object.defineProperty(value, '__ob__',{\r\n            value: this,\r\n            enumerable: false,\r\n            writable: true,\r\n            configurable: true\r\n        })\r\n    }\r\n    walk(value) {\r\n        Object.keys(value).forEach(key => this.convert(key, value[key]))\r\n    }\r\n    convert(key,val) {\r\n        defineReactive(this.value, key, val)\r\n    }\r\n}\r\n\r\nfunction defineReactive(obj, key, val) {\r\n    const dep = new _dep__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\r\n    let childOb = observe(val)\r\n    Object.defineProperty(obj, key, {\r\n        enumerable: true,\r\n        configurable: true,\r\n        get: () => {\r\n            if(_dep__WEBPACK_IMPORTED_MODULE_0__[\"default\"].target){\r\n                dep.addSub(_dep__WEBPACK_IMPORTED_MODULE_0__[\"default\"].target)\r\n                dep.depend()\r\n            }\r\n            return val\r\n        },\r\n        set: newVal => {\r\n            if (val === newVal) return\r\n            val = newVal\r\n            childOb = observe(newVal)\r\n            dep.notify()\r\n        }\r\n    })\r\n}\r\n\r\nfunction observe(val) {\r\n    if (!val || typeof val !== 'object') return\r\n\r\n    let ob \r\n\r\n    if(val.hasOwnProperty('__ob__') && val.__ob__ instanceof Observer) {\r\n        ob = val.__ob__\r\n    } else {\r\n        ob = new Observer(val)\r\n    }\r\n    return ob\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/observer.js?");

/***/ }),

/***/ "./src/watcher.js":
/*!************************!*\
  !*** ./src/watcher.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Watcher; });\n/* harmony import */ var _dep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dep */ \"./src/dep.js\");\n\r\n\r\nclass Watcher {\r\n    constructor(vm, expOrFn, cb){\r\n        this.depIds = {} // hash储存订阅者的id,避免重复的订阅者\r\n        this.vm = vm // 被订阅的数据一定来自于当前Vue实例\r\n        this.cb = cb // 当数据更新时想要做的事情\r\n        this.expOrFn = expOrFn // 被订阅的数据\r\n        this.val = this.get() // 维护更新之前的数据\r\n    }\r\n    update() {\r\n        this.run()\r\n    }\r\n    addDep(dep) {\r\n        if(!this.depIds.hasOwnProperty(dep.id)) {\r\n            dep.addSub(this)\r\n            this.depIds[dep.id] = dep\r\n        }\r\n    }\r\n    run() {\r\n        const val = this.get()\r\n        if(val !== this.val) {\r\n            this.val = val\r\n            this.cb.call(this.vm, val)\r\n        }\r\n    }\r\n    get() {\r\n        _dep__WEBPACK_IMPORTED_MODULE_0__[\"default\"].target = this\r\n        const val = this.vm._data[this.expOrFn]\r\n        _dep__WEBPACK_IMPORTED_MODULE_0__[\"default\"].target = null\r\n        return val\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/watcher.js?");

/***/ })

/******/ });