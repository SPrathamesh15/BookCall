const express = require('express')
const path = require('path')
const rootDir = require('../util/path')
const router = express.Router();

//this below middleware should always below above all the middlewares if it comes before any middleware then it will also get execute even if we haven't call this page
router.get('/',(req, res, next) => {
    res.sendFile(path.join(rootDir,'views', 'shop.html'))//the first dirname is locating our all files in this project then '../' it will change the route by one step if we don't use this it will find view in routes folder as it is a first folder
})

module.exports = router;