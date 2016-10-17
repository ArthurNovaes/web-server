var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware.js')

app.use(middleware.logger);
 
app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('My name is Arthur and I am a student and web developer. Specially interested in Data Base. Thank you for atention!');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
	console.log('Express server started on port ' + PORT + '!');
 });