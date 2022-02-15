const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  role: String,
  region: String,
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
