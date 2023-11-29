const express = require('express');
const path = require('path')
const rootDir = require('../util/path')
const router = express.Router();

//creating a middleware
router.get('/add-product',(req, res, next) => {
    res.sendFile(path.join(rootDir,'views', 'add-product.html'))
})

router.post('/add-product', (req, res, next) => {
    const product = req.body.title
    res.send(`<h1>${product} is added!!!`)
    console.log(req.body)
    res.redirect('/')
}) 

module.exports = router;