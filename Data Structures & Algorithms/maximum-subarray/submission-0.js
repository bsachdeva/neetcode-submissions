class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let currSum = 0;
        let max = -Infinity;

        for (const num of nums) {
            currSum = Math.max(currSum + num, num);
            max = Math.max(max, currSum);
        }

        return max;
    }
}
