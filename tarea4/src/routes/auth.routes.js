const router = require("express").Router();
const UsersController = require("../controllers/users.controllers");

router.post("/signup", UsersController.signup);
router.post("/login", UsersController.login);

module.exports = router;
