// Selection Sort Algorithm
// Problem Statement: Given an array of N integers, write a program to implement the Selection sorting algorithm.


function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {

            if (arr[j] < arr[i]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
    return arr;
}

let array = [13, 46, 24, 52, 20, 9];
console.log(selectionSort(array));



