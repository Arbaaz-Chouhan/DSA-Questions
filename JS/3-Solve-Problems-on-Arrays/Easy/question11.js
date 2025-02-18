// Count Maximum Consecutive One's in the array
// Problem Statement: Given an array that contains only 1 and 0 return the count of maximum consecutive ones in the array.


function FindConsecutiveOne(arr) {
    let maxCount = 0, currentCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            currentCount++;
            maxCount = Math.max(maxCount, currentCount);
        } else {
            currentCount = 0;
        }
    }

    return maxCount;
}

// console.log(FindConsecutiveOne([1, 1, 0, 1, 1, 1]));

// console.log(FindConsecutiveOne([1, 0, 1, 1, 0, 1]));
