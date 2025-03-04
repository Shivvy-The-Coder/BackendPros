const express = require ("express");

const app = express();

// application level settings

app.set("view engine", 'ejs');

app.get('/', (req, res) => {
    res.send('Welcome to our homepage!');
});