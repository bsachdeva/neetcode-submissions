class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let idx = 1;

        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] !== nums[i + 1]) {
                nums[idx] = nums[i + 1];
                idx++;
            }
        }

        return idx;
    }
}
