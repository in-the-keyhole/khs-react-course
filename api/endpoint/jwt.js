var jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {

    // check header or url parameters or post parameters for token
    var token = req.headers['x-authorization'];

    // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, api.get('secret'), function (err, decoded) {
            if (err) {
                console.log('JWT Invalid', err);
                return res.status(401).end();
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
        });
    } else {
        console.log('x-authorization not found.');
        // if there is no token return an error
        return res.status(401).end();
    }
};