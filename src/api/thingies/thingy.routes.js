const express = require('express');
const controller = require('./thingy.controllers');
const router = express.Router();

router.get('/', controller.getThingies);
router.post('/create', controller.createThingy)
router.put('/edit/:id', controller.editThingy)
router.delete('/delete/:id', controller.deleteThing)

module.exports = router;