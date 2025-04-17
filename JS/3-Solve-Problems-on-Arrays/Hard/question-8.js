// Find the repeating and missing numbers
// Problem Statement: You are given a read-only array of N integers with values also in the range [1, N] both inclusive. Each integer appears exactly once except A which appears twice and B which is missing. The task is to find the repeating and missing numbers A and B where A repeats twice and B is missing.

function FindRandMWord(arr) {
    let res = [];
    let n = arr.length;

    // Find repeating element (A)
    for (let i = 0; i < n; i++) {
        if (arr.indexOf(arr[i]) !== i && !res.includes(arr[i])) {
            res.push(arr[i]);  // Repeating element found
        }
    }

    // Find missing element (B)
    for (let i = 1; i <= n; i++) {
        if (!arr.includes(i)) {
            res.push(i);  // Missing element found
            break;
        }
    }

    return res;
}

console.log(FindRandMWord([3, 1, 2, 5, 3])); // ➝ [3, 4]
