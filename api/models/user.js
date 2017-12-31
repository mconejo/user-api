'use strict';

var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  name: String,
  age: Number
});

module.exports = mongoose.model('User', userSchema);