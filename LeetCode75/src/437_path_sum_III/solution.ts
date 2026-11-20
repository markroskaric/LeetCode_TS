import { TreeNode } from "../dataStruc";

function pathSum(root: TreeNode | null, targetSum: number): number {
    let path: number[] = []
    return countPath(root, targetSum, path)
};

function countPath(root: TreeNode | null, target: number, path: number[]): number {

    let count = 0;
    if (root == null) {
        return count;
    }
    let sum = 0;
    path.push(root.val)
    for (let i = path.length - 1; i >= 0; i--) {
        sum += path[i];
        if (sum === target) {
            count++
        }
    }
    count += countPath(root.left, target, path);
    count += countPath(root.right, target, path);


    path.pop();

    return count;

}


