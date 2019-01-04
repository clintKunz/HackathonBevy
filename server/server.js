// node modules
const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const passport = require('passport');
const mongoose = require('mongoose');

// local files
const UserRouter = require('./data/routes/User');
const LoanRouter = require('./data/routes/Loan');
const strategies = require('./data/strategies');
strategies();

const server = express();

const dbUrl = process.env.DB_URL;
const originUrls = process.env.PERMITTED_URLS.split(',');

mongoose
  .connect(dbUrl)
  .then(() => {
    console.log('\n=== Connected to MongoDB ===\n');
  })
  .catch(err => console.log('database conection failed', err));

const corsOptions = {
  origin: (originUrls),
  credentials: true,
  methods: ['GET', 'PUT', 'POST', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

server.use(morgan());
server.use(express.json());
server.use(cors(corsOptions));
server.use(helmet());
server.use(passport.initialize());
server.use(passport.session());

// routes begin
server.use('/api/users', UserRouter);
server.use('/api/loans', LoanRouter);
// routes end

module.exports = server;