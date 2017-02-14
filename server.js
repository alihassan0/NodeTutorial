//require depenciess
var express = require('express');
var router = require('./app/routes');
var bodyParser = require('body-parser');


var app = express();

// configure app
app.use(bodyParser.urlencoded({extended:false}));

app.use(router);


// start the server
app.listen(8080, function(){
    console.log("server is listening on port 8080");
})