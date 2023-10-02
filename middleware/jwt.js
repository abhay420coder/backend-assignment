const { expressjwt } = require('express-jwt');
// const config = require('../config.json');

module.exports = jwt;

function jwt() {
    // const { secret } = config;
    let secret = "THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING"
    return expressjwt({ secret, algorithms: ['HS256'] }).unless({
        path: [
            // public routes that don't require authentication
            '/users/authenticate'
        ]
    });
} 
