class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let palinStr = s.toLowerCase().replace(/[^a-z0-9]/g, '');
        let start = 0;
        let end = palinStr.length - 1;

        while (start < end) {
            if (palinStr[start] !== palinStr[end]) {
                return false;
            }
            start++;
            end--;
        }

        return true;
    }
}
