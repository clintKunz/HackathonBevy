const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const UserContract = require('../contracts/User');

const UserSchema = new mongoose.Schema(UserContract);

const salt = bcrypt.genSaltSync(14);

UserSchema.pre('save', function hashPassword(next) {
  bcrypt.hash(this.password, salt, null, (err, hash) => {
    if (err) {
      return next(err);
    }
    this.password = hash;
    console.log(this.password)
    return next();
  });
});
  
UserSchema.methods.validify = function (passwordGuess) {
  return bcrypt.compare(passwordGuess, this.password);
};
 
module.exports = mongoose.model('User', UserSchema);