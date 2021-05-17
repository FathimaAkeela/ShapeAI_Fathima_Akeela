const express = require("express");
const bodyParser = require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname+"/index.html");
});

/*app.get("/about", function(req, res){
  res.send("<h1>Fathima Akeela</h1><P>I am new to JavaScript.Shaurya Sinha sir helps me to get the knowledge of javascript.Thank you ShapeAi</p>")
});*/

app.post("/", function(req, res){
  var n1 = Number(req.body.NO1);
  var n2 = Number(req.body.NO2);
  var result = n1/(n2*n2);
  res.send("Your BMI is : " + result);
});

app.listen(3000, function(){
  console.log("server has started on port 3000")
});
