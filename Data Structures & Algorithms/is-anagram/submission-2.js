class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }
        let freq = new Map();

        for (const ch of s) {
            freq.set(ch, (freq.get(ch) || 0) + 1 );
        }

        for (const ch of t) {
            if (!freq.has(ch) || freq.get(ch) === 0) {
                return false;
            }
            freq.set(ch, freq.get(ch) - 1);
        }

        return true;
    }
}
