const express =require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000,function(){
    console.log("the app is running on port 3000");
});
app.get("/",function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/",function(req,res){
    var a =Number( req.body.height);
    var b = Number(req.body.weight);
    var c = a/(b*b);
    console.log(a +" " + b);
    res.send("The bmi ans is "+ c);
});