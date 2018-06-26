const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(morgan('dev'));

mongoose.connect('mongodb://localhost/recipe-database', err => {
    if(err) throw err
    console.log('connected to the database');
})

app.use('/recipe', require('./routes/recipe'))

app.listen(5050, () => {
    console.log('server is running on port 5050')
})