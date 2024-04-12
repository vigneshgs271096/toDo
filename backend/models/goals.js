// models/goal.js

const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  start_date: {
    type: Date
  },
  due_date: {
    type: Date
  }
});

const Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal;
