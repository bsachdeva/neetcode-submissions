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

        let freqMap = new Map();

        for (const s1 of s) {
            freqMap.set(s1, (freqMap.get(s1) || 0) + 1 );
        }

        for (const t1 of t) {
            if (!freqMap.has(t1) || freqMap.get(t1) === 0 ) {
                return false;
            }
            freqMap.set(t1, freqMap.get(t1) - 1);
        }

        return true;
    }
}
