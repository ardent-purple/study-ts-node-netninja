"use strict";
// lesson 6
// ANY type
var age = 30;
console.log(age);
age = '40';
console.log(age);
age = true;
console.log(age);
var mixed = [];
mixed.push('4');
mixed.push(4);
mixed.push(!!1);
console.log(mixed);
var ninja;
ninja = { uid: 2, age: 33 };
console.log(ninja);
ninja = { uid: ['ff', 65, true], age: '33' };
console.log(ninja);
