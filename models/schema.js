const mongoose = require('mongoose');

const ttSchema = new mongoose.Schema({
  project: {
    type: String,
    required: 'Name cannot be blank!',
    unique: true, // enforce that no two projects can have same name
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
  tasks: [{
    activity: {
      type: String,
      required: 'Activity cannot be blank!',
    },
    completed: {
      type: Boolean,
      default: false,
    },
    created_date: {
      type: Date,
      default: Date.now,
    },
  }],
});

const Project = mongoose.model('Project', ttSchema);

module.exports = Project;
