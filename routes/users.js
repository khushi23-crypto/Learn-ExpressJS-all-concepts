
/* const mongoose = require("mongoose");

 */
/* const plm = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  secret: String
});

userSchema.plugin(plm);   // 🔥 required

module.exports = mongoose.model("User", userSchema);
 */

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/nayaapp");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,

  },

  password: {
    type: String,
    required: true
  },
  posts: [],
  dp: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },

  fullname: {
    type: String,
    required: true,
  },
});


module.exports = mongoose.model("User", userSchema);
