// Kadane's Algorithm : Maximum Subarray Sum in an Array
// Problem Statement: Given an integer array arr, find the contiguous subarray (containing at least one number) which
// has the largest sum and returns its sum and prints the subarray.


function FindMaxSubarray(arr) {
    let maxSum = arr[0];
    let currentSum = 0; 

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i]; 

        if (currentSum > maxSum) {
            maxSum = currentSum;
        }

        if (currentSum < 0) {
            currentSum = 0;
        }
    }

    return maxSum;
}

console.log(FindMaxSubarray([4, -1, 2, 1])); // 6
console.log(FindMaxSubarray( [-2,1,-3,4,-1,2,1,-5,4] )); // 6
