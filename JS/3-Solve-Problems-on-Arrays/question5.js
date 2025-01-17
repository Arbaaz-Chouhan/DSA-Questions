// Left Rotate the Array by One
// Problem Statement: Given an array of N integers, left rotate the array by one place.

function LeftRotatetheArraybyOne(arr) {
    let firstElement = arr[0];
    for (let i = 0; i < arr.length; i++) {
        arr[0] = arr[arr.length - 1]

    }

    arr[arr.length - 1] = firstElement

    return arr
}

// console.log(LeftRotatetheArraybyOne([1, 2, 3, 4, 5]));


// 2.Example
function LeftRotatetheArraybyOne(arr) {
    let shift = arr.shift();
    arr.push(shift)

    return arr
}

console.log(LeftRotatetheArraybyOne([1, 2, 3, 4, 5]));
