const express = require('express');
const { getHomepage, getAbc } = require('../Controller/homeController');
const router = express.Router();

//router.method('/route,handler)

router.get('/', getHomepage);

router.get('/abc', getAbc)

module.exports = router;