/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if(!list1) return list2
    if(!list2) return list1


// dummy node will start and rest the element will attach to it
    let start = new ListNode()
    let curr = start
//comparing both list node whomever is small will attach to dummy and then dummy node will move forward
    while(list1 && list2){
        if(list1.val<list2.val){
            curr.next = list1
            list1 = list1.next
        }else{
            curr.next =list2
            list2 = list2.next
        }
        curr = curr.next
    }
    //if l1 is now comppleted then whatever the remaining node of l2 it will attach to the curr node same vice versa for l2 case
    if(!list1){
        curr.next = list2
    }
    if(!list2){
        curr.next =list1
    }
    return start.next
};