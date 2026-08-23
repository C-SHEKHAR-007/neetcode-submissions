class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        // Create a stack to track the opening and closing 
        let stack = [];

        // Create a map for the open close parentheses for each type.
        let openCloseB = {
            "{": "}",
            "(": ")",
            "[": "]"
        }

        // Start the looping the string for the loop.
        for (let i = 0; i < s.length; i++) {
            let cc = s[i]
            if (["}", ")", "]"].includes(cc)) {
                let slc = stack.pop();
                if (openCloseB[slc] !== cc) return false;
            } else {
                stack.push(cc);
            }
        }

        // if there any unclosed parentheses, return false.
        if (stack.length) return false;

        // If every brakcned have with closing then it will be the valid parentheses
        return true;
    }
}
