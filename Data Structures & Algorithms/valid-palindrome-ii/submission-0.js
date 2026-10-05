class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let start = 0;
        let end = s.length - 1;

        const isPalindrome = (str, s, e) => {
            while (s < e) {
                if (str[s] !== str[e]) {
                    return false;
                }
                s++;
                e--;
            }
            return true;
        }
        while (start < end) {
            if (s[start] !== s[end]) {
                return isPalindrome(s, start+1, end) || isPalindrome(s, start, end-1);
            }
            start++;
            end--;
        }
        return true;
    }
}
