var express = require('express');

var todoContoller = require('./controllers/todoController');

var app = express();

//set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//fire controllers
todoContoller(app);

//listen to port
app.listen(3001);
console.log('Listening port 3001');
