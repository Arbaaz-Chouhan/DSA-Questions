// Count Subarray sum Equals K
// Problem Statement: Given an array of integers and an integer k, return the total number of subarrays whose sum equals k.
// A subarray is a contiguous non-empty sequence of elements within an array.

function CountSubarray(arr, k) {
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

// console.log(CountSubarray([3, 1, 2, 4], 6)); // Output: 2   Explanation
// //  The subarrays that sum up to 6 are [3, 1, 2] and [2, 4].

// console.log(CountSubarray([1,2,3],3)); // Output: 2  Explanation:
// // The subarrays that sum up to 3 are [1, 2], and [3].

