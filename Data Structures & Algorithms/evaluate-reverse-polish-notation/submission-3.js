class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = []
        for (let i = 0; i < tokens.length; i++) {
            let cur = tokens[i];

            if (["+", "-", "/", "*"].includes(cur)) {
                let temp;
                let y = stack.pop();
                let x = stack.pop();
                switch (cur) {
                    case "+":
                        temp = x + y
                        break;
                    case "-":
                        temp = x - y
                        break;
                    case "*":
                        temp = x * y
                        break;
                    case "/":
                        temp = x / y
                        temp = temp < 0 ? Math.ceil(temp) : Math.floor(temp)
                        break;
                }

                stack.push(temp);
            } else {

                stack.push(Number(cur))
            }
        }

        return stack.pop();
    }
}
