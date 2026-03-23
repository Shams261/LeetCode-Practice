/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let seenNode = new Set()
    let curr = headB
    while(curr){
        seenNode.add(curr)
        curr = curr.next

    }
    curr= headA
    while(curr){
        if(seenNode.has(curr)){
            return curr
        }
        curr = curr.next
    }
    return null
    
};