// lesson 9: type aliases
type StrOrNum = string | number
type User = { name: string, uid: StrOrNum }

const logDetails = (user: User) => console.log(`${user.name} has the uid of ${user.uid}`);

logDetails({ name: 'mama', uid: 10})
logDetails({ name: 'papa', uid: '10'})
