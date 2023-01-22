const express = require('express');
const isAuth = require('../../utils/auth/middlewares/authMiddlewares');
const controller = require('./thingy.controllers');
const router = express.Router();

router.get('/', controller.getThingies);
router.get('/:id', controller.getThingy);
router.post('/create', isAuth, controller.createThingy)
router.put('/edit/:id', isAuth, controller.editThingy)
router.delete('/delete/:id', isAuth, controller.deleteThing)

module.exports = router;