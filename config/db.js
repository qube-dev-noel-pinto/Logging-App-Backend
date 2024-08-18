// db.js

const mongoose = require('mongoose');
require('dotenv').config();  // Load environment variables from .env file

// Get the MongoDB URI from environment variables
const dbURI = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose.connect(dbURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Export the mongoose instance for use in other parts of your application
module.exports = mongoose;
