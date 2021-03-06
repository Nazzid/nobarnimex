var express = require('express');
var shared = require('../shared');

var router = express.Router();

router.get('/info', function(req, res, next) {

    res.json({
        error: false,
        serverInfo: {
            port: process.env.PORT || 3000
        }
    });
});

router.get('/dontSleep', function(req, res, next) {

    res.json({
        error: false,
    });
});

module.exports = router;