var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();
var config = require('./config');
var routes = require('./routes')(config);

app.use(config.urlPath, routes);

app.use(require('connect-history-api-fallback')());
require('./dev_mode.js')(app);

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', express.static(path.join(__dirname, '../client')));

app.listen(3000);

module.exports = app;
