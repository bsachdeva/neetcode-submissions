class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let numObj = {};
        let freqArr = [];

        for (const num of nums) {
            numObj[num] = numObj[num] + 1 || 1;
        }

        let values = Object.entries(numObj).sort((a, b) => b[1] - a[1]).slice(0,k);
        for (const val of values) {
            freqArr.push(parseInt(val[0]));
        } 
        return freqArr;
    }
}
