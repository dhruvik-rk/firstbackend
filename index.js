require('dotenv').config();

const express = require('express');

const app = express();

const port = 4000;

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.get("/user", (req, res) => {
    res.send("user World!");
})

app.listen(process.env.PORT, (req, res) => {
    console.log(`app run at port ${ port }`);
})