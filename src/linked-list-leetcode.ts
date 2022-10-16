/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

 function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null|void {
    let fourNode: ListNode = new ListNode(4, null);
    let twoNode: ListNode = new ListNode(2, fourNode);
    let oneNode: ListNode = new ListNode(1, twoNode);
    
    function logLinkedList(linkedList: ListNode): void {
        
    }

function insertIntoLinkedList(linkedList: ListNode, toInsert: number): ListNode {
    //assume linkedlist is ordered
    //watch out for case where inserting at very start or very end
}

function deleteFromLinkedList(linkedList: ListNode, toDelete: number): ListNode {
    //removes item if it exists
    //watch out for edge cases
}

    console.log(oneNode);
    //     let list3: ListNode = {val: 1, next: list1}
//     list3.constructor(3, list2)
    
//     console.log(list3);
//     return list3
};