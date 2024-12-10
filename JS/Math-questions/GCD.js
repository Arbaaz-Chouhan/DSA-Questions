// Find GCD of two numbers
// Problem Statement: Given two integers N1 and N2, find their greatest common divisor.
// The Greatest Common Divisor of any two integers is the largest number that divides both integers.

function GCDFun(n1,n2){
let res = 1;
    for(let i = 1; i<= n1; i++){
        if(n1 % i === 0 && n2 % i === 0){
          res = i
        }
    }
    return res
}


// console.log(GCDFun(9,12)); // 3
// console.log(GCDFun(20,15)); // 5


