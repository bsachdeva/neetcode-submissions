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
        let start = intervals.map(interval => interval.start).sort((a,b) => a - b);
        let end = intervals.map(interval => interval.end).sort((a,b) => a - b);

        let rooms = 0;
        let endIndex = 0;

        for (let i = 0; i < start.length; i++) {
            if (start[i] < end[endIndex]) {
                rooms++;
            }
            else {
                endIndex++;
            }
        }

        return rooms;
    }
}
