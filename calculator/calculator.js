const express=require('express');
const bodyParser = require("body-parser");
const app =express();
app.use(bodyParser.urlencoded({extended: true}))
app.listen(3000,function(){
console.log("calculator app is running on 3000");
});

app.get("/",function(req,res){
res.sendFile(__dirname +"/calc.html");
});
app.post("/",function(req,res){
  //s  res.send("Answer");
    var a = Number(req.body.FirstName);
    var b = Number(req.body.SecondName);
    var c =a+b;
    console.log(req.body);
    res.send("result =" + c);
    });


