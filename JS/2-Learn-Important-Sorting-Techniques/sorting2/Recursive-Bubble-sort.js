function RecursiveBubbleSort(arr, n = arr.length) {
    // Base case: If the size of the array is 1, it is already sorted
    if (n === 1) {
        return arr;
    }

    // Perform one pass of bubble sort
    for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        }
    }

    return RecursiveBubbleSort(arr, n - 1);
}

// Test the function
const result = RecursiveBubbleSort([2, 3, 1, 4, 6, 5, 7]);
console.log("Sorted Array:", result);
