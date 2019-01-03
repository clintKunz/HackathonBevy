const express = require('express');
const Loan = require('../models/Loan');
const User = require('../models/User');

const router = express.Router();

router
  .get('/', async (req, res) => {
    // grab user and return loans that belong to them
    const { userId } = req.session;
    const user = await User.findById(userId);
    if (!user._id) return res.status(404).json({ message: 'User not found.'})
    res.status(200).json({ loans: user.loans });
  })
  .post('/', (req, res) => {
    // grab details and make new loan
    const { ...details } = req.body;
    const solicitedBy = req.session.userId;
    const newLoan = new Loan({...details, solicitedBy});
    newLoan.save()
      .then(savedLoan => {
        res.status(200).json(savedLoan);
      }).catch(err => res.status(500).json({ message: err.message }))
  });

module.exports = router;