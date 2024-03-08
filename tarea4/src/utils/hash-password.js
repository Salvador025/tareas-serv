const crypto = require('crypto');

module.exports = function(pwd) {
    pwd = pwd || '';
    const hashedPwd = crypto.scryptSync(pwd, 'key', 24);
    return hashedPwd.toString('hex');
}