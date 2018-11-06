'use strict';

const Counter = require('./counter');

function ok(expr, msg) {
    if (!expr) throw new Error(msg);
}

suite('Counter');

test('testa se está contando', function () {
    let counter = new Counter();
    counter.tick();
    ok(counter.counter == 1, "Didn`t count")
});
