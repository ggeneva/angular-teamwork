const passport = require('passport');

const init = (data) => {
    const controller = {
        login(req, res) {
            passport.authenticate('local', function(err, user, info) {
                if (err) {
                    return res.sendStatus(400);
                }

                if (!user) {
                    return res.sendStatus(400);
                }

                return req.login(user, function(error) {
                    if (error) {
                        return res.sendStatus(400);
                    }
                    if (req.body.rememberme !== 'rememberme') {
                        req.session.cookie.expires = false;
                    }
                    
                    return res.sendStatus(200)
                });
            })(req, res);
        },

        logout(req, res) {
            req.logout();
            return res.sendStatus(200)
        },
    };

    return controller;
};

module.exports = {
    init,
};
