"use strict";

var bcrypt = require('bcryptjs');

function generatePassword(email, password) {
  return new Promise(function (resolve, reject) {
    var saltRound = 10;
    var emailPassword = email + password;
    bcrypt.genSalt(saltRound, function (err, salt) {
      bcrypt.hash(emailPassword, salt, function (err, hash) {
        if (!err) {
          resolve(hash);
        } else {
          reject(err);
        }
      });
    });
  });
}

module.exports = generatePassword;