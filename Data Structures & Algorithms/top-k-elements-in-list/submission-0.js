class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let obj = {};

        for(let i=0; i<nums.length; i++) {
            if(obj[nums[i]]) {
                obj[nums[i]] ++;
            } else {
                obj[nums[i]] = 1;
            }
        }

        let sortedArray = Object.entries(obj).sort((a,b)=> b[1]- a[1])

        return sortedArray.slice(0,k).map(a => a[0])
        
    }
}
