"use strict";
var greet;
// greet = 'f'
greet = function () { return console.log('hello'); };
var add = function (a, b, c) {
    if (c === void 0) { c = 10; }
    console.log(a + b);
    console.log(c);
};
add(5, 10, 20);
var minus = function (a, b) { return a + b; };
var mul = function (a, b) { return a * b; };
var result = minus(10, 7);
// result = '' // not possible
var pow = function (p) { return function (a) { return Math.pow(a, p); }; };
var pow2 = pow(2);
console.log(pow2(4));
pow2 = '';
