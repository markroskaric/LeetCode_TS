class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}


function maxDepth(root: TreeNode | null): number {
    if (root == null) {
        return 0
    }

    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);

    return 1 + max(leftDepth, rightDepth);
};

function max(i, b): number {
    if (i > b) {
        return i;
    }
    return b;
}


console.log(maxDepth(new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))));
