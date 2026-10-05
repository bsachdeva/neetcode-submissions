class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let count = 0;
        let sum = 0;
        let sumMap = new Map();

        sumMap.set(0, 1);
        for (const num of nums) {
            sum += num;
            let diff = sum - k;

            if (sumMap.has(diff)) {
                count += sumMap.get(diff);
            }

            sumMap.set(sum, (sumMap.get(sum) || 0) + 1 );
        }

        return count;
    }
}
