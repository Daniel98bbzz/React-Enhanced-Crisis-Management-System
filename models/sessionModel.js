const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  clientName: String,
  date: Date,
  time: String,
  topic: String,
  notes: String
});

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;