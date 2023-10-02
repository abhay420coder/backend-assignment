const config = {
    "secret": "THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING"
};
const jwt = require('jsonwebtoken');

// users hardcoded for simplicity, store in a db for production applications
// const users = [{ id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User' }];
const users = [{  email: 'test', password: 'test',}];

module.exports = {
    authenticate,
    getAll
};

async function authenticate({ email, password }) {
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) throw 'UserEmail or password is incorrect';

    // create a jwt token that is valid for 7 days
    const token = jwt.sign({ sub: user["_id"] }, config.secret, { expiresIn: '7d' });

    return {
        ...omitPassword(user),
        token
    };
}

async function getAll() {
    return users.map(u => omitPassword(u));
}

// helper functions

function omitPassword(user) {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
}