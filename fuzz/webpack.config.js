

const webpack = require('webpack');


module.exports = {
  entry: './assets/javascripts/src/index.js',
  output: {
    path: __dirname + '/static/dist',
    filename: 'fuzz.js'
  },
};
