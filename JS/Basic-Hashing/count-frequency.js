// Count frequency of each element in the array
// Problem statement: Given an array, we have found the number of occurrences of each element in the array.

function CountFrequency(arr) {
  const frequencyMap = {};
  for (let num of arr) {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
  }

  return frequencyMap;
}


//   console.log(CountFrequency([1, 2, 1, 3, 2])); // Output: { '1': 2, '2': 2, '3': 1 }
//   console.log(CountFrequency([1, 2, 3, 1, 2, 2, 3, 1, 2, 4, 2, 5, 3, 6, 8])); // Output: { '1': 3, '2': 5, '3': 3, '4': 1, '5': 1, '6': 1, '8': 1 }
