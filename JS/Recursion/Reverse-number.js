// Reverse a given Array
function reverseNum(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    else {
        return [arr[arr.length - 1]].concat(reverseNum(arr.slice(0, arr.length - 1)));
    }
}

console.log(reverseNum([5, 4, 3, 2, 1])); // [1,2,3,4,5];
