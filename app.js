var express          = require('express'),
    app              = express(),
    bodyParser       = require('body-parser'),
    expressSanitizer = require('express-sanitizer');

// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSanitizer());
app.use(express.static('public'));
app.set('view engine', 'ejs');

//ROUTES

// LANDING PAGE===========================>
app.get('/', function(req, res) {
  res.render('index');
});


//LISTEN=====================================================>
var port = process.env.PORT || 3006;

app.listen((port), () => {
  console.log(`SERVER HAS STARTED ON PORT: ${port}! 🤖`);
});
