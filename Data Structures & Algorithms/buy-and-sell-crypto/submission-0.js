class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProf = 0;
        let minPrice = prices[0];

        for (let i = 1; i < prices.length; i++) {
            if (prices[i] < minPrice) {
                minPrice = prices[i];
            }
            else {
                maxProf = Math.max(maxProf, prices[i] - minPrice);
            }
        }
        return maxProf;
    }
}
