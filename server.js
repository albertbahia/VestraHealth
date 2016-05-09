var express = require('express');
var bodyParser = require('body-parser')

var app = express();

var PORT = process.env.PORT || 8080;


// Routes
app.get('/', function(req, res) {
  if (err) throw err;
  res.send('Hello World!');
})

// Listen to port
app.listen(PORT, function() {
  console.log("Listening on PORT: " + PORT);
})
