// Importing the express web server module into the project
var express = require('express');
// Creating the express web server object
var app = express();

// Responding with a simple HTML page when the get request is recieved  
app.get('/', function (req, res) {
    res.send('/index.html')
});

// Listening out on port 3000
app.listen(3000);