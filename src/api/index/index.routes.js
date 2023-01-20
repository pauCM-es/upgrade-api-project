const express = require('express');

const controller = require('./index.controllers');

const router = express.Router();

router.get('/', controller.indexGet);
router.get('/status', controller.statusGet);

module.exports = router;