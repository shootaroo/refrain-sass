/* global it */
'use strict';
var assert = require('power-assert');
var target = require('..');

it('success', done => {
  target('.foo {.bar {color:#aaa}}', {}, (err, output) => {
    assert(!err);
    assert(output.toString() === '.foo .bar {\n  color: #aaa; }\n');
    done();
  });
});

it('error', done => {
  target('.foo {.bar color:#bbb}}', {}, err => {
    assert(err === 'Error: invalid property name\n    at stdin:1:6');
    done();
  });
});
