class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let maxLength = 0
        let set = new Set(nums);

        for (let num of nums) {
            if (set.has(num - 1)) continue;

            let currentLength = 1
            let cv = ++num
            while (set.has(cv)) {
                currentLength++
                cv++;
            }

            maxLength = Math.max(maxLength, currentLength)
        }

        return maxLength
    }

}
