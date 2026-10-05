class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a,b) => a[0] - b[0]);
        let currInt = intervals[0];
        let result = [];

        for (let i = 1; i < intervals.length; i++) {
            let nextInt = intervals[i];

            if (currInt[1] < nextInt[0]) {
                result.push(currInt);
                currInt = nextInt;
            }
            else {
                currInt[1] = Math.max(currInt[1], nextInt[1]);
            }
        }

        result.push(currInt);
        return result;
    }
}
