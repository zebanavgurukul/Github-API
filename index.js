const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const api = require('./routes/app');

const cors = require("cors");

app.use(bodyparser.json());
app.use(cors());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use("/api", api)
app.get("/", function(req, res) {
    res.send("Server is up and runing!")
});

// replace 3000 with (process.env.PORT)
const PORT = process.env.PORT;
app.listen(PORT, function() {
    console.log(`Server is listening on ${PORT}`)
});