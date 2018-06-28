const express = require('express');
const app = express();
require('dotenv').config();
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/recipe', require('./routes/recipe'));
// app.use('/auth', require('./routes/auth'));

mongoose.connect('mongodb://localhost/recipe-database', (err) => {
    if (err) console.log(err);
    console.log('connected to the database');
})


app.listen(5050, () => {
    console.log('server is running on port 5050')
})