class MinStack {
    constructor() {
        this.stack = [];
        this.ms = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        this.ms.push(Math.min(val, (this.ms.length ? this.ms.at(-1) : Infinity)));
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.ms.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack.at(-1);
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.ms.at(-1);
    }
}
