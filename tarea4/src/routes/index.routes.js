const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('index routes works!');

});

module.exports = router;