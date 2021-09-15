const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var countrySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name is requires"]
    },
  },
  {
    timestamps: true
  }
);

const Country = mongoose.model("Country", countrySchema);

module.exports = Country;
