//you can write your code here: https://eloquentjavascript.net/code/#3.3

function countBs(string) {
  return countChar(string, 'B')
}

function countChar (string, stringToCount) {
  let count = 0
	for (let i=0; i<string.length;i++) {
      if(string.charAt(i) == stringToCount) {
        count++
      }
    }
  return count
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4