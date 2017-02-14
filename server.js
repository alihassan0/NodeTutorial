//require depenciess
var express = require('express');
var app = express();


// configure app
app.use('/', function(req, res){
    res.send("hello world");
})

// start the server

app.listen(8080, function(){
    console.log("server is listening on port 8080");
})