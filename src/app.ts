// lesson 18 generics
// wrong way of adding Generics...
const addUID = (obj: object) => ({ ...obj, uid: Math.floor(Math.random() * 100000)})

console.log(addUID({ name: 'yoshi' }))
console.log(addUID({ name: 'mario', fighter: true }))
console.log(addUID(['a', true]));
// ...because
const notWorking = addUID({ name: 'a', age: 49 })
// console.log(notWorking.name); // error TS2339: Property 'name' does not exist on type '{ uid: number; }'.

// correct generic
const addUIDright = <T /* generic on specific type bounds */ extends { name: string }>(obj: T) => ({ ...obj, uid: Math.floor(Math.random() * 100000)})

const working = addUIDright({ name: '10', win: true })
console.log(working.name);

// generic with interfaces
interface Resource<T> {
  uid: number,
  resourceName: string,
  data: T,
}

const res1: Resource<string> = {
  uid: 1,
  resourceName: 'person',
  data: 'string'
}

const res2: Resource<string[]> = {
  uid: 2,
  resourceName: 'shopping list',
  data: ['test']
}

console.log(res1);
console.log(res2);

// ENUMS
enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON
}
interface Resource2<T> {
  uid: number,
  resourceType: ResourceType,
  data: T
}

const res21: Resource2<object> = {
  uid: 1,
  resourceType: ResourceType.BOOK,
  data: { title: 'Game of Thorns' }
}

const res22: Resource2<string> = {
  uid: 10,
  resourceType: ResourceType.PERSON,
  data: 'Mike'
}
console.log(res21);
console.log(res22);

// tuples
let arr = ['ruy', 25, true]
console.log(arr);
arr[0] = false
console.log(arr);
arr[1] = 'yoshi'
console.log(arr);
arr = [65, 54.3, 'giygas']

let tup: [ string, number, boolean] = [ 'ryu', 25, true]
tup[0] = 'ken'
console.log(tup)

// app
import { Invoice } from './classes/Invoice.js'
import { Payment } from './classes/Payment.js'
import { HasFormatter } from './interfaces/HasFormatter.js'
import { ListTemplate } from "./classes/ListTemplate.js";

const form = document.querySelector('.new-item-form') as HTMLFormElement // as operator is assuring, that the variable is not null

// inputs
const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

const ul = document.querySelector('ul')!
const list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let values: [string, string, number] = [tofrom.value, details.value, amount.valueAsNumber]

  let doc: HasFormatter
  if (type.value === 'invoice') {
    doc = new Invoice(...values)
  } else {
    doc = new Payment(...values)
  }

  list.render(doc, type.value, 'end')
})
