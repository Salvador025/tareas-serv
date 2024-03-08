const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    name: String, required: true, 
    email: String, required: true, unique: true, 
    password: String, required: true 
});

module.exports = model('users', userSchema);