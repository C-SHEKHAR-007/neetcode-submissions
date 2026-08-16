class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";

        if(strs.length ===0 ) {
            return "N";
        }

        for (let j = 0; j < strs.length; j++) {
            let str = strs[j];

            if (j !== 0) res = res + ","

            if (str === "") {
                res = res + "E"
                continue
            }

            for (let i = 0; i < str.length; i++) {
                if (i !== 0) {
                    res = res + "-"
                }

                res = res + str.charCodeAt(i);
            }
        }
        return res
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = []

        if(str === "N") return res;

        let strs = str.split(",").map(s => s.split("-"))

        for (let i = 0; i < strs.length; i++) {
            let resSt = "";
            let st = strs[i];

            console.log(st)
            for (let k of st) {
                if (k === "E") {
                    continue;
                } else {
                    resSt = resSt + String.fromCharCode(Number(k))
                }
            }

            res.push(resSt)
        }

        return res;
    }
}
