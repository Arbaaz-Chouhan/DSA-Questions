// Check if a number is prime or not
// Problem Statement: Given an integer N, check whether it is prime or not. A prime number is a number that is only divisible by 1 and itself and the total number of divisors is 2.

function primeryNumber(N) {
    if (N <= 1) {
        return false
    }

    for (let i = 2; i * i <= N; i++) {
        if (N % i === 0) {
            return false
        }
    }

    return true
}
console.log(primeryNumber(2));   // true
console.log(primeryNumber(10)); // false
console.log(primeryNumber(11)); // ture
console.log(primeryNumber(14)); // false