// Sum of first N Natural Numbers
// Problem statement: Given a number ‘N’, find out the sum of the first N natural numbers.

function sumnum(n) {
    if (n.length === 1) {
        return n[0];
    } else {
        return n[0] + sumnum(n.slice(1))
    }
}

// console.log(sumnum([1, 2, 3, 4, 5]));
