class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let brackets = {
            "(" : ")",
            "{" : "}",
            "[" : "]"
        };

        let stack = [];

        for (const str of s) {
            if (stack.length > 0 && brackets[stack[stack.length - 1]] === str) {
                stack.pop();
            }
            else {
                stack.push(str);
            }
        }

        return stack.length === 0;
    }
}
