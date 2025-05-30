// Problem: Print from 1 to N using Recursion

function printnum(n) {
    if (n === 0) {
        return;
    } else {

        printnum(n - 1)
        console.log(n);

    }
}

printnum(4)
// 1
// 2
// 3
// 4
printnum(5);
// 1
// 2
// 3
//    
// 5


function reversePrintNum(n) {
    if (n === 0) {
        return;
    } else {
        console.log(n);
        reversePrintNum(n - 1)
    }
}

reversePrintNum(4);
// output =>
// 4
// 3
// 2
// 1
