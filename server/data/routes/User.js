const express = require('express');
const passport = require('passport');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const router = express.Router();
const secret = process.env.SECRET;

router
  .post('/register', (req, res) => {
    const details = req.body;
    const newUser = new User({ ...details });
    newUser
      .save()
      .then(user => {
        const payload = {
          sub: user._id,
          exp: Date.now() + (1000 * 60 * 5),
        };
        const token = jwt.sign(payload, secret);
        res.status(200).json({ user, token });
      })
      .catch((err) => {
        res.status(500).json({ message: err.message });
      });
  })
  .post('/login', (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email })
      .then((user) => {
        if (!user) {
          return res.status(400).json({ message: 'user record not found.' });
        }
        user
          .validify(password)
          .then((passwordIsValid) => {
            if (!passwordIsValid) {
              return res.status(401).json({ message: 'Bad credentials.' });
            }
            const payload = {
              sub: user._id,
              exp: Date.now() + (1000 * 60 * 5),
            };
            const token = jwt.sign(payload, secret);
            res.status(200).json({ user, token });
          }).catch(err => res.status(500).json({ message: err.message || 'Failed to log in.' }));
      }).catch(err => {
        res.status(500).json({ message: err.message || 'Failed to find user.' })

      });
  })
  .get('/refreshToken', passport.authenticate('bearer'), (req, res) => {
    const payload = {
      sub: req.user._id,
      exp: Date.now() + (1000 * 60 * 5),
    };
    const token = jwt.sign(payload, secret);
    res.status(200).json({ token });
  })
  .get('/profile', passport.authenticate('bearer'), (req, res) => {
    const { _id: userId } = req.user;
    User
      .findById(userId)
      .populate('loans')
      .then(user => {
        if (!user) {
          res.status(401).json({ message: "Unauthorized." });
        }
        res.status(200).json({ user });
      }).catch(err => {
        res.status(500).json({ message: err.message });
      })
  })
  .get('/', (req, res) => {
    res.status(200).json({ message: "At least this part is working!" })
  })


module.exports = router;