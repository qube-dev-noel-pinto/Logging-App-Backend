const User = require('../models/user');

// Function to create a new user
const createUser = async (email) => {
  try {
    // Create a new user
    const newUser = new User({ email });
    await newUser.save();
    return newUser;
  } catch (error) {
    throw new Error('Error creating user: ' + error.message);
  }
};

module.exports = {
  createUser
};
