class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let zeroCount = 0
        let firstZeroIndex;
        let multiplyWithoutZero = 1
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 0) {
                zeroCount++;
                if (zeroCount === 1){ 
                    firstZeroIndex = i
                }
            } else {
                multiplyWithoutZero = multiplyWithoutZero * nums[i]
            }

            if (zeroCount > 1) break;
        }

        let result = Array(nums.length).fill(0);
        // If more than one zreo all product element will be zero
        if (zeroCount > 1) return result;

        // If single zero then only one element will be non zero
        if(zeroCount === 1) {
            result[firstZeroIndex] = multiplyWithoutZero;
            return result;
        }

        // If no zero then 
        return nums.map(val => multiplyWithoutZero / val)

    }
}
