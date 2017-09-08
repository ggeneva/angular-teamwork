const express = require('express');

module.exports = (data) => {
    const router = new express.Router();
    const controller = require('./controller').init(data);

    router.post('/login', (req, res, next) => {
        if (req.user) {
            return res.redirect('/');
        }
        return controller.login(req, res, next);
    });

    router.post('/logout', (req, res, next) => {
        return controller.logout(req, res, next);
    });

    return router;
};
