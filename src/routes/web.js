const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("hello");
})

router.get('/abc', (req, res) => {
    // res.send("hello danh");
    res.render('sample.ejs')
})

module.exports = router;