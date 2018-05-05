//you can write your code here: https://eloquentjavascript.net/code/#4.4

//My solution:
//==========================================================

//comparing objects and arrays of objects

let obj1 = {
  name: 'landi',
  lastName: 'doda'
}

let obj2 = {
  name: 'landi',
  lastName: 'doda'
}

let arr1 = [
  { name: 'landi', lastName: 'doda', frontEndFrameworks: [
    { name: 'Vue.js', version: '2.5' },
    { name: 'Angular', version: '6.0.0' },
  ] }
]

let arr2 = [
  { name: 'landi', lastName: 'doda', frontEndFrameworks: [
    { name: 'Vue.js', version: '2.5' },
    { name: 'Angular', version: '6.0.1' },
  ] }
]

console.log(JSON.stringify(obj1) == JSON.stringify(obj2))
console.log(JSON.stringify(arr1) == JSON.stringify(arr2))


//Book Solution
//===========================================================

function deepEqual(a, b) {
  if (a === b) return true;
  
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object") return false;

  let keysA = Object.keys(a), keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
