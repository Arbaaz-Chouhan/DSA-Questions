function nextPermutation(arr) {
    let n = arr.length;
    let i, j;

    for (i = n - 2; i >= 0; i--) {
        if (arr[i] < arr[i + 1]) break;
    }

    if (i < 0) {
        arr.reverse();
        return arr;
    }

    for (j = n - 1; j > i; j--) {
        if (arr[j] > arr[i]) break;
    }

    [arr[i], arr[j]] = [arr[j], arr[i]];

    for (let left = i + 1, right = n - 1; left < right; left++, right--) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
    }

    return arr;
}


console.log(nextPermutation([1, 3, 2]));  // Output: [2, 1, 3]
console.log(nextPermutation([2, 1, 3]));  // Output: [2, 3, 1]
console.log(nextPermutation([3, 2, 1]));  // Output: [1, 2, 3] 
console.log(nextPermutation([1, 2, 3]));  // Output: [1, 3, 2]
console.log(nextPermutation([1, 1, 5]));  // Output: [1, 5, 1]
