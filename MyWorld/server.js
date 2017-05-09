/**
 * Created by Jordy Frijters on 6-5-2017.
 */
var express = require('express');
var app = express();

var config = require('./config.json');
app.set('PORT', config.webPort);
var port = process.env.PORT || app.get('PORT');

app.all('*', function(request, response, next) {
    console.log(request.method + " " + request.url);
    next();
})

app.use('/api/v1', require('./routes/routes_api_v1'));


app.get('/', function(request, response) {
    response.send('Hello Avans!');
})

app.listen(port, function() {
    console.log('Server app is listening on http://localhost:' + port + "/");
})

module.exports = app;