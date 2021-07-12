'use strict'

const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.render('template', {
        locals: {
            title: 'Bookings',
            heading: 'Bookings',
            subhead: 'Need to relax at the end of the day?',
        },
        partials: {
            body: 'partials/bookings',
        },
    })
})

module.exports = router;