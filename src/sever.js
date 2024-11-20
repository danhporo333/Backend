require('dotenv').config()
const express = require('express');
const configViewEnfine = require('./Config/viewEngine');
const webRoutes = require('./routes/web');

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config template engine
configViewEnfine(app);

// khai báo route
app.use('/danh', webRoutes);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
})