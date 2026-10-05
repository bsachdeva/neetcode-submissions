class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {
        const parts = path.split('/');
        const stack = [];

        for (const part of parts) {
            if (part === "." || part === "") {
                continue;
            }
            if (part === "..") {
                stack.pop();
            }
            else {
                stack.push(part);
            }
        }

        return "/" + stack.join("/");
    }
}
