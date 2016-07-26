module.exports = {
    context: __dirname,
    entry: [
        './client/main.js',
        './client/styles/_main.scss',
    ],
    output: {
        path: './client/dist',
        filename: 'all.min.js',
    },
    module: {
        noParse: /es6-promise\.js$/,
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
            }, {
                test: /\.vue$/,
                loader: 'vue',
            }, {
                test: /\.scss$/,
                loader: 'style!css!sass?includePaths[]=./node_modules'
            },
        ],
    },
    plugins: [],
    vue: {
        loaders: {
            js: 'babel',
            scss: 'style!css!sass?includePaths[]=./node_modules',
            sass: 'style!css!sass?indentedSyntax',
        },
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime'],
    },
};
