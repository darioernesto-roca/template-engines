const multer = require('multer');
const express = require('express');
const router = express.Router();
const uploadController = require('../controllers/upload.controller.js');

router.post('/', uploadController.uploadImage);

module.exports = router;