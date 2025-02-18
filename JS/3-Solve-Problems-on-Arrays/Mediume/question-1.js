// Sort an array of 0s, 1s and 2s
// Problem Statement: Given an array consisting of only 0s, 1s, and 2s. Write a program to in-place sort the array without using inbuilt sort functions. ( Expected: Single pass-O(N) and constant space)


function SortArray(arr) {
    let count0 = 0, count1 = 0, count2 = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) count0++;
        else if (arr[i] === 1) count1++;
        else if (arr[i] === 2) count2++;
    }

    let index = 0;
    for (let i = 0; i < count0; i++) {
        arr[index++] = 0;
    }

    for (let i = 0; i < count1; i++) {
        arr[index++] = 1;
    }

    for (let i = 0; i < count2; i++) {
        arr[index++] = 2;
    }

    return arr;
}

console.log(SortArray([2, 0, 2, 1, 1, 0])); // [ 0, 0, 1, 1, 2, 2 ]
