import { TreeNode } from "../dataStruc";

function maxDepth(root: TreeNode | null): number {
    if (root == null) {
        return 0
    }

    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);

    return 1 + max(leftDepth, rightDepth);
};

function max(i:number, b:number): number {
    if (i > b) {
        return i;
    }
    return b;
}


console.log(maxDepth(new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))));
