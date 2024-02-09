// Init the express router
const router = require('express').Router();
// Import the user controller
const usersController = require('./../controllers/users.controller');

// Create a route
router.get('', usersController.getUsers);
router.get('/:id', usersController.getUsersById)
router.post('', usersController.postUsers)
router.put('/:id', usersController.putUsers)
router.delete('/:id', usersController.deleteUsers)
// Create a route
module.exports = router;
