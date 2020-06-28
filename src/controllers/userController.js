import User from '../models/user'

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
    })}
}