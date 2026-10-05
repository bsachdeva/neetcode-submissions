class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        let farthest = 0;
        let current = 0;
        let jumpCount = 0;

        for (let i = 0; i < nums.length - 1; i++) {
            farthest = Math.max(i + nums[i], farthest);

            if (current === i) {
                jumpCount++;
                current = farthest;
            }
        }

        return jumpCount;
    }
}
