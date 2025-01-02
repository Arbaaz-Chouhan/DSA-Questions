// Factorial of a Number : Iterative and Recursive

function FactorialNum(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * FactorialNum(n - 1);
    }
}
console.log(FactorialNum(5)); // 120
console.log(FactorialNum(10)); // 3628800
console.log(FactorialNum(6)); // 720
console.log(FactorialNum(8)); // 40320
