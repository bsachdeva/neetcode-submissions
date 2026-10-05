class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let idx = 0;

        for (const num of nums) {
            if (num !== val) {
                nums[idx] = num;
                idx++;
            }
        }

        return idx;
    }
}
