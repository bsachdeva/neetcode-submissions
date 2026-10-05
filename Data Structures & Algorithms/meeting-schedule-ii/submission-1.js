/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        if (intervals.length === 0) {
            return 0;
        }

        let start = intervals.map(int => int.start).sort((a, b) => a - b);
        let end = intervals.map(int => int.end).sort((a,b) => a - b);

        let rcount = 0;
        let endIdx = 0;

        for (let i = 0; i < start.length; i++) {
            if (start[i] < end[endIdx]) {
                rcount++;
            }
            else {
                endIdx++;
            }
        } 

        return rcount;
    }
}
