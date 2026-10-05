class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagObj = {};

        for (const s of strs) {
            let sorted = s.split('').sort().join('');
            anagObj[sorted] ? anagObj[sorted].push(s) : anagObj[sorted] = [s];
        }

        return Object.values(anagObj);
    }
}
