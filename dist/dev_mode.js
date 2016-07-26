'use strict';

module.exports = function (app) {
    if (process.argv[2] === 'dev') {
        var webpack = require('webpack');
        var config = require('../webpack.dev.conf.js');
        var compiler = webpack(config);

        app.use(require('webpack-dev-middleware')(compiler, {
            publicPath: config.output.publicPath,
            stats: {
                colors: true,
                chunks: false
            }
        }));

        app.use(require('webpack-hot-middleware')(compiler));
    }
};