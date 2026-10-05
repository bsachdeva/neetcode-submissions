class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let numObj = {};

        for (const num of nums) {
            if (numObj[num]) {
                return true;
            }
            numObj[num] = true;
        }

        return false;
    }
}
