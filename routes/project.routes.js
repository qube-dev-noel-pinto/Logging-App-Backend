const express = require("express");
const router = express.Router();
const projectController = require('../controllers/project.controller')

// POST route to add a new project
router.post("/addProject", projectController.addProject);

module.exports = router;