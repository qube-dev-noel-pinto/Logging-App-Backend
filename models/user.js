const mongoose = require('mongoose');

// Define the schema for the User
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true }
});

// Create and export the User model
const User = mongoose.model('User', userSchema, 'users')

module.exports = User;
