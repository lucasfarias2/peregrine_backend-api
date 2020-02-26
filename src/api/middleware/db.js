const mongoose = require('mongoose');

const initializeDb = () => {
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('Connected to database');
  });
};

const User = mongoose.model('User', {});
const Address = mongoose.model('Address', {});

module.exports = { initializeDb, User, Address };
