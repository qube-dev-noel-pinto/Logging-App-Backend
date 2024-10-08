const express = require('express');
const router = express.Router();
const userRoutes = require('./user.routes');
const companyRoutes = require('./company.routes');
const projectRoutes = require('./project.routes');
const logRoutes = require('./log.routes');

// Register sub-routes
router.use('/api/user', userRoutes)
router.use('/api/company', companyRoutes)
router.use('/api/project', projectRoutes)
router.use('/api/logs', logRoutes)

module.exports = router;
