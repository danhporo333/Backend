require('dotenv').config()
const express = require('express');
const configViewEnfine = require('./Config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require("./Config/database");

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config template engine
configViewEnfine(app);

// khai báo route
app.use('/', webRoutes);



(async () => {
    try {
        //test kết nối sql
        await connection();
        app.listen(port, hostname, () => {
            console.log(`Example app listening on port ${port}`);
        })
    } catch (error) {
        console.log("chưa thể kết nối đến SQL", error);
    }
})()

