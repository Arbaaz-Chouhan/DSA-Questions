// Count Subarray sum Equals K
// Problem Statement: Given an array of integers and an integer k, return the total number of subarrays whose sum equals k.
// A subarray is a contiguous non-empty sequence of elements within an array.

function Subarray(arr, k) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            if (sum === k) {
                count++;
            }
        }
    }

    return count;
}

console.log(Subarray([3, 1, 2, 4],6)); // 2
console.log(Subarray([1,2,3],3)); // 2
