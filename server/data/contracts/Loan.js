const mongoose = require('mongoose');

module.exports = {
  lender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  borrower: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  solicitedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  terms: { type: String },
  amount: { type: Number },
  startDate: { type: Date, default: Date.now },
  interest: { type: Number, default: 0 },
  pitch: { type: String },
  comment: [{ type: String }],
  isSigned: { type: Boolean, default: false },
  createdOn: { type: Date, default: Date.now },
  signedOn: { type: Date }
};

