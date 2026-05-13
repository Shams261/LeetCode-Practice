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

    let start = new ListNode()
    let curr = start

    while(list1 && list2){
        if(list1.val < list2.val){
            curr.next = list1
            list1 = list1.next
        }else{
            curr.next = list2
            list2 = list2.next
        }

        curr = curr.next
    }
    if(!list1){
        curr.next = list2
    }
    if(!list2){
        curr.next = list1
    }
    return start.next 
};

// 2>4>8>10>null

// 1>3>>5>6>11>14>null

// DummyHead = dummyHead.next= smaller
// dummyHead>1>2>3>4>5>6>8>10>11>14>null => O(n) , O(1)