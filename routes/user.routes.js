const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

// POST route to add a new user
router.post("/addUser", userController.addUser);
router.post("/getUserDetails", userController.getUserDetails);

module.exports = router;