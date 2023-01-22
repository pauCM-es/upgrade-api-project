const express = require('express');
const isAuth = require('../../utils/auth/middlewares/authMiddlewares');
const controller = require('./print.controllers');
const router = express.Router();

router.get('/', controller.getPrints);
router.get('/:id', controller.getPrint);
router.post('/create', isAuth, controller.createPrint);
router.put('/edit/:id', isAuth, controller.editPrint);
router.delete('/delete/:id', isAuth, controller.deletePrint);

module.exports = router;