class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let idx = 0;
        let start = 0;
        let end = nums.length - 1;

        while (idx <= end) {
            if (nums[idx] === 0) {
                nums[idx] = nums[start];
                nums[start] = 0;
                idx++;
                start++;
            }
            else if (nums[idx] === 1) {
                idx++;
            }
            else {
                nums[idx] = nums[end];
                nums[end] = 2;
                end--;
            }
        }
    }
}
