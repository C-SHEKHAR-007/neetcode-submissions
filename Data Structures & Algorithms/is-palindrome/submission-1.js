class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let char = "abcdefghijklmnopqrstuvwxyz0123456789";
        s = s.toLowerCase();

        let sl = "";
        let sr = "";
        for(let i=0; i< s.length; i++) {
            if(char.includes(s[i])) {
                sl = sl + s[i];
                sr =  s[i] + sr;
            }

        }

        return sl === sr ? true : false
    }
}
