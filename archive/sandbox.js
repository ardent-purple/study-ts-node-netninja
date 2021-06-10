"use strict";
// lesson 10: function signature
// let greet: Function;
// ex 1
var greet;
greet = function (name, greeting) { return console.log(name + " says " + greeting); };
greet('Masha', 'hello');
greet('Misha', 'hi');
greet = function (char, str) { return console.log(char + " " + str + " " + char); };
greet('*', 'Nagibator');
greet('__', 'Noscope');
// example 2
var calc;
calc = function (numOne, numTwo, action) {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return 0;
    }
};
var logDetails;
logDetails = function (ninja) { return console.log(ninja.name + " is " + ninja.age + " old"); };
