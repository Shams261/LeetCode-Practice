/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if(!head || !head.next) return

    let slow= head
    let fast = head
// finding the middle

    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
    }
// break and reverse the 2nd half
    let prev= null
    let curr = slow.next

    slow.next = null 

    while(curr){
        let temp = curr.next
        curr.next = prev
        prev= curr
        curr= temp
    }

    // merge alternately
    let first = head
    let second = prev

    while(second){
        let temp1 = first.next
        let temp2 = second.next

        first.next = second
        second.next = temp1
        first = temp1
        second=temp2
    }
    
};




1>2>3
5>4
// 1>2>3>4>5 => 1>5>2>4>3
// 1st node => last node
// 2nd node > 2n last node and so on

// [1,2,3,4,5]
// left = 0
// right = length-1 = 4

// left[0] =1
// right[4] =5 

// arr[left].next = right
// left ++
// 1>5
// left =1
// arr[right].next = left 
// fast--
// 1>5>2
// while left<right
// or if left===right break
// take two pointer > find middle > break the list in two parts like first half and  second half> reverse the second half > merge first and second alternately


// 1>2>3>4>5
// slow =1 >2 >3
// fast =1 >3 >5

// fisrt = 1>2>3
// sewcond = 4>5

// reverse the se => 5>4

// merge alternately > 1>5>2>4>3

// t =O(n)
// s(1)