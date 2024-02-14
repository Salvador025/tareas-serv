const ResponseStatus = require('../utils/response-status');

const auth = {
    id: 1,
    role: 'admin',
    name: 'Jhon Doe'
}

const middleware = (req, res, next) => {
    if(req.query.token && req.query.token === '12345'){
        req.user = {...auth};
        next();
    } else {
        res.sendStatus(ResponseStatus.UNAUTHORIZED);
    }
}

module.exports = middleware;