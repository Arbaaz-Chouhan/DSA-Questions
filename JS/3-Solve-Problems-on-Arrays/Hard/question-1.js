// Program to generate Pascal's Triangle
// Problem Statement: This problem has 3 variations. They are stated below:
// Variation 1: Given row number r and column number c. Print the element at position (r, c) in Pascal’s triangle.
// Variation 2: Given the row number n. Print the n-th row of Pascal’s triangle.
// Variation 3: Given the number of rows n. Print the first n rows of Pascal’s triangle.
// In Pascal’s triangle, each number is the sum of the two numbers directly above it as shown in the figure below:

function generatePascalsTriangle(n) {
    let triangle = [];

    for (let i = 0; i < n; i++) {
        let row = [1]; // First element is always 1

        for (let j = 1; j < i; j++) {
            // Previous row ke dono adjacent elements ka sum
            row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }

        if (i > 0) row.push(1); // Last element is always 1 (except first row)

        triangle.push(row);
    }

    return triangle;
}

// Example: Generate first 5 rows of Pascal's Triangle
let rows = 5;
let pascalTriangle = generatePascalsTriangle(rows);

pascalTriangle.forEach(row => console.log(row.join(" ")));

