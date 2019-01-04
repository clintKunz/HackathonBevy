const mongoose = require('mongoose');

module.exports = {
  lender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  borrower: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  solicitedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  terms: { type: String },
  loanType: { type: String },
  amount: { type: Number, required: true },
  startDate: { type: Date },
  lengthMonths: { type: Number },
  interest: { type: Number, default: 0 },
  pitch: { type: String },
  comment: [{ type: String }],
  solicitType: { type: String, enum: ['borrower', 'lender'], required: true },
  isSigned: { type: Boolean, default: false },
  createdOn: { type: Date, default: Date.now },
  signedOn: { type: Date }
};

