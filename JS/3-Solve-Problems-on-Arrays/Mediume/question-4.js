// Stock Buy And Sell
// Problem Statement: You are given an array of prices where prices[i] is the price of a given stock on an ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// 1.Example
function maxProfit1(prices) {
    let minPrice = Infinity; // Start with a very high value
    let maxProfit = 0;

    for (let price of prices) {
        minPrice = Math.min(minPrice, price); // Update min price
        maxProfit = Math.max(maxProfit, price - minPrice); // Calculate max profit
    }

    return maxProfit;
}

// console.log(maxProfit1([7,2,5,3,6,4])); // Output: 4
// console.log(maxProfit2([7,6,4,3,1])); // Output: 0

// 2.Example
function maxProfit2(prices) {
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) { 
            let profit = prices[j] - prices[i]; 
            maxProfit = Math.max(maxProfit, profit); 
        }
    }

    return maxProfit;
}

// console.log(maxProfit2([7, 2, 5, 3, 6, 4])); // Output: 4
// console.log(maxProfit2([7,6,4,3,1])); // Output: 0


