const express = require('express');
const controller = require('./user.controllers');
const router = express.Router();
const isAuth = require('../../utils/auth/middlewares/authMiddlewares');

router.post('/register', controller.registerPost)
router.post('/login', controller.loginPost)
router.get('/prints', isAuth, controller.getPrints)

module.exports = router