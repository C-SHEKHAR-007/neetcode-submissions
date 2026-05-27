class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();

        for(let i = 0; i< strs.length; i++) {
            let str = strs[i];
            let sortedStr = Array.from(str).sort().join("");

            if(map.has(sortedStr)) map.get(sortedStr).push(str)
            else map.set(sortedStr, [str])
        }

        return Array.from(map.values());
    }
}
