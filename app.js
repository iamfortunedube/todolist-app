var express = require('express');
var test = require('./controllers/test.js');
//var todoContoller = require('./controllers/todoContoller');

var app = express();

//set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

console.log(test.name);
//fire controllers
//todoContoller(app);

//listen to port
app.listen(3000);
console.log('Listening port 3000');
