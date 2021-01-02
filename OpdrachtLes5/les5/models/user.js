const  db = require('../config/db');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const encrypt = user => {
   return  bcrypt.hash(user.wachtwoord, saltRounds)
        .then(pwd => {
            user.wachtwoord = pwd
            return Promise.resolve(user)
        })
}
const findUser = email => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM users WHERE email = ?', [email],(err, results, fields) => {
            if (err) reject(err);
            if (!results.length) reject('Not Found')
            else
                resolve(results[0].wachtwoord);
            }
        )
    })
}
const insertUser =  user => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO users SET ?', [user], (err, results, fields) => {
                if (err) reject(err);
                resolve(results);
            }
        )
    })
}
const Users = {
    fetchAllUsers: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM users', (err, users, fields) => {
                if (err) reject(err);
                resolve(users);
            })
        })
    },
    getUser: id => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM users WHERE id = ?', [id], (err, results, fields) => {
                    if (err) reject(err);
                    resolve(results);
                }
            )
        })
    },
   postUser: user => {
        return encrypt(user)
            .then(insertUser)
    },
    checkUser: (email, plain) =>{
        return findUser(email)
            .then(password => {
               return  bcrypt.compare(plain, password)
            })
            .then(result => result ? Promise.resolve() : Promise.reject("Bad password"))
    }
}

module.exports = Users;
