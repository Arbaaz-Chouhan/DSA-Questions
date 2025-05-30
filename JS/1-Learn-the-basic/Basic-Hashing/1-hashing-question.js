// Given an array of integers: [1, 2, 1, 3, 2] and we are given some queries: [1, 3, 4, 2, 10]. For each query, we need to find out how many times the number appears in the array. For example, if the query is 1 our answer would be 2, and if the query is 4 the answer will be 0. 
// Similarly, the following will be the answers to the given queries:

function hashingFunction(arr) {
    const frequencyMap = {};
    for (let num of arr) {
      frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }

    let maxFrequency = Math.max(...Object.values(frequencyMap));
  
    for (let num in frequencyMap) {
      if (frequencyMap[num] === maxFrequency) {
        return Number(num);
      }
    }
  }
  

//   console.log(hashingFunction([1, 2, 1, 3, 2])); // Output: 1
//   console.log(hashingFunction([1, 2, 3, 1, 2, 2, 3, 1, 2, 4, 2, 5, 3, 6, 8])); // Output: 2
  



let arr = [1,2,3,4,5]
console.log(arr.length-1);
