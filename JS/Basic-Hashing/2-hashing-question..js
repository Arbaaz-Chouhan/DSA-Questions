// Find the highest/lowest frequency element


// Problem Statement: Given an array of size N. Find the highest and lowest frequency element.

function frequency(arr) {
    let res = [];
    const frequencyMap = {};
    for (let num of arr) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }

    let lowerFrequency = Math.min(...Object.values(frequencyMap));
    let highestFrequency = Math.max(...Object.values(frequencyMap));

    for (let num in frequencyMap) {
        if (frequencyMap[num] === lowerFrequency) {
            res.push(Number(num));
        } else if (frequencyMap[num] === highestFrequency) {
            res.push(Number(num));
        }

    }
    return res
}

console.log(frequency([10, 5, 10, 15, 10, 5]));
