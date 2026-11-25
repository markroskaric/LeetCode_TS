import { TreeNode } from '../dataStruc'


const root = new TreeNode(
    3,
    new TreeNode(
        5,
        new TreeNode(6),
        new TreeNode(
            2,
            new TreeNode(7),
            new TreeNode(4),
        ),
    ),
    new TreeNode(
        1,
        new TreeNode(0),
        new TreeNode(8),
    ),
);

const p = root.left;  // 5
const q = root.right; // 1




function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    if (root === null || p === root || q === root) {
        return root
    }

    let left = lowestCommonAncestor(root.left, p, q)
    let right = lowestCommonAncestor(root.right, p, q)

    if (left != null && right != null) {
        return root
    }

    if (left == null) {
        return right;
    }
    return left;
};

console.log(lowestCommonAncestor(root, p, q));
