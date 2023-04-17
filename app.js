
const port =  9000;
const express = require('express');
require("dotenv").config();


let indexRoutes = require('./routes/index.js');

const main = async () => {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use('/', indexRoutes);
    app.listen(port, () =>
        console.log(`App now running and listening on port ${port}`)
    );
};
main();
