'use strict';

const express = require('express'),
    router = express.Router(),
    locationModel = require('../models/locations');

router.get('/', async (req, res) => {
    res.render('template', {
        locals: {
            title: 'Locations',
            heading: 'Locations',
            subhead: 'Find your next adventure here!',
            is_logged_in: req.session.is_logged_in,
        },
        partials: {
            body: 'partials/locations',
        },
    })
});

module.exports = router;