class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let m = matrix.length;
        let n = matrix[0].length;
        let start = 0;
        let end = m * n - 1;

        while (start <= end) {
            let mid = Math.floor((start + end)/2);
            let mid_i = Math.floor(mid / n);
            let mid_j = mid % n;

            if (target === matrix[mid_i][mid_j]) {
                return true;
            }

            if (target < matrix[mid_i][mid_j]) {
                end = mid - 1;
            }
            else {
                start = mid + 1;
            }
        }

        return false;
    }
}
