const  User = require('../models/user');
const {validationResult} = require('express-validator');
exports.getAllUsers = (req, res) => {
    User.fetchAllUsers()
        .then(users => res.json(users))
        .catch(err => res.send(err))
}
exports.getUser = (req, res) => {
    const id = req.params.id;
    User.getUser(id)
        .then(user => res.json(user))
        .catch(err => res.send(err))
}
exports.postUser = ( req,res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const user = req.body;
    User.postUser(user)
        .then(user => res.json(true))
        .catch(err => res.json(false))
}
exports.login = ( req,res) => {
    const {email, wachtwoord} = req.body;
   User.checkUser(email, wachtwoord)
        .then(user => res.json(true))
        .catch(err => res.json(false))
}

