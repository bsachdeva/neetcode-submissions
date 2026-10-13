class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        if (x < 2) {
            return x;
        }

        let start = 1;
        let end = x;

        while (start <= end) {
            let mid = Math.floor((start + end) / 2);
            let val = mid * mid;

            if (x === val) {
                return mid;
            }

            if (x < val) {
                end = mid - 1;
            }
            else {
                start = mid + 1;
            }
        }

        return end;
    }
}
