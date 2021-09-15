const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var citySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name is requires"]
    },
    province: {type: Schema.Types.ObjectId, ref: 'Province'},
  },
  {
    timestamps: true
  }
);

const City = mongoose.model("City", citySchema);

module.exports = City;
