//# Example 
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) { 
        let key = arr[i]; 
        let j = i - 1;

        // Inner loop: Shift elements greater than key
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        // Place the key in the correct position
        arr[j + 1] = key;
    }
    return arr;
}

let array1 = [13, 46, 24, 52, 20, 9];
console.log(insertionSort(array1)); // Output: [9, 13, 20, 24, 46, 52]

//## Example 
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        
        // Inner loop for shifting elements
        for (let j = i - 1; j >= 0 && arr[j] > key; j--) {
            arr[j + 1] = arr[j]; // Shift element to the right
            arr[j] = key;        // Place the key (manual placement)
        }
    }
    return arr;
}

let array2 = [13, 46, 24, 52, 20, 9];
console.log(insertionSort(array2)); // Output: [9, 13, 20, 24, 46, 52]
