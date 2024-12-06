// 1: Pattern
function generatePattern1() {
    let res = "";
    for (let i = 0; i < 5; i++) { // Outer loop for rows
        for (let j = 0; j < 5; j++) { // Inner loop for columns
            res += "*";
        }
        res += "\n";
    }
    return res;
}

// console.log(generatePattern1()); //output 
// *****
// *****
// *****
// *****
// *****


// 2: Pattern
function generatePattern2() {
    let res = "";
    for (let i = 0; i < 5; i++) { // Outer loop for rows
        for (let j = 0; j <= i; j++) { // Inner loop for columns
            res += "*";
        }
        res += "\n";
    }
    return res;
}

// console.log(generatePattern2()); //output 
// *
// **
// ***
// ****
// *****


// 3: Pattern
function generatePattern3() {
    let res = "";
    for (let i = 1; i <= 5; i++) { // Outer loop for rows
        for (let j = 1; j <= i; j++) { // Inner loop for columns
            res += j;
        }
        res += "\n";
    }
    return res;
}

// console.log(generatePattern3()); //output 
// 1
// 12
// 123
// 1234
// 12345

// 4: Pattern
function generatePattern4() {
    let res = "";
    for (let i = 1; i <= 5; i++) { // Outer loop for rows
        for (let j = 1; j <= i; j++) { // Inner loop for columns
            res += i;
        }
        res += "\n";
    }
    return res;
}

// console.log(generatePattern4()); //output 
// 1
// 12
// 123
// 1234
// 12345


// 5: Pattern
function generatePattern5() {
    let res = "";
    for (let i = 5; i >= 0; i--) { // Outer loop for rows
        for (let j = 1; j <= i; j++) { // Inner loop for columns
            res += "*";
        }
        res += "\n";
    }
    return res;
}

// console.log(generatePattern5()); //output 
// 1
// 12
// 123
// 1234
// 12345


// 6: Pattern
function generatePattern6() {
    let res = "";
    for (let i = 5; i >= 0; i--) { // Outer loop for rows
        for (let j = 1; j <= i; j++) { // Inner loop for columns
            res += j;
        }
        res += "\n";
    }
    return res;
}

// console.log(generatePattern6()); //output 
// 12345
// 1234
// 123
// 12
// 1


// 7: Pattern
function generatePattern7() {
    let res = "";
    for (let i = 0; i <= 9; i++) { // Outer loop for rows
        for (let j = 1; j <= i; j++) { // Inner loop for columns
            if (i % 2 !== 0) {
                res += "*";
            }
        }
        res += "\n";
    }
    return res;
}

// console.log(generatePattern7()); //output 
// *
// ***
// *****
// *******
// *********


// 8: Pattern
function generatePattern8() {
    let res = "";
    for (let i = 9; i >= 0; i--) { // Outer loop for rows
        for (let j = 1; j <= i; j++) { // Inner loop for columns
            if (i % 2 !== 0) {
                res += "*";
            }
        }
        res += "\n";
    }
    return res;
}

// console.log(generatePattern8()); //output 
// *********
// *******
// *****
// ***
// *


// 9: Pattern
function generatePattern9() {
    let res = "";
    for (let i = 0; i <= 9; i++) { // Outer loop for rows
        for (let j = 1; j <= i; j++) { // Inner loop for columns
            if (i % 2 !== 0) {
                res += "*";
            }
        }
        res += "\n";
    }
    for (let k = 9; k >= 0; k--) { // Outer loop for rows
        for (let l = 1; l <= k; l++) { // Inner loop for columns
            if (k % 2 !== 0) {
                res += "*";
            }
        }
        res += "\n";
    }

    return res;
}

// console.log(generatePattern9()); //output 
//  *
// ***
// *****
// *******
// *********
// *********
// *******
// *****
// ***
// *

// 10: Pattern
function generatePattern10() {
    let res = "";
    for (let i = 0; i <= 5; i++) { // Outer loop for rows
        for (let j = 1; j <= i; j++) { // Inner loop for columns
            res += "*";
        }
        res += "\n";
    }
    for (let k = 4; k >= 0; k--) { // Outer loop for rows
        for (let l = 1; l <= k; l++) { // Inner loop for columns
            res += "*";

        }
        res += "\n";
    }

    return res;
}

// console.log(generatePattern10()); //output 
// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *


// 11: Pattern
function generatePattern11() {
    let res = "";
    for (let i = 1; i <= 5; i++) { // Outer loop for rows
        for (let j = 1; j <= i; j++) { // Inner loop for columns
            res += (i + j) % 2 === 0 ? "1" : "0";
        }
        res += "\n";
    }

    return res;
}

// console.log(generatePattern11()); //output 
// 1
// 01
// 101
// 0101
// 10101


// 12: Pattern
function generatePattern5(n) {
    let result = "";

    for (let i = 1; i <= n; i++) { // Outer loop for rows
        let right = "";
        let reverse = ""

        for (let j = 1; j <= i; j++) { // Inner loop for columns
            right += j;
        }

        for (let k = i; k >= 1; k--) { // Inner loop for descending
            reverse += k;
        }
        result += right + " " + reverse + "\n";
    }
    return result;
}

// console.log(generatePattern5(5)); //output 
// 1   1
// 12 21
// 123 321
// 1234 4321 
// 12345 54321

















