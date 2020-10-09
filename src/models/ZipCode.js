const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var zipCodeSchema = new Schema(
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

const ZipCode = mongoose.model("ZipCode", zipCodeSchema);

module.exports = ZipCode;
