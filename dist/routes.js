"use strict";

var fs = require('fs');
var router = require("express").Router();

module.exports = function (config) {

	router.get("/", function (req, res) {
		fs.readFile(config.data, 'utf-8', function (err, data) {
			if (err) throw err;

			res.json(JSON.parse(data));
		});
	});

	router.get("/:prop", function (req, res) {
		fs.readFile(config.data, 'utf-8', function (err, data) {
			if (err) throw err;

			var data = JSON.parse(data);

			if (!data[req.params.prop]) {
				res.status(404).send('Not found');
			} else {
				res.json(data[req.params.prop]);
			}
		});
	});

	return router;
};