// 13: Pattern
function generatePattern13(n) {
    let result = "";
    let currentNum = 1;

    for (let i = 1; i <= n; i++) { // Outer loop for rows

        for (let j = 1; j <= i; j++) { // Inner loop for columns
            result += " "+ currentNum;
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
    for (let i = 0; i <str.length; i++) { // Outer loop for rows
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
    for (let i = str.length-1; i >= 0; i--) { // Outer loop for rows
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
    for (let i = 0; i<str.length; i++) { // Outer loop for rows
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
    let isFirstAAdded = false
    let firstValue = str[0];
    for (let i = 0; i <str.length; i++) { // Outer loop for rows
        for (let j = 0; j <= i; j++) { // Inner loop for columns
            result += str[j];   
        }
          if (result.length-1 !== "A") {
            result += firstValue; 
        }  
        result += "\n"  
    }
    return result ;
}

// console.log(generatePattern17("ABCDE")); //output 






