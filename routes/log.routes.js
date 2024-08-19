const express = require("express");
const router = express.Router();
const logController = require("../controllers/log.controller");

// POST route to add a new log
router.post("/addLog", logController.addLog);

module.exports = router;