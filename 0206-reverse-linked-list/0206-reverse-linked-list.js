/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {

    if(!head || head.next===null) return head

    let newHead = reverseList(head.next)
    head.next.next = head
    head.next =null
    return newHead
   
    
};


//  1>2>3>null : 3>2>1>null

//  !head or head.next = null return head

//  recursive 1
//  recursive 2
//  recursive 3

// R3 : head.next =null
// return head = >3
// this is my new head = 3

// R2 : 
// head =2
// head.next = 3 

// head.next.next = head > 3.next = 2 : 3>2
// head.next = null > 2.next = null : 3>2>null

// head.next = 2

// head =1 1>2
// head.next = 2
// head.next.next = head => 2.next =1
// head.next = null
// 3>2>1>null
// return his as newHead 
// t 0 n
// s 01