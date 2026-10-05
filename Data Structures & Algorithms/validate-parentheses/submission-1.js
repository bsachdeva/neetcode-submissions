class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let brackets = {
            "{" : "}",
            "[" : "]",
            "(" : ")"
        };

        let stack = [];

        for (const ch of s) {
            if (ch === "{" || ch === "[" || ch === "(") {
                stack.push(ch);
            }
            else if (stack.length > 0 && brackets[stack[stack.length-1]] === ch) {
                stack.pop();
            }
            else {
                return false;
            }
        }

        return stack.length === 0;
    }
}
