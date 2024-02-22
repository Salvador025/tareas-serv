
const {Schema, model} = require('mongoose');
const roles = require('../utils/roles');

const userSchema = new Schema({
    name: { type: String, required: true},
    email: { type: String, unique: true, required: true},
    password: { type: String, required: true},
    status: { type: String, default: 'new' },
    role: { type: String, default: roles.GUEST }
});

module.exports = model('users', userSchema);



