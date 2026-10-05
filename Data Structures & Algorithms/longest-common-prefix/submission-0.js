class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        strs.sort((a,b) => a.length - b.length);
        let commPre = strs[0];

        for (let i = 1; i < strs.length; i++) {
            while (!strs[i].startsWith(commPre)) {
                commPre = commPre.slice(0, -1);
                if (commPre.length === 0) {
                    return '';
                }
            }
        }

        return commPre;
    }
}
