const express = require('express');
const router = express.Router();
const UserController = require('../controllers/users');

const {check, validationErrors} = require('express-validator');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.send('<p> Home page</p>');
});
router.get('/user/:id([0-9]{1})', UserController.getUser);
router.get('/users', UserController.getAllUsers);
router.post('/users',
    [
        check('voornaam').isLength({min:1}).trim(),
        check('achternaam').isLength({min:1}),
        check('email').isEmail(),
        check('wachtwoord').isLength({min:6}).trim().escape()
    ],
    UserController.postUser);
router.post('/users/login/', UserController.login);
module.exports = router;
















/*
router.post('/users', [check('id').isNumeric().isLength({min:1}).trim()],[check('voornaam').isLength({min:1}).trim()],
                 [check('achternaam').isLength({min:1})],
                 [check('email').isEmail().normalizeEmail()],
                 [check('wachtwoord').isLength({min:6}).trim().escape()], UserController.postUser
    //(req, res, next) => {}

);
*/