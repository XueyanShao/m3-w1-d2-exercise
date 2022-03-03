var express = require('express');
var app = express();
var port = 3000;

app.get('/', function(req,res){
    res.send("Hello World!");
}); //get method to obtain sth

app.listen(port); //port 3000


//In Terminal, type node exp_demo1
//In Browser, go to localhost:3000/