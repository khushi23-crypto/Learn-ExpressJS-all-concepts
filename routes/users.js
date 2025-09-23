
const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  secret: String
});

userSchema.plugin(plm);   // 🔥 required

module.exports = mongoose.model("User", userSchema);
