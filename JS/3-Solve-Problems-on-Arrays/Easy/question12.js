// Find the number that appears once, and the other numbers twice
// Problem Statement: Given a non-empty array of integers arr, every element appears twice except for one. Find that single one.


function FindSingleOneI(arr) {

    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
             return arr[i];
        }
    }
}

// console.log(FindSingleOneI([2, 2, 1]));
// console.log(FindSingleOneI([2, 2,4,2,9,4,3,3,2]));
