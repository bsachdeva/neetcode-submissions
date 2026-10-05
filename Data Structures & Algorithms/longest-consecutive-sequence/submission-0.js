class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numSet = new Set(nums);
        let longest = 0;

        for (const num of numSet) {
            if (numSet.has(num - 1)) continue;
            let currentStreak = 1;
            let currentNum = num;

            while (numSet.has(currentNum + 1)) {
                currentStreak++;
                currentNum++;
            }
            longest = Math.max(currentStreak, longest);
        }

        return longest;
    }
}
