// Longest Consecutive Sequence in an Array
// Problem Statement: You are given an array of ‘N’ integers. You need to find the length of the longest sequence which contains the consecutive elements.

function LongestConsecutivefn(arr) {
    let maxCount = 0;

    for (let i = 0; i < arr.length; i++) {
        let count = 1;
        let current = arr[i];

        for (let j = 0; j < arr.length; j++) {
            if (arr.includes(current + 1)) {
                current += 1;
                count++;
            }
        }
        maxCount = Math.max(maxCount, count);
    }

    return maxCount;
}


// console.log(LongestConsecutivefn([100, 200, 1, 3, 2, 4]));
// console.log(LongestConsecutivefn([3, 8, 5, 7, 6]));
