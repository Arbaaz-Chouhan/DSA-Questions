//  Check if a number is Palindrome or Not
// Problem Statement: Given an integer N, return true if it is a palindrome else return false.
// A palindrome is a number that reads the same backward as forward. For example, 121, 1331, and 4554 are palindromes because they remain the same when their digits are reversed.

function palindrome(N) {
    let strNum = N.toString();
    let reversedStr = strNum.split("").reverse().join("")

    return strNum === reversedStr
}

console.log(palindrome(4554));
console.log(palindrome(7789)); 