const attachTo = (app, data) => {
    const auth = require('./auth.router')(data);
    const users = require('./users.router')(data);
    const recepies = require('./recepies.router')(data);

    app.use('/', auth);
    app.use('/users', users);
    app.use('/recepies', recepies);
};

module.exports = { attachTo };
