"use strict";

var User = require("../models/user");

var jwt = require("jsonwebtoken");

function isLogin(req, res, next) {
  var token = req.headers.token;

  if (token) {
    jwt.verify(token, process.env.ACCESS_TOKEN, function (err, decode) {
      if (!err) {
        User.findById(decode.userId).then(function (user) {
          if (user && user.statusDelete == false) {
            req.userId = decode.userId;
            next();
          } else {
            res.status(500).json({
              message: "access denied"
            });
          }
        })["catch"](function (err) {});
      } else {
        res.status(500).json({
          message: "access denied"
        });
      }
    });
  } else {
    res.status(500).json({
      message: "access denied"
    });
  }
}

module.exports = isLogin;