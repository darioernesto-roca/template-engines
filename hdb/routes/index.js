const express = require('express');
const router = express.Router();

const homeRoutes = require('./home.routes');
const categoriesRoutes = require('./categories.routes');
const aboutUsRoutes = require('./about-us.routes');
const contactRoutes = require('./contact.routes');
const dataRoutes = require('./data.routes');
const uploadRoutes = require('./upload.routes.js');

router.use('/', homeRoutes);
router.use('/categories', categoriesRoutes);
router.use('/about-us', aboutUsRoutes);
router.use('/contact', contactRoutes);
router.use('/data', dataRoutes);
router.use('/upload', uploadRoutes);

module.exports = router;