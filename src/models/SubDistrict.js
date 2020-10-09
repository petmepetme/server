const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var subDistrictSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name is requires"]
    },
    district: {type: Schema.Types.ObjectId, ref: 'District'},
  },
  {
    timestamps: true
  }
);

const SubDistrict = mongoose.model("SubDistrict", subDistrictSchema);

module.exports = SubDistrict;
