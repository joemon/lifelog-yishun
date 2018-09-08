module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/MainRouter.js":
/*!******************************!*\
  !*** ./client/MainRouter.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _Home = __webpack_require__(/*! ./core/Home */ \"./client/core/Home.js\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _Users = __webpack_require__(/*! ./user/Users */ \"./client/user/Users.js\");\n\nvar _Users2 = _interopRequireDefault(_Users);\n\nvar _Signup = __webpack_require__(/*! ./user/Signup */ \"./client/user/Signup.js\");\n\nvar _Signup2 = _interopRequireDefault(_Signup);\n\nvar _Signin = __webpack_require__(/*! ./auth/Signin */ \"./client/auth/Signin.js\");\n\nvar _Signin2 = _interopRequireDefault(_Signin);\n\nvar _EditProfile = __webpack_require__(/*! ./user/EditProfile */ \"./client/user/EditProfile.js\");\n\nvar _EditProfile2 = _interopRequireDefault(_EditProfile);\n\nvar _Profile = __webpack_require__(/*! ./user/Profile */ \"./client/user/Profile.js\");\n\nvar _Profile2 = _interopRequireDefault(_Profile);\n\nvar _PrivateRoute = __webpack_require__(/*! ./auth/PrivateRoute */ \"./client/auth/PrivateRoute.js\");\n\nvar _PrivateRoute2 = _interopRequireDefault(_PrivateRoute);\n\nvar _Menu = __webpack_require__(/*! ./core/Menu */ \"./client/core/Menu.js\");\n\nvar _Menu2 = _interopRequireDefault(_Menu);\n\nvar _Mainfooter = __webpack_require__(/*! ./footer/Mainfooter */ \"./client/footer/Mainfooter.js\");\n\nvar _Mainfooter2 = _interopRequireDefault(_Mainfooter);\n\nvar _CreateMedia = __webpack_require__(/*! ./../client/media/CreateMedia */ \"./client/media/CreateMedia.js\");\n\nvar _CreateMedia2 = _interopRequireDefault(_CreateMedia);\n\nvar _gps = __webpack_require__(/*! ./../client/gps/gps */ \"./client/gps/gps.js\");\n\nvar _gps2 = _interopRequireDefault(_gps);\n\nvar _Medialist = __webpack_require__(/*! ./media/Medialist */ \"./client/media/Medialist.js\");\n\nvar _Medialist2 = _interopRequireDefault(_Medialist);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar MainRouter = function (_Component) {\n  _inherits(MainRouter, _Component);\n\n  function MainRouter() {\n    _classCallCheck(this, MainRouter);\n\n    return _possibleConstructorReturn(this, (MainRouter.__proto__ || Object.getPrototypeOf(MainRouter)).apply(this, arguments));\n  }\n\n  _createClass(MainRouter, [{\n    key: \"componentDidMount\",\n\n    // Removes the server-side injected CSS when React component mounts\n    value: function componentDidMount() {\n      var jssStyles = document.getElementById(\"jss-server-side\");\n      if (jssStyles && jssStyles.parentNode) {\n        jssStyles.parentNode.removeChild(jssStyles);\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return _react2.default.createElement(\n        \"div\",\n        null,\n        _react2.default.createElement(_Menu2.default, null),\n        _react2.default.createElement(\n          _reactRouterDom.Switch,\n          null,\n          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: \"/\", component: _Home2.default }),\n          _react2.default.createElement(_reactRouterDom.Route, { path: \"/users\", component: _Users2.default }),\n          _react2.default.createElement(_reactRouterDom.Route, { path: \"/signup\", component: _Signup2.default }),\n          _react2.default.createElement(_reactRouterDom.Route, { path: \"/createmedia\", component: _CreateMedia2.default }),\n          _react2.default.createElement(_reactRouterDom.Route, { path: \"/gps\", component: _gps2.default }),\n          _react2.default.createElement(_reactRouterDom.Route, { path: \"/medialist\", component: _Medialist2.default }),\n          _react2.default.createElement(_reactRouterDom.Route, { path: \"/signin\", component: _Signin2.default }),\n          _react2.default.createElement(_PrivateRoute2.default, { path: \"/user/edit/:userId\", component: _EditProfile2.default }),\n          _react2.default.createElement(_reactRouterDom.Route, { path: \"/user/:userId\", component: _Profile2.default })\n        ),\n        _react2.default.createElement(_Mainfooter2.default, null)\n      );\n    }\n  }, {\n    key: \"__reactstandin__regenerateByEval\",\n    value: function __reactstandin__regenerateByEval(key, code) {\n      this[key] = eval(code);\n    }\n  }]);\n\n  return MainRouter;\n}(_react.Component);\n\nvar _default = MainRouter;\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(MainRouter, \"MainRouter\", \"/Users/xaviourha/summer_project/lifelog/client/MainRouter.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/xaviourha/summer_project/lifelog/client/MainRouter.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/MainRouter.js?");

/***/ }),

/***/ "./client/assets/images/homeimg.png":
/*!******************************************!*\
  !*** ./client/assets/images/homeimg.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fe18f37cf8fb16a9239ea7e614062594.png\";\n\n//# sourceURL=webpack:///./client/assets/images/homeimg.png?");

/***/ }),

/***/ "./client/assets/images/login.png":
/*!****************************************!*\
  !*** ./client/assets/images/login.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"9c3c070845ef24985439f64fffebb0a4.png\";\n\n//# sourceURL=webpack:///./client/assets/images/login.png?");

/***/ }),

/***/ "./client/assets/images/profile-pic.png":
/*!**********************************************!*\
  !*** ./client/assets/images/profile-pic.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"1f9c6f37e3fb05375c94e587cc503ef7.png\";\n\n//# sourceURL=webpack:///./client/assets/images/profile-pic.png?");

/***/ }),

/***/ "./client/assets/images/timg2.gif":
/*!****************************************!*\
  !*** ./client/assets/images/timg2.gif ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"fa87774590186b287a5338d7c87afc0c.gif\";\n\n//# sourceURL=webpack:///./client/assets/images/timg2.gif?");

/***/ }),

/***/ "./client/auth/PrivateRoute.js":
/*!*************************************!*\
  !*** ./client/auth/PrivateRoute.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _authHelper = __webpack_require__(/*! ./auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\nvar PrivateRoute = function PrivateRoute(_ref) {\n  var Component = _ref.component,\n      rest = _objectWithoutProperties(_ref, ['component']);\n\n  return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, { render: function render(props) {\n      return _authHelper2.default.isAuthenticated() ? _react2.default.createElement(Component, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: {\n          pathname: '/signin',\n          state: { from: props.location }\n        } });\n    } }));\n};\n\nvar _default = PrivateRoute;\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(PrivateRoute, 'PrivateRoute', '/Users/xaviourha/summer_project/lifelog/client/auth/PrivateRoute.js');\n  reactHotLoader.register(_default, 'default', '/Users/xaviourha/summer_project/lifelog/client/auth/PrivateRoute.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/auth/PrivateRoute.js?");

/***/ }),

/***/ "./client/auth/Signin.js":
/*!*******************************!*\
  !*** ./client/auth/Signin.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Card = __webpack_require__(/*! material-ui/Card */ \"material-ui/Card\");\n\nvar _Card2 = _interopRequireDefault(_Card);\n\nvar _Button = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _TextField = __webpack_require__(/*! material-ui/TextField */ \"material-ui/TextField\");\n\nvar _TextField2 = _interopRequireDefault(_TextField);\n\nvar _Typography = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _Icon = __webpack_require__(/*! material-ui/Icon */ \"material-ui/Icon\");\n\nvar _Icon2 = _interopRequireDefault(_Icon);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n\nvar _authHelper = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _apiAuth = __webpack_require__(/*! ./api-auth.js */ \"./client/auth/api-auth.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = function styles(theme) {\n  return {\n    card: {\n      maxWidth: 600,\n      margin: 'auto',\n      textAlign: 'center',\n      marginTop: theme.spacing.unit * 5,\n      paddingBottom: theme.spacing.unit * 2\n    },\n    error: {\n      verticalAlign: 'middle'\n    },\n    title: {\n      marginTop: theme.spacing.unit * 2,\n      color: theme.palette.openTitle\n    },\n    textField: {\n      marginLeft: theme.spacing.unit,\n      marginRight: theme.spacing.unit,\n      width: 300\n    },\n    submit: {\n      margin: 'auto',\n      marginBottom: theme.spacing.unit * 2\n    }\n  };\n};\n\nvar Signin = function (_Component) {\n  _inherits(Signin, _Component);\n\n  function Signin() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, Signin);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Signin.__proto__ || Object.getPrototypeOf(Signin)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      email: '',\n      password: '',\n      error: '',\n      redirectToReferrer: false\n    }, _this.clickSubmit = function () {\n      var user = {\n        email: _this.state.email || undefined,\n        password: _this.state.password || undefined\n      };\n\n      (0, _apiAuth.signin)(user).then(function (data) {\n        if (data.error) {\n          _this.setState({ error: data.error });\n        } else {\n          _authHelper2.default.authenticate(data, function () {\n            _this.setState({ redirectToReferrer: true });\n          });\n        }\n      });\n    }, _this.handleChange = function (name) {\n      return function (event) {\n        _this.setState(_defineProperty({}, name, event.target.value));\n      };\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(Signin, [{\n    key: 'render',\n    value: function render() {\n      var classes = this.props.classes;\n\n      var _ref2 = this.props.location.state || {\n        from: {\n          pathname: '/'\n        }\n      },\n          from = _ref2.from;\n\n      var redirectToReferrer = this.state.redirectToReferrer;\n\n      if (redirectToReferrer) {\n        return _react2.default.createElement(_reactRouterDom.Redirect, { to: from });\n      }\n\n      return _react2.default.createElement(\n        _Card2.default,\n        { className: classes.card },\n        _react2.default.createElement(\n          _Card.CardContent,\n          null,\n          _react2.default.createElement(\n            _Typography2.default,\n            { type: 'headline', component: 'h2', className: classes.title },\n            'Sign In'\n          ),\n          _react2.default.createElement(_TextField2.default, { id: 'email', type: 'email', label: 'Email', className: classes.textField, value: this.state.email, onChange: this.handleChange('email'), margin: 'normal' }),\n          _react2.default.createElement('br', null),\n          _react2.default.createElement(_TextField2.default, { id: 'password', type: 'password', label: 'Password', className: classes.textField, value: this.state.password, onChange: this.handleChange('password'), margin: 'normal' }),\n          _react2.default.createElement('br', null),\n          ' ',\n          this.state.error && _react2.default.createElement(\n            _Typography2.default,\n            { component: 'p', color: 'error' },\n            _react2.default.createElement(\n              _Icon2.default,\n              { color: 'error', className: classes.error },\n              'error'\n            ),\n            this.state.error\n          )\n        ),\n        _react2.default.createElement(\n          _Card.CardActions,\n          null,\n          _react2.default.createElement(\n            _Button2.default,\n            { color: 'primary', variant: 'raised', onClick: this.clickSubmit, className: classes.submit },\n            'Submit'\n          )\n        )\n      );\n    }\n  }, {\n    key: '__reactstandin__regenerateByEval',\n    value: function __reactstandin__regenerateByEval(key, code) {\n      this[key] = eval(code);\n    }\n  }]);\n\n  return Signin;\n}(_react.Component);\n\nSignin.propTypes = {\n  classes: _propTypes2.default.object.isRequired\n};\n\nvar _default = (0, _styles.withStyles)(styles)(Signin);\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(styles, 'styles', '/Users/xaviourha/summer_project/lifelog/client/auth/Signin.js');\n  reactHotLoader.register(Signin, 'Signin', '/Users/xaviourha/summer_project/lifelog/client/auth/Signin.js');\n  reactHotLoader.register(_default, 'default', '/Users/xaviourha/summer_project/lifelog/client/auth/Signin.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/auth/Signin.js?");

/***/ }),

/***/ "./client/auth/api-auth.js":
/*!*********************************!*\
  !*** ./client/auth/api-auth.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar signin = function signin(user) {\n  return fetch('/auth/signin/', {\n    method: 'POST',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json'\n    },\n    credentials: 'include',\n    body: JSON.stringify(user)\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    return console.log(err);\n  });\n};\n\nvar signout = function signout() {\n  return fetch('/auth/signout/', {\n    method: 'GET'\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    return console.log(err);\n  });\n};\n\nexports.signin = signin;\nexports.signout = signout;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(signin, 'signin', '/Users/xaviourha/summer_project/lifelog/client/auth/api-auth.js');\n  reactHotLoader.register(signout, 'signout', '/Users/xaviourha/summer_project/lifelog/client/auth/api-auth.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/auth/api-auth.js?");

/***/ }),

/***/ "./client/auth/auth-helper.js":
/*!************************************!*\
  !*** ./client/auth/auth-helper.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _apiAuth = __webpack_require__(/*! ./api-auth.js */ \"./client/auth/api-auth.js\");\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar auth = {\n  isAuthenticated: function isAuthenticated() {\n    if (typeof window == \"undefined\") return false;\n\n    if (sessionStorage.getItem('jwt')) return JSON.parse(sessionStorage.getItem('jwt'));else return false;\n  },\n  authenticate: function authenticate(jwt, cb) {\n    if (typeof window !== \"undefined\") sessionStorage.setItem('jwt', JSON.stringify(jwt));\n    cb();\n  },\n  signout: function signout(cb) {\n    if (typeof window !== \"undefined\") sessionStorage.removeItem('jwt');\n    cb();\n    //optional\n    (0, _apiAuth.signout)().then(function (data) {\n      document.cookie = \"t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;\";\n    });\n  }\n};\n\nvar _default = auth;\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(auth, 'auth', '/Users/xaviourha/summer_project/lifelog/client/auth/auth-helper.js');\n  reactHotLoader.register(_default, 'default', '/Users/xaviourha/summer_project/lifelog/client/auth/auth-helper.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/auth/auth-helper.js?");

/***/ }),

/***/ "./client/core/Home.js":
/*!*****************************!*\
  !*** ./client/core/Home.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n\nvar _Card = __webpack_require__(/*! material-ui/Card */ \"material-ui/Card\");\n\nvar _Card2 = _interopRequireDefault(_Card);\n\nvar _Typography = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _Grid = __webpack_require__(/*! material-ui/Grid */ \"material-ui/Grid\");\n\nvar _Grid2 = _interopRequireDefault(_Grid);\n\nvar _authHelper = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nvar _homeimg = __webpack_require__(/*! ./../assets/images/homeimg.png */ \"./client/assets/images/homeimg.png\");\n\nvar _homeimg2 = _interopRequireDefault(_homeimg);\n\nvar _login = __webpack_require__(/*! ./../assets/images/login.png */ \"./client/assets/images/login.png\");\n\nvar _login2 = _interopRequireDefault(_login);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = function styles(theme) {\n  return {\n    root: {\n      flexGrow: 1,\n      margin: 30\n    },\n    card: {\n      maxWidth: 600,\n      margin: \"auto\",\n      marginTop: theme.spacing.unit * 5\n    },\n    title: {\n      padding: theme.spacing.unit * 3 + \"px \" + theme.spacing.unit * 2.5 + \"px \" + theme.spacing.unit * 2 + \"px\",\n      color: theme.palette.text.secondary\n    },\n    media: {\n      minHeight: 330\n    }\n  };\n};\n\nvar Home = function (_Component) {\n  _inherits(Home, _Component);\n\n  function Home() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, Home);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      defaultPage: true\n    }, _this.init = function () {\n      if (_authHelper2.default.isAuthenticated()) {\n        _this.setState({ defaultPage: false });\n      } else {\n        _this.setState({ defaultPage: true });\n      }\n    }, _this.componentWillReceiveProps = function () {\n      _this.init();\n    }, _this.componentDidMount = function () {\n      _this.init();\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(Home, [{\n    key: \"render\",\n    value: function render() {\n      var classes = this.props.classes;\n\n      return _react2.default.createElement(\n        \"div\",\n        { className: classes.root },\n        this.state.defaultPage && _react2.default.createElement(\n          _Grid2.default,\n          { container: true, spacing: 24 },\n          _react2.default.createElement(\n            _Grid2.default,\n            { item: true, xs: 12 },\n            _react2.default.createElement(\n              _Card2.default,\n              { className: classes.card },\n              _react2.default.createElement(\n                _Typography2.default,\n                {\n                  type: \"headline\",\n                  component: \"h2\",\n                  className: classes.title\n                },\n                \"Home Page\"\n              ),\n              _react2.default.createElement(_Card.CardMedia, { className: classes.media, image: _homeimg2.default }),\n              _react2.default.createElement(\n                _Card.CardContent,\n                null,\n                _react2.default.createElement(\n                  _Typography2.default,\n                  { type: \"body1\", component: \"p\" },\n                  \"Welcome to Lifelogging Managment System\"\n                )\n              )\n            )\n          )\n        ),\n        !this.state.defaultPage && _react2.default.createElement(\n          _Grid2.default,\n          { container: true, spacing: 24 },\n          _react2.default.createElement(\n            _Grid2.default,\n            { item: true, xs: 12 },\n            _react2.default.createElement(\n              _Card2.default,\n              { className: classes.card },\n              _react2.default.createElement(_Card.CardMedia, { className: classes.media, image: _login2.default })\n            )\n          )\n        )\n      );\n    }\n  }, {\n    key: \"__reactstandin__regenerateByEval\",\n    value: function __reactstandin__regenerateByEval(key, code) {\n      this[key] = eval(code);\n    }\n  }]);\n\n  return Home;\n}(_react.Component);\n\nHome.propTypes = {\n  classes: _propTypes2.default.object.isRequired\n};\n\nvar _default = (0, _styles.withStyles)(styles)(Home);\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(styles, \"styles\", \"/Users/xaviourha/summer_project/lifelog/client/core/Home.js\");\n  reactHotLoader.register(Home, \"Home\", \"/Users/xaviourha/summer_project/lifelog/client/core/Home.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/xaviourha/summer_project/lifelog/client/core/Home.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/core/Home.js?");

/***/ }),

/***/ "./client/core/Menu.js":
/*!*****************************!*\
  !*** ./client/core/Menu.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _AppBar = __webpack_require__(/*! material-ui/AppBar */ \"material-ui/AppBar\");\n\nvar _AppBar2 = _interopRequireDefault(_AppBar);\n\nvar _Toolbar = __webpack_require__(/*! material-ui/Toolbar */ \"material-ui/Toolbar\");\n\nvar _Toolbar2 = _interopRequireDefault(_Toolbar);\n\nvar _Typography = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _IconButton = __webpack_require__(/*! material-ui/IconButton */ \"material-ui/IconButton\");\n\nvar _IconButton2 = _interopRequireDefault(_IconButton);\n\nvar _Home = __webpack_require__(/*! material-ui-icons/Home */ \"material-ui-icons/Home\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _Button = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _authHelper = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _BubbleChart = __webpack_require__(/*! material-ui-icons/BubbleChart */ \"material-ui-icons/BubbleChart\");\n\nvar _BubbleChart2 = _interopRequireDefault(_BubbleChart);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar isActive = function isActive(history, path) {\n  if (history.location.pathname == path) return { color: \"#ff4081\" };else return { color: \"#ffffff\" };\n};\nvar Menu = (0, _reactRouterDom.withRouter)(function (_ref) {\n  var history = _ref.history;\n  return _react2.default.createElement(\n    _AppBar2.default,\n    { position: \"static\" },\n    _react2.default.createElement(\n      _Toolbar2.default,\n      null,\n      _react2.default.createElement(\n        _Typography2.default,\n        { type: \"title\", color: \"inherit\" },\n        \"Lifelog management system\"\n      ),\n      _react2.default.createElement(_BubbleChart2.default, null),\n      !_authHelper2.default.isAuthenticated() && _react2.default.createElement(\n        \"span\",\n        null,\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { to: \"/\" },\n          _react2.default.createElement(\n            _IconButton2.default,\n            { \"aria-label\": \"Home\", style: isActive(history, \"/\") },\n            _react2.default.createElement(_Home2.default, null)\n          )\n        ),\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { to: \"/users\" },\n          _react2.default.createElement(\n            _Button2.default,\n            { style: isActive(history, \"/users\") },\n            \"Users\"\n          )\n        ),\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { to: \"/signup\" },\n          _react2.default.createElement(\n            _Button2.default,\n            { style: isActive(history, \"/signup\") },\n            \"Sign up\"\n          )\n        ),\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { to: \"/signin\" },\n          _react2.default.createElement(\n            _Button2.default,\n            { style: isActive(history, \"/signin\") },\n            \"Sign In\"\n          )\n        )\n      ),\n      _authHelper2.default.isAuthenticated() && _react2.default.createElement(\n        \"span\",\n        null,\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { to: \"/user/\" + _authHelper2.default.isAuthenticated().user._id },\n          _react2.default.createElement(\n            _Button2.default,\n            {\n              style: isActive(history, \"/user/\" + _authHelper2.default.isAuthenticated().user._id)\n            },\n            \"My Profile\"\n          )\n        ),\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { to: \"/createmedia/\" + _authHelper2.default.isAuthenticated().user._id },\n          _react2.default.createElement(\n            _Button2.default,\n            {\n              style: isActive(history, \"/createmedia/\" + _authHelper2.default.isAuthenticated().user._id)\n            },\n            \"Upload\"\n          )\n        ),\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { to: \"/medialist/\" + _authHelper2.default.isAuthenticated().user._id },\n          _react2.default.createElement(\n            _Button2.default,\n            {\n              style: isActive(history, \"/medialist/\" + _authHelper2.default.isAuthenticated().user._id)\n            },\n            \"IMG\"\n          )\n        ),\n        _react2.default.createElement(\n          _reactRouterDom.Link,\n          { to: \"/gps/\" + _authHelper2.default.isAuthenticated().user._id },\n          _react2.default.createElement(\n            _Button2.default,\n            {\n              style: isActive(history, \"/gps/\" + _authHelper2.default.isAuthenticated().user._id)\n            },\n            \"GPS\"\n          )\n        ),\n        _react2.default.createElement(\n          _Button2.default,\n          {\n            color: \"inherit\",\n            onClick: function onClick() {\n              _authHelper2.default.signout(function () {\n                return history.push(\"/\");\n              });\n            }\n          },\n          \"Sign out\"\n        )\n      )\n    )\n  );\n});\n\nvar _default = Menu;\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(isActive, \"isActive\", \"/Users/xaviourha/summer_project/lifelog/client/core/Menu.js\");\n  reactHotLoader.register(Menu, \"Menu\", \"/Users/xaviourha/summer_project/lifelog/client/core/Menu.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/xaviourha/summer_project/lifelog/client/core/Menu.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/core/Menu.js?");

/***/ }),

/***/ "./client/footer/Mainfooter.js":
/*!*************************************!*\
  !*** ./client/footer/Mainfooter.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Typography = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _Https = __webpack_require__(/*! material-ui-icons/Https */ \"material-ui-icons/Https\");\n\nvar _Https2 = _interopRequireDefault(_Https);\n\nvar _colors = __webpack_require__(/*! material-ui/colors */ \"material-ui/colors\");\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = function styles(theme) {\n  return {\n    footer: {\n      backgroundColor: _colors.grey,\n      padding: theme.spacing.unit * 9\n    }\n  };\n};\n\nvar Mainfooter = function (_Component) {\n  _inherits(Mainfooter, _Component);\n\n  function Mainfooter() {\n    _classCallCheck(this, Mainfooter);\n\n    return _possibleConstructorReturn(this, (Mainfooter.__proto__ || Object.getPrototypeOf(Mainfooter)).apply(this, arguments));\n  }\n\n  _createClass(Mainfooter, [{\n    key: \"render\",\n    value: function render() {\n      var classes = this.props.classes;\n\n      return _react2.default.createElement(\n        \"footer\",\n        { className: classes.footer },\n        _react2.default.createElement(\"hr\", null),\n        _react2.default.createElement(\n          _Typography2.default,\n          { variant: \"title\", align: \"center\", gutterBottom: true },\n          \"2018\"\n        ),\n        _react2.default.createElement(\n          _Typography2.default,\n          {\n            variant: \"subheading\",\n            align: \"center\",\n            color: \"textSecondary\",\n            component: \"p\"\n          },\n          _react2.default.createElement(_Https2.default, null)\n        )\n      );\n    }\n  }, {\n    key: \"__reactstandin__regenerateByEval\",\n    value: function __reactstandin__regenerateByEval(key, code) {\n      this[key] = eval(code);\n    }\n  }]);\n\n  return Mainfooter;\n}(_react.Component);\n\nMainfooter.propTypes = {\n  classes: _propTypes2.default.object.isRequired\n};\n\nvar _default = (0, _styles.withStyles)(styles)(Mainfooter);\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(styles, \"styles\", \"/Users/xaviourha/summer_project/lifelog/client/footer/Mainfooter.js\");\n  reactHotLoader.register(Mainfooter, \"Mainfooter\", \"/Users/xaviourha/summer_project/lifelog/client/footer/Mainfooter.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/xaviourha/summer_project/lifelog/client/footer/Mainfooter.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/footer/Mainfooter.js?");

/***/ }),

/***/ "./client/gps/api-gps.js":
/*!*******************************!*\
  !*** ./client/gps/api-gps.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar create2 = function create2(params, credentials, file) {\n  return fetch(\"/api/gps/new/\" + params.userId, {\n    method: \"POST\",\n    headers: {\n      Accept: \"application/json\",\n      Authorization: \"Bearer \" + credentials.t\n    },\n    body: file\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    console.log(err);\n  });\n};\n\nvar listByUser2 = function listByUser2(params, credentials) {\n  return fetch(\"/api/gps/by/\" + params.userId, {\n    method: \"GET\",\n    headers: {\n      Accept: \"application/json\",\n      \"Content-Type\": \"application/json\",\n      Authorization: \"Bearer \" + credentials.t\n    }\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    return console.log(err);\n  });\n};\n\nexports.create2 = create2;\nexports.listByUser2 = listByUser2;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(create2, \"create2\", \"/Users/xaviourha/summer_project/lifelog/client/gps/api-gps.js\");\n  reactHotLoader.register(listByUser2, \"listByUser2\", \"/Users/xaviourha/summer_project/lifelog/client/gps/api-gps.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/gps/api-gps.js?");

/***/ }),

/***/ "./client/gps/gps.js":
/*!***************************!*\
  !*** ./client/gps/gps.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n\nvar _apiUser = __webpack_require__(/*! ./../user/api-user */ \"./client/user/api-user.js\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _authHelper = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nvar _Grid = __webpack_require__(/*! material-ui/Grid */ \"material-ui/Grid\");\n\nvar _Grid2 = _interopRequireDefault(_Grid);\n\nvar _Sidebar = __webpack_require__(/*! ./../media/Sidebar */ \"./client/media/Sidebar.js\");\n\nvar _Sidebar2 = _interopRequireDefault(_Sidebar);\n\nvar _Paper = __webpack_require__(/*! material-ui/Paper */ \"material-ui/Paper\");\n\nvar _Paper2 = _interopRequireDefault(_Paper);\n\nvar _apiGps = __webpack_require__(/*! ./api-gps */ \"./client/gps/api-gps.js\");\n\nvar _apiMedia = __webpack_require__(/*! ./../media/api-media */ \"./client/media/api-media.js\");\n\nvar _timg = __webpack_require__(/*! ./../assets/images/timg2.gif */ \"./client/assets/images/timg2.gif\");\n\nvar _timg2 = _interopRequireDefault(_timg);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = function styles(theme) {\n  return {\n    root: {\n      display: \"flex\",\n      flexWrap: \"wrap\",\n      justifyContent: \"space-around\",\n      overflow: \"hidden\",\n      backgroundColor: theme.palette.background.paper\n    },\n    gridList: {\n      width: 600\n    },\n    icon: {\n      color: \"rgba(255, 255, 255, 0.54)\"\n    },\n    Paper: _extends({}, theme.mixins.gutters(), {\n      paddingTop: theme.spacing.unit * 2,\n      paddingBottom: theme.spacing.unit * 2\n    }),\n    map: {\n      height: 500\n    }\n  };\n};\n\nvar Gps = function (_Component) {\n  _inherits(Gps, _Component);\n\n  function Gps(_ref) {\n    var match = _ref.match;\n\n    _classCallCheck(this, Gps);\n\n    var _this = _possibleConstructorReturn(this, (Gps.__proto__ || Object.getPrototypeOf(Gps)).call(this));\n\n    _this.init = function () {\n      var jwt = _authHelper2.default.isAuthenticated();\n      (0, _apiUser.read)({\n        userId: jwt.user._id\n      }, { t: jwt.token }).then(function (data) {\n        if (data.error) {\n          _this.setState({ redirectToSignin: true });\n        } else {\n          _this.setState({ user: data }, _this.loadGPS(data));\n        }\n      });\n    };\n\n    _this.loadMedias = function (user) {\n      var jwt = _authHelper2.default.isAuthenticated();\n      (0, _apiMedia.listByUser)({\n        userId: user._id\n      }, {\n        t: jwt.token\n      }).then(function (data) {\n        if (data.error) {\n          console.log(data.error);\n        } else {\n          _this.setState({ Media: data }, _this.Loadmap(data));\n        }\n      });\n    };\n\n    _this.loadGPS = function (user) {\n      var jwt = _authHelper2.default.isAuthenticated();\n      (0, _apiGps.listByUser2)({\n        userId: user._id\n      }, {\n        t: jwt.token\n      }).then(function (data) {\n        if (data.error) {\n          console.log(data.error);\n        } else {\n          _this.setState({ GPS: data }, _this.loadMedias(_this.state.user));\n          //this.Loadmap(data);\n        }\n      });\n    };\n\n    _this.Loadmap = function (ddd) {\n      var latitude = 55.706138;\n      var longitude = -3.913987;\n      var map = void 0;\n      var GPS = _this.state.GPS;\n      var media = ddd;\n      var countnum = 0;\n      var countnum2 = 0;\n      if (navigator.geolocation) {\n        navigator.geolocation.getCurrentPosition(getpostition, doesntwork);\n      }\n\n      function doesntwork() {\n        alert(\"Please give location permission and retart!\");\n        console.log(\"There is an error when try to get the location!\");\n      }\n\n      function getpostition(position) {\n        latitude = position.coords.latitude;\n        longitude = position.coords.longitude;\n        console.log();\n        console.log(\"your loacation:\" + \"latitude: \" + latitude + \"  longitude: \" + longitude);\n        initMap();\n      }\n\n      var infowindow = new google.maps.InfoWindow();\n      function initMap() {\n        map = new google.maps.Map(document.getElementById(\"map\"), {\n          center: { lat: latitude, lng: longitude },\n          zoom: 7\n        });\n        callback();\n        // var service = new google.maps.places.PlacesService(map);\n        // service.nearbySearch(\n        //   {\n        //     location: { lat: latitude, lng: longitude },\n        //     radius: 5000,\n        //     types: [\"movie_theater\"]\n        //   },\n        //   callback\n        // );\n      }\n\n      function callback() {\n        var marker2 = new google.maps.Marker({\n          position: { lat: latitude, lng: longitude },\n          animation: google.maps.Animation.DROP,\n          map: map,\n          title: \"Current location\"\n        });\n        google.maps.event.addListener(marker2, \"click\", function () {\n          infowindow.setContent(\"You are here\");\n          infowindow.open(map, this);\n        });\n\n        for (var i = 0; i < media.length; i++) {\n          createMarker2(media[i]);\n          countnum2++;\n        }\n        console.log(countnum2);\n\n        for (var a = 0; a < GPS.length; a++) {\n          createMarker(GPS[a]);\n          countnum++;\n        }\n        count();\n      }\n\n      var createMarker2 = function createMarker2(place) {\n        var po = { lat: place.latitude, lng: place.longitude };\n        var marker = new google.maps.Marker({\n          map: map,\n          position: po,\n          animation: google.maps.Animation.BOUNCE\n        });\n        var date = new Date(place.taken).toDateString();\n        var contentString = '<div id=\"content\" height=\"200px\" width=\"200px\">' + '<div\">' + '<img src=\"/api/medias/photo/' + place._id + '\"' + \" \" + 'height=\"80px\" width=\"80px\"' + \">\" + '<p><a href=\"/api/medias/photo/' + place._id + '\"' + \" \" + \"target='view_window'\" + \">\" + \"Click here to view the img</a> \" + \"</p>\" + \"<p>\" + place.text + \"</p>\" + \"<p>taken on\" + \" \" + date + \"</p>\" + \"</div>\" + \"</div>\";\n        google.maps.event.addListener(marker, \"click\", function () {\n          var infowindow2 = new google.maps.InfoWindow({\n            content: contentString\n          });\n          infowindow2.open(map, this);\n        });\n      };\n\n      var createMarker = function createMarker(place) {\n        if (place.NS === \"S\") {\n          place.LATITUDE = -place.LATITUDE;\n        }\n        if (place.EW === \"W\") {\n          place.LONGITUDE = -place.LONGITUDE;\n        }\n        var po = { lat: place.LATITUDE, lng: place.LONGITUDE };\n        var marker3 = new google.maps.Marker({\n          map: map,\n          position: po\n          //animation: google.maps.Animation.DROP\n        });\n        //console.log(\"okk\");\n        google.maps.event.addListener(marker3, \"click\", function () {\n          infowindow.setContent(place.UTC_DATE);\n          infowindow.open(map, this);\n        });\n      };\n      function count() {\n        console.log(\"There are \" + countnum + \"points are loaded\");\n      }\n    };\n\n    _this.componentWillReceiveProps = function (props) {\n      _this.init();\n\n      //this.init(props.match.params.userId);\n    };\n\n    _this.componentDidMount = function () {\n      // this.setState({ user: auth.isAuthenticated().user }, () => {\n      //   console.log(this.state.user);\n      //   this.init(this.state.user);\n      // });\n      _this.init();\n\n      //this.initMap();\n    };\n\n    _this.state = {\n      user: \"\",\n      redirectToSignin: false,\n      following: false,\n      GPS: [],\n      Media: []\n    };\n    _this.match = match;\n    return _this;\n  }\n\n  _createClass(Gps, [{\n    key: \"render\",\n    value: function render() {\n      var classes = this.props.classes;\n\n      var redirectToSignin = this.state.redirectToSignin;\n      if (redirectToSignin) {\n        return _react2.default.createElement(_reactRouterDom.Redirect, { to: \"/signin\" });\n      }\n\n      return _react2.default.createElement(\n        \"div\",\n        { className: classes.root, style: { height: \"auto\" } },\n        _react2.default.createElement(\n          _Grid2.default,\n          { container: true, spacing: 24 },\n          _react2.default.createElement(\n            _Grid2.default,\n            { item: true, xs: 3 },\n            _react2.default.createElement(_Sidebar2.default, null)\n          ),\n          _react2.default.createElement(\n            _Grid2.default,\n            { item: true, xs: 9 },\n            _react2.default.createElement(\n              _Paper2.default,\n              { className: classes.Paper, elevation: 1 },\n              _react2.default.createElement(\n                \"div\",\n                { id: \"map\", style: { width: \"600px\", height: \"600px\" } },\n                _react2.default.createElement(\"img\", {\n                  src: _timg2.default,\n                  style: { width: \"150px\", height: \"150px\", margin: \"220px\" }\n                })\n              )\n            )\n          )\n        )\n      )\n      //   <div style={{ marginTop: \"24px\" }}>\n      //     {this.state.medias.map((item, i) => {\n      //       return <Media media={item} key={i} onRemove={this.removeMedia} />;\n      //     })}\n      //   </div>\n      ;\n    }\n  }, {\n    key: \"__reactstandin__regenerateByEval\",\n    value: function __reactstandin__regenerateByEval(key, code) {\n      this[key] = eval(code);\n    }\n  }]);\n\n  return Gps;\n}(_react.Component);\n\nGps.propTypes = {\n  classes: _propTypes2.default.object.isRequired\n  //medias: PropTypes.array.isRequired,\n  //removeUpdate: PropTypes.func.isRequired\n};\n\nvar _default = (0, _styles.withStyles)(styles)(Gps);\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(styles, \"styles\", \"/Users/xaviourha/summer_project/lifelog/client/gps/gps.js\");\n  reactHotLoader.register(Gps, \"Gps\", \"/Users/xaviourha/summer_project/lifelog/client/gps/gps.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/xaviourha/summer_project/lifelog/client/gps/gps.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/gps/gps.js?");

/***/ }),

/***/ "./client/media/CreateMedia.js":
/*!*************************************!*\
  !*** ./client/media/CreateMedia.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Card = __webpack_require__(/*! material-ui/Card */ \"material-ui/Card\");\n\nvar _Card2 = _interopRequireDefault(_Card);\n\nvar _Button = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _TextField = __webpack_require__(/*! material-ui/TextField */ \"material-ui/TextField\");\n\nvar _TextField2 = _interopRequireDefault(_TextField);\n\nvar _Typography = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _Avatar = __webpack_require__(/*! material-ui/Avatar */ \"material-ui/Avatar\");\n\nvar _Avatar2 = _interopRequireDefault(_Avatar);\n\nvar _Icon = __webpack_require__(/*! material-ui/Icon */ \"material-ui/Icon\");\n\nvar _Icon2 = _interopRequireDefault(_Icon);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n\nvar _apiMedia = __webpack_require__(/*! ./api-media */ \"./client/media/api-media.js\");\n\nvar _apiGps = __webpack_require__(/*! ./../gps/api-gps */ \"./client/gps/api-gps.js\");\n\nvar _authHelper = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nvar _Grid = __webpack_require__(/*! material-ui/Grid */ \"material-ui/Grid\");\n\nvar _Grid2 = _interopRequireDefault(_Grid);\n\nvar _IconButton = __webpack_require__(/*! material-ui/IconButton */ \"material-ui/IconButton\");\n\nvar _IconButton2 = _interopRequireDefault(_IconButton);\n\nvar _PhotoCamera = __webpack_require__(/*! material-ui-icons/PhotoCamera */ \"material-ui-icons/PhotoCamera\");\n\nvar _PhotoCamera2 = _interopRequireDefault(_PhotoCamera);\n\nvar _LocationOn = __webpack_require__(/*! material-ui-icons/LocationOn */ \"material-ui-icons/LocationOn\");\n\nvar _LocationOn2 = _interopRequireDefault(_LocationOn);\n\nvar _exifJs = __webpack_require__(/*! exif-js */ \"exif-js\");\n\nvar _exifJs2 = _interopRequireDefault(_exifJs);\n\nvar _moment = __webpack_require__(/*! moment */ \"moment\");\n\nvar _moment2 = _interopRequireDefault(_moment);\n\nvar _Paper = __webpack_require__(/*! material-ui/Paper */ \"material-ui/Paper\");\n\nvar _Paper2 = _interopRequireDefault(_Paper);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = function styles(theme) {\n  return {\n    root: {\n      backgroundColor: \"#efefef\",\n      padding: theme.spacing.unit * 3 + \"px 0px 1px\"\n    },\n    card: {\n      maxWidth: 600,\n      margin: \"auto\",\n      marginBottom: theme.spacing.unit * 3,\n      backgroundColor: \"rgba(65, 150, 136, 0.09)\",\n      boxShadow: \"none\"\n    },\n    cardContent: {\n      backgroundColor: \"white\",\n      paddingTop: 0,\n      paddingBottom: 0\n    },\n    cardHeader: {\n      paddingTop: 8,\n      paddingBottom: 8\n    },\n    photoButton: {\n      height: 30,\n      marginBottom: 5\n    },\n    input: {\n      display: \"none\"\n    },\n    textField: {\n      marginLeft: theme.spacing.unit * 2,\n      marginRight: theme.spacing.unit * 2,\n      width: \"90%\"\n    },\n    submit: {\n      margin: theme.spacing.unit * 2\n    },\n    filename: {\n      verticalAlign: \"super\"\n    },\n    Paper: _extends({}, theme.mixins.gutters(), {\n      paddingTop: theme.spacing.unit * 2,\n      paddingBottom: theme.spacing.unit * 2\n    })\n  };\n};\n\nvar CreateMedia = function (_Component) {\n  _inherits(CreateMedia, _Component);\n\n  function CreateMedia() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, CreateMedia);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CreateMedia.__proto__ || Object.getPrototypeOf(CreateMedia)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      text: \"\",\n      photo: \"\",\n      file: \"\",\n      taken: \"\",\n      error: \"\",\n      user: {},\n      checkimg: \"\",\n      filecount: 0\n    }, _this.componentDidMount = function () {\n      _this.mediaData = new FormData();\n      _this.fileData = new FormData();\n      _this.setState({ user: _authHelper2.default.isAuthenticated().user });\n    }, _this.clickPost = function () {\n      var jwt = _authHelper2.default.isAuthenticated();\n      _this.mediaData.set(\"taken\", document.getElementById(\"taken\").value), _this.mediaData.set(\"latitude\", document.getElementById(\"lat\").value), _this.mediaData.set(\"longitude\", document.getElementById(\"lon\").value), _this.mediaData.set(\"text\", document.getElementById(\"takenplace\").value), (0, _apiMedia.create)({\n        userId: jwt.user._id\n      }, {\n        t: jwt.token\n      }, _this.mediaData).then(function (data) {\n        if (data.error) {\n          _this.setState({ error: data.error });\n        } else {\n          _this.setState({\n            text: \"\",\n            photo: \"\",\n            taken: \"\",\n            error: \"\",\n            file: \"\",\n            checkimg: \"\"\n          });\n          _this.Resetpage();\n          alert(\"success\");\n        }\n      });\n    }, _this.UploadFile = function () {\n      var jwt = _authHelper2.default.isAuthenticated();\n      (0, _apiGps.create2)({\n        userId: jwt.user._id\n      }, {\n        t: jwt.token\n      }, _this.fileData).then(function (data) {\n        if (data.error) {\n          _this.setState({ error: data.error });\n          _this.setState({ file: \"\" });\n        } else {\n          _this.setState({\n            text: \"\",\n            photo: \"\",\n            taken: \"\",\n            file: \"\",\n            error: \"\",\n            checkimg: \"\"\n          });\n          _this.Resetpage();\n          alert(data);\n        }\n      });\n    }, _this.Resetpage = function () {\n      document.getElementById(\"taken\").value = \"\";\n      document.getElementById(\"lat\").value = \"\";\n      document.getElementById(\"lon\").value = \"\";\n      document.getElementById(\"takenplace\").value = \"\";\n      _this.mediaData.set(\"lon\", \"\");\n      _this.mediaData.set(\"lat\", \"\");\n      _this.mediaData.set(\"text\", \"\");\n      _this.mediaData.set(\"takenplace\", \"\");\n      _this.mediaData.set(\"takenplace\", \"\");\n      _this.fileData.set(\"file\", \"\");\n    }, _this.handleChangeforimg = function (name) {\n      return function (event) {\n        var value = event.target.files[0];\n        // let length = event.target.files.length;\n        // this.setState({ filecount: length }, console.log(this.state.filecount));\n        _this.setState(_defineProperty({}, name, value));\n        _this.setState({ checkimg: \"1\" });\n        _this.mediaData.set(name, value);\n        _this.upExif(event);\n      };\n    }, _this.handleChangeforfile = function (name) {\n      return function (event) {\n        var value = event.target.files[0];\n        _this.fileData.set(name, value);\n        _this.setState(_defineProperty({}, name, value));\n        //console.log(this.fileData);\n      };\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(CreateMedia, [{\n    key: \"upExif\",\n    value: function upExif(e) {\n      var test = void 0;\n\n      _exifJs2.default.getData(e.target.files[0], function () {\n        var datetime = _exifJs2.default.getTag(this, \"DateTimeDigitized\");\n        var latitude = 0;\n        var longitude = 0;\n        var date = datecovert(datetime);\n        document.getElementById(\"taken\").value = date;\n        test = date;\n        latitude = _exifJs2.default.getTag(this, \"GPSLatitude\");\n        if (latitude !== 0) {\n          latitude = latitude.toString();\n          longitude = _exifJs2.default.getTag(this, \"GPSLongitude\").toString();\n          var longittuderef = _exifJs2.default.getTag(this, \"GPSLongitudeRef\");\n          var latituderef = _exifJs2.default.getTag(this, \"GPSLatitudeRef\");\n          longitude = longcovert(longitude);\n          latitude = latcovert(latitude);\n          (0, _apiMedia.getlocation)(latitude, longitude);\n\n          console.log(\" \" + longitude + \"+\" + latitude);\n          document.getElementById(\"lat\").value = latitude;\n          document.getElementById(\"lon\").value = longitude;\n        } else {\n          document.getElementById(\"lat\").value = \"null\";\n          document.getElementById(\"lon\").value = \"null\";\n        }\n\n        function longcovert(long) {\n          long = long.replace(/,/, \".\");\n          long = long.replace(/,/, \"\");\n          if (longittuderef === \"W\") {\n            long = \"-\" + long;\n          }\n          long = parseFloat(long);\n          return long;\n        }\n\n        function latcovert(lat) {\n          lat = lat.replace(/,/, \".\");\n          lat = lat.replace(/,/, \"\");\n          if (latituderef === \"S\") {\n            lat = \"-\" + lat;\n          }\n          lat = parseFloat(lat);\n          return lat;\n        }\n\n        // function geolist(lat, lon) {\n        //   geo(lat, lon).then(data => {\n        //     if (data.error) {\n        //       console.log(data.error);\n        //     } else {\n        //       console.log(data.formatted_address);\n        //     }\n        //   });\n        // }\n\n        //console.log(latitude);\n\n        function datecovert(input) {\n          for (var i = 0; i < 2; i++) {\n            input = input.replace(/:/, \"/\");\n          }\n          input = new Date(input);\n          input = input.toISOString();\n          return input;\n        }\n\n        //geolist(latitude, longitude);\n      });\n\n      //this.setState({ taken: document.getElementById(\"taken\").value });\n      //this.mediaData.set(\"latitude\", document.getElementById(\"taken\").value);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var classes = this.props.classes;\n\n      return _react2.default.createElement(\n        \"div\",\n        { className: classes.root },\n        _react2.default.createElement(\n          _Card2.default,\n          { className: classes.card },\n          _react2.default.createElement(\n            _Paper2.default,\n            { className: classes.Paper, elevation: 1 },\n            _react2.default.createElement(_Card.CardHeader, {\n              avatar: _react2.default.createElement(_Avatar2.default, { src: \"/api/users/defaultphoto\" }),\n              title: this.state.user.name + \" ready to upload Pic\",\n              className: classes.cardHeader\n            }),\n            _react2.default.createElement(\n              _Card.CardContent,\n              { className: classes.cardContent },\n              _react2.default.createElement(_TextField2.default, {\n                placeholder: \"img taken place\",\n                multiline: true,\n                rows: \"2\",\n                id: \"takenplace\"\n                //value={this.state.text}\n                //onChange={this.handleChangefortext(\"text\")}\n                , className: classes.textField,\n                margin: \"normal\"\n              }),\n              _react2.default.createElement(\"br\", null),\n              _react2.default.createElement(_TextField2.default, {\n                placeholder: \"Photo taken date\",\n                multiline: true,\n                id: \"taken\",\n                rows: \"1\"\n                //value={this.state.taken}\n                //onChange={this.handleChangefortext2(\"taken\")}\n                , className: classes.textField,\n                margin: \"normal\"\n              }),\n              _react2.default.createElement(\n                _Grid2.default,\n                { container: true, spacing: 8 },\n                _react2.default.createElement(\n                  _Grid2.default,\n                  { item: true, xs: 4 },\n                  _react2.default.createElement(_TextField2.default, {\n                    placeholder: \"latitude\",\n                    multiline: true,\n                    id: \"lat\",\n                    rows: \"1\"\n                    //value={this.state.taken}\n                    //onChange={this.handleChangefortext2(\"taken\")}\n                    , className: classes.textField,\n                    margin: \"normal\"\n                  })\n                ),\n                _react2.default.createElement(\n                  _Grid2.default,\n                  { item: true, xs: 4 },\n                  _react2.default.createElement(_TextField2.default, {\n                    placeholder: \"longitude\",\n                    multiline: true,\n                    id: \"lon\",\n                    rows: \"1\"\n                    //value={this.state.taken}\n                    //onChange={this.handleChangefortext2(\"taken\")}\n                    , className: classes.textField,\n                    margin: \"normal\"\n                  })\n                )\n              ),\n              _react2.default.createElement(\"input\", {\n                accept: \"image/*\",\n                onChange: this.handleChangeforimg(\"photo\"),\n                className: classes.input,\n                multiple: \"multiple\",\n                id: \"icon-button-file\",\n                type: \"file\"\n              }),\n              _react2.default.createElement(\n                \"label\",\n                { htmlFor: \"icon-button-file\" },\n                _react2.default.createElement(\n                  _IconButton2.default,\n                  {\n                    color: \"secondary\",\n                    className: classes.photoButton,\n                    component: \"span\"\n                  },\n                  _react2.default.createElement(_PhotoCamera2.default, null)\n                )\n              ),\n              \" \",\n              _react2.default.createElement(\n                \"span\",\n                { className: classes.filename },\n                this.state.photo ? this.state.photo.name : \"click the icon to selet\"\n              ),\n              this.state.error && _react2.default.createElement(\n                _Typography2.default,\n                { component: \"p\", color: \"error\" },\n                _react2.default.createElement(\n                  _Icon2.default,\n                  { color: \"error\", className: classes.error },\n                  \"error\"\n                ),\n                this.state.error\n              )\n            ),\n            _react2.default.createElement(\n              _Card.CardActions,\n              null,\n              _react2.default.createElement(\n                _Button2.default,\n                {\n                  color: \"primary\",\n                  variant: \"raised\",\n                  id: \"postbtn\",\n                  onClick: this.clickPost,\n                  className: classes.submit,\n                  disabled: this.state.checkimg === \"\"\n                },\n                \"Upload\"\n              )\n            )\n          )\n        ),\n        _react2.default.createElement(\n          _Card2.default,\n          { className: classes.card },\n          _react2.default.createElement(\n            _Paper2.default,\n            { className: classes.Paper, elevation: 1 },\n            _react2.default.createElement(_Card.CardHeader, {\n              avatar: _react2.default.createElement(_Avatar2.default, { src: \"/api/users/defaultphoto\" }),\n              title: this.state.user.name + \" ready to upload GPS info\",\n              className: classes.cardHeader\n            }),\n            _react2.default.createElement(\n              _Card.CardContent,\n              { className: classes.cardContent },\n              _react2.default.createElement(\"input\", {\n                accept: \"text/csv\",\n                onChange: this.handleChangeforfile(\"file\"),\n                className: classes.input,\n                id: \"icon-button-file2\",\n                type: \"file\"\n              }),\n              _react2.default.createElement(\n                \"label\",\n                { htmlFor: \"icon-button-file2\" },\n                _react2.default.createElement(\n                  _IconButton2.default,\n                  {\n                    color: \"secondary\",\n                    className: classes.photoButton,\n                    component: \"span\"\n                  },\n                  _react2.default.createElement(_LocationOn2.default, null)\n                )\n              ),\n              \" \",\n              _react2.default.createElement(\n                \"span\",\n                { className: classes.filename },\n                this.state.file ? this.state.file.name : \"click the icon to selet\"\n              ),\n              this.state.error && _react2.default.createElement(\n                _Typography2.default,\n                { component: \"p\", color: \"error\" },\n                _react2.default.createElement(\n                  _Icon2.default,\n                  { color: \"error\", className: classes.error },\n                  \"error\"\n                ),\n                this.state.error\n              )\n            ),\n            _react2.default.createElement(\n              _Card.CardActions,\n              null,\n              _react2.default.createElement(\n                _Button2.default,\n                {\n                  color: \"primary\",\n                  variant: \"raised\",\n                  id: \"postbtn\",\n                  onClick: this.UploadFile,\n                  className: classes.submit,\n                  disabled: this.state.file === \"\"\n                },\n                \"Upload\"\n              )\n            )\n          )\n        )\n      );\n    }\n  }, {\n    key: \"__reactstandin__regenerateByEval\",\n    value: function __reactstandin__regenerateByEval(key, code) {\n      this[key] = eval(code);\n    }\n  }]);\n\n  return CreateMedia;\n}(_react.Component);\n\nCreateMedia.propTypes = {\n  classes: _propTypes2.default.object.isRequired\n};\n\nvar _default = (0, _styles.withStyles)(styles)(CreateMedia);\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(styles, \"styles\", \"/Users/xaviourha/summer_project/lifelog/client/media/CreateMedia.js\");\n  reactHotLoader.register(CreateMedia, \"CreateMedia\", \"/Users/xaviourha/summer_project/lifelog/client/media/CreateMedia.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/xaviourha/summer_project/lifelog/client/media/CreateMedia.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/media/CreateMedia.js?");

/***/ }),

/***/ "./client/media/Medialist.js":
/*!***********************************!*\
  !*** ./client/media/Medialist.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n\nvar _apiUser = __webpack_require__(/*! ./../user/api-user */ \"./client/user/api-user.js\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _authHelper = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nvar _apiMedia = __webpack_require__(/*! ./api-media */ \"./client/media/api-media.js\");\n\nvar _GridList = __webpack_require__(/*! material-ui/GridList */ \"material-ui/GridList\");\n\nvar _GridList2 = _interopRequireDefault(_GridList);\n\nvar _Grid = __webpack_require__(/*! material-ui/Grid */ \"material-ui/Grid\");\n\nvar _Grid2 = _interopRequireDefault(_Grid);\n\nvar _GridListTile = __webpack_require__(/*! material-ui/GridList/GridListTile */ \"material-ui/GridList/GridListTile\");\n\nvar _GridListTile2 = _interopRequireDefault(_GridListTile);\n\nvar _GridListTileBar = __webpack_require__(/*! material-ui/GridList/GridListTileBar */ \"material-ui/GridList/GridListTileBar\");\n\nvar _GridListTileBar2 = _interopRequireDefault(_GridListTileBar);\n\nvar _ListSubheader = __webpack_require__(/*! material-ui/List/ListSubheader */ \"material-ui/List/ListSubheader\");\n\nvar _ListSubheader2 = _interopRequireDefault(_ListSubheader);\n\nvar _IconButton = __webpack_require__(/*! material-ui/IconButton */ \"material-ui/IconButton\");\n\nvar _IconButton2 = _interopRequireDefault(_IconButton);\n\nvar _DeleteForever = __webpack_require__(/*! material-ui-icons/DeleteForever */ \"material-ui-icons/DeleteForever\");\n\nvar _DeleteForever2 = _interopRequireDefault(_DeleteForever);\n\nvar _Star = __webpack_require__(/*! material-ui-icons/Star */ \"material-ui-icons/Star\");\n\nvar _Star2 = _interopRequireDefault(_Star);\n\nvar _Sidebar = __webpack_require__(/*! ./Sidebar */ \"./client/media/Sidebar.js\");\n\nvar _Sidebar2 = _interopRequireDefault(_Sidebar);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = function styles(theme) {\n  return {\n    root: {\n      display: \"flex\",\n      flexWrap: \"wrap\",\n      justifyContent: \"space-around\",\n      overflow: \"hidden\",\n      backgroundColor: theme.palette.background.paper\n    },\n    gridList: {\n      width: 600\n    },\n    icon: {\n      color: \"rgba(255, 255, 255, 0.54)\"\n    }\n  };\n};\n\nvar Medialist = function (_Component) {\n  _inherits(Medialist, _Component);\n\n  function Medialist(_ref) {\n    var match = _ref.match;\n\n    _classCallCheck(this, Medialist);\n\n    var _this = _possibleConstructorReturn(this, (Medialist.__proto__ || Object.getPrototypeOf(Medialist)).call(this));\n\n    _this.init = function () {\n      var jwt = _authHelper2.default.isAuthenticated();\n      (0, _apiUser.read)({\n        userId: jwt.user._id\n      }, { t: jwt.token }).then(function (data) {\n        if (data.error) {\n          _this.setState({ redirectToSignin: true });\n        } else {\n          _this.setState({ user: data });\n          _this.loadMedias(data);\n        }\n      });\n    };\n\n    _this.loadMedias = function (user) {\n      var jwt = _authHelper2.default.isAuthenticated();\n      (0, _apiMedia.listByUser)({\n        userId: user._id\n      }, {\n        t: jwt.token\n      }).then(function (data) {\n        if (data.error) {\n          console.log(data.error);\n        } else {\n          _this.setState({ medias: data });\n        }\n      });\n    };\n\n    _this.deleteMedia = function (media) {\n      var jwt = _authHelper2.default.isAuthenticated();\n      (0, _apiMedia.remove)({\n        mediaId: media._id\n      }, {\n        t: jwt.token\n      }).then(function (data) {\n        if (data.error) {\n          console.log(data.error);\n        } else {\n          _this.removeMedia(media);\n        }\n      });\n    };\n\n    _this.setCol = function (num, height) {\n      _this.setState({ col: num });\n      _this.setState({ colheight: height });\n    };\n\n    _this.removeMedia = function (media) {\n      var updatedMedias = _this.state.medias;\n      var index = updatedMedias.indexOf(media);\n      updatedMedias.splice(index, 1);\n      _this.setState({ medias: updatedMedias });\n    };\n\n    _this.componentWillReceiveProps = function (props) {\n      _this.init();\n      //this.init(props.match.params.userId);\n    };\n\n    _this.componentDidMount = function () {\n      // this.setState({ user: auth.isAuthenticated().user }, () => {\n      //   console.log(this.state.user);\n      //   this.init(this.state.user);\n      // });\n      _this.init();\n    };\n\n    _this.state = {\n      user: \"\",\n      redirectToSignin: false,\n      following: false,\n      medias: [],\n      col: 2,\n      colheight: 180\n    };\n    _this.match = match;\n    return _this;\n  }\n\n  _createClass(Medialist, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var classes = this.props.classes;\n\n      var redirectToSignin = this.state.redirectToSignin;\n      if (redirectToSignin) {\n        return _react2.default.createElement(_reactRouterDom.Redirect, { to: \"/signin\" });\n      }\n      return _react2.default.createElement(\n        \"div\",\n        { className: classes.root, style: { height: \"auto\" } },\n        _react2.default.createElement(\n          _Grid2.default,\n          { container: true, spacing: 24 },\n          _react2.default.createElement(\n            _Grid2.default,\n            { item: true, xs: 3 },\n            _react2.default.createElement(_Sidebar2.default, { setcol: this.setCol })\n          ),\n          _react2.default.createElement(\n            _Grid2.default,\n            { item: true, xs: 9 },\n            _react2.default.createElement(\n              _GridList2.default,\n              {\n                cellHeight: this.state.colheight,\n                className: classes.gridList,\n                cols: this.state.col\n              },\n              _react2.default.createElement(\n                _GridListTile2.default,\n                {\n                  key: \"Subheader\",\n                  cols: this.state.col,\n                  style: { height: \"auto\" }\n                },\n                _react2.default.createElement(\n                  _ListSubheader2.default,\n                  { component: \"div\" },\n                  \"Aug\"\n                )\n              ),\n              this.state.medias.map(function (tile) {\n                return _react2.default.createElement(\n                  _GridListTile2.default,\n                  { key: \"/api/medias/photo/\" + tile._id },\n                  _react2.default.createElement(\"img\", { src: \"/api/medias/photo/\" + tile._id, alt: tile.text }),\n                  \"actionIcon=\",\n                  _react2.default.createElement(\n                    _IconButton2.default,\n                    {\n                      className: classes.icon,\n                      onClick: function onClick() {\n                        return _this2.deleteMedia(tile);\n                      }\n                    },\n                    _react2.default.createElement(_Star2.default, null)\n                  ),\n                  _react2.default.createElement(_GridListTileBar2.default, {\n                    title: tile.text,\n                    subtitle: _react2.default.createElement(\n                      \"span\",\n                      null,\n                      new Date(tile.taken).toDateString()\n                    ),\n                    actionIcon: _react2.default.createElement(\n                      _IconButton2.default,\n                      {\n                        className: classes.icon,\n                        onClick: function onClick() {\n                          return _this2.deleteMedia(tile);\n                        }\n                      },\n                      _react2.default.createElement(_DeleteForever2.default, null)\n                    )\n                  })\n                );\n              })\n            )\n          )\n        )\n      )\n      //   <div style={{ marginTop: \"24px\" }}>\n      //     {this.state.medias.map((item, i) => {\n      //       return <Media media={item} key={i} onRemove={this.removeMedia} />;\n      //     })}\n      //   </div>\n      ;\n    }\n  }, {\n    key: \"__reactstandin__regenerateByEval\",\n    value: function __reactstandin__regenerateByEval(key, code) {\n      this[key] = eval(code);\n    }\n  }]);\n\n  return Medialist;\n}(_react.Component);\n\nMedialist.propTypes = {\n  classes: _propTypes2.default.object.isRequired\n  //medias: PropTypes.array.isRequired,\n  //removeUpdate: PropTypes.func.isRequired\n};\n\nvar _default = (0, _styles.withStyles)(styles)(Medialist);\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(styles, \"styles\", \"/Users/xaviourha/summer_project/lifelog/client/media/Medialist.js\");\n  reactHotLoader.register(Medialist, \"Medialist\", \"/Users/xaviourha/summer_project/lifelog/client/media/Medialist.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/xaviourha/summer_project/lifelog/client/media/Medialist.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/media/Medialist.js?");

/***/ }),

/***/ "./client/media/Sidebar.js":
/*!*********************************!*\
  !*** ./client/media/Sidebar.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n\nvar _List = __webpack_require__(/*! material-ui/List */ \"material-ui/List\");\n\nvar _List2 = _interopRequireDefault(_List);\n\nvar _ListItem = __webpack_require__(/*! material-ui/List/ListItem */ \"material-ui/List/ListItem\");\n\nvar _ListItem2 = _interopRequireDefault(_ListItem);\n\nvar _ListItemIcon = __webpack_require__(/*! material-ui/List/ListItemIcon */ \"material-ui/List/ListItemIcon\");\n\nvar _ListItemIcon2 = _interopRequireDefault(_ListItemIcon);\n\nvar _ListItemText = __webpack_require__(/*! material-ui/List/ListItemText */ \"material-ui/List/ListItemText\");\n\nvar _ListItemText2 = _interopRequireDefault(_ListItemText);\n\nvar _Divider = __webpack_require__(/*! material-ui/Divider */ \"material-ui/Divider\");\n\nvar _Divider2 = _interopRequireDefault(_Divider);\n\nvar _FindInPage = __webpack_require__(/*! material-ui-icons/FindInPage */ \"material-ui-icons/FindInPage\");\n\nvar _FindInPage2 = _interopRequireDefault(_FindInPage);\n\nvar _Drafts = __webpack_require__(/*! material-ui-icons/Drafts */ \"material-ui-icons/Drafts\");\n\nvar _Drafts2 = _interopRequireDefault(_Drafts);\n\nvar _TextField = __webpack_require__(/*! material-ui/TextField */ \"material-ui/TextField\");\n\nvar _TextField2 = _interopRequireDefault(_TextField);\n\nvar _Button = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar styles = function styles(theme) {\n  return {\n    root: {\n      width: \"100%\",\n      maxWidth: 360,\n      backgroundColor: theme.palette.background.paper\n    },\n    container: {\n      display: \"flex\",\n      flexWrap: \"wrap\"\n    },\n    textField: {\n      marginLeft: theme.spacing.unit,\n      marginRight: theme.spacing.unit,\n      width: 150\n    }\n  };\n};\n\nfunction getNowFormatDate() {\n  var date = new Date();\n  var seperator1 = \"-\";\n  var year = date.getFullYear();\n  var month = date.getMonth() + 1;\n  var strDate = date.getDate();\n  if (month >= 1 && month <= 9) {\n    month = \"0\" + month;\n  }\n  if (strDate >= 0 && strDate <= 9) {\n    strDate = \"0\" + strDate;\n  }\n  var currentdate = year + seperator1 + month + seperator1 + strDate;\n  return currentdate;\n}\n\nfunction Sidebar(props) {\n  var classes = props.classes;\n\n\n  return _react2.default.createElement(\n    \"div\",\n    { className: classes.root },\n    _react2.default.createElement(\n      _List2.default,\n      { component: \"nav\" },\n      _react2.default.createElement(\n        _ListItem2.default,\n        null,\n        _react2.default.createElement(\n          _ListItemIcon2.default,\n          null,\n          _react2.default.createElement(_FindInPage2.default, null)\n        ),\n        _react2.default.createElement(_ListItemText2.default, { primary: \"Find\" })\n      ),\n      _react2.default.createElement(\n        _ListItem2.default,\n        null,\n        _react2.default.createElement(\n          \"form\",\n          { className: classes.container, noValidate: true },\n          _react2.default.createElement(_TextField2.default, {\n            id: \"date\",\n            label: \"From\",\n            type: \"date\",\n            defaultValue: getNowFormatDate(),\n            className: classes.textField\n            //   InputLabelProps={{\n            //     shrink: true\n            //   }}\n          })\n        )\n      ),\n      _react2.default.createElement(\n        _ListItem2.default,\n        null,\n        _react2.default.createElement(\n          \"form\",\n          { className: classes.container, noValidate: true },\n          _react2.default.createElement(_TextField2.default, {\n            id: \"date\",\n            label: \"to\",\n            type: \"date\",\n            defaultValue: getNowFormatDate(),\n            className: classes.textField\n            //   InputLabelProps={{\n            //     shrink: true\n            //   }}\n          })\n        )\n      ),\n      _react2.default.createElement(\n        _ListItem2.default,\n        null,\n        _react2.default.createElement(\n          _Button2.default,\n          { color: \"primary\", variant: \"raised\" },\n          \"Submit\"\n        )\n      )\n    ),\n    _react2.default.createElement(_Divider2.default, null),\n    _react2.default.createElement(\n      _List2.default,\n      { component: \"nav\" },\n      _react2.default.createElement(\n        _ListItem2.default,\n        { button: true, onClick: function onClick() {\n            return props.setcol(1, 400);\n          } },\n        _react2.default.createElement(_ListItemText2.default, { primary: \"Days\" })\n      ),\n      _react2.default.createElement(\n        _ListItem2.default,\n        { button: true, onClick: function onClick() {\n            return props.setcol(2, 180);\n          } },\n        _react2.default.createElement(_ListItemText2.default, { primary: \"Weeks\" })\n      ),\n      _react2.default.createElement(\n        _ListItem2.default,\n        { button: true, onClick: function onClick() {\n            return props.setcol(3, 150);\n          } },\n        _react2.default.createElement(_ListItemText2.default, { primary: \"Months\" })\n      ),\n      _react2.default.createElement(\n        _ListItem2.default,\n        { button: true, onClick: function onClick() {\n            return props.setcol(4, 120);\n          } },\n        _react2.default.createElement(_ListItemText2.default, { primary: \"Years\" })\n      )\n    )\n  );\n}\n\nSidebar.propTypes = {\n  classes: _propTypes2.default.object.isRequired,\n  setcol: _propTypes2.default.func.isRequired\n};\n\nvar _default = (0, _styles.withStyles)(styles)(Sidebar);\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(styles, \"styles\", \"/Users/xaviourha/summer_project/lifelog/client/media/Sidebar.js\");\n  reactHotLoader.register(getNowFormatDate, \"getNowFormatDate\", \"/Users/xaviourha/summer_project/lifelog/client/media/Sidebar.js\");\n  reactHotLoader.register(Sidebar, \"Sidebar\", \"/Users/xaviourha/summer_project/lifelog/client/media/Sidebar.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/xaviourha/summer_project/lifelog/client/media/Sidebar.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/media/Sidebar.js?");

/***/ }),

/***/ "./client/media/api-media.js":
/*!***********************************!*\
  !*** ./client/media/api-media.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar create = function create(params, credentials, media) {\n  return fetch(\"/api/medias/new/\" + params.userId, {\n    method: \"POST\",\n    headers: {\n      Accept: \"application/json\",\n      Authorization: \"Bearer \" + credentials.t\n    },\n    body: media\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    console.log(err);\n  });\n};\n\nvar googleMapsClient = __webpack_require__(/*! @google/maps/lib/index */ \"@google/maps/lib/index\").createClient({\n  key: \"AIzaSyCzQNpK8OSEwzED8BFCUenPoMRdfBOKtHY\"\n});\n\nvar getlocation = function getlocation(lat, lon) {\n  var places;\n  googleMapsClient.reverseGeocode({\n    latlng: [lat, lon]\n  }, function (err, response) {\n    if (!err) {\n      //console.log(response.json.results[0]);\n      //alert(response.json.results[0].formatted_address);\n      places = response.json.results[0].formatted_address;\n      //console.log(places);\n      document.getElementById(\"takenplace\").value = places;\n    }\n  });\n  return places;\n};\n\nvar geo = function geo(lat, lon) {\n  return fetch(\"https://maps.googleapis.com/maps/api/geocode/json?latlng=\" + lat + \",\" + lon + \"&key=AIzaSyCzQNpK8OSEwzED8BFCUenPoMRdfBOKtHY\", {\n    method: \"GET\"\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    console.log(err);\n  });\n};\n\nvar listByUser = function listByUser(params, credentials) {\n  return fetch(\"/api/medias/by/\" + params.userId, {\n    method: \"GET\",\n    headers: {\n      Accept: \"application/json\",\n      \"Content-Type\": \"application/json\",\n      Authorization: \"Bearer \" + credentials.t\n    }\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    return console.log(err);\n  });\n};\n\nvar remove = function remove(params, credentials) {\n  return fetch(\"/api/medias/\" + params.mediaId, {\n    method: \"DELETE\",\n    headers: {\n      Accept: \"application/json\",\n      \"Content-Type\": \"application/json\",\n      Authorization: \"Bearer \" + credentials.t\n    }\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    console.log(err);\n  });\n};\n\nvar like = function like(params, credentials, postId) {\n  return fetch(\"/api/posts/like/\", {\n    method: \"PUT\",\n    headers: {\n      Accept: \"application/json\",\n      \"Content-Type\": \"application/json\",\n      Authorization: \"Bearer \" + credentials.t\n    },\n    body: JSON.stringify({ userId: params.userId, postId: postId })\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    console.log(err);\n  });\n};\n\nvar unlike = function unlike(params, credentials, postId) {\n  return fetch(\"/api/posts/unlike/\", {\n    method: \"PUT\",\n    headers: {\n      Accept: \"application/json\",\n      \"Content-Type\": \"application/json\",\n      Authorization: \"Bearer \" + credentials.t\n    },\n    body: JSON.stringify({ userId: params.userId, postId: postId })\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    console.log(err);\n  });\n};\n\nexports.create = create;\nexports.listByUser = listByUser;\nexports.remove = remove;\nexports.like = like;\nexports.unlike = unlike;\nexports.geo = geo;\nexports.getlocation = getlocation;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(create, \"create\", \"/Users/xaviourha/summer_project/lifelog/client/media/api-media.js\");\n  reactHotLoader.register(googleMapsClient, \"googleMapsClient\", \"/Users/xaviourha/summer_project/lifelog/client/media/api-media.js\");\n  reactHotLoader.register(getlocation, \"getlocation\", \"/Users/xaviourha/summer_project/lifelog/client/media/api-media.js\");\n  reactHotLoader.register(geo, \"geo\", \"/Users/xaviourha/summer_project/lifelog/client/media/api-media.js\");\n  reactHotLoader.register(listByUser, \"listByUser\", \"/Users/xaviourha/summer_project/lifelog/client/media/api-media.js\");\n  reactHotLoader.register(remove, \"remove\", \"/Users/xaviourha/summer_project/lifelog/client/media/api-media.js\");\n  reactHotLoader.register(like, \"like\", \"/Users/xaviourha/summer_project/lifelog/client/media/api-media.js\");\n  reactHotLoader.register(unlike, \"unlike\", \"/Users/xaviourha/summer_project/lifelog/client/media/api-media.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/media/api-media.js?");

/***/ }),

/***/ "./client/user/DeleteUser.js":
/*!***********************************!*\
  !*** ./client/user/DeleteUser.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _IconButton = __webpack_require__(/*! material-ui/IconButton */ \"material-ui/IconButton\");\n\nvar _IconButton2 = _interopRequireDefault(_IconButton);\n\nvar _Button = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _Delete = __webpack_require__(/*! material-ui-icons/Delete */ \"material-ui-icons/Delete\");\n\nvar _Delete2 = _interopRequireDefault(_Delete);\n\nvar _Dialog = __webpack_require__(/*! material-ui/Dialog */ \"material-ui/Dialog\");\n\nvar _Dialog2 = _interopRequireDefault(_Dialog);\n\nvar _authHelper = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nvar _apiUser = __webpack_require__(/*! ./api-user.js */ \"./client/user/api-user.js\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar DeleteUser = function (_Component) {\n  _inherits(DeleteUser, _Component);\n\n  function DeleteUser() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, DeleteUser);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DeleteUser.__proto__ || Object.getPrototypeOf(DeleteUser)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      redirect: false,\n      open: false\n    }, _this.clickButton = function () {\n      _this.setState({ open: true });\n    }, _this.deleteAccount = function () {\n      var jwt = _authHelper2.default.isAuthenticated();\n      (0, _apiUser.remove)({\n        userId: _this.props.userId\n      }, { t: jwt.token }).then(function (data) {\n        if (data.error) {\n          console.log(data.error);\n        } else {\n          _authHelper2.default.signout(function () {\n            return console.log('deleted');\n          });\n          _this.setState({ redirect: true });\n        }\n      });\n    }, _this.handleRequestClose = function () {\n      _this.setState({ open: false });\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(DeleteUser, [{\n    key: 'render',\n    value: function render() {\n      var redirect = this.state.redirect;\n      if (redirect) {\n        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });\n      }\n      return _react2.default.createElement(\n        'span',\n        null,\n        _react2.default.createElement(\n          _IconButton2.default,\n          { 'aria-label': 'Delete', onClick: this.clickButton, color: 'secondary' },\n          _react2.default.createElement(_Delete2.default, null)\n        ),\n        _react2.default.createElement(\n          _Dialog2.default,\n          { open: this.state.open, onClose: this.handleRequestClose },\n          _react2.default.createElement(\n            _Dialog.DialogTitle,\n            null,\n            \"Delete Account\"\n          ),\n          _react2.default.createElement(\n            _Dialog.DialogContent,\n            null,\n            _react2.default.createElement(\n              _Dialog.DialogContentText,\n              null,\n              'Confirm to delete your account.'\n            )\n          ),\n          _react2.default.createElement(\n            _Dialog.DialogActions,\n            null,\n            _react2.default.createElement(\n              _Button2.default,\n              { onClick: this.handleRequestClose, color: 'primary' },\n              'Cancel'\n            ),\n            _react2.default.createElement(\n              _Button2.default,\n              { onClick: this.deleteAccount, color: 'secondary', autoFocus: 'autoFocus' },\n              'Confirm'\n            )\n          )\n        )\n      );\n    }\n  }, {\n    key: '__reactstandin__regenerateByEval',\n    value: function __reactstandin__regenerateByEval(key, code) {\n      this[key] = eval(code);\n    }\n  }]);\n\n  return DeleteUser;\n}(_react.Component);\n\nDeleteUser.propTypes = {\n  userId: _propTypes2.default.string.isRequired\n};\nvar _default = DeleteUser;\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(DeleteUser, 'DeleteUser', '/Users/xaviourha/summer_project/lifelog/client/user/DeleteUser.js');\n  reactHotLoader.register(_default, 'default', '/Users/xaviourha/summer_project/lifelog/client/user/DeleteUser.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/user/DeleteUser.js?");

/***/ }),

/***/ "./client/user/EditProfile.js":
/*!************************************!*\
  !*** ./client/user/EditProfile.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Card = __webpack_require__(/*! material-ui/Card */ \"material-ui/Card\");\n\nvar _Card2 = _interopRequireDefault(_Card);\n\nvar _Button = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _TextField = __webpack_require__(/*! material-ui/TextField */ \"material-ui/TextField\");\n\nvar _TextField2 = _interopRequireDefault(_TextField);\n\nvar _Typography = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _Icon = __webpack_require__(/*! material-ui/Icon */ \"material-ui/Icon\");\n\nvar _Icon2 = _interopRequireDefault(_Icon);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n\nvar _authHelper = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nvar _apiUser = __webpack_require__(/*! ./api-user.js */ \"./client/user/api-user.js\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = function styles(theme) {\n  return {\n    card: {\n      maxWidth: 600,\n      margin: 'auto',\n      textAlign: 'center',\n      marginTop: theme.spacing.unit * 5,\n      paddingBottom: theme.spacing.unit * 2\n    },\n    title: {\n      margin: theme.spacing.unit * 2,\n      color: theme.palette.protectedTitle\n    },\n    error: {\n      verticalAlign: 'middle'\n    },\n    textField: {\n      marginLeft: theme.spacing.unit,\n      marginRight: theme.spacing.unit,\n      width: 300\n    },\n    submit: {\n      margin: 'auto',\n      marginBottom: theme.spacing.unit * 2\n    }\n  };\n};\n\nvar EditProfile = function (_Component) {\n  _inherits(EditProfile, _Component);\n\n  function EditProfile(_ref) {\n    var match = _ref.match;\n\n    _classCallCheck(this, EditProfile);\n\n    var _this = _possibleConstructorReturn(this, (EditProfile.__proto__ || Object.getPrototypeOf(EditProfile)).call(this));\n\n    _this.componentDidMount = function () {\n      var jwt = _authHelper2.default.isAuthenticated();\n      (0, _apiUser.read)({\n        userId: _this.match.params.userId\n      }, { t: jwt.token }).then(function (data) {\n        if (data.error) {\n          _this.setState({ error: data.error });\n        } else {\n          _this.setState({ name: data.name, email: data.email });\n        }\n      });\n    };\n\n    _this.clickSubmit = function () {\n      var jwt = _authHelper2.default.isAuthenticated();\n      var user = {\n        name: _this.state.name || undefined,\n        email: _this.state.email || undefined,\n        password: _this.state.password || undefined\n      };\n      (0, _apiUser.update)({\n        userId: _this.match.params.userId\n      }, {\n        t: jwt.token\n      }, user).then(function (data) {\n        if (data.error) {\n          _this.setState({ error: data.error });\n        } else {\n          _this.setState({ 'userId': data._id, 'redirectToProfile': true });\n        }\n      });\n    };\n\n    _this.handleChange = function (name) {\n      return function (event) {\n        _this.setState(_defineProperty({}, name, event.target.value));\n      };\n    };\n\n    _this.state = {\n      name: '',\n      email: '',\n      password: '',\n      redirectToProfile: false,\n      error: ''\n    };\n    _this.match = match;\n    return _this;\n  }\n\n  _createClass(EditProfile, [{\n    key: 'render',\n    value: function render() {\n      var classes = this.props.classes;\n\n      if (this.state.redirectToProfile) {\n        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/user/' + this.state.userId });\n      }\n      return _react2.default.createElement(\n        _Card2.default,\n        { className: classes.card },\n        _react2.default.createElement(\n          _Card.CardContent,\n          null,\n          _react2.default.createElement(\n            _Typography2.default,\n            { type: 'headline', component: 'h2', className: classes.title },\n            'Edit Profile'\n          ),\n          _react2.default.createElement(_TextField2.default, { id: 'name', label: 'Name', className: classes.textField, value: this.state.name, onChange: this.handleChange('name'), margin: 'normal' }),\n          _react2.default.createElement('br', null),\n          _react2.default.createElement(_TextField2.default, { id: 'email', type: 'email', label: 'Email', className: classes.textField, value: this.state.email, onChange: this.handleChange('email'), margin: 'normal' }),\n          _react2.default.createElement('br', null),\n          _react2.default.createElement(_TextField2.default, { id: 'password', type: 'password', label: 'Password', className: classes.textField, value: this.state.password, onChange: this.handleChange('password'), margin: 'normal' }),\n          _react2.default.createElement('br', null),\n          ' ',\n          this.state.error && _react2.default.createElement(\n            _Typography2.default,\n            { component: 'p', color: 'error' },\n            _react2.default.createElement(\n              _Icon2.default,\n              { color: 'error', className: classes.error },\n              'error'\n            ),\n            this.state.error\n          )\n        ),\n        _react2.default.createElement(\n          _Card.CardActions,\n          null,\n          _react2.default.createElement(\n            _Button2.default,\n            { color: 'primary', variant: 'raised', onClick: this.clickSubmit, className: classes.submit },\n            'Submit'\n          )\n        )\n      );\n    }\n  }, {\n    key: '__reactstandin__regenerateByEval',\n    value: function __reactstandin__regenerateByEval(key, code) {\n      this[key] = eval(code);\n    }\n  }]);\n\n  return EditProfile;\n}(_react.Component);\n\nEditProfile.propTypes = {\n  classes: _propTypes2.default.object.isRequired\n};\n\nvar _default = (0, _styles.withStyles)(styles)(EditProfile);\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(styles, 'styles', '/Users/xaviourha/summer_project/lifelog/client/user/EditProfile.js');\n  reactHotLoader.register(EditProfile, 'EditProfile', '/Users/xaviourha/summer_project/lifelog/client/user/EditProfile.js');\n  reactHotLoader.register(_default, 'default', '/Users/xaviourha/summer_project/lifelog/client/user/EditProfile.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/user/EditProfile.js?");

/***/ }),

/***/ "./client/user/Profile.js":
/*!********************************!*\
  !*** ./client/user/Profile.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n\nvar _Paper = __webpack_require__(/*! material-ui/Paper */ \"material-ui/Paper\");\n\nvar _Paper2 = _interopRequireDefault(_Paper);\n\nvar _List = __webpack_require__(/*! material-ui/List */ \"material-ui/List\");\n\nvar _List2 = _interopRequireDefault(_List);\n\nvar _Avatar = __webpack_require__(/*! material-ui/Avatar */ \"material-ui/Avatar\");\n\nvar _Avatar2 = _interopRequireDefault(_Avatar);\n\nvar _IconButton = __webpack_require__(/*! material-ui/IconButton */ \"material-ui/IconButton\");\n\nvar _IconButton2 = _interopRequireDefault(_IconButton);\n\nvar _Button = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _Typography = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _Edit = __webpack_require__(/*! material-ui-icons/Edit */ \"material-ui-icons/Edit\");\n\nvar _Edit2 = _interopRequireDefault(_Edit);\n\nvar _Person = __webpack_require__(/*! material-ui-icons/Person */ \"material-ui-icons/Person\");\n\nvar _Person2 = _interopRequireDefault(_Person);\n\nvar _Divider = __webpack_require__(/*! material-ui/Divider */ \"material-ui/Divider\");\n\nvar _Divider2 = _interopRequireDefault(_Divider);\n\nvar _DeleteUser = __webpack_require__(/*! ./DeleteUser */ \"./client/user/DeleteUser.js\");\n\nvar _DeleteUser2 = _interopRequireDefault(_DeleteUser);\n\nvar _authHelper = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n\nvar _authHelper2 = _interopRequireDefault(_authHelper);\n\nvar _apiUser = __webpack_require__(/*! ./api-user.js */ \"./client/user/api-user.js\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = function styles(theme) {\n  return {\n    root: theme.mixins.gutters({\n      maxWidth: 600,\n      margin: \"auto\",\n      padding: theme.spacing.unit * 3,\n      marginTop: theme.spacing.unit * 5\n    }),\n    title: {\n      margin: theme.spacing.unit * 3 + \"px 0 \" + theme.spacing.unit * 2 + \"px\",\n      color: theme.palette.protectedTitle\n    },\n    bigAvatar: {\n      width: 60,\n      height: 60,\n      margin: 10\n    }\n  };\n};\n\nvar Profile = function (_Component) {\n  _inherits(Profile, _Component);\n\n  function Profile(_ref) {\n    var match = _ref.match;\n\n    _classCallCheck(this, Profile);\n\n    var _this = _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this));\n\n    _this.init = function (userId) {\n      var jwt = _authHelper2.default.isAuthenticated();\n      (0, _apiUser.read)({\n        userId: userId\n      }, { t: jwt.token }).then(function (data) {\n        if (data.error) {\n          _this.setState({ redirectToSignin: true });\n        } else {\n          _this.setState({ user: data });\n        }\n      });\n    };\n\n    _this.componentWillReceiveProps = function (props) {\n      _this.init(props.match.params.userId);\n    };\n\n    _this.componentDidMount = function () {\n      _this.init(_this.match.params.userId);\n    };\n\n    _this.state = {\n      user: \"\",\n      redirectToSignin: false\n    };\n    _this.match = match;\n    return _this;\n  }\n\n  _createClass(Profile, [{\n    key: \"render\",\n    value: function render() {\n      var classes = this.props.classes;\n\n      var redirectToSignin = this.state.redirectToSignin;\n      if (redirectToSignin) {\n        return _react2.default.createElement(_reactRouterDom.Redirect, { to: \"/signin\" });\n      }\n      var photoUrl = \"/api/users/defaultphoto\";\n      return _react2.default.createElement(\n        _Paper2.default,\n        { className: classes.root, elevation: 4 },\n        _react2.default.createElement(\n          _Typography2.default,\n          { type: \"title\", className: classes.title },\n          \"Profile\"\n        ),\n        _react2.default.createElement(\n          _List2.default,\n          { dense: true },\n          _react2.default.createElement(\n            _List.ListItem,\n            null,\n            _react2.default.createElement(\n              _List.ListItemAvatar,\n              null,\n              _react2.default.createElement(_Avatar2.default, { src: photoUrl, className: classes.bigAvatar })\n            ),\n            _react2.default.createElement(_List.ListItemText, {\n              primary: this.state.user.name,\n              secondary: this.state.user.email\n            }),\n            \" \",\n            _authHelper2.default.isAuthenticated().user && _authHelper2.default.isAuthenticated().user._id == this.state.user._id && _react2.default.createElement(\n              _List.ListItemSecondaryAction,\n              null,\n              _react2.default.createElement(\n                _reactRouterDom.Link,\n                { to: \"/user/edit/\" + this.state.user._id },\n                _react2.default.createElement(\n                  _IconButton2.default,\n                  { \"aria-label\": \"Edit\", color: \"primary\" },\n                  _react2.default.createElement(_Edit2.default, null)\n                )\n              ),\n              _react2.default.createElement(_DeleteUser2.default, { userId: this.state.user._id })\n            )\n          ),\n          _react2.default.createElement(_Divider2.default, null),\n          _react2.default.createElement(\n            _List.ListItem,\n            null,\n            _react2.default.createElement(_List.ListItemText, {\n              primary: \"Joined: \" + new Date(this.state.user.created).toDateString()\n            })\n          )\n        )\n      );\n    }\n  }, {\n    key: \"__reactstandin__regenerateByEval\",\n    value: function __reactstandin__regenerateByEval(key, code) {\n      this[key] = eval(code);\n    }\n  }]);\n\n  return Profile;\n}(_react.Component);\n\nProfile.propTypes = {\n  classes: _propTypes2.default.object.isRequired\n};\n\nvar _default = (0, _styles.withStyles)(styles)(Profile);\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(styles, \"styles\", \"/Users/xaviourha/summer_project/lifelog/client/user/Profile.js\");\n  reactHotLoader.register(Profile, \"Profile\", \"/Users/xaviourha/summer_project/lifelog/client/user/Profile.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/xaviourha/summer_project/lifelog/client/user/Profile.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/user/Profile.js?");

/***/ }),

/***/ "./client/user/Signup.js":
/*!*******************************!*\
  !*** ./client/user/Signup.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Card = __webpack_require__(/*! material-ui/Card */ \"material-ui/Card\");\n\nvar _Card2 = _interopRequireDefault(_Card);\n\nvar _Button = __webpack_require__(/*! material-ui/Button */ \"material-ui/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _TextField = __webpack_require__(/*! material-ui/TextField */ \"material-ui/TextField\");\n\nvar _TextField2 = _interopRequireDefault(_TextField);\n\nvar _Typography = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _Icon = __webpack_require__(/*! material-ui/Icon */ \"material-ui/Icon\");\n\nvar _Icon2 = _interopRequireDefault(_Icon);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n\nvar _apiUser = __webpack_require__(/*! ./api-user.js */ \"./client/user/api-user.js\");\n\nvar _Dialog = __webpack_require__(/*! material-ui/Dialog */ \"material-ui/Dialog\");\n\nvar _Dialog2 = _interopRequireDefault(_Dialog);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = function styles(theme) {\n  return {\n    card: {\n      maxWidth: 600,\n      margin: 'auto',\n      textAlign: 'center',\n      marginTop: theme.spacing.unit * 5,\n      paddingBottom: theme.spacing.unit * 2\n    },\n    error: {\n      verticalAlign: 'middle'\n    },\n    title: {\n      marginTop: theme.spacing.unit * 2,\n      color: theme.palette.openTitle\n    },\n    textField: {\n      marginLeft: theme.spacing.unit,\n      marginRight: theme.spacing.unit,\n      width: 300\n    },\n    submit: {\n      margin: 'auto',\n      marginBottom: theme.spacing.unit * 2\n    }\n  };\n};\n\nvar Signup = function (_Component) {\n  _inherits(Signup, _Component);\n\n  function Signup() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, Signup);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Signup.__proto__ || Object.getPrototypeOf(Signup)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      name: '',\n      password: '',\n      email: '',\n      open: false,\n      error: ''\n    }, _this.handleChange = function (name) {\n      return function (event) {\n        _this.setState(_defineProperty({}, name, event.target.value));\n      };\n    }, _this.clickSubmit = function () {\n      var user = {\n        name: _this.state.name || undefined,\n        email: _this.state.email || undefined,\n        password: _this.state.password || undefined\n      };\n      (0, _apiUser.create)(user).then(function (data) {\n        if (data.error) {\n          _this.setState({ error: data.error });\n        } else {\n          _this.setState({ error: '', open: true });\n        }\n      });\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(Signup, [{\n    key: 'render',\n    value: function render() {\n      var classes = this.props.classes;\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          _Card2.default,\n          { className: classes.card },\n          _react2.default.createElement(\n            _Card.CardContent,\n            null,\n            _react2.default.createElement(\n              _Typography2.default,\n              { type: 'headline', component: 'h2', className: classes.title },\n              'Sign Up'\n            ),\n            _react2.default.createElement(_TextField2.default, { id: 'name', label: 'Name', className: classes.textField, value: this.state.name, onChange: this.handleChange('name'), margin: 'normal' }),\n            _react2.default.createElement('br', null),\n            _react2.default.createElement(_TextField2.default, { id: 'email', type: 'email', label: 'Email', className: classes.textField, value: this.state.email, onChange: this.handleChange('email'), margin: 'normal' }),\n            _react2.default.createElement('br', null),\n            _react2.default.createElement(_TextField2.default, { id: 'password', type: 'password', label: 'Password', className: classes.textField, value: this.state.password, onChange: this.handleChange('password'), margin: 'normal' }),\n            _react2.default.createElement('br', null),\n            ' ',\n            this.state.error && _react2.default.createElement(\n              _Typography2.default,\n              { component: 'p', color: 'error' },\n              _react2.default.createElement(\n                _Icon2.default,\n                { color: 'error', className: classes.error },\n                'error'\n              ),\n              this.state.error\n            )\n          ),\n          _react2.default.createElement(\n            _Card.CardActions,\n            null,\n            _react2.default.createElement(\n              _Button2.default,\n              { color: 'primary', variant: 'raised', onClick: this.clickSubmit, className: classes.submit },\n              'Submit'\n            )\n          )\n        ),\n        _react2.default.createElement(\n          _Dialog2.default,\n          { open: this.state.open, disableBackdropClick: true },\n          _react2.default.createElement(\n            _Dialog.DialogTitle,\n            null,\n            'New Account'\n          ),\n          _react2.default.createElement(\n            _Dialog.DialogContent,\n            null,\n            _react2.default.createElement(\n              _Dialog.DialogContentText,\n              null,\n              'New account successfully created.'\n            )\n          ),\n          _react2.default.createElement(\n            _Dialog.DialogActions,\n            null,\n            _react2.default.createElement(\n              _reactRouterDom.Link,\n              { to: '/signin' },\n              _react2.default.createElement(\n                _Button2.default,\n                { color: 'primary', autoFocus: 'autoFocus', variant: 'raised' },\n                'Sign In'\n              )\n            )\n          )\n        )\n      );\n    }\n  }, {\n    key: '__reactstandin__regenerateByEval',\n    value: function __reactstandin__regenerateByEval(key, code) {\n      this[key] = eval(code);\n    }\n  }]);\n\n  return Signup;\n}(_react.Component);\n\nSignup.propTypes = {\n  classes: _propTypes2.default.object.isRequired\n};\n\nvar _default = (0, _styles.withStyles)(styles)(Signup);\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(styles, 'styles', '/Users/xaviourha/summer_project/lifelog/client/user/Signup.js');\n  reactHotLoader.register(Signup, 'Signup', '/Users/xaviourha/summer_project/lifelog/client/user/Signup.js');\n  reactHotLoader.register(_default, 'default', '/Users/xaviourha/summer_project/lifelog/client/user/Signup.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/user/Signup.js?");

/***/ }),

/***/ "./client/user/Users.js":
/*!******************************!*\
  !*** ./client/user/Users.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n\nvar _Paper = __webpack_require__(/*! material-ui/Paper */ \"material-ui/Paper\");\n\nvar _Paper2 = _interopRequireDefault(_Paper);\n\nvar _List = __webpack_require__(/*! material-ui/List */ \"material-ui/List\");\n\nvar _List2 = _interopRequireDefault(_List);\n\nvar _Avatar = __webpack_require__(/*! material-ui/Avatar */ \"material-ui/Avatar\");\n\nvar _Avatar2 = _interopRequireDefault(_Avatar);\n\nvar _IconButton = __webpack_require__(/*! material-ui/IconButton */ \"material-ui/IconButton\");\n\nvar _IconButton2 = _interopRequireDefault(_IconButton);\n\nvar _Typography = __webpack_require__(/*! material-ui/Typography */ \"material-ui/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _ArrowForward = __webpack_require__(/*! material-ui-icons/ArrowForward */ \"material-ui-icons/ArrowForward\");\n\nvar _ArrowForward2 = _interopRequireDefault(_ArrowForward);\n\nvar _Person = __webpack_require__(/*! material-ui-icons/Person */ \"material-ui-icons/Person\");\n\nvar _Person2 = _interopRequireDefault(_Person);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _apiUser = __webpack_require__(/*! ./api-user.js */ \"./client/user/api-user.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar styles = function styles(theme) {\n  return {\n    root: theme.mixins.gutters({\n      padding: theme.spacing.unit,\n      margin: theme.spacing.unit * 5\n    }),\n    title: {\n      margin: theme.spacing.unit * 4 + 'px 0 ' + theme.spacing.unit * 2 + 'px',\n      color: theme.palette.openTitle\n    }\n  };\n};\n\nvar Users = function (_Component) {\n  _inherits(Users, _Component);\n\n  function Users() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, Users);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Users.__proto__ || Object.getPrototypeOf(Users)).call.apply(_ref, [this].concat(args))), _this), _this.state = {\n      users: []\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(Users, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      (0, _apiUser.list)().then(function (data) {\n        if (data.error) {\n          console.log(data.error);\n        } else {\n          _this2.setState({ users: data });\n        }\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var classes = this.props.classes;\n\n      return _react2.default.createElement(\n        _Paper2.default,\n        { className: classes.root, elevation: 4 },\n        _react2.default.createElement(\n          _Typography2.default,\n          { type: 'title', className: classes.title },\n          'All Users'\n        ),\n        _react2.default.createElement(\n          _List2.default,\n          { dense: true },\n          this.state.users.map(function (item, i) {\n            return _react2.default.createElement(\n              _reactRouterDom.Link,\n              { to: \"/user/\" + item._id, key: i },\n              _react2.default.createElement(\n                _List.ListItem,\n                { button: true },\n                _react2.default.createElement(\n                  _List.ListItemAvatar,\n                  null,\n                  _react2.default.createElement(\n                    _Avatar2.default,\n                    null,\n                    _react2.default.createElement(_Person2.default, null)\n                  )\n                ),\n                _react2.default.createElement(_List.ListItemText, { primary: item.name }),\n                _react2.default.createElement(\n                  _List.ListItemSecondaryAction,\n                  null,\n                  _react2.default.createElement(\n                    _IconButton2.default,\n                    null,\n                    _react2.default.createElement(_ArrowForward2.default, null)\n                  )\n                )\n              )\n            );\n          })\n        )\n      );\n    }\n  }, {\n    key: '__reactstandin__regenerateByEval',\n    value: function __reactstandin__regenerateByEval(key, code) {\n      this[key] = eval(code);\n    }\n  }]);\n\n  return Users;\n}(_react.Component);\n\nUsers.propTypes = {\n  classes: _propTypes2.default.object.isRequired\n};\n\nvar _default = (0, _styles.withStyles)(styles)(Users);\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(styles, 'styles', '/Users/xaviourha/summer_project/lifelog/client/user/Users.js');\n  reactHotLoader.register(Users, 'Users', '/Users/xaviourha/summer_project/lifelog/client/user/Users.js');\n  reactHotLoader.register(_default, 'default', '/Users/xaviourha/summer_project/lifelog/client/user/Users.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/user/Users.js?");

/***/ }),

/***/ "./client/user/api-user.js":
/*!*********************************!*\
  !*** ./client/user/api-user.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar create = function create(user) {\n  return fetch('/api/users/', {\n    method: 'POST',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify(user)\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    return console.log(err);\n  });\n};\n\nvar list = function list() {\n  return fetch('/api/users/', {\n    method: 'GET'\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    return console.log(err);\n  });\n};\n\nvar read = function read(params, credentials) {\n  return fetch('/api/users/' + params.userId, {\n    method: 'GET',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json',\n      'Authorization': 'Bearer ' + credentials.t\n    }\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    return console.log(err);\n  });\n};\n\nvar update = function update(params, credentials, user) {\n  return fetch('/api/users/' + params.userId, {\n    method: 'PUT',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json',\n      'Authorization': 'Bearer ' + credentials.t\n    },\n    body: JSON.stringify(user)\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    return console.log(err);\n  });\n};\n\nvar remove = function remove(params, credentials) {\n  return fetch('/api/users/' + params.userId, {\n    method: 'DELETE',\n    headers: {\n      'Accept': 'application/json',\n      'Content-Type': 'application/json',\n      'Authorization': 'Bearer ' + credentials.t\n    }\n  }).then(function (response) {\n    return response.json();\n  }).catch(function (err) {\n    return console.log(err);\n  });\n};\n\nexports.create = create;\nexports.list = list;\nexports.read = read;\nexports.update = update;\nexports.remove = remove;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(create, 'create', '/Users/xaviourha/summer_project/lifelog/client/user/api-user.js');\n  reactHotLoader.register(list, 'list', '/Users/xaviourha/summer_project/lifelog/client/user/api-user.js');\n  reactHotLoader.register(read, 'read', '/Users/xaviourha/summer_project/lifelog/client/user/api-user.js');\n  reactHotLoader.register(update, 'update', '/Users/xaviourha/summer_project/lifelog/client/user/api-user.js');\n  reactHotLoader.register(remove, 'remove', '/Users/xaviourha/summer_project/lifelog/client/user/api-user.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./client/user/api-user.js?");

/***/ }),

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar config = {\n  env: \"development\" || \"development\",\n  port: process.env.PORT || 8080,\n  jwtSecret: process.env.JWT_SECRET || \"test123\",\n  mongoUri: process.env.MONGODB_URI || process.env.MONGO_HOST || \"mongodb://\" + (process.env.IP || \"localhost\") + \":\" + (process.env.MONGO_PORT || \"27017\") + \"/db\"\n};\n\nvar _default = config;\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(config, \"config\", \"/Users/xaviourha/summer_project/lifelog/config/config.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/xaviourha/summer_project/lifelog/config/config.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./config/config.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "./server/controllers/auth.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/auth.controller.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _user = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _jsonwebtoken = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nvar _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);\n\nvar _expressJwt = __webpack_require__(/*! express-jwt */ \"express-jwt\");\n\nvar _expressJwt2 = _interopRequireDefault(_expressJwt);\n\nvar _config = __webpack_require__(/*! ./../../config/config */ \"./config/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar signin = function signin(req, res) {\n  _user2.default.findOne({\n    \"email\": req.body.email\n  }, function (err, user) {\n\n    if (err || !user) return res.status('401').json({\n      error: \"User not found\"\n    });\n\n    if (!user.authenticate(req.body.password)) {\n      return res.status('401').send({\n        error: \"Email and password don't match.\"\n      });\n    }\n\n    var token = _jsonwebtoken2.default.sign({\n      _id: user._id\n    }, _config2.default.jwtSecret);\n\n    res.cookie(\"t\", token, {\n      expire: new Date() + 9999\n    });\n\n    return res.json({\n      token: token,\n      user: { _id: user._id, name: user.name, email: user.email }\n    });\n  });\n};\n\nvar signout = function signout(req, res) {\n  res.clearCookie(\"t\");\n  return res.status('200').json({\n    message: \"signed out\"\n  });\n};\n\nvar requireSignin = (0, _expressJwt2.default)({\n  secret: _config2.default.jwtSecret,\n  userProperty: 'auth'\n});\n\nvar hasAuthorization = function hasAuthorization(req, res, next) {\n  var authorized = req.profile && req.auth && req.profile._id == req.auth._id;\n  if (!authorized) {\n    return res.status('403').json({\n      error: \"User is not authorized\"\n    });\n  }\n  next();\n};\n\nvar _default = {\n  signin: signin,\n  signout: signout,\n  requireSignin: requireSignin,\n  hasAuthorization: hasAuthorization\n};\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(signin, 'signin', '/Users/xaviourha/summer_project/lifelog/server/controllers/auth.controller.js');\n  reactHotLoader.register(signout, 'signout', '/Users/xaviourha/summer_project/lifelog/server/controllers/auth.controller.js');\n  reactHotLoader.register(requireSignin, 'requireSignin', '/Users/xaviourha/summer_project/lifelog/server/controllers/auth.controller.js');\n  reactHotLoader.register(hasAuthorization, 'hasAuthorization', '/Users/xaviourha/summer_project/lifelog/server/controllers/auth.controller.js');\n  reactHotLoader.register(_default, 'default', '/Users/xaviourha/summer_project/lifelog/server/controllers/auth.controller.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/controllers/auth.controller.js?");

/***/ }),

/***/ "./server/controllers/gps.controller.js":
/*!**********************************************!*\
  !*** ./server/controllers/gps.controller.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _gps = __webpack_require__(/*! ../models/gps.model */ \"./server/models/gps.model.js\");\n\nvar _gps2 = _interopRequireDefault(_gps);\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _dbErrorHandler = __webpack_require__(/*! ./../helpers/dbErrorHandler */ \"./server/helpers/dbErrorHandler.js\");\n\nvar _dbErrorHandler2 = _interopRequireDefault(_dbErrorHandler);\n\nvar _formidable = __webpack_require__(/*! formidable */ \"formidable\");\n\nvar _formidable2 = _interopRequireDefault(_formidable);\n\nvar _fs = __webpack_require__(/*! fs */ \"fs\");\n\nvar _fs2 = _interopRequireDefault(_fs);\n\nvar _fastCsv = __webpack_require__(/*! fast-csv */ \"fast-csv\");\n\nvar _fastCsv2 = _interopRequireDefault(_fastCsv);\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar create = function create(req, res, next) {\n  var form = new _formidable2.default.IncomingForm();\n  //console.log(req);\n  form.keepExtensions = true;\n  form.parse(req, function (err, fields, files) {\n    if (err) {\n      return res.status(400).json({\n        error: \"GPS could not be uploaded\"\n      });\n    }\n    //let gps = new GPS(fields);\n    var UploadBy = req.profile;\n    if (files.file) {\n      var info = [];\n      _fastCsv2.default.fromPath(files.file.path, {\n        headers: true,\n        ignoreEmpty: true\n      }).on(\"data\", function (data) {\n        data[\"UploadBy\"] = UploadBy;\n        data[\"_id\"] = new _mongoose2.default.Types.ObjectId();\n        info.push(data);\n      }).on(\"end\", function () {\n        _gps2.default.create(info, function (err, docoment) {\n          if (err) {\n            return res.status(400).json({\n              error: \"file format is not compatible by the system,plase rename the header of the csv,and repalce space with '_'\"\n            });\n          }\n        });\n        res.json(info.length + \" GPS records have successfully uploaded.\");\n      });\n      //gps.file.data = fs.readFileSync(files.file.path);\n      //gps.file.contentType = files.file.type;\n    }\n    // gps.save((err, result) => {\n    //   if (err) {\n    //     return res.status(400).json({\n    //       error: errorHandler.getErrorMessage(err)\n    //     });\n    //   }\n    //   res.json(result);\n    // });\n  });\n};\n\nvar listByUser = function listByUser(req, res) {\n  _gps2.default.find({ UploadBy: req.profile._id }).populate(\"UploadBy\", \"_id name\").sort(\"-UTC_DATE\").skip(0).exec(function (err, gpsinfo) {\n    if (err) {\n      return res.status(400).json({\n        error: _dbErrorHandler2.default.getErrorMessage(err)\n      });\n    }\n    res.json(gpsinfo);\n  });\n};\n\nvar _default = {\n  create: create,\n  listByUser: listByUser\n};\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(create, \"create\", \"/Users/xaviourha/summer_project/lifelog/server/controllers/gps.controller.js\");\n  reactHotLoader.register(listByUser, \"listByUser\", \"/Users/xaviourha/summer_project/lifelog/server/controllers/gps.controller.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/xaviourha/summer_project/lifelog/server/controllers/gps.controller.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/controllers/gps.controller.js?");

/***/ }),

/***/ "./server/controllers/media.controller.js":
/*!************************************************!*\
  !*** ./server/controllers/media.controller.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _media = __webpack_require__(/*! ../models/media.model */ \"./server/models/media.model.js\");\n\nvar _media2 = _interopRequireDefault(_media);\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _dbErrorHandler = __webpack_require__(/*! ./../helpers/dbErrorHandler */ \"./server/helpers/dbErrorHandler.js\");\n\nvar _dbErrorHandler2 = _interopRequireDefault(_dbErrorHandler);\n\nvar _formidable = __webpack_require__(/*! formidable */ \"formidable\");\n\nvar _formidable2 = _interopRequireDefault(_formidable);\n\nvar _fs = __webpack_require__(/*! fs */ \"fs\");\n\nvar _fs2 = _interopRequireDefault(_fs);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar create = function create(req, res, next) {\n  var form = new _formidable2.default.IncomingForm();\n  form.keepExtensions = true;\n  form.parse(req, function (err, fields, files) {\n    if (err) {\n      return res.status(400).json({\n        error: \"Image could not be uploaded\"\n      });\n    }\n    var media = new _media2.default(fields);\n    media.mediaedBy = req.profile;\n    if (files.photo) {\n      media.photo.data = _fs2.default.readFileSync(files.photo.path);\n      media.photo.contentType = files.photo.type;\n\n      // var hi = fs.readFileSync(files.photo.path);\n      // var encodehi = new Buffer(hi).toString(\"base64\");\n      // //console.log(\"encodehi.toString()\");\n      // var path = files.photo.path;\n      // function upExif(e) {\n      //   // EXIF.getData(e, function() {\n      //   //   var datetime = EXIF.getTag(this, \"DateTimeDigitized\");\n      //   //   for (var i = 0; i < 2; i++) {\n      //   //     datetime = datetime.replace(/:/, \"/\");\n      //   //   }\n      //   //   var date = new Date(datetime);\n      //   //   date = date.toISOString();\n      //   //   console.log(\"in the function\");\n      //   // });\n      //   console.log(e);\n      // }\n      // upExif(encodehi);\n    }\n    media.save(function (err, result) {\n      if (err) {\n        return res.status(400).json({\n          error: _dbErrorHandler2.default.getErrorMessage(err)\n        });\n      }\n      res.json(result);\n    });\n  });\n};\n\nvar mediaByID = function mediaByID(req, res, next, id) {\n  _media2.default.findById(id).populate(\"mediaedBy\", \"_id name\").exec(function (err, media) {\n    if (err || !media) return res.status(\"400\").json({\n      error: \"Media not found\"\n    });\n    req.media = media;\n    next();\n  });\n};\n\nvar listByUser = function listByUser(req, res) {\n  _media2.default.find({ mediaedBy: req.profile._id }).populate(\"comments\", \"text created\").populate(\"comments.mediaedBy\", \"_id name\").populate(\"mediaedBy\", \"_id name\").sort(\"-taken\").exec(function (err, medias) {\n    if (err) {\n      return res.status(400).json({\n        error: _dbErrorHandler2.default.getErrorMessage(err)\n      });\n    }\n    res.json(medias);\n  });\n};\n\nvar remove = function remove(req, res) {\n  var media = req.media;\n  media.remove(function (err, deletedMedia) {\n    if (err) {\n      return res.status(400).json({\n        error: _dbErrorHandler2.default.getErrorMessage(err)\n      });\n    }\n    res.json(deletedMedia);\n  });\n};\n\nvar photo = function photo(req, res, next) {\n  res.set(\"Content-Type\", req.media.photo.contentType);\n  return res.send(req.media.photo.data);\n};\n\nvar like = function like(req, res) {\n  _media2.default.findByIdAndUpdate(req.body.mediaId, { $push: { likes: req.body.userId } }, { new: true }).exec(function (err, result) {\n    if (err) {\n      return res.status(400).json({\n        error: _dbErrorHandler2.default.getErrorMessage(err)\n      });\n    }\n    res.json(result);\n  });\n};\n\nvar unlike = function unlike(req, res) {\n  _media2.default.findByIdAndUpdate(req.body.mediaId, { $pull: { likes: req.body.userId } }, { new: true }).exec(function (err, result) {\n    if (err) {\n      return res.status(400).json({\n        error: _dbErrorHandler2.default.getErrorMessage(err)\n      });\n    }\n    res.json(result);\n  });\n};\n\nvar isMediaer = function isMediaer(req, res, next) {\n  var isMediaer = req.media && req.auth && req.media.mediaedBy._id == req.auth._id;\n  if (!isMediaer) {\n    return res.status(\"403\").json({\n      error: \"User is not authorized\"\n    });\n  }\n  next();\n};\n\nvar _default = {\n  listByUser: listByUser,\n  create: create,\n  mediaByID: mediaByID,\n  remove: remove,\n  photo: photo,\n  like: like,\n  unlike: unlike,\n  isMediaer: isMediaer\n};\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(create, \"create\", \"/Users/xaviourha/summer_project/lifelog/server/controllers/media.controller.js\");\n  reactHotLoader.register(mediaByID, \"mediaByID\", \"/Users/xaviourha/summer_project/lifelog/server/controllers/media.controller.js\");\n  reactHotLoader.register(listByUser, \"listByUser\", \"/Users/xaviourha/summer_project/lifelog/server/controllers/media.controller.js\");\n  reactHotLoader.register(remove, \"remove\", \"/Users/xaviourha/summer_project/lifelog/server/controllers/media.controller.js\");\n  reactHotLoader.register(photo, \"photo\", \"/Users/xaviourha/summer_project/lifelog/server/controllers/media.controller.js\");\n  reactHotLoader.register(like, \"like\", \"/Users/xaviourha/summer_project/lifelog/server/controllers/media.controller.js\");\n  reactHotLoader.register(unlike, \"unlike\", \"/Users/xaviourha/summer_project/lifelog/server/controllers/media.controller.js\");\n  reactHotLoader.register(isMediaer, \"isMediaer\", \"/Users/xaviourha/summer_project/lifelog/server/controllers/media.controller.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/xaviourha/summer_project/lifelog/server/controllers/media.controller.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/controllers/media.controller.js?");

/***/ }),

/***/ "./server/controllers/user.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/user.controller.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _user = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _dbErrorHandler = __webpack_require__(/*! ./../helpers/dbErrorHandler */ \"./server/helpers/dbErrorHandler.js\");\n\nvar _dbErrorHandler2 = _interopRequireDefault(_dbErrorHandler);\n\nvar _profilePic = __webpack_require__(/*! ./../../client/assets/images/profile-pic.png */ \"./client/assets/images/profile-pic.png\");\n\nvar _profilePic2 = _interopRequireDefault(_profilePic);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar create = function create(req, res, next) {\n  var user = new _user2.default(req.body);\n  user.save(function (err, result) {\n    if (err) {\n      return res.status(400).json({\n        error: _dbErrorHandler2.default.getErrorMessage(err)\n      });\n    }\n    res.status(200).json({\n      message: \"Successfully signed up!\"\n    });\n  });\n};\n\n/**\n * Load user and append to req.\n */\nvar userByID = function userByID(req, res, next, id) {\n  _user2.default.findById(id).exec(function (err, user) {\n    if (err || !user) return res.status(\"400\").json({\n      error: \"User not found\"\n    });\n    req.profile = user;\n    next();\n  });\n};\n\nvar read = function read(req, res) {\n  req.profile.hashed_password = undefined;\n  req.profile.salt = undefined;\n  return res.json(req.profile);\n};\n\nvar list = function list(req, res) {\n  _user2.default.find(function (err, users) {\n    if (err) {\n      return res.status(400).json({\n        error: _dbErrorHandler2.default.getErrorMessage(err)\n      });\n    }\n    res.json(users);\n  }).select(\"name email updated created\");\n};\n\nvar update = function update(req, res, next) {\n  var user = req.profile;\n  user = _lodash2.default.extend(user, req.body);\n  user.updated = Date.now();\n  user.save(function (err) {\n    if (err) {\n      return res.status(400).json({\n        error: _dbErrorHandler2.default.getErrorMessage(err)\n      });\n    }\n    user.hashed_password = undefined;\n    user.salt = undefined;\n    res.json(user);\n  });\n};\n\nvar remove = function remove(req, res, next) {\n  var user = req.profile;\n  user.remove(function (err, deletedUser) {\n    if (err) {\n      return res.status(400).json({\n        error: _dbErrorHandler2.default.getErrorMessage(err)\n      });\n    }\n    deletedUser.hashed_password = undefined;\n    deletedUser.salt = undefined;\n    res.json(deletedUser);\n  });\n};\n\nvar defaultPhoto = function defaultPhoto(req, res) {\n  return res.sendFile(process.cwd() + _profilePic2.default);\n};\n\nvar _default = {\n  create: create,\n  userByID: userByID,\n  read: read,\n  list: list,\n  remove: remove,\n  defaultPhoto: defaultPhoto,\n  update: update\n};\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(create, \"create\", \"/Users/xaviourha/summer_project/lifelog/server/controllers/user.controller.js\");\n  reactHotLoader.register(userByID, \"userByID\", \"/Users/xaviourha/summer_project/lifelog/server/controllers/user.controller.js\");\n  reactHotLoader.register(read, \"read\", \"/Users/xaviourha/summer_project/lifelog/server/controllers/user.controller.js\");\n  reactHotLoader.register(list, \"list\", \"/Users/xaviourha/summer_project/lifelog/server/controllers/user.controller.js\");\n  reactHotLoader.register(update, \"update\", \"/Users/xaviourha/summer_project/lifelog/server/controllers/user.controller.js\");\n  reactHotLoader.register(remove, \"remove\", \"/Users/xaviourha/summer_project/lifelog/server/controllers/user.controller.js\");\n  reactHotLoader.register(defaultPhoto, \"defaultPhoto\", \"/Users/xaviourha/summer_project/lifelog/server/controllers/user.controller.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/xaviourha/summer_project/lifelog/server/controllers/user.controller.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/controllers/user.controller.js?");

/***/ }),

/***/ "./server/devBundle.js":
/*!*****************************!*\
  !*** ./server/devBundle.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _config = __webpack_require__(/*! ./../config/config */ \"./config/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nvar _webpack2 = _interopRequireDefault(_webpack);\n\nvar _webpackDevMiddleware = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n\nvar _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);\n\nvar _webpackHotMiddleware = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n\nvar _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);\n\nvar _webpackConfigClient = __webpack_require__(/*! ./../webpack.config.client.js */ \"./webpack.config.client.js\");\n\nvar _webpackConfigClient2 = _interopRequireDefault(_webpackConfigClient);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar compile = function compile(app) {\n  if (_config2.default.env === \"development\") {\n    var compiler = (0, _webpack2.default)(_webpackConfigClient2.default);\n    var middleware = (0, _webpackDevMiddleware2.default)(compiler, {\n      publicPath: _webpackConfigClient2.default.output.publicPath\n    });\n    app.use(middleware);\n    app.use((0, _webpackHotMiddleware2.default)(compiler));\n  }\n};\n\nvar _default = {\n  compile: compile\n};\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(compile, 'compile', '/Users/xaviourha/summer_project/lifelog/server/devBundle.js');\n  reactHotLoader.register(_default, 'default', '/Users/xaviourha/summer_project/lifelog/server/devBundle.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/devBundle.js?");

/***/ }),

/***/ "./server/express.js":
/*!***************************!*\
  !*** ./server/express.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _path = __webpack_require__(/*! path */ \"path\");\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _cookieParser = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n\nvar _cookieParser2 = _interopRequireDefault(_cookieParser);\n\nvar _compression = __webpack_require__(/*! compression */ \"compression\");\n\nvar _compression2 = _interopRequireDefault(_compression);\n\nvar _cors = __webpack_require__(/*! cors */ \"cors\");\n\nvar _cors2 = _interopRequireDefault(_cors);\n\nvar _helmet = __webpack_require__(/*! helmet */ \"helmet\");\n\nvar _helmet2 = _interopRequireDefault(_helmet);\n\nvar _template = __webpack_require__(/*! ./../template */ \"./template.js\");\n\nvar _template2 = _interopRequireDefault(_template);\n\nvar _user = __webpack_require__(/*! ./routes/user.routes */ \"./server/routes/user.routes.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _auth = __webpack_require__(/*! ./routes/auth.routes */ \"./server/routes/auth.routes.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nvar _media = __webpack_require__(/*! ./routes/media.routes */ \"./server/routes/media.routes.js\");\n\nvar _media2 = _interopRequireDefault(_media);\n\nvar _gps = __webpack_require__(/*! ./routes/gps.routes */ \"./server/routes/gps.routes.js\");\n\nvar _gps2 = _interopRequireDefault(_gps);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _server2 = _interopRequireDefault(_server);\n\nvar _MainRouter = __webpack_require__(/*! ./../client/MainRouter */ \"./client/MainRouter.js\");\n\nvar _MainRouter2 = _interopRequireDefault(_MainRouter);\n\nvar _StaticRouter = __webpack_require__(/*! react-router-dom/StaticRouter */ \"react-router-dom/StaticRouter\");\n\nvar _StaticRouter2 = _interopRequireDefault(_StaticRouter);\n\nvar _jss = __webpack_require__(/*! react-jss/lib/jss */ \"react-jss/lib/jss\");\n\nvar _JssProvider = __webpack_require__(/*! react-jss/lib/JssProvider */ \"react-jss/lib/JssProvider\");\n\nvar _JssProvider2 = _interopRequireDefault(_JssProvider);\n\nvar _styles = __webpack_require__(/*! material-ui/styles */ \"material-ui/styles\");\n\nvar _colors = __webpack_require__(/*! material-ui/colors */ \"material-ui/colors\");\n\nvar _devBundle = __webpack_require__(/*! ./devBundle */ \"./server/devBundle.js\");\n\nvar _devBundle2 = _interopRequireDefault(_devBundle);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\n// modules for server side rendering\n\n//end\n\n//comment out before building for production\n\n\nvar CURRENT_WORKING_DIR = process.cwd();\nvar app = (0, _express2.default)();\n\n//comment out before building for production\n_devBundle2.default.compile(app);\n\n// parse body params and attache them to req.body\napp.use(_bodyParser2.default.json());\napp.use(_bodyParser2.default.urlencoded({ extended: true }));\napp.use((0, _cookieParser2.default)());\napp.use((0, _compression2.default)());\n// secure apps by setting various HTTP headers\napp.use((0, _helmet2.default)());\n// enable CORS - Cross Origin Resource Sharing\napp.use((0, _cors2.default)());\n\napp.use(\"/dist\", _express2.default.static(_path2.default.join(CURRENT_WORKING_DIR, \"dist\")));\n\n// mount routes\napp.use(\"/\", _user2.default);\napp.use(\"/\", _auth2.default);\napp.use(\"/\", _media2.default);\napp.use(\"/\", _gps2.default);\n\napp.get(\"*\", function (req, res) {\n  var sheetsRegistry = new _jss.SheetsRegistry();\n  var theme = (0, _styles.createMuiTheme)({\n    palette: {\n      primary: {\n        light: \"#757de8\",\n        main: \"#3f51b5\",\n        dark: \"#002984\",\n        contrastText: \"#fff\"\n      },\n      secondary: {\n        light: \"#ff79b0\",\n        main: \"#ff4081\",\n        dark: \"#c60055\",\n        contrastText: \"#000\"\n      },\n      openTitle: _colors.indigo[\"400\"],\n      protectedTitle: _colors.pink[\"400\"],\n      type: \"light\"\n    }\n  });\n  var generateClassName = (0, _styles.createGenerateClassName)();\n  var context = {};\n  var markup = _server2.default.renderToString(_react2.default.createElement(\n    _StaticRouter2.default,\n    { location: req.url, context: context },\n    _react2.default.createElement(\n      _JssProvider2.default,\n      {\n        registry: sheetsRegistry,\n        generateClassName: generateClassName\n      },\n      _react2.default.createElement(\n        _styles.MuiThemeProvider,\n        { theme: theme, sheetsManager: new Map() },\n        _react2.default.createElement(_MainRouter2.default, null)\n      )\n    )\n  ));\n  if (context.url) {\n    return res.redirect(303, context.url);\n  }\n  var css = sheetsRegistry.toString();\n  res.status(200).send((0, _template2.default)({\n    markup: markup,\n    css: css\n  }));\n});\n\n// Catch unauthorised errors\napp.use(function (err, req, res, next) {\n  if (err.name === \"UnauthorizedError\") {\n    res.status(401).json({ error: err.name + \": \" + err.message });\n  }\n});\n\nvar _default = app;\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"/Users/xaviourha/summer_project/lifelog/server/express.js\");\n  reactHotLoader.register(app, \"app\", \"/Users/xaviourha/summer_project/lifelog/server/express.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/xaviourha/summer_project/lifelog/server/express.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/express.js?");

/***/ }),

/***/ "./server/helpers/dbErrorHandler.js":
/*!******************************************!*\
  !*** ./server/helpers/dbErrorHandler.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\n/**\n * Get unique error field name\n */\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\n(function () {\n    var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n    enterModule && enterModule(module);\n})();\n\nvar getUniqueErrorMessage = function getUniqueErrorMessage(err) {\n    var output = void 0;\n    try {\n        var fieldName = err.message.substring(err.message.lastIndexOf('.$') + 2, err.message.lastIndexOf('_1'));\n        output = fieldName.charAt(0).toUpperCase() + fieldName.slice(1) + ' already exists';\n    } catch (ex) {\n        output = 'Unique field already exists';\n    }\n\n    return output;\n};\n\n/**\n * Get the error message from error object\n */\nvar getErrorMessage = function getErrorMessage(err) {\n    var message = '';\n\n    if (err.code) {\n        switch (err.code) {\n            case 11000:\n            case 11001:\n                message = getUniqueErrorMessage(err);\n                break;\n            default:\n                message = 'Something went wrong';\n        }\n    } else {\n        for (var errName in err.errors) {\n            if (err.errors[errName].message) message = err.errors[errName].message;\n        }\n    }\n\n    return message;\n};\n\nvar _default = { getErrorMessage: getErrorMessage };\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n    var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(getUniqueErrorMessage, 'getUniqueErrorMessage', '/Users/xaviourha/summer_project/lifelog/server/helpers/dbErrorHandler.js');\n    reactHotLoader.register(getErrorMessage, 'getErrorMessage', '/Users/xaviourha/summer_project/lifelog/server/helpers/dbErrorHandler.js');\n    reactHotLoader.register(_default, 'default', '/Users/xaviourha/summer_project/lifelog/server/helpers/dbErrorHandler.js');\n    leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/helpers/dbErrorHandler.js?");

/***/ }),

/***/ "./server/models/gps.model.js":
/*!************************************!*\
  !*** ./server/models/gps.model.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar GPSSchema = new _mongoose2.default.Schema({\n  UploadBy: { type: _mongoose2.default.Schema.ObjectId, ref: \"User\" },\n  LINE_ID: {\n    type: Number,\n    required: \"need to number\"\n  },\n  RCR: {\n    type: String,\n    default: \"\",\n    required: \"need something\"\n  },\n  VALID: {\n    type: String,\n    default: \"SPS\"\n  },\n  UTC_DATE: {\n    type: Date\n  },\n  UTC_TIME: {\n    type: String\n  },\n  LOCAL_TIME: {\n    type: String\n  },\n  LATITUDE: {\n    type: Number,\n    required: \"Latitude is needed\"\n  },\n  NS: {\n    type: String\n  },\n  LONGITUDE: {\n    type: Number,\n    required: \"Longitude is needed\"\n  },\n  EW: {\n    type: String\n  },\n  ALTITUDE: {\n    type: Number,\n    required: \"Altitude is needed\"\n  },\n  SPEED: {\n    type: Number,\n    required: \"Speed is needed\"\n  },\n  HEADING: {\n    type: Number,\n    required: \"Heading is needed\"\n  },\n  GX: {\n    type: Number\n  },\n  GY: {\n    type: Number\n  },\n  GZ: {\n    type: Number\n  },\n  file: {\n    data: Buffer,\n    contentType: String\n  }\n});\n\nvar _default = _mongoose2.default.model(\"GPS\", GPSSchema);\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(GPSSchema, \"GPSSchema\", \"/Users/xaviourha/summer_project/lifelog/server/models/gps.model.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/xaviourha/summer_project/lifelog/server/models/gps.model.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/models/gps.model.js?");

/***/ }),

/***/ "./server/models/media.model.js":
/*!**************************************!*\
  !*** ./server/models/media.model.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _crypto = __webpack_require__(/*! crypto */ \"crypto\");\n\nvar _crypto2 = _interopRequireDefault(_crypto);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar MediaSchema = new _mongoose2.default.Schema({\n  text: {\n    type: String\n  },\n  photo: {\n    data: Buffer,\n    contentType: String\n  },\n  likes: [{ type: _mongoose2.default.Schema.ObjectId, ref: \"User\" }],\n  mediaedBy: { type: _mongoose2.default.Schema.ObjectId, ref: \"User\" },\n  created: {\n    type: Date,\n    default: Date.now\n  },\n  taken: {\n    type: Date,\n    required: \"Date is required\"\n  },\n  longitude: {\n    type: Number,\n    required: \"Longitude is required\"\n  },\n  latitude: {\n    type: Number,\n    required: \"Latitude is required\"\n  }\n});\n\nvar _default = _mongoose2.default.model(\"Media\", MediaSchema);\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(MediaSchema, \"MediaSchema\", \"/Users/xaviourha/summer_project/lifelog/server/models/media.model.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/xaviourha/summer_project/lifelog/server/models/media.model.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/models/media.model.js?");

/***/ }),

/***/ "./server/models/user.model.js":
/*!*************************************!*\
  !*** ./server/models/user.model.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _crypto = __webpack_require__(/*! crypto */ \"crypto\");\n\nvar _crypto2 = _interopRequireDefault(_crypto);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar UserSchema = new _mongoose2.default.Schema({\n  name: {\n    type: String,\n    trim: true,\n    required: 'Name is required'\n  },\n  email: {\n    type: String,\n    trim: true,\n    unique: 'Email already exists',\n    match: [/.+\\@.+\\..+/, 'Please fill a valid email address'],\n    required: 'Email is required'\n  },\n  hashed_password: {\n    type: String,\n    required: \"Password is required\"\n  },\n  salt: String,\n  updated: Date,\n  created: {\n    type: Date,\n    default: Date.now\n  }\n});\n\nUserSchema.virtual('password').set(function (password) {\n  this._password = password;\n  this.salt = this.makeSalt();\n  this.hashed_password = this.encryptPassword(password);\n}).get(function () {\n  return this._password;\n});\n\nUserSchema.path('hashed_password').validate(function (v) {\n  if (this._password && this._password.length < 6) {\n    this.invalidate('password', 'Password must be at least 6 characters.');\n  }\n  if (this.isNew && !this._password) {\n    this.invalidate('password', 'Password is required');\n  }\n}, null);\n\nUserSchema.methods = {\n  authenticate: function authenticate(plainText) {\n    return this.encryptPassword(plainText) === this.hashed_password;\n  },\n  encryptPassword: function encryptPassword(password) {\n    if (!password) return '';\n    try {\n      return _crypto2.default.createHmac('sha1', this.salt).update(password).digest('hex');\n    } catch (err) {\n      return '';\n    }\n  },\n  makeSalt: function makeSalt() {\n    return Math.round(new Date().valueOf() * Math.random()) + '';\n  }\n};\n\nvar _default = _mongoose2.default.model('User', UserSchema);\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(UserSchema, 'UserSchema', '/Users/xaviourha/summer_project/lifelog/server/models/user.model.js');\n  reactHotLoader.register(_default, 'default', '/Users/xaviourha/summer_project/lifelog/server/models/user.model.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/models/user.model.js?");

/***/ }),

/***/ "./server/routes/auth.routes.js":
/*!**************************************!*\
  !*** ./server/routes/auth.routes.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _auth = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar router = _express2.default.Router();\n\nrouter.route('/auth/signin').post(_auth2.default.signin);\nrouter.route('/auth/signout').get(_auth2.default.signout);\n\nvar _default = router;\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, 'router', '/Users/xaviourha/summer_project/lifelog/server/routes/auth.routes.js');\n  reactHotLoader.register(_default, 'default', '/Users/xaviourha/summer_project/lifelog/server/routes/auth.routes.js');\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/routes/auth.routes.js?");

/***/ }),

/***/ "./server/routes/gps.routes.js":
/*!*************************************!*\
  !*** ./server/routes/gps.routes.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _user = __webpack_require__(/*! ../controllers/user.controller */ \"./server/controllers/user.controller.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _auth = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nvar _gps = __webpack_require__(/*! ../controllers/gps.controller */ \"./server/controllers/gps.controller.js\");\n\nvar _gps2 = _interopRequireDefault(_gps);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar router = _express2.default.Router();\n\nrouter.route(\"/api/gps/new/:userId\").post(_auth2.default.requireSignin, _gps2.default.create);\n\nrouter.route(\"/api/gps/by/:userId\").get(_gps2.default.listByUser);\n\nrouter.param(\"userId\", _user2.default.userByID);\n\nvar _default = router;\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"/Users/xaviourha/summer_project/lifelog/server/routes/gps.routes.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/xaviourha/summer_project/lifelog/server/routes/gps.routes.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/routes/gps.routes.js?");

/***/ }),

/***/ "./server/routes/media.routes.js":
/*!***************************************!*\
  !*** ./server/routes/media.routes.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _user = __webpack_require__(/*! ../controllers/user.controller */ \"./server/controllers/user.controller.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _auth = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nvar _media = __webpack_require__(/*! ../controllers/media.controller */ \"./server/controllers/media.controller.js\");\n\nvar _media2 = _interopRequireDefault(_media);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar router = _express2.default.Router();\n\nrouter.route(\"/api/medias/new/:userId\").post(_auth2.default.requireSignin, _media2.default.create);\n\nrouter.route(\"/api/medias/photo/:mediaId\").get(_media2.default.photo);\n\nrouter.route(\"/api/medias/by/:userId\").get(_auth2.default.requireSignin, _media2.default.listByUser);\n\nrouter.route(\"/api/medias/like\").put(_auth2.default.requireSignin, _media2.default.like);\nrouter.route(\"/api/medias/unlike\").put(_auth2.default.requireSignin, _media2.default.unlike);\n\nrouter.route(\"/api/medias/:mediaId\").delete(_auth2.default.requireSignin, _media2.default.isMediaer, _media2.default.remove);\n\nrouter.param(\"userId\", _user2.default.userByID);\nrouter.param(\"mediaId\", _media2.default.mediaByID);\n\nvar _default = router;\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"/Users/xaviourha/summer_project/lifelog/server/routes/media.routes.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/xaviourha/summer_project/lifelog/server/routes/media.routes.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/routes/media.routes.js?");

/***/ }),

/***/ "./server/routes/user.routes.js":
/*!**************************************!*\
  !*** ./server/routes/user.routes.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _user = __webpack_require__(/*! ../controllers/user.controller */ \"./server/controllers/user.controller.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _auth = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar router = _express2.default.Router();\n\nrouter.route(\"/api/users/defaultphoto\").get(_user2.default.defaultPhoto);\n\nrouter.route(\"/api/users\").get(_user2.default.list).post(_user2.default.create);\n\nrouter.route(\"/api/users/:userId\").get(_auth2.default.requireSignin, _user2.default.read).put(_auth2.default.requireSignin, _auth2.default.hasAuthorization, _user2.default.update).delete(_auth2.default.requireSignin, _auth2.default.hasAuthorization, _user2.default.remove);\n\nrouter.param(\"userId\", _user2.default.userByID);\n\nvar _default = router;\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"/Users/xaviourha/summer_project/lifelog/server/routes/user.routes.js\");\n  reactHotLoader.register(_default, \"default\", \"/Users/xaviourha/summer_project/lifelog/server/routes/user.routes.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/routes/user.routes.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _config = __webpack_require__(/*! ./../config/config */ \"./config/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _express = __webpack_require__(/*! ./express */ \"./server/express.js\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// Connection URL\n_mongoose2.default.Promise = global.Promise;\n_mongoose2.default.connect(_config2.default.mongoUri);\n_mongoose2.default.connection.on('error', function () {\n  throw new Error('unable to connect to database: ' + mongoUri);\n});\n\n_express2.default.listen(_config2.default.port, function (err) {\n  if (err) {\n    console.log(err);\n  }\n  console.info('Server started on port %s.', _config2.default.port);\n});\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n(function () {\n  var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n  enterModule && enterModule(module);\n})();\n\nvar _default = function _default(_ref) {\n  var markup = _ref.markup,\n      css = _ref.css;\n\n  return \"<!doctype html>\\n      <html lang=\\\"en\\\">\\n        <head>\\n          <meta charset=\\\"utf-8\\\">\\n          <title>Lifelogging System</title>\\n          <link rel=\\\"stylesheet\\\" href=\\\"https://fonts.googleapis.com/css?family=Roboto:100,300,400\\\">\\n          <link rel=\\\"stylesheet\\\" href=\\\"https://fonts.googleapis.com/icon?family=Material+Icons\\\">\\n        </head>\\n        <body style=\\\"margin:0\\\">\\n          <div id=\\\"root\\\">\" + markup + \"</div>\\n          <style id=\\\"jss-server-side\\\">\" + css + \"</style>\\n          <script type=\\\"text/javascript\\\" src=\\\"/dist/bundle.js\\\"></script>\\n          <script src=\\\"https://maps.googleapis.com/maps/api/js?key=AIzaSyCzQNpK8OSEwzED8BFCUenPoMRdfBOKtHY&libraries=places&callback\\\" async></script>\\n\\n        </body>\\n      </html>\";\n};\n\nexports.default = _default;\n;\n\n(function () {\n  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n  var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"/Users/xaviourha/summer_project/lifelog/template.js\");\n  leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./template.js?");

/***/ }),

/***/ "./webpack.config.client.js":
/*!**********************************!*\
  !*** ./webpack.config.client.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\n(function () {\n    var enterModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").enterModule;\n\n    enterModule && enterModule(module);\n})();\n\nvar path = __webpack_require__(/*! path */ \"path\");\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\nvar CURRENT_WORKING_DIR = process.cwd();\n\nvar config = {\n    name: \"browser\",\n    mode: \"development\",\n    devtool: 'eval-source-map',\n    entry: ['react-hot-loader/patch', 'webpack-hot-middleware/client?reload=true', path.join(CURRENT_WORKING_DIR, 'client/main.js')],\n    output: {\n        path: path.join(CURRENT_WORKING_DIR, '/dist'),\n        filename: 'bundle.js',\n        publicPath: '/dist/'\n    },\n    module: {\n        rules: [{\n            test: /\\.jsx?$/,\n            exclude: /node_modules/,\n            use: ['babel-loader']\n        }, {\n            test: /\\.(ttf|eot|svg|gif|jpg|png)(\\?[\\s\\S]+)?$/,\n            use: 'file-loader'\n        }]\n    }, plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()]\n};\n\nmodule.exports = config;\n;\n\n(function () {\n    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").default;\n\n    var leaveModule = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\").leaveModule;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(CURRENT_WORKING_DIR, 'CURRENT_WORKING_DIR', '/Users/xaviourha/summer_project/lifelog/webpack.config.client.js');\n    reactHotLoader.register(config, 'config', '/Users/xaviourha/summer_project/lifelog/webpack.config.client.js');\n    leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./webpack.config.client.js?");

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./server/server.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/xaviourha/summer_project/lifelog/server/server.js */\"./server/server.js\");\n\n\n//# sourceURL=webpack:///multi_./server/server.js?");

/***/ }),

/***/ "@google/maps/lib/index":
/*!*****************************************!*\
  !*** external "@google/maps/lib/index" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@google/maps/lib/index\");\n\n//# sourceURL=webpack:///external_%22@google/maps/lib/index%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");\n\n//# sourceURL=webpack:///external_%22crypto%22?");

/***/ }),

/***/ "exif-js":
/*!**************************!*\
  !*** external "exif-js" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"exif-js\");\n\n//# sourceURL=webpack:///external_%22exif-js%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-jwt":
/*!******************************!*\
  !*** external "express-jwt" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-jwt\");\n\n//# sourceURL=webpack:///external_%22express-jwt%22?");

/***/ }),

/***/ "fast-csv":
/*!***************************!*\
  !*** external "fast-csv" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fast-csv\");\n\n//# sourceURL=webpack:///external_%22fast-csv%22?");

/***/ }),

/***/ "formidable":
/*!*****************************!*\
  !*** external "formidable" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"formidable\");\n\n//# sourceURL=webpack:///external_%22formidable%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "material-ui-icons/ArrowForward":
/*!*************************************************!*\
  !*** external "material-ui-icons/ArrowForward" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui-icons/ArrowForward\");\n\n//# sourceURL=webpack:///external_%22material-ui-icons/ArrowForward%22?");

/***/ }),

/***/ "material-ui-icons/BubbleChart":
/*!************************************************!*\
  !*** external "material-ui-icons/BubbleChart" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui-icons/BubbleChart\");\n\n//# sourceURL=webpack:///external_%22material-ui-icons/BubbleChart%22?");

/***/ }),

/***/ "material-ui-icons/Delete":
/*!*******************************************!*\
  !*** external "material-ui-icons/Delete" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui-icons/Delete\");\n\n//# sourceURL=webpack:///external_%22material-ui-icons/Delete%22?");

/***/ }),

/***/ "material-ui-icons/DeleteForever":
/*!**************************************************!*\
  !*** external "material-ui-icons/DeleteForever" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui-icons/DeleteForever\");\n\n//# sourceURL=webpack:///external_%22material-ui-icons/DeleteForever%22?");

/***/ }),

/***/ "material-ui-icons/Drafts":
/*!*******************************************!*\
  !*** external "material-ui-icons/Drafts" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui-icons/Drafts\");\n\n//# sourceURL=webpack:///external_%22material-ui-icons/Drafts%22?");

/***/ }),

/***/ "material-ui-icons/Edit":
/*!*****************************************!*\
  !*** external "material-ui-icons/Edit" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui-icons/Edit\");\n\n//# sourceURL=webpack:///external_%22material-ui-icons/Edit%22?");

/***/ }),

/***/ "material-ui-icons/FindInPage":
/*!***********************************************!*\
  !*** external "material-ui-icons/FindInPage" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui-icons/FindInPage\");\n\n//# sourceURL=webpack:///external_%22material-ui-icons/FindInPage%22?");

/***/ }),

/***/ "material-ui-icons/Home":
/*!*****************************************!*\
  !*** external "material-ui-icons/Home" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui-icons/Home\");\n\n//# sourceURL=webpack:///external_%22material-ui-icons/Home%22?");

/***/ }),

/***/ "material-ui-icons/Https":
/*!******************************************!*\
  !*** external "material-ui-icons/Https" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui-icons/Https\");\n\n//# sourceURL=webpack:///external_%22material-ui-icons/Https%22?");

/***/ }),

/***/ "material-ui-icons/LocationOn":
/*!***********************************************!*\
  !*** external "material-ui-icons/LocationOn" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui-icons/LocationOn\");\n\n//# sourceURL=webpack:///external_%22material-ui-icons/LocationOn%22?");

/***/ }),

/***/ "material-ui-icons/Person":
/*!*******************************************!*\
  !*** external "material-ui-icons/Person" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui-icons/Person\");\n\n//# sourceURL=webpack:///external_%22material-ui-icons/Person%22?");

/***/ }),

/***/ "material-ui-icons/PhotoCamera":
/*!************************************************!*\
  !*** external "material-ui-icons/PhotoCamera" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui-icons/PhotoCamera\");\n\n//# sourceURL=webpack:///external_%22material-ui-icons/PhotoCamera%22?");

/***/ }),

/***/ "material-ui-icons/Star":
/*!*****************************************!*\
  !*** external "material-ui-icons/Star" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui-icons/Star\");\n\n//# sourceURL=webpack:///external_%22material-ui-icons/Star%22?");

/***/ }),

/***/ "material-ui/AppBar":
/*!*************************************!*\
  !*** external "material-ui/AppBar" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/AppBar\");\n\n//# sourceURL=webpack:///external_%22material-ui/AppBar%22?");

/***/ }),

/***/ "material-ui/Avatar":
/*!*************************************!*\
  !*** external "material-ui/Avatar" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Avatar\");\n\n//# sourceURL=webpack:///external_%22material-ui/Avatar%22?");

/***/ }),

/***/ "material-ui/Button":
/*!*************************************!*\
  !*** external "material-ui/Button" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Button\");\n\n//# sourceURL=webpack:///external_%22material-ui/Button%22?");

/***/ }),

/***/ "material-ui/Card":
/*!***********************************!*\
  !*** external "material-ui/Card" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Card\");\n\n//# sourceURL=webpack:///external_%22material-ui/Card%22?");

/***/ }),

/***/ "material-ui/Dialog":
/*!*************************************!*\
  !*** external "material-ui/Dialog" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Dialog\");\n\n//# sourceURL=webpack:///external_%22material-ui/Dialog%22?");

/***/ }),

/***/ "material-ui/Divider":
/*!**************************************!*\
  !*** external "material-ui/Divider" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Divider\");\n\n//# sourceURL=webpack:///external_%22material-ui/Divider%22?");

/***/ }),

/***/ "material-ui/Grid":
/*!***********************************!*\
  !*** external "material-ui/Grid" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Grid\");\n\n//# sourceURL=webpack:///external_%22material-ui/Grid%22?");

/***/ }),

/***/ "material-ui/GridList":
/*!***************************************!*\
  !*** external "material-ui/GridList" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/GridList\");\n\n//# sourceURL=webpack:///external_%22material-ui/GridList%22?");

/***/ }),

/***/ "material-ui/GridList/GridListTile":
/*!****************************************************!*\
  !*** external "material-ui/GridList/GridListTile" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/GridList/GridListTile\");\n\n//# sourceURL=webpack:///external_%22material-ui/GridList/GridListTile%22?");

/***/ }),

/***/ "material-ui/GridList/GridListTileBar":
/*!*******************************************************!*\
  !*** external "material-ui/GridList/GridListTileBar" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/GridList/GridListTileBar\");\n\n//# sourceURL=webpack:///external_%22material-ui/GridList/GridListTileBar%22?");

/***/ }),

/***/ "material-ui/Icon":
/*!***********************************!*\
  !*** external "material-ui/Icon" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Icon\");\n\n//# sourceURL=webpack:///external_%22material-ui/Icon%22?");

/***/ }),

/***/ "material-ui/IconButton":
/*!*****************************************!*\
  !*** external "material-ui/IconButton" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/IconButton\");\n\n//# sourceURL=webpack:///external_%22material-ui/IconButton%22?");

/***/ }),

/***/ "material-ui/List":
/*!***********************************!*\
  !*** external "material-ui/List" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/List\");\n\n//# sourceURL=webpack:///external_%22material-ui/List%22?");

/***/ }),

/***/ "material-ui/List/ListItem":
/*!********************************************!*\
  !*** external "material-ui/List/ListItem" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/List/ListItem\");\n\n//# sourceURL=webpack:///external_%22material-ui/List/ListItem%22?");

/***/ }),

/***/ "material-ui/List/ListItemIcon":
/*!************************************************!*\
  !*** external "material-ui/List/ListItemIcon" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/List/ListItemIcon\");\n\n//# sourceURL=webpack:///external_%22material-ui/List/ListItemIcon%22?");

/***/ }),

/***/ "material-ui/List/ListItemText":
/*!************************************************!*\
  !*** external "material-ui/List/ListItemText" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/List/ListItemText\");\n\n//# sourceURL=webpack:///external_%22material-ui/List/ListItemText%22?");

/***/ }),

/***/ "material-ui/List/ListSubheader":
/*!*************************************************!*\
  !*** external "material-ui/List/ListSubheader" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/List/ListSubheader\");\n\n//# sourceURL=webpack:///external_%22material-ui/List/ListSubheader%22?");

/***/ }),

/***/ "material-ui/Paper":
/*!************************************!*\
  !*** external "material-ui/Paper" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Paper\");\n\n//# sourceURL=webpack:///external_%22material-ui/Paper%22?");

/***/ }),

/***/ "material-ui/TextField":
/*!****************************************!*\
  !*** external "material-ui/TextField" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/TextField\");\n\n//# sourceURL=webpack:///external_%22material-ui/TextField%22?");

/***/ }),

/***/ "material-ui/Toolbar":
/*!**************************************!*\
  !*** external "material-ui/Toolbar" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Toolbar\");\n\n//# sourceURL=webpack:///external_%22material-ui/Toolbar%22?");

/***/ }),

/***/ "material-ui/Typography":
/*!*****************************************!*\
  !*** external "material-ui/Typography" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/Typography\");\n\n//# sourceURL=webpack:///external_%22material-ui/Typography%22?");

/***/ }),

/***/ "material-ui/colors":
/*!*************************************!*\
  !*** external "material-ui/colors" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/colors\");\n\n//# sourceURL=webpack:///external_%22material-ui/colors%22?");

/***/ }),

/***/ "material-ui/styles":
/*!*************************************!*\
  !*** external "material-ui/styles" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"material-ui/styles\");\n\n//# sourceURL=webpack:///external_%22material-ui/styles%22?");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"moment\");\n\n//# sourceURL=webpack:///external_%22moment%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader":
/*!***********************************!*\
  !*** external "react-hot-loader" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader%22?");

/***/ }),

/***/ "react-jss/lib/JssProvider":
/*!********************************************!*\
  !*** external "react-jss/lib/JssProvider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-jss/lib/JssProvider\");\n\n//# sourceURL=webpack:///external_%22react-jss/lib/JssProvider%22?");

/***/ }),

/***/ "react-jss/lib/jss":
/*!************************************!*\
  !*** external "react-jss/lib/jss" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-jss/lib/jss\");\n\n//# sourceURL=webpack:///external_%22react-jss/lib/jss%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "react-router-dom/StaticRouter":
/*!************************************************!*\
  !*** external "react-router-dom/StaticRouter" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom/StaticRouter\");\n\n//# sourceURL=webpack:///external_%22react-router-dom/StaticRouter%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ })

/******/ });