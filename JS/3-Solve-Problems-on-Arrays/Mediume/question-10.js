// Spiral Traversal of Matrix
// Problem Statement: Given a Matrix, print the given matrix in spiral order.

// Example:1

function spiralOrder(matrix) {
    if (matrix.length === 0) return [];

    let result = [];
    let top = 0, bottom = matrix.length - 1;
    let left = 0, right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        // Move Right →
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++;

        // Move Down ↓
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;

        // Move Left ← (if any row remains)
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--;
        }

        // Move Up ↑ (if any column remains)
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
        }
    }

    return result;
}


console.log(spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]));


// Example:2
function spiralOrder(matrix) {
    const result = [];
    while (matrix.length) {
        // Remove and append the first row
        result.push(...matrix.shift());

        // Append the last element of each remaining row
        for (let row of matrix) {
            if (row.length) {
                result.push(row.pop());
            }
        }

        // Append the last row in reverse order
        if (matrix.length) {
            result.push(...matrix.pop().reverse());
        }

        // Append the first element of each remaining row in reverse order
        for (let i = matrix.length - 1; i >= 0; i--) {
            if (matrix[i].length) {
                result.push(matrix[i].shift());
            }
        }
    }
    return result;
}

// Example usage
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(spiralOrder(matrix)); // Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]

console.log(spiralOrder([[1, 2, 3, 4],
[5, 6, 7, 8],
[9, 10, 11, 12],
[13, 14, 15, 16]])); // [1, 2, 3, 4, 8, 12,16, 15, 14, 13, 9, 5,6, 7, 11, 10]
