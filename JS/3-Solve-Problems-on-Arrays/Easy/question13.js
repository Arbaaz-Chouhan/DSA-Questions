// Longest Subarray with given Sum K(Positives)

// Problem Statement: Given an array and a sum k, we need to print the length of the longest subarray that sums to k.

function LogestSubarray(arr, k) {
    let maxLength = 0;
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = 0; j < arr.length; j++) {
            sum += arr[j];
            if (sum === k) {
                maxLength = Math.max(maxLength, j - i + 1);
            }
        }
    }
    return maxLength;
}


console.log(LogestSubarray([2, 3, 5], 5));
console.log(LogestSubarray([2, 3, 5,7,4], 10));