import { TreeNode } from "../dataStruc";

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    let list1: number[] = [];
    let list2: number[] = [];
    recursion(root1, list1)
    recursion(root2, list2)


    return JSON.stringify(list1) === JSON.stringify(list2);

};

function recursion(root: TreeNode | null, list: number[]) {
    if (root == null) {
        return;
    }
    if (root.left == null && root.right == null) {
        list.push(root.val);
        return;
    }
    recursion(root.left, list);
    recursion(root.right, list);
}


let root1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
let root2 = new TreeNode(1, new TreeNode(3), new TreeNode(2));
console.log(leafSimilar(root1, root2));
