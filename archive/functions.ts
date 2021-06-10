let greet :Function;

// greet = 'f'

greet = () => console.log('hello')

const add = (a: number, b: number, c: number|string = 10): void => {
  console.log(a + b);
  console.log(c);

}

add(5, 10, 20)

const minus = (a: number, b: number) => a + b
const mul = (a: number, b: number): number => a * b

let result = minus(10, 7)
// result = '' // not possible

let pow = (p: number) => (a: number) => Math.pow(a, p)

let pow2 = pow(2)
console.log(pow2(4));
pow2 = ''
