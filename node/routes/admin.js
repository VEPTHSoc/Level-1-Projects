const express = require('express');
const rootDir = require('../util/path');
const router = express.Router();
const name =[];
router.get('/main',(req,res,next)=>{
    res.render('main',{
        pageTitle: 'This is main',
        path: '/admin/',
        activeMain:true
    });
});
router.post('/main',(req,res,next)=>{
    name.push({title:req.body.title});
    res.redirect('/404');
});
exports.routes = router;
exports.name = name;
