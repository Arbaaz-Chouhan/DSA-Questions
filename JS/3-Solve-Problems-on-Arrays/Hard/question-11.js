// Maximum Product Subarray in an Array
// Mark as Completed
// Problem Statement: Given an array that contains both negative and positive integers, find the maximum product subarray.

function maximum(arr) {
    let sum = 1;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] !== 0) {
            sum *= arr[i];
        }
        
    }
    return sum;
}

console.log(maximum([1, 2, 3, 4, 5, 0])); // Output: 120









