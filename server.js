var express = require('express');
var bodyParser = require('body-parser')

var app = express();

// Define server port
var PORT = process.env.PORT || 8080;

// Middleware
// Encode parsed data from forms and attach them a new `body` object via the req object in the routes 
app.use(bodyParser.urlencoded({extended: false}));

// Routes
app.get('/', function(req, res) {
  res.send('Hello World, this is Vestra Health!');
})

// Listen to port
app.listen(PORT, function() {
  console.log("Listening on PORT: " + PORT);
})
