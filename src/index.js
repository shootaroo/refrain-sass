import sass from 'node-sass';
import extend from 'xtend';

export default function (text, content, callback) {
  sass.render(extend(this.options.sass || {}, content, {
    data: text
  }), (err, result) => {
    callback(
      err ? `Error: ${err.message}\n    at ${err.file}:${err.line}:${err.column}` : err,
      result ? result.css : result);
  });
}
