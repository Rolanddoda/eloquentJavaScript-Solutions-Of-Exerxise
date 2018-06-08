let arrays = [[1, 2, 3], [4, 5], [6]];

let result = arrays.reduce((array_item,result = []) => { //result initially is an empty array

    return array_item.concat(result);
}, [])

console.log(result); // → [1, 2, 3, 4, 5, 6]