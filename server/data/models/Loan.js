const mongoose = require('mongoose');
const User = require('./User');
const LoanContract = require('../contracts/Loan');

const LoanSchema = new mongoose.Schema(LoanContract);

LoanSchema.pre('save', async function() {
    let { borrower: borrowerId, lender: lenderId, isSigned, signedOn, solicitType } = this;
    if (solicitType === "borrower") this.borrower = this.solicitedBy;
    else if (solicitType === "lender") this.lender = this.solicitedBy;
    if (isSigned && !signedOn) signedOn = Date.now();
    const borrower = await User.findById(borrowerId);
    const lender = await User.findById(lenderId);
    if (borrower) await borrower.update({ $addToSet: { loans: this._id } });
    if (lender) await lender.update({ $addToSet: { loans: this._id } });
})

module.exports = mongoose.model('Loan', LoanSchema);