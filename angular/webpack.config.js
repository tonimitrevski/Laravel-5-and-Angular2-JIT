'use strict';
var path = require('path');

module.exports = {
  entry: require('./webpack/entry'),

  context: path.join(process.cwd(), 'angular/app'),

  output: require('./webpack/output'),

  module: require('./webpack/module'),

  plugins: require('./webpack/plugins'),

  resolve: require('./webpack/resolve'),

  devServer: require('./webpack/dev-server'),

  stats: 'errors-only',

  devtool: 'source-map'
};
