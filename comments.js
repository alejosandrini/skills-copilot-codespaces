//Create web server using express

// Import express
const express = require('express');
// Create new instance of express server
const app = express();
// Import body-parser
const bodyParser = require('body-parser');
// Import mongoose
const mongoose = require('mongoose');
// Import cors
const cors = require('cors');
// Import routes
const routes = require('./routes/api');
// Import path
const path = require('path');

// Use cors
app.use(cors());

// Connect to mongo
mongoose.connect('mongodb://localhost/comments');
// Use mongoose promise
mongoose.Promise = global.Promise;

// Use body-parser
app.use(bodyParser.json());

// Use routes
app.use('/api', routes);

// Error handling middleware
app.use(function(err, req, res, next){
    res.status(422).send({error: err.message});
});

// Listen for requests
app.listen(process.env.port || 4000, function(){
    console.log('Now listening for requests');
});
