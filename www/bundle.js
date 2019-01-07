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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _base_array_methods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/array-methods */ \"./src/base/array-methods.js\");\n/* harmony import */ var _base_array_methods__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_base_array_methods__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _base_Base_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base/Base.class */ \"./src/base/Base.class.js\");\n/* harmony import */ var _base_jsonflex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base/jsonflex */ \"./src/base/jsonflex.js\");\n/* harmony import */ var _components_mainpage_Mainpage_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/mainpage/Mainpage.class */ \"./src/components/mainpage/Mainpage.class.js\");\n\n\n\n\n\nclass App extends _base_Base_class__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor() {\n    super();\n    this.start();\n  }\n  /**\n   * Runs in the constructor and runs everthing\n   *\n   */\n\n\n  async start() {\n    this.mainpage = new _components_mainpage_Mainpage_class__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n    this.mainpage.render('main');\n  }\n\n}\n\nconst app = new App();\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/base/Base.class.js":
/*!********************************!*\
  !*** ./src/base/Base.class.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Base; });\n/* harmony import */ var _jsonflex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jsonflex.js */ \"./src/base/jsonflex.js\");\n\n/**\n * Rendering framework from Nodebite\n *\n */\n\nclass Base {\n  constructor() {\n    new _jsonflex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n    if (!Base.subRenderCounter) {\n      Base.subRenderCounter = 1;\n      Base.renderingInProgress = false;\n      Base.renderQueue = [];\n    }\n  }\n\n  render(selector = '', templateNo = '') {\n    // The basic idea is that the render method calls\n    // template methods (\"template\" + templateNo)\n    // gets the html generated and pushes it to the dom\n    if (Base.renderingInProgress) {\n      // If rendering is in progress then the call\n      // to render is from inside a template\n      // (delay execution of this \"subrendering\")\n      return this.subrender(templateNo);\n    }\n\n    Base.renderingInProgress = true;\n    let oldBaseEl = this.baseEl;\n    this.baseEl = $(this[templateNo || 'template']());\n    this.addEvents(templateNo); // If subrendering to a temporary holder\n\n    if (selector.indexOf('.temp-render-holder') == 0) {\n      $(selector).replaceWith(this.baseEl);\n    } // If rerendering to existing place in the DOM\n    else if (!selector && oldBaseEl) {\n        oldBaseEl.replaceWith(this.baseEl);\n      } // If rendering to a specific element in DOM\n      else {\n          $(selector || 'main').append(this.baseEl);\n        }\n\n    Base.renderingInProgress = false; // Take care of delayed subrendering\n\n    while (Base.renderQueue.length) {\n      let queued = Base.renderQueue.shift();\n      queued.obj.render.apply(queued.obj, queued.args);\n    }\n  }\n\n  subrender(templateNo) {\n    // Temporarily return a unique holder for things to be subrendered\n    Base.subRenderCounter++;\n    let className = `temp-render-holder-${Base.subRenderCounter}`;\n    Base.renderQueue.push({\n      obj: this,\n      args: [`.${className}`, templateNo]\n    });\n    return `<option class=\"${className}\"/>`;\n  }\n\n  addEvents(templateNo) {\n    // Add events to baseElements - so that an event calls a corresponding\n    // method in the class (named event type + templateNo)\n    let types = ['click', 'keyup', 'mouseenter', 'mouseleave', 'change', 'keydown'];\n\n    for (let type of types) {\n      let methodName = type + templateNo;\n\n      if (this[methodName]) {\n        this.baseEl[type](e => this[methodName](e));\n      }\n    }\n  }\n\n}\n\n//# sourceURL=webpack:///./src/base/Base.class.js?");

/***/ }),

/***/ "./src/base/array-methods.js":
/*!***********************************!*\
  !*** ./src/base/array-methods.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Add a render method to the Array class\n * that calls render (in Base) for each item\n * and also collects and returns the temp html divs\n *(see Base)\n */\nObject.assign(Array.prototype, {\n  render(selector = '', templateNo = '') {\n    let html = '';\n\n    for (let item of this) {\n      html += item.render(selector, templateNo);\n    }\n\n    return html;\n  }\n\n});\n\nif (!Array.prototype.diff) {\n  Array.prototype.diff = function (a) {\n    return this.filter(function (i) {\n      return a.indexOf(i) < 0;\n    });\n  };\n}\n\n;\n\n//# sourceURL=webpack:///./src/base/array-methods.js?");

/***/ }),

/***/ "./src/base/jsonflex.js":
/*!******************************!*\
  !*** ./src/base/jsonflex.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return JsonFlex; });\nclass JsonFlex {\n  constructor() {\n    let mem,\n        pathMem,\n        base,\n        classes = {};\n\n    function val(obj, path, val) {\n      let get = val === undefined;\n      path = path.replace(/\\[(\\d*)\\]/g, '.$1');\n      path = path.split('.');\n      path.shift();\n\n      while (path.length > (get ? 0 : 1)) {\n        obj = obj[path.shift()];\n      }\n\n      if (get) {\n        return obj;\n      }\n\n      obj[path.shift()] = val;\n    }\n\n    function recurser(obj, revive = false, path = '') {\n      if (!obj || typeof obj != 'object' || obj instanceof Boolean || obj instanceof Date || obj instanceof Number || obj instanceof RegExp || obj instanceof String) {\n        return obj;\n      }\n\n      if (!path) {\n        base = obj;\n        mem = [];\n        pathMem = [];\n      }\n\n      if (!revive && classes[obj.constructor.name]) {\n        obj['⚙'] = obj.constructor.name;\n      }\n\n      if (revive && obj['⚙']) {\n        if (revive == 'hard' && classes[obj['⚙']]) {\n          let instance = new classes[obj['⚙']]();\n          Object.assign(instance, obj);\n          val(base, path, instance);\n          delete instance['⚙'];\n        } else {\n          delete obj['⚙'];\n        }\n      }\n\n      if (revive && obj.hasOwnProperty('↻')) {\n        val(base, path, val(base, obj['↻']));\n      }\n\n      let index = mem.indexOf(obj);\n\n      if (index >= 0) {\n        val(base, path, {\n          '↻': '$' + pathMem[index]\n        });\n        return;\n      }\n\n      mem.push(obj);\n      pathMem.push(path);\n\n      if (obj.constructor === Array) {\n        for (let i = 0; i < obj.length; i++) {\n          recurser(obj[i], revive, `${path}[${i}]`);\n        }\n      } else if (typeof obj == 'object') {\n        for (let i in obj) {\n          recurser(obj[i], revive, `${path}.${i}`);\n        }\n      }\n    }\n\n    function serverLoad(path, reviver) {}\n\n    function serverSave(fileName, obj, replacer, space) {}\n\n    JSON._stringify = (obj, replacer, space = '  ') => {\n      recurser(obj);\n      let result = JSON.stringify(obj, replacer, space);\n      recurser(obj, true);\n      return result;\n    };\n\n    JSON._parse = (str, reviver) => {\n      let obj = JSON.parse(str, reviver);\n      recurser(obj, 'hard');\n      return obj;\n    };\n\n    JSON._classes = (...args) => {\n      for (let i of args) {\n        classes[i.name] = i;\n      }\n    };\n\n    JSON._load = (url, reviver) => {\n      url += url.substr(-5) != '.json' ? '.json' : '';\n      url = '/json/' + url;\n      return new Promise((resolve, reject) => {\n        let xhr = new XMLHttpRequest();\n        xhr.open('GET', url, true);\n\n        xhr.onload = function (e) {\n          if (xhr.readyState === 4) {\n            if (xhr.status === 200) {\n              resolve(JSON._parse(xhr.responseText, reviver));\n            } else {\n              reject(xhr.statusText);\n            }\n          }\n        };\n\n        xhr.onerror = function (e) {\n          reject(xhr.statusText);\n        };\n\n        xhr.send(null);\n      });\n    };\n\n    JSON._save = (fileName, obj, replacer, space = '  ') => {\n      console.log(fileName);\n      return new Promise((resolve, reject) => {\n        let xhr = new XMLHttpRequest();\n        xhr.open(\"POST\", '/json-save', true);\n        xhr.setRequestHeader(\"Content-type\", \"application/json\");\n\n        xhr.onreadystatechange = () => {\n          if (xhr.readyState == XMLHttpRequest.DONE) {\n            xhr.status == 200 ? resolve() : reject();\n          }\n        };\n\n        xhr.send(JSON.stringify({\n          fileName: fileName,\n          json: JSON._stringify(obj, replacer, space)\n        }));\n      });\n    };\n  }\n\n}\n\n//# sourceURL=webpack:///./src/base/jsonflex.js?");

/***/ }),

/***/ "./src/components/mainpage/Mainpage.class.js":
/*!***************************************************!*\
  !*** ./src/components/mainpage/Mainpage.class.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Mainpage; });\n/* harmony import */ var _base_Base_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base/Base.class */ \"./src/base/Base.class.js\");\n/* harmony import */ var _Mainpage_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Mainpage.template */ \"./src/components/mainpage/Mainpage.template.js\");\n\n\n/**\n * Main page of the web app\n *\n */\n\nclass Mainpage extends _base_Base_class__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    super();\n    this.start();\n  }\n\n  start() {// $('main').empty();\n    // this.render('main');\n  }\n\n}\nMainpage.prototype.template = _Mainpage_template__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n\n//# sourceURL=webpack:///./src/components/mainpage/Mainpage.class.js?");

/***/ }),

/***/ "./src/components/mainpage/Mainpage.template.js":
/*!******************************************************!*\
  !*** ./src/components/mainpage/Mainpage.template.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return `\n    <h1>Template string test</h1>\n  `;\n});\n\n//# sourceURL=webpack:///./src/components/mainpage/Mainpage.template.js?");

/***/ })

/******/ });