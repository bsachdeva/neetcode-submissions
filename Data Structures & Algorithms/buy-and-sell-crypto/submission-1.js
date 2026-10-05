class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = prices[0];
        let max = 0;

        for (let i = 1; i < prices.length; i++) {
            if (prices[i] < minPrice) {
                minPrice = prices[i];
            }
            else {
                max = Math.max(max, prices[i] - minPrice);
            }
        }
        return max;
    }
}
