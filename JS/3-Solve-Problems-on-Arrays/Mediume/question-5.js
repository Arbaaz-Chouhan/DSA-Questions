// Rearrange Array Elements by Sign
// Variety-1

// Problem Statement:

// There’s an array ‘A’ of size ‘N’ with an equal number of positive and negative elements. Without altering the relative order of positive and negative elements, you must return an array of alternately positive and negative values.

function rearrangeArray(nums) {
    let pos = [];
    let neg = [];

    for (let num of nums) {
        if (num > 0) pos.push(num);
        else neg.push(num);
    }

    let result = [];
    for (let i = 0; i < pos.length; i++) {
        result.push(pos[i]);
        result.push(neg[i]);
    }

    return result;
}

console.log(rearrangeArray([3, 1, -2, -5, 2, -4])); // Output: [3, -2, 1, -5, 2, -4]
