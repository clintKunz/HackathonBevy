const express = require('express');
const Loan = require('../models/Loan');
const User = require('../models/User');

const router = express.Router();

router
  .get('/', (req, res) => {
    const { queryType, string, password } = req.query;
    if (password !== process.env.SUPER_SECRET_PASSWORD) return res.status(318).json({ message: 'You know what you did.'});
    const permittedFields = ['name'];
    if (permittedFields.indexOf(queryType) === -1) {
      return res.status(422).json({ message: "Invalid query. User can only GET by 'name' or 'LoanName'."})
    }
    Loan
      .find({ [queryType]: new RegExp('.*'+string+'.*', "i") })
      .select('name')
      .limit(5)
      .then(companies => {
        res.status(200).json(companies);
      }).catch(err => res.status(500).json({ message: err.message }));
  })
  .get('/mine', async (req, res) => {
    const { userId } = req.session;
    const user = await User.findById(userId);
    if (!user._id) return res.status(404).json({ message: 'User not found.'})
    res.status(200).json({ loans: user.loans });
  })
  .post('/', (req, res) => {
    const { name, email, description, url } = req.body;
    const newLoan = new Loan({
      name,
      email,
      description,
      url,
    });
    newLoan.save()
      .then(savedLoan => {
        res.status(200).json(savedLoan);
      }).catch(err => res.status(500).json({ message: err.message }))
  });

module.exports = router;