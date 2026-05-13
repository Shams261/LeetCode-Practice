/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (head===null) return false
   let slow = head
   let fast = head.next

 

   while(slow!=fast){
    if(fast === null || fast.next === null){
        return false
    }
    slow = slow.next
    fast = fast.next.next
   }
   return true
    
};

// 2>4>5>6>7   : true
//         |
//         4

// 4>6>8>2>null : false : [4,6,8,2] : false

// T = o(n)
// S =O(n)

// set => [2,4,5,6,7,]: true


 // Floyd's Algorithm 
// slow= 1 step
// fast = 2 step

// if slow == fast :true else : false

2>4>5>6>7>4

