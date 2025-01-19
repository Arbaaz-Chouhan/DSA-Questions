// // Rotate array by K elements
// // Rotate array by K elements
// // Problem Statement: Given an array of integers, rotating array of elements by k elements either left or right.

// // 1:Examples

function RotateArrayByKElements(arr) {
    let k = arr.slice(5); 
 let concat =  k.concat(arr.slice(0,5));
 return  concat
}

console.log(RotateArrayByKElements([1, 2, 3, 4, 5, 6, 7])); // output [5,6 ,7 ]
