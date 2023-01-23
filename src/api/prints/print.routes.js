const express = require('express');
const isAuth = require('../../utils/auth/middlewares/authMiddlewares');
const controller = require('./print.controllers');
const router = express.Router();
const {upload} = require('../../middleware/files.middleware');

router.get('/', controller.getPrints);
router.get('/:id', controller.getPrint);
router.post('/create', [isAuth, upload.single('images')], controller.createPrint);
router.put('/edit/:id', [isAuth], controller.editPrint);
router.delete('/delete/:id', isAuth, controller.deletePrint);

module.exports = router;