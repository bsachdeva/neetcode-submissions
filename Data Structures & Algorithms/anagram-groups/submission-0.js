class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let anagObj = {};

        for(const str of strs) {
            let sorted = str.split('').sort().join('');
            if (anagObj[sorted] === undefined) {
                anagObj[sorted] = [];
            }
            anagObj[sorted].push(str);
        }

        return Object.values(anagObj);
    }
}
