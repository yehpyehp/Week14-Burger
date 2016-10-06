var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require("method-override");
var router = require("./controllers/burgers_controller.js")
var app = express();
var connection = require('./config/connection.js')
//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride('_method'));

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use('/', router);

app.set('port', process.envPORT|| 3000);
app.listen(app.get('port'), function(){
	
});