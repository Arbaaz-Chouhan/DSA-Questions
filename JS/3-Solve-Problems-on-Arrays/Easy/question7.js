// Move all Zeros to the end of the array
// In this article we will learn how to solve the most asked coding interview problem: "Move all Zeros to the end of the array"
// Problem Statement: You are given an array of integers, your task is to move all the zeros in the array to the end of the array and move non-negative integers to the front by maintaining their order.



function AllZeroRemove(arr) {
    let integer = [];
    let AllZero = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            AllZero.push(arr[i])
        } else {
            integer.push(arr[i]);
        }
    }

    let res = integer.concat(AllZero);

    return res;
}



// console.log(AllZeroRemove([1, 0, 2, 3, 0, 4, 0, 1])); // [ 1 ,2 ,3 ,4 ,1 ,0 ,0 ,0]

