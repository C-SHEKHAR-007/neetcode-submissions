class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let seqs = [];
        let set = new Set(nums);

        for (let num of nums) {
            if (set.has(num - 1)) continue;

            let seq = [num];
            let cv = ++num
            while (set.has(cv)) {
                seq.push(cv)
                cv++;
            }

            seqs.push(seq)
        }

        return seqs.reduce((acc, it) => (it.length > acc) ? it.length : acc, 0)
    }

}
