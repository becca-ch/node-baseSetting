const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
  name: { type: String, required: true},
  age: Number,
  address: String,
})


module.exports = mongoose.model('User', Schema);