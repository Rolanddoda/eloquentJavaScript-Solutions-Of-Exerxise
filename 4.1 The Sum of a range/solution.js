//you can write your code here: https://eloquentjavascript.net/code/#4.1

function range(start, end) { //first exercise
  let newArr = []
  for(let i = start;i <= end; i++) {
      newArr.push(i)
  }
  return newArr
}

function sum (arr) { // second exercise
  let sum = 0;
  for (let i= 0,o; o = arr[i]; i++) {
    sum += arr[i]
  }
  return sum
}

function range(start, end, step = start > end ? -1 : 1) { //third exercise
  let newArr = []
    
  for (let i = start,o = start > end ? end : start; o <= (start > end ? start : end); i+= step,o+= Math.abs(step)){
    newArr.push(i)  
  }
  return newArr
}



console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range2(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
