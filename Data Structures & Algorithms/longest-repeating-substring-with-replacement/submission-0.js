class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let longest = 0;
        let left = 0;
        let freqMap = new Map();
        let topFreq = 0;

        for (let right = 0; right < s.length; right++) {
            freqMap.set(s[right], (freqMap.get(s[right]) || 0) + 1);
            topFreq = Math.max(freqMap.get(s[right]), topFreq);

            while ((right - left + 1) - topFreq > k) {
                freqMap.set(s[left], freqMap.get(s[left]) - 1);
                left++;
            }

            longest = Math.max(right - left + 1, longest);
        }

        return longest;
    }
}
