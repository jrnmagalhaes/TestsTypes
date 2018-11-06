'use strict';

const chai = require('chai'),
      assert = chai.assert;
const Counter = require('./counter');

suite('Counter', function () {
    test('should count', function () {
      var counter = new Counter();
      counter.tick();
      assert.equal(1, counter.counter);
    });
});
