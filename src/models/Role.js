const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var roleSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name is requires"]
    },
    // user: {type: Schema.Types.ObjectId, ref: 'User'},
  },
  {
    timestamps: true
  }
);

const Role = mongoose.model("Role", roleSchema);

module.exports = Role;
