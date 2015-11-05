/* global it */
import assert from 'power-assert';
import target from '../src';

it('success', done => {
  target.call({options: {}}, '.foo {.bar {color:#aaa}}', {}, (err, output) => {
    assert(!err);
    assert(output.toString() === '.foo .bar {\n  color: #aaa; }\n');
    done();
  });
});

it('error', done => {
  target.call({options: {}}, '.foo {.bar color:#bbb}}', {}, err => {
    assert(err);
    done();
  });
});
