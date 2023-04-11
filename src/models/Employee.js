const mongoose = require("mongoose")
const {Schema} = mongoose;

const Employee = new Schema({
  userID: Number,
  userName: String,
  Date: Date,
  punchIn: Date,
  punchOut: Date,
});

module.exports = mongoose.model("Employee", Employee)