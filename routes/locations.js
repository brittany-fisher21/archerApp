'use strict';

const express = require('express'),
    router = express.Router(),
    locationModel = require('../models/locations');

router.get('/', async (req, res) => {
    const { id } = req.params;
    const locations = await locationModel.getAllLocations(id);

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

router.post('/add', async (res, req) => {
    const { itinerary_id } = req.session;
    const { locations_id } = req.body;
    const response = await locationModel.addLocation(itinerary_id, locations_id);
    res.redirect('/');
})

module.exports = router;