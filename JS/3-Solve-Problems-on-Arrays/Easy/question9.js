// Union of Two Sorted Arrays  
// Problem Statement: Given two sorted arrays, arr1, and arr2 of size n and m. Find the union of two sorted arrays.

// The union of two arrays can be defined as the common and distinct elements in the two arrays.NOTE: Elements in the union should be in ascending order.

function findUniqueNumber(arr1, arr2) {
    let res = [];
    let singleArraye = arr1.concat(arr2);
    for (let i = 0; i < singleArraye.length; i++) {
        if (res.indexOf(singleArraye[i]) === -1) {
            res.push(singleArraye[i]);
        }
    }

    return res;
}

console.log(findUniqueNumber([1, 2, 3, 4, 5], [2, 3, 4, 4, 5]));  // [ 1, 2, 3, 4, 5 ]
