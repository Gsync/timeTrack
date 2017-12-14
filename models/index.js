const mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.connect('mongodb://localhost:27017/ttrackdb');

mongoose.Promise = Promise;

module.exports.Project = require('./schema');
