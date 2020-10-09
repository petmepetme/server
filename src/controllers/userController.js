import User from '../models/User.js'
import checkPassword from "../helpers/checkPassword"
import jwt from 'jsonwebtoken'
import validateEmail from '../helpers/validateEmail'

class UserController {
  static getUser(req,res) {
    User.find({})
    .then((data) => {
      res.status(200).json({
        data,
        message: `get user`
      })
    })
    .catch((err) => {
      res.status(500).json({
        err,
        message: `data failure to get`
      })
    })
  }

  static register(req,res) {
    let dataUser = new User({
      name : req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    })

    dataUser.save()
      .then((result) => {
        res.status(200).json({
          message : 'signup success'
        })
      })
      .catch((err) => {
        res.status(500).json({
          err,
          message : 'signup failed'
        })
      });
  }
  
  static login(req,res,next) {
    try {
      let user = null
      User.findOne({ 
        $or:[
          {
            'email':req.body.email,
            'username':req.body.username
          }
          // {'username':req.body.username}
        ]
      })
      .then(function(dataUser){
          if(dataUser) {
            user = dataUser
            const checkUserPass = checkPassword(user.password, req.body.password, user.email)
            checkUserPass
            .then((value) => {
              jwt.sign({
                userId : user._id,
                username : user.username
              }, process.env.DATA_ACCESS, function(err,token){
                if(!err){
                    res.status(200).json({
                        name : user.name,
                        username : user.username,
                        email: user.email,
                        token : token
                    })
                } else {
                    res.status(500).json({
                        message : `Token not valid`
                    })
                }
              })
            })
            .catch((err) => {
              console.log(`err`, err);
              res.status(404).json({
                message : `Email and password didn't match`
              })
            })
            // return checkUserPass
          }else {
            res.status(404).json({
              message : `Username or email not found`
            })
          }
      })
      .catch((err) => {
          res.status(500).json({
              message : `Please use correct username or email`
          })
      })
    }
    catch (error) {
      console.log(`error`, error);
    }
  }

  static fillBio(req, res, next) {
    const data = {
      roleId: req.body.roleId,
      fullname: req.body.fullname,
      phoneNumber: req.body.phoneNumber,
      address: req.body.address,
      subDistrictId: req.body.subDistrictId,
      cityId: req.body.cityId,
      provinceId: req.body.provinceId,
      countryId: req.body.countryId,
      nationalityId: req.body.nationalityId,
      status: req.body.status,
      bio: req.body.bio,
      photo: req.body.photo,
      token: req.body.token,
      password: req.body.password,
      pin: req.body.pin,
      ktp: req.body.ktp,
      dateBirth: req.body.dateBirth,
      placeBirth: req.body.placeBirth,
      isCompleteBio: req.body.isCompleteBio
    }
  }
}

module.exports = UserController