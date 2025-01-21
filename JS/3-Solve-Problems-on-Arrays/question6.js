// // Rotate array by K elements
// // Rotate array by K elements
// // Problem Statement: Given an array of integers, rotating array of elements by k elements either left or right.

// // 1:Examples

function RotateArrayByKElements(arr) {
    let k = arr.slice(5);
    let concat = k.concat(arr.slice(0, 5));
    return concat
}

// console.log(RotateArrayByKElements([1, 2, 3, 4, 5, 6, 7])); // output [5,6 ,7 ]


function revesefn(str) {
    let res = [];
    let words = str.split("");
    for (let i = 0; i < words.length; i++) {
        if (words[i] >= 'a' && words[i] <= 'z' || words[i] >= 'A' && words[i] <= 'Z') {
            res.push(words[i])
        }else{
            res += str[i]
        }
    }
    return res.join("")
}
console.log(revesefn("arbzdd"));  // arbddz
