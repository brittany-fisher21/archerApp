'use strict'

const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.render('template', {
        locals: {
            title: 'Home',
            heading: 'Archer',
            subhead: 'An accurate point in the right direction.',
        },
        partials: {
            body: 'partials/home',
        },
    })
});

module.exports = router;