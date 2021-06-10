// interfaces
interface IsPerson {
  name: string,
  age: number,
  speak(a: string) : void
  spend(a: number): number
}

const me: IsPerson = {
  name: 'Shaun',
  age: 40,
  speak(text: string): void {
    console.log(`${this.name} said ${text}`);
  },
  spend(amount) {
    console.log(`${this.name} spent ${amount}`);
    return -amount;
  },
}
console.log(me);

const greetPerson = (person: IsPerson) => {
  console.log('hello', person.name, person.speak('a'), person.spend(4));
}
greetPerson(me)
