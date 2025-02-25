// Kadane's Algorithm : Maximum Subarray Sum in an Array
// Problem Statement: Given an integer array arr, find the contiguous subarray (containing at least one number) which
// has the largest sum and returns its sum and prints the subarray.

// 1.Example
function FindMaxSubarray1(arr) {
    return arr.reduce((acc, curr) => acc + curr)
}

console.log(FindMaxSubarray1([4, -1, 2, 1])); // 6
console.log(FindMaxSubarray1([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 1

// 2.Example
function FindMaxSubarray2(arr) {
    let plus = 0;
    let less = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === +arr[i]) {
            plus += arr[i];
        } else if (arr[i] === -arr[i]) {
            less += arr[i];
        }
    }

    let sum = Math.abs(plus - less)
    // let maxSum = Math.max(plus - less)

    return sum;
}

console.log(FindMaxSubarray2([4, -1, 2, 1])); // 6
console.log(FindMaxSubarray2([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 1

