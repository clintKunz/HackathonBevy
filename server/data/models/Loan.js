const mongoose = require('mongoose');
const User = require('./User');
const LoanContract = require('../contracts/Loan');

const LoanSchema = new mongoose.Schema(LoanContract);

LoanSchema.pre('save', async function() {
    let { isSigned, solicitType, solicitedBy } = this;
    if (solicitType === "borrower") this.borrower = solicitedBy;
    else if (solicitType === "lender") this.lender = solicitedBy;
    if (isSigned && !signedOn) this.signedOn = Date.now();
    const borrowerDoc = await User.findById(this.borrower);
    const lenderDoc = await User.findById(this.lender);
    if (borrowerDoc) await borrowerDoc.update({ $addToSet: { loans: this._id } });
    if (lenderDoc) await lenderDoc.update({ $addToSet: { loans: this._id } });
})

module.exports = mongoose.model('Loan', LoanSchema);