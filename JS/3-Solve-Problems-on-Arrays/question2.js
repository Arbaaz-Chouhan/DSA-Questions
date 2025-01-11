// Find Second Smallest and Second Largest Element in an array
// Problem Statement: Given an array, find the second smallest and second largest element in the array. Print ‘-1’ in the event that either of them doesn’t exist.

// 1.Example
function findValueSecoundSandM(arr){
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return [arr[1],arr[arr.length-2]]
}

console.log(findValueSecoundSandM([2,3,1,7,5,8,6,9]));


// 2.Example
function findSecoundLeargeValue1(arr){
let res =  arr.sort();
return [res[1],res[res.length-2]]
}

console.log(findSecoundLeargeValue1([2,3,1,7,5,8,6,9]));
