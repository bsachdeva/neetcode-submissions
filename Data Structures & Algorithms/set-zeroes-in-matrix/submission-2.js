class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        let firstColumn = false;
        let m = matrix.length;
        let n = matrix[0].length;

        for (let i = 0; i < m; i++) {
            if (matrix[i][0] == 0) {
                firstColumn = true;
            }
        }

        for (let i=0; i < m; i++) {
            for (let j=1; j < n; j++) {
                if (matrix[i][j] === 0) {
                    matrix[i][0] = 0;
                    matrix[0][j] = 0;
                }
            }
        }

        for (let i = m - 1; i >= 0; i--) {
            for (let j = n - 1; j > 0; j--) {
                if ((matrix[i][0] === 0) || (matrix[0][j] === 0) ) {
                    matrix[i][j] = 0;
                }
            }

            if (firstColumn) {
                matrix[i][0] = 0;
            }
        }
    }
}
