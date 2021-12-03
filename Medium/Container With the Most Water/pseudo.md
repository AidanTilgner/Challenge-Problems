Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

IDEA: The area of the water available is the distance between array indicies times the height of the smaller index. We can iterate through the array, finding all the matches in the array, and comparing the area. Then we just return whatever the biggest area we found is.

- Initialize max variable
- Iterate through array, keeping track of index
- For each element, iterate through the rest of the array
- Multipy the absolute value of the difference between the array indices by the shorter of the two indices to find the area
- If the area is greater than the max variable, the max area should be updated
- After iterating through all of the indices, return the max variable

<script>
    function ContainerWithMostWater (heights) {
        init max
        for(every element in heights){
            for(every element past the current one in heights){
                area = (j - i) * (heights[i] < heights[j] ? heights[i] : heights[j]) > max
                if(area > max){
                    max = area
                }
            }
        }
        return max
    }
</script>
