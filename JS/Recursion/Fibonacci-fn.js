// Print Fibonacci Series up to Nth term
// Problem Statement: Given an integer N. Print the Fibonacci series up to the Nth term.

function FibonacciSeries(n) {
    if (n === 0) {
      return [0]; // Base case: F(0) = [0]
    } else if (n === 1) {
      return [0, 1]; // Base case: F(1) = [0, 1]
    }
  
    // Recursive case: Generate series for n-1
    const series = FibonacciSeries(n - 1);
    
    // Add the next Fibonacci number to the series
    series.push(series[series.length - 1] + series[series.length - 2]);
    
    return series;
  }
  
  console.log(FibonacciSeries(5));   // Output: [0,1,1,2,3,5]
  console.log(FibonacciSeries(6)); // Output: [0,1,1,2,3,5,8]