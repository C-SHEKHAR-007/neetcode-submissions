class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();
        for(let i =0; i < strs.length; i++) {
            let str = strs[i];
            let arr = new Array(26).fill(0);

            for(let j=0; j < str.length; j++) {
                let strPosition = str.charCodeAt(j) - 'a'.charCodeAt(0);
                arr[strPosition] +=1
            }

            let key = arr.join("#");

            if(map.has(key)) map.get(key).push(str);
            else map.set(key, [str])
        }

       return Array.from(map.values())
    }
}
