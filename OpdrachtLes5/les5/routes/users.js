const express = require('express');
const router = express.Router();
const UserController = require('../controllers/users');

const {check, validationErrors} = require('express-validator');
const bcrypt = require('bcrypt');
const saltRounds = 10;


module.exports = router;
