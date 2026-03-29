/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head || !head.next || k === 0) return head


// calculate the length of the ll
    let length=1
    let temp = head
    while(temp.next){
        temp = temp.next
        length++
    }

    k = k % length
    if(k===0) return head

   let steps = length - k
   let prev = null
   let curr = head
   while(steps--){
    prev = curr
    curr = curr.next
   }

   temp.next = head
   prev.next = null
   return curr
    
};