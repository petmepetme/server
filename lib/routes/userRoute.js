"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _userController = require("../controllers/userController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import { getLinks, createLink, deleteAll } from '../controllers/link'
var router = _express["default"].Router();
/* Link routing. */
// router.get('/', function(req, res, next) {
//     // res.render('index', { title: 'Express' });
//     res.status(200).json({
//       message: `index page`
//     })
//   });


router.get('/', _userController.getUser);
router.post('/register', _userController.register);
router.post('/login', _userController.login); // router.post('/', createLink);
// router.delete('/', deleteAll)

var _default = router;
exports["default"] = _default;