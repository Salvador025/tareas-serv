// Init the express router
const router = require('express').Router();
// Import the user controller
const usersController = require('./../controllers/users.controller');
const authMiddleware = require('./../middlewares/auth.middleware');
const hasRole = require('./../middlewares/role.middleware');

// Create a route
router.use(authMiddleware);
router.get('', hasRole('admin'), usersController.getUsers)
router.get('/:id', usersController.getUsersById)
router.post('', usersController.postUsers)
router.put('/:id', usersController.putUsers)
router.delete('/:id', usersController.deleteUsers)
// Create a route
module.exports = router;
