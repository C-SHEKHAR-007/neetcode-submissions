class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();

        if(nums.length < 2) return []

        for (let p1 = 0; p1 < nums.length; p1++) {
           let needPair = target - nums[p1];

           if(map.has(needPair)) return [map.get(needPair), p1];
           else if (!map.has(nums[p1])) map.set(nums[p1], p1)
        }

        return []
    }
}
