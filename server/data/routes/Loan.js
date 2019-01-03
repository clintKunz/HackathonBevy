const express = require('express');
const Loan = require('../models/Loan');
const User = require('../models/User');

const router = express.Router();

router
  .get('/', async (req, res) => {
    const { userId } = req.session;
    const user = await User.findById(userId);
    if (!user._id) return res.status(404).json({ message: 'User not found.'})
    res.status(200).json({ loans: user.loans });
  })
  .post('/', (req, res) => {
    const { ...details } = req.body;
    const newLoan = new Loan({...details});
    newLoan.save()
      .then(savedLoan => {
        res.status(200).json(savedLoan);
      }).catch(err => res.status(500).json({ message: err.message }))
  });

User.find().then(result => result[0].save()).then(() => console.log('success!'));

module.exports = router;