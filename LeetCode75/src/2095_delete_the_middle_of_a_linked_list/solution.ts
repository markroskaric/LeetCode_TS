class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function deleteMiddle(head: ListNode | null): ListNode | null {
    if (head == null || head.next == null) {
        return null;
    }
    let slow = head;
    let fast = head;
    let prev: ListNode = null;

    while (fast != null && fast.next != null) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    prev.next = slow.next;
    return head;
};


const head = new ListNode(1,
    new ListNode(3,
        new ListNode(4,
            new ListNode(7,
                new ListNode(1,
                    new ListNode(2,
                        new ListNode(6)
                    )
                )
            )
        )
    )
);
console.log(deleteMiddle(head));
