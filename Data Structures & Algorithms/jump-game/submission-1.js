class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let finalPos = nums.length - 1;

        for (let i = nums.length - 2; i >= 0; i--) {
            if ((i + nums[i]) >= finalPos) {
                finalPos = i;
            }
        }

        return finalPos === 0;
    }
}
