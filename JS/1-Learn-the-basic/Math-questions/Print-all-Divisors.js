// Print all Divisors of a given Number
// Problem Statement: Given an integer N, return all divisors of N.
// A divisor of an integer N is a positive integer that divides N without leaving a remainder. In other words, if N is divisible by another integer without any remainder, then that integer is considered a divisor of N.

function allDivisores(n) {
    let res = [];
    for (let i = 0; i <= n; i++) {
        if (n % i === 0) {
            res.push(i)
        }
    }
    return res
}

console.log(allDivisores(36));
console.log(allDivisores(12));
