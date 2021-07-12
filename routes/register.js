'use strict'

const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.render('template', {
        locals: {
            title: 'Register',
            heading: 'Register',
            subhead: 'Sign up to get your new journey started!',
        },
        partials: {
            body: 'partials/register',
        },
    })
});

module.exports = router;