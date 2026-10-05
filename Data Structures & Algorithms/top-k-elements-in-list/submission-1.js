class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freqObj = {};
        let result = [];

        for (const num of nums) {
            freqObj[num] = freqObj[num] + 1 || 1;
        }

        let freqArr = Object.entries(freqObj).sort((a,b) => b[1] - a[1]).slice(0,k);

        for (const val of freqArr) {
            result.push(Number(val[0]));
        }

        return result;
    }
}
