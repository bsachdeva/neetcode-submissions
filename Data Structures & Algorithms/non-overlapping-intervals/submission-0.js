class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        intervals.sort((a, b) => a[1] - b[1]);
        let count = 0;
        let currInt = intervals[0];

        for (let i = 1; i < intervals.length; i++) {
            let nextInt = intervals[i];

            if (currInt[1] <= nextInt[0]) {
                currInt = nextInt;
            }
            else {
                count++;
            }
        }
        return count;
    }
}
