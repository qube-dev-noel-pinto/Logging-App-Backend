const express = require("express");
const router = express.Router();
const companyController = require('../controllers/company.controller')

// POST route to add a new user
router.post("/addCompany", companyController.addCompany);

module.exports = router;