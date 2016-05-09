var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

var app = express();

// Define server port
var PORT = process.env.PORT || 8080;

// --------MIDDLEWARE-------
// Config and set up handlebars templating
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Encode parsed data from forms and attach them a new `body` object via the req object in the routes
app.use(bodyParser.urlencoded({extended: false}));

// Serve static assets
app.use(express.static(process.cwd() + '/public'));
// -----END MIDDLEWARE------

// Routes
app.get('/', function(req, res) {
  res.send('Hello World, this is Vestra Health!');
})

// Listen to port
app.listen(PORT, function() {
  console.log("Listening on PORT: " + PORT);
})
