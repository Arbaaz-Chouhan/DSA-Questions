// Reverse Digits of A Number
// Problem Statement: Given an integer N return the reverse of the given number.
// Note: If a number has trailing zeros, then its reverse will not include them. For e.g., reverse of 10400 will be 401 instead of 00401.

function reverseFunction(N) {
    let revNum = 0;
    while (N > 0) {
        let lastDigit = N % 10;
        revNum = revNum * 10 + lastDigit;
        N = Math.floor(N / 10);
    }
    return revNum;
}

console.log(reverseFunction(7789)); // Output: 9877
console.log(reverseFunction(299)); // Output: 299
console.log(reverseFunction(3884)); // Output: 4883

