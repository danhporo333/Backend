const path = require("path");
const express = require('express');

const configViewEnfine = (app) => {
    //config template engine
    app.set('views', path.join('./src', '/views'))
    app.set('view engine', 'ejs')
    //config static file: image,css,js
    app.use(express.static(path.join('./src', 'public'))) // hay vao trong thu muc public de tim
}

module.exports = configViewEnfine;