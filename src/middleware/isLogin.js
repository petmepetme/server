const User = require("../models/user")
const jwt = require("jsonwebtoken")

function isLogin (req,res,next) {
  let token = req.headers.token
  
  if(token) {
    jwt.verify(
      token, process.env.ACCESS_TOKEN, (err,decode) => {
       if(!err) {
        User.findById(decode.userId)
        .then((user) => {
          if(user && user.statusDelete == false) {
            req.userId = decode.userId
            next()
          } else {
            res.status(500).json({
              message: `access denied`
            })
          }
        }).catch((err) => {});
       } else {
        res.status(500).json({
          message: `access denied`
        })
       }
      })
  } else {
    res.status(500).json({
      message: `access denied`
    })
  }

}

module.exports = isLogin