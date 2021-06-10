"use strict";
/// lesson 3
var character = 'luigi';
var age = 30;
var isBlack = true;
// character = 40 // error -- non-matching types
// age = true
// isBlack = 'true'
age = 40;
var circ = function (diameter) { return Math.PI * diameter; };
// console.log(circ('hello')); // non matching types
console.log(circ(2));
// lesson 4
// arrays
var names = ['luigi', 'mario', 'yoshi'];
names.push('toad');
// names.push(true) // non assignable. Arrays are typed!
var numbers = [10, 20, 30, 40];
numbers.push(24);
// numbers.push('shaun')
// numbers = 30 // does not work, cuz cannot assign Number to Array(Number)
var mixed = ['ken', 3, 'chun-li']; // type string OR number
mixed.push(30); // mixed works
mixed.push('baba'); // mixed works
// mixed.push(true) // but this does not ( Argument of type 'boolean' is not assignable to parameter of type 'string | number'.)
// objects
var ninja = {
    name: 'mario',
    age: 30,
    isBlackBelt: true // CANNOT CHANGE TYPES
};
ninja.name = 'aaa'; /// works
// ninja.name = false // does not work
// ninja.skills = [ 'fighting', 'sneaking' ] // cannot add new fields
// must declare all the initial props
ninja = {
    name: 'yoshi',
    age: 20,
    // isBlackBelt: 'quirass' // cannot do that, this prop is already declared on type { name: string; age: number; isBlackBelt: boolean }
    // skills: [ 'fighting', 'sneaking' ] // also not working, there's no such prop in type declaration
    isBlackBelt: false,
};
// lesson 5
// explicit types
var character5;
var age5;
var isLoggedIn5;
// age5 = '40' // wrong, explicit typing does not allow this
age5 = 40;
// arrays
var ninjas;
// ninjas.push(49) // does not work, type mismatch
// ninjas.push('ken') // compiles, but gets the runtime error of undefined call -- because we did not assign the array value of the variable
ninjas = [];
ninjas.push('ryu');
// union type -- the type that can be either of some types
var mixx = [];
mixx.push('hello');
mixx.push(49);
mixx.push(true);
console.log(mixx);
var uid; // parenthesis are not needed when defining just a scalar variable (not an array of mixed)
uid = 4;
uid = 'baba';
// uid = true // error, type boolean not in the union
var uuid; //with parenthesis
// objects
var ninjaOne;
ninjaOne = { name: 'a', age: 4 };
var ninjaTwo; // explicit object typing
