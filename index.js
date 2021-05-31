
//jshint esversion:6
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app  = express();

app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res)
{
res.sendFile(__dirname+"/index.html");
});
app.post("/",function(req,res)
{
const query = req.body.cityname;
const key ="1c837b6b0a538417ec9364dff31f8a9f";
const unit = "metric";
const url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+key+"&units="+unit;


https.get(url,function(response,request)
{
console.log(response.statusCode);
response.on("data",function(data)
{
console.log(data);
const weatherdata = JSON.parse(data);
console.log(weatherdata);
const temp = weatherdata.main.temp;
const weatherdesc = weatherdata.weather[0].description;
const icon = weatherdata.weather[0].icon;
const imgurl = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
res.write("<h1>The Temperature in "+query+" is "+temp+ " degree <br> desc are </h1>" + weatherdesc);
res.write("<img src="+imgurl+">");

res.send();

});
});
});



app.listen(3000,function()
{
  console.log("server is running on port 3000");
});
