import { TreeNode } from '../dataStruc';

let root = new TreeNode(1, new TreeNode(1, null, new TreeNode(1, new TreeNode(1, null, new TreeNode(1)), new TreeNode(1))), new TreeNode(1))

function longestZigZag(root: TreeNode | null): number {
    return max(dfs(root.left, true, 0), dfs(root.right, false, 0));
};

function dfs(node: TreeNode | null, isLeft: boolean, count: number): number {
    if (node === null) {

        return count;
    }

    if (isLeft) {
        return max(dfs(node.left, true, 0), dfs(node.right, false, count + 1))
    }
    return max(dfs(node.left, true, count + 1), dfs(node.right, false, 0))
}

function max(a: number, b: number): number {
    if (a > b) {
        return a
    }
    return b
}



console.log(longestZigZag(root));
