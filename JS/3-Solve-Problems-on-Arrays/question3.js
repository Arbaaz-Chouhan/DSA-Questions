// Check if an Array is Sorted
// Problem Statement: Given an array of size n, write a program to check if the given array is sorted in (ascending / Increasing / Non-decreasing) order or not. If the array is sorted then return True, Else return False.

// Note: Two consecutive equal values are considered to be sorted.

// 1. Example
function CheckSortedArray1(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            return false
        }
    }
    return true;
}
 
console.log(CheckSortedArray1([1,2,3,4,5]));   // true (sorted)
console.log(CheckSortedArray1([5,4,6,7,8,9]));  // false (not sorted)


// 2. Example
function CheckSortedArray2(arr) {
    if (!Array.isArray(arr)) {
        return false;
    }

    let sortedArray = [...arr].sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== sortedArray[i]) {
            return false;
        }
    }
    return true;
}

console.log(CheckSortedArray2([1, 2, 3, 4, 5]));   // true (sorted)
console.log(CheckSortedArray2([5, 4, 6, 7, 8, 9])); // false (not sorted)



