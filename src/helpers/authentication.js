require('dotenv').config()
let jwt = require('jsonwebtoken')

class Authentication {
  static isLogin(req,res, next) {
    let decoded = jwt.verify(req.headers.token, process.env.JWT_SECRET, (err, decoded) => {
      if ( err ) {
          console.log((err));
          res.status(401).json({
              message: `You're not a user`
          })
      }
      else {
          req.data = decoded
          console.log(req.data, 'ini isLogin');
          next()
      }
    })
  }
}

module.exports = Authentication