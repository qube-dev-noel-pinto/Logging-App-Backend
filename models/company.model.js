const mongoose = require('mongoose');

// Define the schema for the User
const companySchema = new mongoose.Schema({
    _id: ObjectId,           // Unique identifier for the company
    name: String,            // Company name
    domain: String,          // Company domain or identifier
    createdAt: Date,         // When the company was registered
    updatedAt: Date          // Last update timestamp  
});

// Create and export the User model
const Company = mongoose.model('Company', companySchema, 'companies')

module.exports = Company;
