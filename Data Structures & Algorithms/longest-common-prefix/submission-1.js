class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        strs.sort((a, b) => a.length - b.length);
        let comm = strs[0];

        for (let i = 1; i < strs.length; i++) {
            while (!strs[i].startsWith(comm)) {
                comm = comm.slice(0, -1);
                if (comm.length === 0) {
                    return '';
                }
            }
        }

        return comm;
    }
}
