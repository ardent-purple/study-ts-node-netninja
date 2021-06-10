/// lesson 3
let character = 'luigi'
let age = 30

let isBlack = true

// character = 40 // error -- non-matching types
// age = true
// isBlack = 'true'

age = 40

const circ = (diameter: number) => Math.PI * diameter

// console.log(circ('hello')); // non matching types
console.log(circ(2));

// lesson 4

// arrays
let names = [ 'luigi', 'mario', 'yoshi' ]
names.push('toad')
// names.push(true) // non assignable. Arrays are typed!
let numbers = [ 10, 20, 30, 40 ]
numbers.push(24)
// numbers.push('shaun')

// numbers = 30 // does not work, cuz cannot assign Number to Array(Number)

let mixed = [ 'ken', 3, 'chun-li' ] // type string OR number
mixed.push(30) // mixed works
mixed.push('baba') // mixed works
// mixed.push(true) // but this does not ( Argument of type 'boolean' is not assignable to parameter of type 'string | number'.)

// objects
let ninja = {
  name: 'mario',
  age: 30,
  isBlackBelt: true // CANNOT CHANGE TYPES
}
ninja.name = 'aaa' /// works
// ninja.name = false // does not work
// ninja.skills = [ 'fighting', 'sneaking' ] // cannot add new fields

// must declare all the initial props
ninja = {
  name: 'yoshi',
  age: 20,
  // isBlackBelt: 'quirass' // cannot do that, this prop is already declared on type { name: string; age: number; isBlackBelt: boolean }
  // skills: [ 'fighting', 'sneaking' ] // also not working, there's no such prop in type declaration
  isBlackBelt: false,
}

// lesson 5
// explicit types
let character5: string;
let age5: number;
let isLoggedIn5: boolean;

// age5 = '40' // wrong, explicit typing does not allow this
age5 = 40;

// arrays
let ninjas: string[]
// ninjas.push(49) // does not work, type mismatch
// ninjas.push('ken') // compiles, but gets the runtime error of undefined call -- because we did not assign the array value of the variable
ninjas = []
ninjas.push('ryu')

// union type -- the type that can be either of some types
let mixx: (boolean|string|number)[] = []
mixx.push('hello')
mixx.push(49)
mixx.push(true)

console.log(mixx)
let uid: string|number; // parenthesis are not needed when defining just a scalar variable (not an array of mixed)
uid = 4
uid = 'baba'
// uid = true // error, type boolean not in the union
let uuid: (string|number) //with parenthesis

// objects
let ninjaOne: object;
ninjaOne = {name: 'a', age: 4}

let ninjaTwo: {
  name: string,
  age: number,
  beltColor: string
} // explicit object typing
