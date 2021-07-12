'use strict';

const express = require('express'),
    router = express.Router(),
    bcrypt = require('bcryptjs'),
    UsersModel = require('../models/users');

// LOGIN

router.get('/login', (req, res) => {
    res.render('template', {
        locals: {
            title: 'User Login',
            heading: 'User Login',
            subhead: 'Sign in to get your new journey started!',
            is_logged_in: req.session.is_logged_in,
        },
        partials: {
            body: 'partials/login',
        },
    });
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = new UsersModel(null, null, email, null, password);
    const response = await user.login();

    if (!!response.isValid) {
        const { isValid, user_id, name } = response;

        req.session.is_logged_in = isValid;
        req.session.user_id = user_id;
        req.session.name = name;

        res.redirect('/');
    } else {
        res.sendStatus(403);
    }
});

// LOGOUT

router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

// REGISTER

router.get('/register', (req, res) => {
    res.render('template', {
        locals: {
            title: 'Registration',
            heading: 'User Registration',
            subhead: 'Sign up to get your new journey started!',
            is_logged_in: req.session.is_logged_in,
        },
        partials: {
            body: 'partials/register',
        },
    });
});

router.post('/register', async (req, res) => {
    const {email, password } = req.body;

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const response = await UsersModel.addUser(email, hash);
    console.log("Registration Response:", response);
    if (response.id) {
        res.redirect('/');
    } else {
        res.send("ERROR: Please Try Submitting Again").status(500);
    }
});

module.exports = router;