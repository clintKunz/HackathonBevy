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
      .then(loans => {
        res.status(200).json({loans})
      }).catch(err => {
        res.status(500).json({ message: err.message })
      });
  })
  .get('/mine', passport.authenticate('bearer'), async (req, res) => {
    // grab user and return loans that belong to them
    const { _id: userId } = req.user;
    const user = await User.findById(userId);
    if (!user._id) return res.status(404).json({ message: 'User not found.'})
    res.status(200).json({ loans: user.loans });
  })
  .post('/', passport.authenticate('bearer'), (req, res) => {
    // grab details and make new loan
    const { ...details } = req.body;
    const solicitedBy = req.user._id;
    const newLoan = new Loan({...details, solicitedBy});
    newLoan.save()
      .then(savedLoan => {
        res.status(200).json(savedLoan);
      }).catch(err => res.status(500).json({ message: err.message }))
  })
  .put('/:loanId', (req,res) => {
    const changes = req.body;
    const solicitedBy = req.user._id;
    const finalChanges = {...changes, solicitedBy}
    Loan.findById(req.params.loanId)
    .update(finalChanges)
    .then(loan => {
      console.log("THIS IS THE OBJECT",loan)
      if(!loan){
        res.status(200).json(loan)
      }else{
        res.status(500).send("json object returned empty")
      }
    })
    .catch(err => {
      res.status(500).json(err)
    })
  });

module.exports = router;