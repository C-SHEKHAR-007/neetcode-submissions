class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sl = s.length;
        let tl = t.length

        if (sl !== tl) return false;

        let sMap = new Map();
        let tMap = new Map();

        for (let i = 0; i < sl; i++) {
            let si = s[i];
            let ti = t[i];

            sMap.set(si, (sMap.get(si) || 0) + 1)
            tMap.set(ti, (tMap.get(ti) || 0) + 1)
        }

        let is = sMap.keys();
        let it = tMap.keys();

        let isVal = true;
        let itVal = true;

        while (isVal) {
            isVal = is.next().value
            if(sMap.get(isVal) !== tMap.get(isVal)) return false
        }

        while (itVal) {
            itVal = it.next().value
            if(sMap.get(itVal) !== tMap.get(itVal)) return false
        }

        return true;
    }
}
