const express = require('express');
const app = express();
require("dotenv").config();
const expressJwt = require("express-jwt");
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require("path")
const port = process.env.PORT || 5000
const secret = process.env.SECRET || "this is a secret" 

app.use(express.static(path.join(__dirname, "client", "build")))

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/recipe', expressJwt({secret: process.env.SECRET}));
app.use('/profile', expressJwt({secret: process.env.SECRET}));

app.use('/recipe', require('./routes/recipe'));
app.use('/auth', require('./routes/auth'));
app.use('/profile', require('./routes/profile'))

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/recipe-database', (err) => {
    if (err) console.log(err);
    console.log('connected to the database');
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})