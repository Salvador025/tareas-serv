const express = require('express');
const rout = express.Router();
const userroutes = require('./users.routes');


rout.use(express.json());
rout.use('/users', userroutes);


rout.get('/', (req, res) => {
  res.send('Hello World! sss router works');
});


module.exports = rout;
