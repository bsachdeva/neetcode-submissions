class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let longest = 0;
        let strSet = new Set();
        let left = 0;
        let right = 0;

        while (right < s.length) {
            if (!strSet.has(s[right])) {
                strSet.add(s[right]);
                longest = Math.max(strSet.size, longest);
                right++;
            }
            else {
                strSet.delete(s[left]);
                left++;
            }
        }
        return longest;
    }
}
