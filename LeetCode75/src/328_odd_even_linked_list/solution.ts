function oddEvenList(head: ListNode | null): ListNode | null {
    if (head == null || head.next == null) {
        return head
    }

    let firstEven = head.next;
    let oddWalker = head;
    let evenWalker = head.next;

    while (true) {
        if (evenWalker == null || evenWalker.next == null) {
            oddWalker.next = firstEven;
            break;
        }
        oddWalker.next = oddWalker.next.next;
        evenWalker.next = evenWalker.next.next;
        oddWalker = oddWalker.next;
        evenWalker = evenWalker.next;
    }
    return head;
};

let head1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))
console.log(oddEvenList(head1));
