'use strict'

const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.render('template', {
        locals: {
            title: 'Register',
            heading: 'Register',
            subhead: 'na',
        },
        partials: {
            body: 'partials/register',
        },
    })
});

module.exports = router;