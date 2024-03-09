const express = require('express');
const { loginController, registerContoller } = require('../controllers/userController');

//router object

const router = express.Router();

//routers

//POST||LOGIN
router.post('/login', loginController)

//POST||REGISTER USER
router.post('/register', registerContoller);
module.exports = router