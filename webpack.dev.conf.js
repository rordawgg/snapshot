var webpack = require('webpack');
var config = require('./webpack.config.js');

config.devtool = 'eval-source-map'
config.hotClient = 'webpack-hot-middleware/client?noInfo=true&reload=true'
config.polyfill = 'eventsource-polyfill'

config.output = {
    path: '/',
    publicPath: 'http://localhost:3000/dist/',
    filename: 'all.min.js',
};

config.entry.push('webpack-hot-middleware/client');

config.plugins.push(new webpack.HotModuleReplacementPlugin());
// new webpack.optimize.OccurenceOrderPlugin(),
// new webpack.NoErrorsPlugin()
// new webpack.optimize.DedupePlugin(),

module.exports = config
