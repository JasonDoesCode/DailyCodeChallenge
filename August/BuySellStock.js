// 121. Best Time to Buy and Sell Stock

// Leetcode Link - https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// Problem Statement
// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction.If you cannot achieve any profit, return 0.

// Example
// Input: prices = [7, 1, 5, 3, 6, 4]
// Output: 5

// Input: prices = [7, 6, 4, 3, 1]
// Output: 0

// My Solution
var maxProfit = function (prices) {

    let profit = 0
    let buy = prices[0]

    for (let i = 1; i < prices.length; i++) {
        buy = Math.min(buy, prices[i])
        profit = Math.max(profit, (prices[i] - buy))
    }

    return profit
}

// Can also use if statements for better readability
var maxProfit = function (prices) {

    let profit = 0
    let buy = prices[0]

    for (let i = 1; i < prices.length; i++) {

        if (prices[i] < buy) {
            buy = prices[i]
        }

        if (prices[i] - buy > profit) {
            profit = prices[i] - buy
        }
    }
    return profit
}