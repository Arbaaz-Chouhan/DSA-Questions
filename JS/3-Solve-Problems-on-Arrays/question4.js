// Remove Duplicates in-place from Sorted Array

// Problem Statement: Given an integer array sorted in non-decreasing order, remove the duplicates in place such that each unique element appears only once. The relative order of the elements should be kept the same.
// If there are k elements after removing the duplicates, then the first k elements of the array should hold the final result. It does not matter what you leave beyond the first k elements.
// Note: Return k after placing the final result in the first k slots of the array.

// 1.Example
function RemoveDuplicateValue1(arr) {
    let res = [];
    let duplicatesValuePlace = [];
    for (let i = 1; i < arr.length; i++) {
        if (res.indexOf(arr[i]) === -1) {
            res.push(arr[i]);
        } else if (res.indexOf(arr[i]) !== -1) {
            duplicatesValuePlace.push("_")
        }
    }

    return [...res, ...duplicatesValuePlace]
}

// console.log(RemoveDuplicateValue1([1, 1, 2, 2, 2, 3, 3]));  //[1,2,3,_,_,_,_]
// console.log(RemoveDuplicateValue1([1,1,1,2,2,3,3,3,3,4,4])); //  [1,2,3,4,_,_,_,_,_,_,_]



// 2.Example
function RemoveDuplicateValue2(arr) {
    let res = [];
    let duplicatesValuePlace = [];
    for (let i = 1; i < arr.length; i++) {
        if (!res.includes(arr[i])) {
            res.push(arr[i]);
        } else if (res.indexOf(arr[i]) !== -1) {
            duplicatesValuePlace.push("_")
        }
    }

    return [...res, ...duplicatesValuePlace]
}

// console.log(RemoveDuplicateValue2([1, 1, 2, 2, 2, 3, 3]));  //[1,2,3,_,_,_,_]
// console.log(RemoveDuplicateValue2([1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4])); //  [1,2,3,4,_,_,_,_,_,_,_]


    