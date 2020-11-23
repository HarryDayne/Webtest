var ex=require("express");
console.log("Hello");

var app=ex();

var server=app.listen(8081, function(){
	console.log("Listening at 8081");
})

app.get("/",function(req,res){
	var path="/home/harikaran/Projects/webtest/front/index.html";
	res.sendFile(path);
})

app.get("/app.js",function(req,res){
	var path="/home/harikaran/Projects/webtest/front/app.js";
	res.sendFile(path);
})

app.get("/hell",function(req,res){
	console.log("J");
	res.end()
})
