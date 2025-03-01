// Leaders in an Array
// Problem Statement: Given an array, print all the elements which are leaders. A Leader is an element that is greater than all of the elements on its right side in the array.

function LeaderFn(arr) {
    let res = [];
    let maxFromRight = arr[arr.length - 1];
    res.push(maxFromRight);
    for (let i = arr.length - 2; i >= 0; i--) {
        if (arr[i] > maxFromRight) {
            maxFromRight = arr[i]; 
            res.push(maxFromRight);
        }
    }
    return res.reverse();

}

console.log(LeaderFn([4, 7, 1, 0])); //  7 1 0
console.log(LeaderFn([10, 22, 12, 3, 0, 6])); // 22 12 6
