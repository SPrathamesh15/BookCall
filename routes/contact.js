const express = require('express');
const path = require('path')
const rootDir = require('../util/path')
const router = express.Router();

//creating a middleware
router.get('/contact',(req, res, next) => {
    res.sendFile(path.join(rootDir,'views', 'contact.html'))
})

module.exports = router;