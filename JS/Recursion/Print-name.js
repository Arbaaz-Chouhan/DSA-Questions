// Problem: Print your Name N times using recursion
function printName(n) {
    let res = "";
    if (n === 0) {
        return;
    }
    console.log("arbaaz");

    printName(n - 1);
}
printName(4);
