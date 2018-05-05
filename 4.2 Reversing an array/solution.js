//you can write your code here: https://eloquentjavascript.net/code/#4.2

function reverseArrayInPlace (arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    for (let j=arr.length - 1 - i,o = 0; o < 1; o = 1 ) {
      let copy = arr[i]
      arr[i] = arr[j]
      arr[j] = copy
    }
  }
  return arr
}

function reverseArray (arr) {
  let newArr = []
  
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i])
  }
  
  return newArr
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]



