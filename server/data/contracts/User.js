const mongoose = require('mongoose');

module.exports = {
  firstName: { type: String, maxlength: 64 },
  lastName: { type: String, maxlength: 64 },
  username: { type: String, maxlength: 32 },
  email: { type: String, required: true, unique: true },
  description: { type: String, maxlength: 256 },
  zipCode: { type: String, maxlength: 5 },
  creditScore: { type: Number },
  password: { type: String, minlength: 8, required: true, input: true},
  loans: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Loan' }],
  signUpDate: { type: Date, default: Date.now },
};