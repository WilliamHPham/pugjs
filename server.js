var express = require('express');

var app = express();

app.set('view engine', 'pug');

app.use('/static', express.static('public'));

app.get('/', function (req, res){
    res.render('index',{ title: "PUG"});
});

app.listen(9000, function(){
    console.log("port 9000");
});