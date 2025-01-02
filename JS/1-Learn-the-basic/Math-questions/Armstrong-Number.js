// Check if a number is Armstrong Number or not
// Problem Statement: Given an integer N, return true it is an Armstrong number otherwise return false.
// An Amrstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.

function ArmstrongFun(n) {
    let sum = 0; 
    let digits = n.toString(); 
    let numDigits = digits.length;

    for (let i = 0; i < numDigits; i++) {
        let digit = Number(digits[i]); 
        sum += Math.pow(digit, numDigits);
    }

    return sum === n; 
}

// console.log(ArmstrongFun(153)); // Output: true
// console.log(ArmstrongFun(371)); // Output: true
// console.log(ArmstrongFun(2));   // Output: true
// console.log(ArmstrongFun(123)); // Output: false


