
// Import the express library
const router = require('express').Router();
// Import the user router
const userRouter = require('./users.routes');

// Use the user router
router.use('/users', userRouter);

// Create a route
router.get('', (req, res) => {
    res.send('router works');
})


// Export the router
module.exports = router;