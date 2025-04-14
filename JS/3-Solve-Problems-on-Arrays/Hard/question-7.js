// Merge two Sorted Arrays Without Extra Space
// Mark as Completed
// Problem statement: Given two sorted arrays arr1[] and arr2[] of sizes n and m in non-decreasing order. Merge them in sorted order. Modify arr1 so that it contains the first N elements and modify arr2 so that it contains the last M elements.

function mergeSortedArrays(arr1, arr2) {
    let n = arr1.length;
    let m = arr2.length;

    for (let i = 0; i < n; i++) {
        if (arr1[i] > arr2[0]) {
            
            let temp = arr1[i];
            arr1[i] = arr2[0];
            arr2[0] = temp;

            for (let j = 0; j < m - 1; j++) {
                if (arr2[j] > arr2[j + 1]) {
                    let temp2 = arr2[j];
                    arr2[j] = arr2[j + 1];
                    arr2[j + 1] = temp2;
                } else {
                    break; 
                }
            }
        }
    }
}

let arr1 = [1, 4, 8, 10];
let arr2 = [2, 3, 9];

mergeSortedArrays(arr1, arr2);

console.log("Arr1:", arr1); // [1, 2, 3, 4]
console.log("Arr2:", arr2); // [8, 9, 10]
