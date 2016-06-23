module.exports = function (app) {
	var router = require("express").Router();

	router.get("/", function (req, res) {
	  res.send("test");
	});

	router.get("/:id", function(req, res) {
	  res.send(req.params.id);
	});

	app.use("/api", router);
};