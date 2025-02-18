// Linear Search in C
// Problem Statement: Given an array, and an element num the task is to find if num is present in the given array or not. If present print the index of the element or print -1.
// 1.Example

function FindIndex1(arr, n) {
    return arr.indexOf(n);
}

console.log(FindIndex1([1, 2, 3, 4, 5], 3)); // 2
console.log(FindIndex1([5, 4, 3, 2, 1], 5)); // 0

// 2.Example
function FindIndex2(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) {
            return i;
        }
    }
}

console.log(FindIndex2([1, 2, 3, 4, 5], 3)); // 2
console.log(FindIndex2([5, 4, 3, 2, 1], 5)); // 0