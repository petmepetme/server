const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var nationalitySchema = new Schema(
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

const Nationality = mongoose.model("Nationality", nationalitySchema);

module.exports = Nationality;
