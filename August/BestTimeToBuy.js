// 121. Best Time to Buy and Sell Stock

// Problem Statement
// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction.If you cannot achieve any profit, return 0.

// Example
// [7,1,5,3,6,4] -> Buy 1, Sell 6 -> 5
// [7,6,4,3,1] -> 0, no profit

// My Solution
// Check if there is a lower value avaliable each iteration
// If not check if selling at the current index will grant you more profit than before
var maxProfit = function (prices) {
    let bestProfit = 0;
    let purchase = prices[0];

    for (let i = 1; i <= prices.length; i++) {
        if (prices[i] < purchase)
            purchase = prices[i];
        else if (bestProfit < prices[i] - purchase)
            bestProfit = prices[i] - purchase;
    }

    return bestProfit;
};