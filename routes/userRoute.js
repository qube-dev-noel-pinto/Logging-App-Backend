const { createUser } = require("../controllers/userController");
const express = require('express');
const userRoutes = express.Router();

userRoutes.post('/addUser', createUser);

module.exports = userRoutes