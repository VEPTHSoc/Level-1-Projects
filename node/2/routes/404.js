const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const adminData = require('./admin');
const router = express.Router();
router.get('404', (req, res, next) =>{
    res.render('404',{
        pageTitle: '404',
        path:'404',

    });
});
module.exports = router;