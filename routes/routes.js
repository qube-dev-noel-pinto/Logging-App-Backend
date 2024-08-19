const express = require('express');
const router = express.Router();
const userRoutes = require('./user.routes');
const companyRoutes = require('./company.routes');

// Register sub-routes
router.use('/api/users', userRoutes)
router.use('/api/company', companyRoutes)

module.exports = router;
