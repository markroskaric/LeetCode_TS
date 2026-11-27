import { TreeNode } from '../dataStruc'


function rightSideView(root: TreeNode | null): number[] {
    if (root == null) {
        return [];
    }
    let ans: number[] = [];
    let queue: TreeNode[] = [root];
    while (queue.length > 0) {
        let n = queue.length;
        for (let i = 0; i < n; i++) {
            let node = queue[0]
            queue.shift();

            if (i == n - 1) {
                ans.push(node.val)
            }
            if (node.left != null) {
                queue.push(node.left);
            }
            if (node.right != null) {
                queue.push(node.right);
            }
        }
    }
    return ans
};
const root = new TreeNode(
    1,
    new TreeNode(2, null, new TreeNode(5, null, null)),
    new TreeNode(3, null, new TreeNode(4, null, null))
);

console.log(rightSideView(root))
