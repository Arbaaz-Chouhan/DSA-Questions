// Length of the longest subarray with zero Sum
// Problem Statement: Given an array containing both positive and negative integers, we have to find the length of the longest subarray with the sum of all elements equal to zero.

function LengthOfLongestSubarrayFn(arr) {
    let maxLength = 0;

    for (let i = 0; i < arr.length; i++) {
        let sum = 0;

        for (let j = i; j < arr.length; j++) {
            sum += arr[j];

            if (sum === 0) {
                let length = j - i + 1;
                if (length > maxLength) {
                    maxLength = length;
                }
            }
        }
    }

    return maxLength;
}


console.log(LengthOfLongestSubarrayFn([9, -3, 3, -1, 6, -5])); // Output: 5
console.log(LengthOfLongestSubarrayFn([6, -2, 2, -8, 1, 7, 4, -10])); // Output: 8
