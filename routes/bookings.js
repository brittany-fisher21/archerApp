'use strict';

const express = require('express'),
    router = express.Router(),
    bookingsModel = require('../models/bookings');

router.get('/', async (req, res) => {
    res.render('template', {
        locals: {
            title: 'Bookings',
            heading: 'Bookings',
            subhead: 'Need to relax at the end of the day?',
            is_logged_in: req.session.is_logged_in,
        },
        partials: {
            body: 'partials/bookings',
        },
    })
})

module.exports = router;