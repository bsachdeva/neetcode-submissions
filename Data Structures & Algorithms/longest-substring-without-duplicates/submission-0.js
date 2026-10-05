class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let longestStr = 0;
        let left = 0;
        let right = 0;
        let strSet = new Set();

        while (right < s.length) {
            if (!strSet.has(s[right])) {
                strSet.add(s[right]);
                longestStr = Math.max(longestStr, strSet.size);
                right++;
            }
            else {
                strSet.delete(s[left]);
                left++;
            }
        }
        return longestStr;
    }
}
