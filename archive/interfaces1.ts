import { Invoice } from './classes/Invoice.js'
import { Payment } from './classes/Payment.js'
import { HasFormatter } from './interfaces/HasFormatter.js'

let docOne: HasFormatter
let docTwo: HasFormatter

docOne = new Invoice('yoshi', 'web work', 400)
docTwo = new Payment('mario', 'plumbing', 499)

let docs: HasFormatter[] = []
docs.push(docOne)
docs.push(docTwo)
console.log(docs);
