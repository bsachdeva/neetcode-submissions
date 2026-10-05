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
        let charObj = {};

        for (const sch of s) {
            charObj[sch] = charObj[sch] + 1 || 1;
        }

        for (const tch of t) {
            if (!charObj[tch]) {
                return false;
            }
            charObj[tch]--;
        }

        return true;
    }
}
