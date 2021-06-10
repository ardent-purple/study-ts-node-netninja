// lesson 10: function signature
// let greet: Function;

// ex 1
let greet: (a: string, b: string) => void;
greet = (name: string, greeting: string) => console.log(`${name} says ${greeting}`);
greet('Masha', 'hello')
greet('Misha', 'hi')
greet = (char: string, str: string) => console.log(`${char} ${str} ${char}`);
greet('*', 'Nagibator')
greet('__', 'Noscope')

// example 2
let calc: (a: number, b: number, c: string) => number;
calc = (numOne: number, numTwo: number, action: string): number => {
  if (action === 'add') {
    return numOne + numTwo
  } else {
    return 0
  }
}

// example 3
type User = { name: string, age: number}
let logDetails: (obj: User) => void

logDetails = ninja => console.log(`${ninja.name} is ${ninja.age} old`);
