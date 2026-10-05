class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let outputArr = [0,1,2];

        for (let i = 3; i <= n; i++) {
            outputArr[i] = outputArr[i - 1] + outputArr[i - 2];
        }

        return outputArr[n];
    }
}
