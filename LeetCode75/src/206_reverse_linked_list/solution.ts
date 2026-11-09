
function reverseList(head: ListNode | null): ListNode | null {

    let prev: ListNode = null;
    let curr = head;

    while (curr != null) {
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }
    return prev;
};



console.log(reverseList(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))));
