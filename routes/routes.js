const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoute');

// Register sub-routes
router.use('/api/users', userRoutes)

module.exports = router;
