class Authentication {
  static validateEmail(req,res, next) {
    const email = req.body.email
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(email).toLowerCase())) {
      next()
    } else {
      res.status(417).json({
        message : `Incorrect email format`
      })
    }
  }
}

module.exports = Authentication