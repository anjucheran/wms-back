module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config/constants.js":
/*!*********************************!*\
  !*** ./src/config/constants.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nconst devConfig = {\n  DB: 'wms-dev',\n  JWT_SECRET: 'thisisasecret'\n};\n\nconst testConfig = {\n  DB: 'wms-test'\n};\n\nconst prodConfig = {\n  DB: 'wms-prod'\n};\n\nconst defaultConfig = {\n  PORT: process.env.PORT || 3000\n};\n\nfunction envConfig(env) {\n  switch (env) {\n    case 'development':\n      return devConfig;\n    case 'test':\n      return testConfig;\n    default:\n      return prodConfig;\n  }\n}\n\nexports.default = Object.assign({}, defaultConfig, envConfig(\"development\"));\n\n//# sourceURL=webpack:///./src/config/constants.js?");

/***/ }),

/***/ "./src/config/database.js":
/*!********************************!*\
  !*** ./src/config/database.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst fs = __webpack_require__(/*! fs */ \"fs\");\n\nmodule.exports = {\n  development: {\n    username: 'root',\n    password: 'password',\n    database: 'wms-dev',\n    host: '127.0.0.1',\n    dialect: 'mysql'\n  },\n  test: {\n    username: 'root',\n    password: 'password',\n    database: 'wms-test',\n    host: '127.0.0.1',\n    dialect: 'mysql'\n  },\n  production: {\n    username: 'root',\n    password: 'password',\n    database: 'wms-prod',\n    host: '127.0.0.1',\n    dialect: 'mysql'\n  }\n};\n\n//# sourceURL=webpack:///./src/config/database.js?");

/***/ }),

/***/ "./src/config/middlewares.js":
/*!***********************************!*\
  !*** ./src/config/middlewares.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _morgan = __webpack_require__(/*! morgan */ \"morgan\");\n\nvar _morgan2 = _interopRequireDefault(_morgan);\n\nvar _bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _compression = __webpack_require__(/*! compression */ \"compression\");\n\nvar _compression2 = _interopRequireDefault(_compression);\n\nvar _helmet = __webpack_require__(/*! helmet */ \"helmet\");\n\nvar _helmet2 = _interopRequireDefault(_helmet);\n\nvar _passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst isDev = \"development\" === 'development';\nconst isProd = \"development\" === 'production';\n\nexports.default = app => {\n  if (isProd) {\n    app.use((0, _compression2.default)());\n    app.use((0, _helmet2.default)());\n  }\n  app.use(_bodyParser2.default.json());\n  app.use(_bodyParser2.default.urlencoded({ extended: true }));\n  app.use(_passport2.default.initialize());\n\n  if (isDev) {\n    app.use((0, _morgan2.default)('dev'));\n  }\n};\n\n//# sourceURL=webpack:///./src/config/middlewares.js?");

/***/ }),

/***/ "./src/database/models/index.js":
/*!**************************************!*\
  !*** ./src/database/models/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__filename) {\n\nvar fs = __webpack_require__(/*! fs */ \"fs\");\nvar path = __webpack_require__(/*! path */ \"path\");\nvar Sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\nvar basename = path.basename(__filename);\nvar env = \"development\" || 'development';\nvar config = __webpack_require__(/*! ../../config/database.js */ \"./src/config/database.js\")[env];\nvar db = {};\n\nif (config.use_env_variable) {\n  var sequelize = new Sequelize(process.env[config.use_env_variable], config);\n} else {\n  var sequelize = new Sequelize(config.database, config.username, config.password, config);\n}\n\nfs.readdirSync('/home/anjuc/Desktop/wms-back/src/database/models').filter(file => {\n  return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';\n}).forEach(file => {\n  var model = sequelize['import'](path.join('/home/anjuc/Desktop/wms-back/src/database/models', file));\n  db[model.name] = model;\n});\n\nObject.keys(db).forEach(modelName => {\n  if (db[modelName].associate) {\n    db[modelName].associate(db);\n  }\n});\n\ndb.sequelize = sequelize;\ndb.Sequelize = Sequelize;\n\nmodule.exports = db;\n/* WEBPACK VAR INJECTION */}.call(this, \"/index.js\"))\n\n//# sourceURL=webpack:///./src/database/models/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _constants = __webpack_require__(/*! ./config/constants */ \"./src/config/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\nvar _middlewares = __webpack_require__(/*! ./config/middlewares */ \"./src/config/middlewares.js\");\n\nvar _middlewares2 = _interopRequireDefault(_middlewares);\n\n__webpack_require__(/*! ./config/database */ \"./src/config/database.js\");\n\nvar _modules = __webpack_require__(/*! ./modules */ \"./src/modules/index.js\");\n\nvar _modules2 = _interopRequireDefault(_modules);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst app = (0, _express2.default)();\n\n(0, _middlewares2.default)(app);\n\napp.get('/', (req, res) => {\n    res.send('Hello World!');\n});\n\n(0, _modules2.default)(app);\n\nconst PORT = _constants2.default.PORT;\n\napp.listen(PORT, err => {\n    if (err) {\n        throw err;\n    } else {\n        console.log(`\n            Server running on port ${PORT}\n            ======================\n            Running on ${\"development\"}\n        `);\n    }\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/index.js":
/*!******************************!*\
  !*** ./src/modules/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _user = __webpack_require__(/*! ./users/user.routes */ \"./src/modules/users/user.routes.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// import postRoutes from './posts/post.routes';\n\nexports.default = app => {\n  app.use('/api/v1/users', _user2.default);\n  // app.use('/api/v1/posts', postRoutes);\n};\n\n//# sourceURL=webpack:///./src/modules/index.js?");

/***/ }),

/***/ "./src/modules/users/user.controllers.js":
/*!***********************************************!*\
  !*** ./src/modules/users/user.controllers.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.signUp = signUp;\nexports.login = login;\n\nvar _httpStatus = __webpack_require__(/*! http-status */ \"http-status\");\n\nvar _httpStatus2 = _interopRequireDefault(_httpStatus);\n\nvar _models = __webpack_require__(/*! ../../database/models */ \"./src/database/models/index.js\");\n\nvar _models2 = _interopRequireDefault(_models);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst User = _models2.default.User;\n\nasync function signUp(req, res) {\n  try {\n    const user = await User.create(req.body);\n    return res.status(_httpStatus2.default.CREATED).json(user);\n  } catch (e) {\n    console.log(e);\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\nfunction login(req, res, next) {\n  res.status(_httpStatus2.default.OK).json(req.user);\n  // res.send(req.user);\n  return next();\n}\n\n// export async function userList(req, res) {\n//   try {\n//     const users = await User.find();\n//     console.log(users);\n//     return res.status(HTTPStatus.CREATED).json(users);\n//   } catch (e) {\n//     return res.status(HTTPStatus.BAD_REQUEST).json(e);\n//   }\n// }\n\n//# sourceURL=webpack:///./src/modules/users/user.controllers.js?");

/***/ }),

/***/ "./src/modules/users/user.routes.js":
/*!******************************************!*\
  !*** ./src/modules/users/user.routes.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _user = __webpack_require__(/*! ./user.controllers */ \"./src/modules/users/user.controllers.js\");\n\nvar userController = _interopRequireWildcard(_user);\n\nvar _auth = __webpack_require__(/*! ../../services/auth.services */ \"./src/services/auth.services.js\");\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nconst routes = new _express.Router();\n\nroutes.post('/signup', userController.signUp);\nroutes.post('/login', _auth.authLocal, userController.login);\n\nexports.default = routes;\n\n//# sourceURL=webpack:///./src/modules/users/user.routes.js?");

/***/ }),

/***/ "./src/services/auth.services.js":
/*!***************************************!*\
  !*** ./src/services/auth.services.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.authLocal = undefined;\n\nvar _passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nvar _passportLocal = __webpack_require__(/*! passport-local */ \"passport-local\");\n\nvar _passportLocal2 = _interopRequireDefault(_passportLocal);\n\nvar _bcryptNodejs = __webpack_require__(/*! bcrypt-nodejs */ \"bcrypt-nodejs\");\n\nvar _models = __webpack_require__(/*! ../database/models */ \"./src/database/models/index.js\");\n\nvar _models2 = _interopRequireDefault(_models);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst User = _models2.default.User;\n\n// local auth\nconst localOpts = {\n  usernameField: 'email'\n};\n\nconst comparePassword = (password, userpass) => {\n  return (0, _bcryptNodejs.compareSync)(password, userpass);\n};\n\nconst localStrategy = new _passportLocal2.default(localOpts, async (email, password, done) => {\n  try {\n    const user = await User.findOne({\n      where: { email: email }\n    });\n    if (user) {\n      console.log(user.dataValues);\n    }\n    if (!user) {\n      return done(null, false);\n    } else if (!comparePassword(password, user.password)) {\n      return done(null, false);\n    }\n    return done(null, user.get());\n  } catch (e) {\n    return done(e, false);\n  }\n});\n\n_passport2.default.use(localStrategy);\n\nconst authLocal = exports.authLocal = _passport2.default.authenticate('local', { session: false });\n\n//# sourceURL=webpack:///./src/services/auth.services.js?");

/***/ }),

/***/ "bcrypt-nodejs":
/*!********************************!*\
  !*** external "bcrypt-nodejs" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt-nodejs\");\n\n//# sourceURL=webpack:///external_%22bcrypt-nodejs%22?");

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

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

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

/***/ "http-status":
/*!******************************!*\
  !*** external "http-status" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http-status\");\n\n//# sourceURL=webpack:///external_%22http-status%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport\");\n\n//# sourceURL=webpack:///external_%22passport%22?");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-local\");\n\n//# sourceURL=webpack:///external_%22passport-local%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"sequelize\");\n\n//# sourceURL=webpack:///external_%22sequelize%22?");

/***/ })

/******/ });