Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

IDEA: For a pair of intervals to overlap, the last interval of the first pair has to be >= the first
interval of the second pair. So for each interval, we can check the next interval, and if that equation evaluates to
true, then we will perform a combination function. We'll add this new combined interval to a new array, and continue through each interval. Once we've gone through all of them, we'll go through all of the new intervals that
doing the same operation. We'll do this until no new additions are made.

- Make a copy of the intervals array
- Make a prevPass variable to store the length of the previous array
- Iterate through each interval in the copied array.
- If intervals[i][1] >= intervals[i + 1][0], combine the intervals into a new interval
- Replace the previous two intervals with the new one.
- Once done with the first pass, start the next pass
- Repeat until the length of the array at the end of the pass is the same as the length of the array at the previous pass
- This way you'll know that no changes have been made, and therefore the array is in it's final state

<script>
    function mergeIntervals (intervals){
        copy = intervals array
        previous pass
        while(current pass < previous pass or the array only contains 1 element){
            previous pass = copy.length()
            for (each interval){
                if(copy[i][1] >= copy[i + 1][0]){
                    merge intervals
                    copy.splice(index of current interval, 2 elements, merged interval)
                }
            }
        }
        return copy
    }
</script>
