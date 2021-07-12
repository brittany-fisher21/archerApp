'use strict'

const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.render('template', {
        locals: {
            title: 'Locations',
            heading: 'Locations',
            subhead: 'Find your next adventure here!',
        },
        partials: {
            body: 'partials/locations',
        },
    })
});

module.exports = router;