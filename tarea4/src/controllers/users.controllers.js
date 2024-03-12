const jwt = require("jsonwebtoken");
const User = require("../models/users.models");
const hashPassword = require("../utils/hash-password");
const ResponseStatus = require("../utils/response-status");
const { response } = require("express");
const { cp } = require("fs");

class UsersController {
	signup(req, res) {
		const data = {
			name: req.body.name,
			email: req.body.email,
			password: hashPassword(req.body.password),
		};
		User.create(data)
			.then((response) => {
				res.status(ResponseStatus.CREATED).send("User created");
			})
			.catch((err) => {
				res.status(ResponseStatus.BAD_REQUEST).send(
					"Error creating user"
				);
				console.error(err);
			});
	}
	login(req, res) {
		console.log(req.body);
		const data = {
			email: req.body.email,
			password: hashPassword(req.body.password),
		};
		User.findOne(data)
			.then((response) => {
				if (response) {
					const data = {
						name: response.name,
						email: response.email,
					};
					const token = jwt.sign(data, process.env.TOKEN_KEY);
					res.send(token);
				} else {
					res.status(ResponseStatus.UNAUTHORIZED).send(
						"Invalid credentials"
					);
				}
			})
			.catch((err) => {
				res.status(ResponseStatus.BAD_REQUEST).send("Error login user");
				console.error(err);
			});
	}
}

module.exports = new UsersController();
