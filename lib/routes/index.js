"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _userRoute = _interopRequireDefault(require("./userRoute"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();
/* GET home page. */


router.get('/', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  res.status(200).json({
    message: "index page"
  });
});
router.use('/profile', _userRoute["default"]);
var _default = router;
exports["default"] = _default;