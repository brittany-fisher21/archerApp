'use strict';

const express = require('express'),
    router = express.Router(),
    bookingsModel = require('../models/bookings');

router.get('/', async (req, res) => {
    const { id } = req.params;
    const bookings = await bookingsModel.getAllBookings(id);

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
});

router.post('/add', async (req, res) => {
    const { itinerary_id } = req.session;
    const { bookings_id } = req.body;
    const response = await bookingsModel.addBooking(itinerary_id, bookings_id);
    res.redirect('/');
})

module.exports = router;