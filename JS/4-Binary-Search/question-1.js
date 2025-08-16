function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;
  
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
  
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  
    return -1;
  }
  
  // Example
  const numbers = [1, 3, 5, 7, 9, 11];
  const target = 9;
  const result = binarySearch(numbers, target);
  console.log(result); // Output: 3
  