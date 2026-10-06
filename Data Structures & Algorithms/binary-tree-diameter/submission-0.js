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
    diameterOfBinaryTree(root) {
        let diameter = 0;

        function traverse(root) {
            if (root === null) {
                return 0;
            }

            let leftH = traverse(root.left);
            let rightH = traverse(root.right);

            diameter = Math.max(diameter, leftH + rightH);
            return Math.max(leftH, rightH) + 1;
        }

        traverse(root);
        return diameter;
    }
}
