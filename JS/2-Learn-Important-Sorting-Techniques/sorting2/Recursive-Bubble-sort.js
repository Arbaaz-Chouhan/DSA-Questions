function RecursiveBubbleSort(arr, n = arr.length) {
    
    if (n === 1) {
        return arr;
    }

    for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        }
    }

    return RecursiveBubbleSort(arr, n - 1);
}
const result = RecursiveBubbleSort([2, 3, 1, 4, 6, 5, 7]);
console.log("Sorted Array:", result);
