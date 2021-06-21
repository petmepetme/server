"use strict";

var bcrypt = require('bcryptjs');

function checkPassword(salt, password, email) {
  return new Promise(function (resolve, reject) {
    var emailPassword = email + password;
    bcrypt.compare(emailPassword, salt, function (err, data) {
      if (data) {
        resolve(data);
      } else {
        reject(err);
      }
    });
  });
}

module.exports = checkPassword; // export default checkPassword