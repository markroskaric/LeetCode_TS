class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function pairSum(head: ListNode | null): number {
    let fast = head, slow = head;
    let prev: ListNode;

    while (fast != null && fast.next != null) {
        fast = fast.next.next;
        let hold = slow.next;
        slow.next = prev;
        prev = slow;
        slow = hold;
    }

    let ans = 0;
    let left = prev, right = slow;

    while (left != null) {
        if ((left.val + right.val) > ans) {
            ans = left.val + right.val
        }
        left = left.next;
        right = right.next;
    }

    return ans;

}

let value = new ListNode(5, new ListNode(4, new ListNode(2, new ListNode(1))));
console.log(pairSum(value))
