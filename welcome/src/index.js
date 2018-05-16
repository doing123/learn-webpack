// es module
import sum from './sum';

// commonJs
var minus = require('./minus');

// AMD
require(['./muti'], function (muti) {
    console.log('muti(2 * 3) = ', muti(2 * 3));
});

console.log('minus(24, 23) = ', minus(24, 23));

console.log('sum(23, 24) = ', sum(23, 24));