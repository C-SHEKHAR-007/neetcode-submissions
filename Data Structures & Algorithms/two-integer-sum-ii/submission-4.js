class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        for (let i = 0; i < numbers.length - 1; i++) {
            
            // if(numbers[i] > target || (numbers[i] + numbers[i+1] > target) ) return [];
            
            if(numbers[i] === numbers[i+1] && (numbers[i] + numbers[i+1] ) != target) continue;

            for (let j = i + 1; j < numbers.length; j++) {
                if (numbers[i] + numbers[j] === target) {
                    return [i+1, j+1];
                }
                else if (numbers[i] + numbers[j] > target) {
                    break;
                }
            }
        }
    }
}
