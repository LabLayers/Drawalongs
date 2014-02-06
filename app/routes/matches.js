'use strict';

// Matches routes use matches controller
var matches = require('../controllers/matches');
var authorization = require('./middlewares/authorization');

// Match authorization helpers
var hasAuthorization = function(req, res, next) {
	if (req.match.user.id !== req.user.id) {
        return res.send(401, 'User is not authorized');
    }
    next();
};

module.exports = function(app) {

    app.get('/matches', matches.all);
    app.post('/match/create', authorization.requiresLogin, matches.create);
    app.get('/match/:matchId', matches.show);
    app.put('/match/:matchId', authorization.requiresLogin, hasAuthorization, matches.update);
    app.del('/match/:matchId', authorization.requiresLogin, hasAuthorization, matches.destroy);

    // Finish with setting up the matchId param
    app.param('matchId', matches.match);

};