const jwt = require("jsonwebtoken");
const ResponseStatus = require("../utils/response-status");

module.exports = function (req, res, next) {
	const token = req.query.token;

	if (!token) {
		res.status(ResponseStatus.UNAUTHORIZED).send("Access denied");
		return;
	}

	try {
		const data = jwt.verify(token, process.env.TOKEN_KEY);
		if (!data) {
			res.status(ResponseStatus.UNAUTHORIZED).send("Invalid token");
			return;
		}
		req.user = data;
		next();
	} catch (error) {
		res.status(ResponseStatus.UNAUTHORIZED).send("Invalid token");
	}
};
