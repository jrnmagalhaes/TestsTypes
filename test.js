'use strict';

const chai = require('chai'),
      expect = chai.expect,
      should = chai.should();
const Counter = require('./counter');


describe('Counter', function () {
  context('when it counts', function () {
    it('should count', function () {
      let counter =  new Counter();
      counter.tick();
      counter.counter.should.equal(1);
    });
  });
});