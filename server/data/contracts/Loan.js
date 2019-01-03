const mongoose = require('mongoose');

module.exports = {
  lender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  borrower: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  solicitedBy: { type: String, enum: ['borrower', 'lender'] },
  terms: { type: String },
  amount: { type: Number },
  startDate: { type: Date, default: Date.now },
  interest: { type: Number },
  pitch: { type: String },
  comment: [{ type: String }],
  isSigned: { type: Boolean },
  createdOn: { type: Date, default: Date.now },
  signedOn: { type: Date }
};

