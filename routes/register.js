'use strict'

const express = require('express');
const router = express.Router();
const slugify = require('slugify');
router.get('/:slug?', async (req, res) =>{
    
        res.render('template', {
            locals: {
                title:'register',
            },
            partials: {
                body: 'partials/register',
            }, 
        })         
});

      



module.exports = router;