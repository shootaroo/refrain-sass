'use strict';
var sass = require('node-sass');
var extend = require('xtend');

module.exports = (text, content, callback) => {
  sass.render(extend({}, content, {
    data: text
  }), (err, result) => {
    callback(
      err ? `Error: ${err.message}\n    at ${err.file}:${err.line}:${err.column}` : err,
      result ? result.css : result);
  });
};
