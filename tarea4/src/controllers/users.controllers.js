const jwt = require('jsonwebtoken');
const User = require('../models/users.models');
const hashPassword = require('../utils/hashPassword');
const ResponseStatus = require('../utils/response-status');
const { response } = require('express');

class UsersController {

    signup(req, res) {
        const data = {
            name: req.body.name,
            email: req.body.email,
            password: hashPassword(req.body.password)
        }
        User.create(data, (err, user) => {
            res.status(ResponseStatus.CREATED).send('User created');
        }).catch(err => {
            res.status(ResponseStatus.BAD_REQUEST).send('Error creating user');
        });
    }
    login(req, res) {
        const data = {
            email: req.body.email,
            password: hashPassword(req.body.password)
        }
        User.findOne(data).then(response => {
            if(response){
                const data = {
                    name: response.name,
                    email: response.email,
                }
                const token = jwt.sign(data, process.env.TOKEN_KEY);

            }else{
                res.status(ResponseStatus.UNAUTHORIZED).send('Invalid credentials');
            }
        }).catch(err => {
            res.status(ResponseStatus.BAD_REQUEST).send('Error login user');
        })
    }
   
}

module.exports = new UsersController();