// Majority Elements(&gt;N/3 times) | Find the elements that appears more than N/3 times in the array
// Problem Statement: Given an array of N integers. Find the elements that appear more than N/3 times in the array. If no such element exists, return an empty vector.

function FindElementMoreThen3(arr) {
 let res = [];
 for(let i = 0; i<arr.length; i++){
    let freq = 0;
    if(arr[i] === arr[i] ){
       freq++
    }

    for(let j = 0; j < arr.length; j++) {
        if(arr[i] === arr[j]) {
            freq++;
        }
    }
    
    if(freq >= 3 && !res.includes(arr[i])) {
        res.push(arr[i]);
    }
}
 return res;
}

console.log(FindElementMoreThen3([1,2,2,3,2])); // 2
console.log(FindElementMoreThen3([11,33,33,11,33,11])); // 11 13


