// Merge Overlapping Sub-intervals
// Problem Statement: Given an array of intervals, merge all the overlapping intervals and return an array of non-overlapping intervals.

function mergeIntervals(arr) {
    arr.sort((a, b) => a[0] - b[0]);

    let result = [];
    let start = arr[0][0];
    let end = arr[0][1];

    for (let i = 1; i < arr.length; i++) {
        let currStart = arr[i][0];
        let currEnd = arr[i][1];

        if (currStart <= end) {
            end = Math.max(end, currEnd);
        } else {

            result.push([start, end]);
            start = currStart;
            end = currEnd;
        }
    }

    result.push([start, end]);

    return result;
}


console.log(mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]])); // [ [ 1, 6 ], [ 8, 10 ], [ 15, 18 ] ]
console.log(mergeIntervals([[1,4],[4,5]])); // [[1,5]]
