// Find the missing number in an array
// Problem Statement: Given an integer N and an array of size N-1 containing N-1 numbers between 1 to N. Find the number(between 1 to N), that is not present in the given array.

function FindMissingNumber(arr) {
    let N = arr.length + 1; 

    let expectedSum = (N * (N + 1)) / 2;
    
    let actualSum = 0;
    for (let i = 0; i < arr.length; i++) {
        actualSum += arr[i]; 
    }

    return expectedSum - actualSum; // Missing number
}

console.log(FindMissingNumber([1, 2, 4, 5])); // Output: 3
console.log(FindMissingNumber([2, 3, 1, 5])); // Output: 4
console.log(FindMissingNumber([1, 3]));       // Output: 2