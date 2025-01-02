// Check if the given String is Palindrome or not
// Problem Statement: "Given a string, check if the string is palindrome or not."  A string is said to be palindrome if the reverse of the string is the same as the string.

function palindrome(str) {
  if(str.length <= 1){
   return true; 
  }else {
     return str[0] === str[str.length - 1]  ? "Palindrome" : "Not Palindrome";
  }
}

console.log(palindrome("ABCDCBA"));  // Palindrom
console.log(palindrome("TAKE U FORWARD")); // Not Plindrom

