var express = require("express");

var router = express.router();
var burgerJs = require("../models/burger.js");

router.get("/" function(request, response){
	response.redirect("/burgers");
});

router.get("/burgers", function(request, response){
	burgerJs.all(function(burgerStats){
		response.render("index", {burger_data: burgerStats});
	});
});

router.post("/burgers/make", function(request, response){
	burgerJs.create(request.body.burger_name, function(result){
		console.log(result);
		response.redirect("/");
	});
});

router.put("/burgers/new", function(request, response){
	burgerJs.update(request.body.burger_id, function(result){
		console.log(result);
		response.redirect("/");
	});
});

module.exports = router;