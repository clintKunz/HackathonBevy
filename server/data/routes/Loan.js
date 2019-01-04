const express = require('express');
const Loan = require('../models/Loan');
const User = require('../models/User');
const passport = require('passport');

passport.serializeUser(function (user, done) {
  done(null, user._id);
});

passport.deserializeUser(function (user, done) {
  User.findById(id, function (err, user) {
      done(err, user);
  });
});

const router = express.Router();

router
  .get('/', (req, res) => {
    const { type, string } = req.query;
    const query = '.*' + string + '.*';
    Loan.find({solicitType: type, pitch: { $regex : new RegExp(query, "i")} })
      .populate({path: 'solicitedBy', select: 'username'})
      .then(loans => {
        res.status(200).json({loans})
      }).catch(err => {
        res.status(500).json({ message: err.message })
      });
  })
  .get('/mine', passport.authenticate('bearer'), async (req, res) => {
    // grab user and return loans that belong to them
    const loans = await Loan.find({ _id: req.user.loans });
    res.status(200).json({ loans });
  })
  .post('/', passport.authenticate('bearer'), (req, res) => {
    // grab details and make new loan
    const { ...details } = req.body;
    const solicitedBy = req.user._id;
    if (!solicitedBy) return res.status(401).json({ message: 'Only logged in people can post solicits.'});    const newLoan = new Loan({...details, solicitedBy});
    newLoan.save()
      .then(savedLoan => {
        console.log(savedLoan);
        res.status(200).json(savedLoan);
      }).catch(err => res.status(500).json({ message: err.message }))
  })
  .put('/:loanId', passport.authenticate('bearer'), async (req, res) => {
    const changes = req.body;
    const solicitedBy = req.user._id;
    const foundLoan = await Loan.findById(req.params.loanId)
    if (!foundLoan._id) return res.status(404).json({ message: "Solicit not found." });
    if (foundLoan.solicitedBy !== solicitedBy) return res.status(401).json({ message: 'You are not the owner of that solicit.' });
    foundLoan.update(changes)
    .then(loan => res.status(200).json({ loan }))
    .catch(err => res.status(500).json({ message: err.message }))
  })
  .get('/:loanId', (req,res) => {
    const id = req.params.loanId;
    Loan.find({_id : id})
    .then(loan => {
        res.status(200).json({loan})
    })
    .catch(err => {
      res.status(500).json({err})
    })
  })

module.exports = router;