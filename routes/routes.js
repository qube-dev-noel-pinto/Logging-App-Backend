const express = require('express');
const router = express.Router();
const userRoutes = require('./user.routes');

// Register sub-routes
router.use('/api/users', userRoutes)

module.exports = router;
