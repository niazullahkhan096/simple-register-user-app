const express = require('express');
const router = express.Router();

const { validate } = require('./../../middlewares/request-validate.middleware');
const registerUserDto = require('./../../dto/register-user.dto')

const controller = require('./../../controllers').authController;

router.post('/register', validate(registerUserDto.schema), controller.register);

module.exports = router;