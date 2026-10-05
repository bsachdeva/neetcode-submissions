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
     * @return {number}
     */
    goodNodes(root) {
        let stack = [[root, root.val]];
        let count = 1;
        
        while (stack.length > 0) {
            let [node, value] = stack.pop();
        
            if (node.right) {
                stack.push([node.right, Math.max(value, node.right.val)]);
                if (node.right.val >= value) {
                    count++;
                }
            }
            if (node.left) {
                stack.push([node.left, Math.max(value, node.left.val)]);
                if (node.left.val >= value) {
                    count++;
                }
            } 
        }

        return count;
    }
}
