class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let anagObj = {};

        for (const str of strs) {
            const sorted = str.split('').sort().join('');
            anagObj[sorted] ? anagObj[sorted].push(str) : anagObj[sorted] = [str];
        }

        return Object.values(anagObj);
    }
}
