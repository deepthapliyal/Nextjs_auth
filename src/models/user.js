const mongoose = require('mongoose');

if (!mongoose.models.User) {
  const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  });

  module.exports = mongoose.model('User', userSchema);
} else {
  module.exports = mongoose.model('User');
}
