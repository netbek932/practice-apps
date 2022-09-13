require("dotenv").config();

const path = require("path");
var SRC_DIR = path.join(__dirname, "/client/src");
var DIST_DIR = path.join(__dirname, "/client/dist");

/*
  What should go here?  Great question!

  Before you go to documentation, verify which version of webpack
  you are using.

  Use this config to copy production versions of your
  index.html and styles.css to dist folder upon build
*/

module.exports = {
  entry: SRC_DIR + '/index.jsx',
  output: {
    filename: "bundle.js",
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      }
    ]
  },
  mode: 'development'
};

