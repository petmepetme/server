const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var districtSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name is requires"]
    },
    city: {type: Schema.Types.ObjectId, ref: 'City'},
  },
  {
    timestamps: true
  }
);

const District = mongoose.model("District", districtSchema);

module.exports = District;
