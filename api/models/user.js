const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, minLength: 10 },
  password: { type: String, required: true, minLength: 4 },
  username: { type: String, required: true, minLength: 4 },
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
