'use strict';
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: require('./webpack/entry.prod'),

    context: path.join(process.cwd(), 'angular/app'),

    output: require('./webpack/output'),

    module: require('./webpack/module'),

    plugins: require('./webpack/plugins').concat([
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            },
            sourceMap: true
        })
    ]),

    resolve: require('./webpack/resolve'),

    stats: 'errors-only',

    devtool: 'source-map'
};
