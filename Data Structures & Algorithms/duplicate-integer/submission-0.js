class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let set = new Set();

        for(let num of nums) {
            if(set.has(num)) return true;
            else set.add(num);
        }

        return false;
    }
}

// class Solution {
//     /**
//      * @param {number[]} nums
//      * @return {boolean}
//      */
//     hasDuplicate(nums) {
//         let data = new Map();

//         for(let num of nums) {
//             if(data.has(num)) return true;
//             else data.set(num, 1);
//         }

//         return false;

//     }
// }
