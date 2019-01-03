const mongoose = require('mongoose');
const User = require('./User');
const LoanContract = require('../contracts/Loan');

const LoanSchema = new mongoose.Schema(LoanContract);

LoanSchema.pre('save', async function() {
    let { borrower: borrowerId, lender: lenderId, isSigned, signedOn } = this;
    if (isSigned && !signedOn) signedOn = Date.now();
    const borrower = await User.findById(borrowerId);
    const lender = await User.findById(lenderId);
    await borrower.update({ $addToSet: { loans: this._id } });
    await lender.update({ $addToSet: { loans: this._id } });
})

module.exports = mongoose.model('Loan', LoanSchema);