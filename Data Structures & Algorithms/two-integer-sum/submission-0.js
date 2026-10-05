class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let numObj = {};
        let diff = 0;

        for (let i=0; i < nums.length; i++) {
            diff = target - nums[i];
            if (numObj[diff] !== undefined) {
                return [numObj[diff], i];
            }
            numObj[nums[i]] = i;
        }
    }
}
