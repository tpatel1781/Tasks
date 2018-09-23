const express = require('express'); // Importing the Express library
const mongoose = require('mongoose'); // Importing mongoose library
const app = express(); // Constructor for the server, similar to a Java constructor
const port = 3000;
const api = require('./src/api'); // Importing api.js for routing
const bodyParser = require('body-parser'); // Importing body-parser for interpreting JSON

mongoose.Promise = global.Promise; // Promise library defines how the callbacks work


mongoose.connect('mongodb://localhost/Tasks', {useNewUrlParser: true})
.then(() =>  console.log('db connection succesful'))
.catch((err) => console.error(err));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

// parse application/json
app.use(bodyParser.json({limit:'50mb'}));

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/api', api); // If request starts with '/api', use request in the api file


// Starts up the server. "Have the server listen for requests on port 3000"
// Only one server can be listening on a single port at a time
// When the server starts up, it prints out the console.log message
app.listen(port, () => console.log(`Example app listening on port ${port}!`));