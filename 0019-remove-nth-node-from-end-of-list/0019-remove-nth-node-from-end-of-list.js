/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {

    let dummy = new ListNode()
    dummy.next = head
    let slow= dummy
    let fast = dummy

    for(let i=0;i<n;i++){
        fast = fast.next
    }
    while(fast.next){
        slow = slow.next
        fast = fast.next
    }
    slow.next = slow.next.next
    return dummy.next
    
};

//  4,6,9,3,8 > n =2

// slow and fast > will start dummy


// dummy>4>6>9>3>8
// slow
// fast >fast>fast
// slow=4 , fast=9
// slow=6, fast=3
// slow=9,fast=8
// slow.next = slow.next.next