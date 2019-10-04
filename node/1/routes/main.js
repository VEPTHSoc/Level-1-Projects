const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/final',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','final.html'))

})
router.get('/',(req,res, next)=>{
    res.sendFile(path.join(rootDir, 'views','front.html'));
});
module.exports = router;