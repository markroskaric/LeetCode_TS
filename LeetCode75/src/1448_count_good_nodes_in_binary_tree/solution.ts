import { TreeNode } from "../dataStruc";



function goodNodes(root: TreeNode | null): number {
    return isGoodNode(root, root.val);
};


function isGoodNode(node: TreeNode | null, maxValue: number): number {
    if (node == null) {
        return 0;
    }
    let count = 0;

    if (node.val >= maxValue) {
        maxValue = node.val;
        count = 1;
    }

    count += isGoodNode(node.left, maxValue);
    count += isGoodNode(node.right, maxValue);

    return count;
}



let root: TreeNode = new TreeNode(3, new TreeNode(3, new TreeNode(4), new TreeNode(2)));

console.log(goodNodes(root))
