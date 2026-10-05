class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
        let isSigned = x < 0;

        if (isSigned) {
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

        return isSigned ? -rev : rev;
    }
}
