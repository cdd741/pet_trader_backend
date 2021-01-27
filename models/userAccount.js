const mongoose = require("mongoose");

const userAccountSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  passowrd: {
    type: String,
    required: true,
  },
});

const UserAccount = mongoose.model("UserAccount", userAccountSchema);

module.exports = UserAccount;
