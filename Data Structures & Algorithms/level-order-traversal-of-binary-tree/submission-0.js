/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        if (root === null) {
            return [];
        }
        let result = [];
        let queue = [root];

        while(queue.length > 0) {
            let len = queue.length;
            let curr = [];

            for (let i = 0; i < len; i++) {
                let node = queue.shift();
                curr.push(node.val);

                if (node.left) {
                    queue.push(node.left);
                }
                if (node.right) {
                    queue.push(node.right);
                }
            }

            result.push(curr);
        }

        return result;
    }
}
