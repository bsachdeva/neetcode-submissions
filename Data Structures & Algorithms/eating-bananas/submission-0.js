class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let start = 1;
        let end = Math.max(...piles);
        let min = end;

        while (start <= end) {
            let mid = Math.floor((start+end)/2);
            let hours = 0;

            for (const p of piles) {
                hours += Math.ceil(p/mid);
            }

            if (hours <= h) {
                min = Math.min(min, mid);
                end = mid - 1;
            }
            else {
                start = mid + 1;
            }
        }

        return min;
    }
}
