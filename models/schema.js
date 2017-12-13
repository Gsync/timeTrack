const mongoose = require('mongoose');

const ttSchema = new mongoose.Schema({
  project: {
    type: String,
    required: 'Name cannot be blank!',
  },
  completed: {
    type: Boolean,
    default: false,
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
  created_By: {
    type: String,
  },
});

const Model = mongoose.model('Model', ttSchema);

module.exports = Model;
