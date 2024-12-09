// 13: Pattern
function generatePattern13(n) {
    let result = "";
    let currentNum = 1;

    for (let i = 1; i <= n; i++) { // Outer loop for rows

        for (let j = 1; j <= i; j++) { // Inner loop for columns
            result += " " + currentNum;
            currentNum++;
        }


        result += "\n"
    }

    return result;
}

// console.log(generatePattern13(5)); //output 
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15


// 14: Pattern
function generatePattern14(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) { // Outer loop for rows
        for (let j = 0; j <= i; j++) { // Inner loop for columns
            result += str[j];
        }
        result += "\n"
    }

    return result;
}

// console.log(generatePattern14("ABCDE")); //output 
// A
// AB
// ABC
// ABCD
// ABCDE


// 15: Pattern
function generatePattern15(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) { // Outer loop for rows
        for (let j = 0; j <= i; j++) { // Inner loop for columns
            result += str[j];
        }
        result += "\n"
    }

    return result;
}

// console.log(generatePattern15("ABCDE")); //output 
// ABCDE
// ABCD
// ABC
// AB
// A


// 16: Pattern
function generatePattern16(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) { // Outer loop for rows
        for (let j = 0; j <= i; j++) { // Inner loop for columns
            result += str[i];
        }
        result += "\n"
    }

    return result;
}

// console.log(generatePattern16("ABCDE")); //output 
// A
// BB
// CCC
// DDDD
// EEEEE


// 17 : Pattern
function generatePattern17(str) {
    let result = "";
    let firstValue = str[0];
    for (let i = 0; i < str.length; i++) { // Outer loop for rows
        for (let j = 0; j <= i; j++) { // Inner loop for columns
            result += str[j];
        }
        if (result.length - 1 !== "A") {
            result += firstValue;
        }
        result += "\n"
    }
    return result;
}

// console.log(generatePattern17("ABCDE")); //output 


// 18 : Pattern
function generatePattern18(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) { // Outer loop for rows
        for (let j = i; j < str.length; j++) { // Inner loop for columns
            result += str[j];
        }
        result += "\n"
    }
    return result;
}

// console.log(generatePattern18("ABCDE")); //output 
// E
// DE
// CDE
// BCDE
// ABCDE

// 19 : Pattern
function generatePattern19(num) {
    let result = "";
    // Top Half of the Pattern
    for (let i = num; i > 0; i--) {
        let stars = "*".repeat(i);
        let spaces = " ".repeat(2 * (num - i));
        result += stars + spaces + stars + "\n";
    }

    // Bottom Half of the Pattern
    for (let i = 1; i <= num; i++) {
        let stars = "*".repeat(i);
        let spaces = " ".repeat(2 * (num - i));
        result += stars + spaces + stars + "\n";
    }

    return result;
}

// console.log(generatePattern19(5)); //output 


// **********
// ****  ****
// ***    ***
// **      **
// *        *
// *        *
// **      **
// ***    ***
// ****  ****
// **********


// 20 : Pattern
function generatePattern20(num) {
    let result = "";
    // Top Half of the Pattern
    for (let i = 0; i <= num; i++) {
        let stars = "*".repeat(i);
        let spaces = " ".repeat(2 * (num - i));
        result += stars + spaces + stars + "\n";
    }

    // Bottom Half of the Pattern
    for (let i = 4; i >= 0; i--) {
        let stars = "*".repeat(i);
        let spaces = " ".repeat(2 * (num - i));
        result += stars + spaces + stars + "\n";
    }

    return result;
}

// console.log(generatePattern20(5,4)); //output 


// 21 : Pattern
function generatePattern21(num) {
    let result = "";
    // Top Half of the Pattern
    for (let i = num; i >= 0; i--) {
        let stars = "*".repeat(i);
        let spaces = " ".repeat(2 * (num - i));
        result += stars + spaces + stars + "\n";
    }

    // Bottom Half of the Pattern
    for (let i = 0; i <= num; i++) {
        let stars = "*".repeat(i);
        let spaces = " ".repeat(2 * (num - i));
        result += stars + spaces + stars + "\n";
    }

    return result;
}

// console.log(generatePattern21(2)); //output 


// 22 : Pattern
function generatePattern22(num) {
    let result = "";
    for (let i = num; i >= 1; i--) { // Outer loop for rows
        for (let j = num; j >= 1; j--) { // Inner loop for columns
            if (j > i) {
                result += j;
            } else {
                result += i;
            }
        }
        for (let l = 2; l <= num; l++) { // Inner loop for columns
            if (l > i) {
                result += l;
            } else {
                result += i;
            }
        }
        result += "\n"
    }

    for (let i = 2; i<= num; i++) { // Outer loop for rows
        for (let j = num; j >= 1; j--) { // Inner loop for columns
            if (j > i) {
                result += j;
            } else {
                result += i;
            }
        }
        for (let l = 2; l <= num; l++) { // Inner loop for columns
            if (l > i) {
                result += l;
            } else {
                result += i;
            }
        }
        result += "\n"
    }

    return result;
}

console.log(generatePattern22(4)); //output
// 4444444
// 4333334
// 4322234
// 4321234
// 4322234
// 4333334
// 4444444


