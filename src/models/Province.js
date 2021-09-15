const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var provinceSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name is requires"]
    },
    country: {type: Schema.Types.ObjectId, ref: 'Country'},
  },
  {
    timestamps: true
  }
);

const Province = mongoose.model("Province", provinceSchema);

module.exports = Province;
