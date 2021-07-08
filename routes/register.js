'use strict'

const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.render('template', {
        locals: {
            title: 'Register',
        },
        partials: {
            body: 'partials/register',
        },
    })
});

module.exports = router;