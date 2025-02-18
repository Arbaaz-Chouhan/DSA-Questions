// Find the Majority Element that occurs more than N/2 times
// Problem Statement: Given an array of N integers, write a program to return an element that occurs more than N/2 times in the given array. You may consider that such an element always exists in the array.

// function FindMajorityElement(arr) {
//     let res = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (!res.indexOf(arr[i]) === -1) {
//             res.push(arr[i]);
//         }
//         res.push(arr[i])

//     }
//     return res;
// }

function FindMajorityElement(arr) {
    let res = {};

    for (let i = 0; i < arr.length; i++) {
        if (!res[arr[i]]) {
            res[arr[i]] = 1;
        } else {
            res[arr[i]]++;
        }

        if (res[arr[i]] > arr.length / 2) {
            return arr[i];
        }
    }
}

console.log(FindMajorityElement([2, 1, 2]));
console.log(FindMajorityElement([4,4,2,4,3,4,4,3,2,4]));
