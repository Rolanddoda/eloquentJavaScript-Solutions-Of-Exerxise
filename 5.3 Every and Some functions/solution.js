function every (array, callback) {
    for (let item of array) {
        if (!callback(item)) return false
    }

    return true
}

function some (array, callback) {
    for (let item of array) {
        if (callback(item)) return true
    }

    return false
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

console.log(some([1, 3, 5], n => n > 10));
// → false
console.log(some([2, 4, 16], n => n < 10));
// → true
console.log(some([], n => n < 10));
// → false