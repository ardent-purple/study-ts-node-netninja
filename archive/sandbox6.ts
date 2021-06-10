// lesson 6
// ANY type

let age: any = 30
console.log(age);
age = '40'
console.log(age);
age = true
console.log(age);

let mixed: any[] = []
mixed.push('4')
mixed.push(4)
mixed.push(!!1)
console.log(mixed)

let ninja: { uid: any, age: any }
ninja = { uid: 2, age: 33}
console.log(ninja);
ninja = { uid: ['ff', 65, true], age: '33'}
console.log(ninja);
