var express = require("express");
const math = require('mathjs');
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8091;

var router = express.Router();

app.get("/calc/", function(req, res){
    console.log("Request on /calc/");
    var exp = req.query.expression;
    var result = math.eval(exp);
    res.json({ expression: exp, result: result });
});

app.get("/add/", function(req, res){
    console.log("Request on /add/");
    var val1 = parseInt(req.query.val1);
    var val2 = parseInt(req.query.val2);

    var result = val1 + val2;
    res.json({ val1: val1, val2: val2, result: result });
});

//app.use('/api', app);

app.listen(port, function(){
    console.log("Server listening for connections on port " + port);
});