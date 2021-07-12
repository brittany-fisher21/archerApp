'use strict';

const express = require('express'),
    router = express.Router(),
    itineraryModel = require('../models/itinerary');

router.get('/', async (req, res) => {
    res.render('template', {
        locals: {
            title: 'Itinerary',
            heading: 'Itinerary',
            subhead: 'Take a look at what is coming up.',
            is_logged_in: req.session.is_logged_in,
        },
        partials: {
            body: 'partials/itinerary',
        },
    })
})

module.exports = router;