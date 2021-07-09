'use strict'

const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.render('template', {
        locals: {
            title: 'Home',
        },
        partials: {
            body: 'partials/home',
        },
    })
});

module.exports = router;