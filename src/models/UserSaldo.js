const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var userSaldoSchema = new Schema(
  {
    petmePay: {
      type: Number
    },
    ovo: {
      type: Number
    },
    gopay: {
      type: Number
    },
    dana: {
      type: Number
    },
    linkaja: {
      type: Number
    },
    user: {type: Schema.Types.ObjectId, ref: 'User'},
  },
  {
    timestamps: true
  }
);

const UserSaldo = mongoose.model("UserSaldo", userSaldoSchema);

module.exports = UserSaldo;
