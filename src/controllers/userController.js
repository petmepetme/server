import User from '../models/user'
const checkPassword = require("../helpers/checkPassword");
const jwt = require('jsonwebtoken')

// class UserController {
//   getUser: (req,res) => {
//     User.find({})
//     .then((data) => {
//       res.status(200).json({
//         data,
//         message: `get user`
//       })
//     })
//     .catch((err) => {
//       res.status(500).json({
//         err,
//         message: `data failure to get`
//       })
//     })
//   },
//   register: (req,res) => {
//     let dataUser = new User({
//       name : req.body.name,
//       username: req.body.username,
//       email: req.body.email,
//       password: req.body.password,
//     })

//     dataUser.save()
//       .then((result) => {
//         res.status(200).json({
//           message : 'signup success'
//         })
//       })
//       .catch((err) => {
//         res.status(500).json({
//           message : 'signup failed'
//         })
//       });
//   },
  
//   login: (req,res) => {

//     let user = null
    
//     User.findOne({ 
//       $or:[ 
//         {'email':req.body.email}, 
//         {'username':req.body.username}]}
//     )
//     .then(function(dataUser){
      
//         if(dataUser) {
//           user = dataUser
//           return checkPassword(user.password, req.body.password, user.email)
//         }else {
//           res.status(404).json({
//             message : `Email and password didn't match`
//           })
//         }
//     })
//     .then(function(){
//       jwt.sign({
//         userId : user._id,
//         username : user.username
//       }, process.env.DATA_ACCESS, function(err,token){
//         if(!err){
//             res.status(200).json({
//                 name : user.name,
//                 username : user.username,
//                 email: user.email,
//                 statusMarket: user.marketAvailable,
//                 token : token
//             })
//         } else {
//             res.status(500).json({
//                 message : `Token not valid`
//             })
//         }
//       })
//     })
//     .catch(function(){
//         res.status(500).json({
//             message : `Email and password didn't match`
//         })
//     })
//   }
// }

// export default UserController

module.exports = {

  getUser: (req,res) => {
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
  },
  register: (req,res) => {
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
          message : 'signup failed'
        })
      });
  },
  
  login: (req,res) => {
    let user = null
    User.findOne({ 
      // $or:[ 
        'email':req.body.email
        // {'username':req.body.username}
      // ]
    })
    .then(function(dataUser){
      console.log(`dataUser`, dataUser);
        if(dataUser) {
          user = dataUser
          const checkUserPass = checkPassword(user.password, req.body.password, user.email)
          checkUserPass
          .then((value) => {
            console.log(`value`, value);
            jwt.sign({
              userId : user._id,
              username : user.username
            }, process.env.DATA_ACCESS, function(err,token){
              console.log(`err`, err);
              console.log(`token`, token);
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
    // .then(function(){
    //   jwt.sign({
    //     userId : user._id,
    //     username : user.username
    //   }, process.env.DATA_ACCESS, function(err,token){
    //     console.log(`err`, err);
    //     console.log(`token`, token);
    //     if(!err){
    //         res.status(200).json({
    //             name : user.name,
    //             username : user.username,
    //             email: user.email,
    //             token : token
    //         })
    //     } else {
    //         res.status(500).json({
    //             message : `Token not valid`
    //         })
    //     }
    //   })
    // })
    .catch(function(){
        res.status(500).json({
            message : `Please use correct username or email`
        })
    })
  }
}