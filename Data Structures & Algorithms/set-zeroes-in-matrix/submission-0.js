class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        let rowSet = new Set();
        let colSet = new Set();

        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[0].length; j++) {
                if (matrix[i][j] === 0) {
                    rowSet.add(i);
                    colSet.add(j);
                }
            }
        }

        for (const row of rowSet) {
            for (let j = 0; j < matrix[0].length; j++) {
                matrix[row][j] = 0;
            }
        }

        for (const column of colSet) {
            for (let i = 0; i < matrix.length; i++) {
                matrix[i][column] = 0;
            }
        }
    }
}
