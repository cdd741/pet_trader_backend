const mongoose = require("mongoose");

const userAccountSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    dropDups: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
    dropDups: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
});

const UserAccount = mongoose.model("UserAccount", userAccountSchema);

module.exports = UserAccount;
