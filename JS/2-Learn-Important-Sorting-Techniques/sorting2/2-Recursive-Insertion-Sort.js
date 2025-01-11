// Recursive-Insertion-Sort

function RecursiveBubbleSort(arr) {
     for (let i = 0; i <arr.length-1; i++) { 
        let key = arr[i];
        for (let j = i - 1; j >= 0 && arr[j] > key; j--) {
            arr[j + 1] = arr[j]; 
            arr[j] = key; 
    }
}
    return arr;
}

const result = RecursiveBubbleSort([2, 3, 1, 4, 6, 5, 7]);
console.log("Sorted Array:", result);

