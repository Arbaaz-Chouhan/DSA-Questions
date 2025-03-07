// Rotate Image by 90 degree
// Problem Statement: Given a matrix, your task is to rotate the matrix 90 degrees clockwise.

function rotatedImage(arr) {
    let n = arr.length; 
    let res = Array.from({ length: n }, () => []); 

    for (let i = n - 1; i >= 0; i--) {
        let current = arr[i];
        for (let j = 0; j <n; j++) {
            res[j].push(current[j]);
        }
    }

    return res
}

console.log(rotatedImage([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // [[7,4,1],[8,5,2],[9,6,3]]
console.log(rotatedImage( [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]])); // [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]