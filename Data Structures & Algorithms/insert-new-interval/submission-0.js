class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        let result = [];

        for (const interval of intervals) {
            if (interval[0] > newInterval[1]) {
                result.push(newInterval);
                newInterval = interval;
            }
            else if (interval[1] < newInterval[0]) {
                result.push(interval);
            }
            else {
                newInterval = [Math.min(interval[0], newInterval[0]),
                                Math.max(interval[1], newInterval[1])];
            }
        }

        result.push(newInterval);
        return result;
    }
}
