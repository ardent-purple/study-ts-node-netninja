// classes
class Invoice {
  // readonly client: string // cannot modify anywhere aside from constructor method, but readable anywhere
  // private details: string // cannot read or modify outside of class
  // public amount: number // default, do whatever

  // constructor(c: string, d: string, a: number) { // eplicit constructor
  //   this.client = c
  //   this.details = d
  //   this.amount = a
  // }

  constructor(
    public client: string, // automatically assigns props of the class there
    public details: string,
    public amount: number
  ) {}

  format(): string {
    return `${this.client} owes $${this.amount} for ${this.details}`
  }
}

class SubInvoice extends Invoice {
  interest: number

  constructor(c: string, d: string, a: number, i: number) {
    super(c, d, a)
    this.interest = i
  }
}

const invOne =  new Invoice ('mario', 'work on the mario website', 250)
console.log(invOne);
const invTwo = new Invoice ('luigi', 'plumBING', 500)
console.log(invTwo);
let invoices: Invoice[] = []
invoices.push(invOne)
invoices.push(invTwo)
console.log(invoices);

console.log(invOne);
invOne.client = 'Yoshi'
invOne.amount = 69 // fields are public by default
console.log(invOne)

for (let inv of invoices) {
  console.log(inv.client, inv.details, inv.amount, inv.format());
}


const invOne =  new Invoice ('mario', 'work on the mario website', 250)
console.log(invOne);
const invTwo = new Invoice ('luigi', 'plumBING', 500)
console.log(invTwo);
let invoices: Invoice[] = []
invoices.push(invOne)
invoices.push(invTwo)
console.log(invoices);

console.log(invOne);
invOne.client = 'Yoshi'
invOne.amount = 69 // fields are public by default
console.log(invOne)

for (let inv of invoices) {
  console.log(inv.client, inv.details, inv.amount, inv.format());
}

// const form = document.querySelector('form')
const form = document.querySelector('.new-item-form') as HTMLFormElement // as operator is assuring, that the variable is not null
console.log(form.children)

// inputs
const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log({
    type: type.value,
    tofrom: tofrom.value,
    details: details.value,
    amount: amount.valueAsNumber
  });
})
