// find the large element in an array
// Problem Statement: Given an array, we have to find the largest element in the array.

// 1.Example
function findLargeElement(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr[arr.length - 1]
}

let array = [2, 1, 4, 5, 6, 3, 8];
console.log(findLargeElement(array));


// 2.Example
function findMaxValue(arr) {
    return Math.max(...arr)
}

console.log(findMaxValue([2, 1, 4, 5, 6, 3, 8]));


// 3.Example
function findLargeValue(arr) {
    let sortValue = arr.sort();
    return sortValue[sortValue.length - 1]
}

console.log(findLargeValue([2, 1, 4, 8, 5, 6, 3]));
