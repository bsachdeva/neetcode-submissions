class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
        let isNegative = x < 0;

        if (isNegative) {
            x = -x;
        }

        let rev = 0;
        while (x > 0) {
            rev = (rev * 10) + (x % 10);
            x = Math.floor(x/10);
        }

        if (rev > 2 ** 31) {
            return 0;
        }

        return isNegative ? -rev : rev;
    }
}
