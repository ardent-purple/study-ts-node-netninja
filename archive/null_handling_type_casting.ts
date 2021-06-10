const anchor = document.querySelector('a')! // second way to remove possible error of null access: assure TS that we certainly know, this is not null

// console.log(anchor.href); // may get an error due to anchor possibly being null

if (anchor) {
  console.log(anchor.href); // one way to tackle this
}
console.log(anchor.href);

// third way to eliminate error of null pointer: add optional chaining
const anchor2 = document.querySelector('a')
console.log(anchor2?.href);
