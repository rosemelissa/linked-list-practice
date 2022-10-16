interface ListNode {
    current: number;
    next: ListNode | null
}

function linkedListFromArray(numArray: number[]): ListNode {
    let nextNode: ListNode = {
        current: numArray.pop()!,
        next: null,
    }
    while (numArray.length > 0) {
    let currentNode: ListNode = {
        current: numArray.pop()!,
        next: {...nextNode},
    }
    nextNode = {...currentNode};
    }
    return nextNode;
}

function logLinkedList(linkedList: ListNode): void {
    let currentList: ListNode = linkedList;
    console.log(currentList.current);
    while (currentList.next !== null) {
        currentList = currentList.next;
        console.log(currentList.current);
    };    
}

function insertIntoLinkedList(linkedList: ListNode, toInsert: number): ListNode {
    let currentNode: ListNode = linkedList;
    if (currentNode.current > toInsert) {
        const insertedList: ListNode = {
            current: toInsert,
            next: linkedList
        }
        return insertedList;
    } else {
        while (currentNode.next !== null) {
            const previousNode = currentNode;
            currentNode = currentNode.next;
            if (currentNode.current > toInsert) {
                const insertingNode = {
                    current: toInsert,
                    next: currentNode,
                }
                previousNode.next = insertingNode;
                return linkedList;
            }
        }
        const insertingNode = {
            current: toInsert,
            next: null,
        }
        currentNode.next = insertingNode;
        return linkedList;
    }
}

function mutativeInsertIntoLinkedList(linkedList: ListNode, toInsert: number): ListNode {
    let currentNode: ListNode = linkedList;
    if (currentNode.current > toInsert) {
        const newNode: ListNode = {
            current: linkedList.current,
            next: linkedList.next,
        }
        linkedList = {
            current: toInsert,
            next: newNode,
        }
        return linkedList;
    } else {
        while (currentNode.next !== null) {
            const previousNode = currentNode;
            currentNode = currentNode.next;
            if (currentNode.current > toInsert) {
                const insertingNode = {
                    current: toInsert,
                    next: currentNode,
                }
                previousNode.next = insertingNode;
                return linkedList;
            }
        }
        const insertingNode = {
            current: toInsert,
            next: null,
        }
        currentNode.next = insertingNode;
        return linkedList;
    }
}

function mutativeInsert(linkedList: ListNode): void{
    linkedList.current = 7;
}

function nonMutativeInsert(linkedList: ListNode, toInsert: number): ListNode {
    let currentNode: ListNode = {...linkedList};
    if (currentNode.current > toInsert) {
        const insertedList: ListNode = {
            current: toInsert,
            next: linkedList
        }
        return insertedList;
    } else {
        const topNode: ListNode = {...linkedList};
        while (currentNode.next !== null) {
           const nextNode: ListNode = {...currentNode.next};
           if (nextNode.current > toInsert) {
                const insertingNode: ListNode = {
                    current: toInsert,
                    next: nextNode,
                }
                currentNode.next = insertingNode;
                return topNode;
           }
           currentNode = {...nextNode};
        }
        const insertingNode: ListNode = {
            current: toInsert,
            next: null,
        }
        currentNode.next = insertingNode;
        return topNode;
    }
}

// console.log(linkedListFromArray([1, 2, 3]));
// console.log(linkedListFromArray([]));
const list1: ListNode = linkedListFromArray([1, 2, 3, 4, 5, 6, 7]);
// logLinkedList(list1);
// const list2: ListNode = linkedListFromArray([1]);
// logLinkedList(list2);
// const list3: ListNode = linkedListFromArray([]);
// logLinkedList(list3);



// logLinkedList(insertIntoLinkedList(list1, 0));
// console.log('----------');
// logLinkedList(insertIntoLinkedList(list1, 1.5));
// console.log('----------');
// logLinkedList(insertIntoLinkedList(list1, 2.5));
// console.log('----------');
// logLinkedList(insertIntoLinkedList(list1, 9));
// console.log('----------');
// logLinkedList(insertIntoLinkedList(list1, 0));

logLinkedList(mutativeInsertIntoLinkedList(list1, 0));
console.log('----------');
logLinkedList(mutativeInsertIntoLinkedList(list1, 1.5));
console.log('----------');
logLinkedList(mutativeInsertIntoLinkedList(list1, 2.5));
console.log('----------');
logLinkedList(mutativeInsertIntoLinkedList(list1, 9));
console.log('----------');
logLinkedList(mutativeInsertIntoLinkedList(list1, 0));

// logLinkedList(nonMutativeInsert(list1, 1.5));
// console.log('----------');
// logLinkedList(nonMutativeInsert(list1, 0));
// console.log('----------');
// logLinkedList(nonMutativeInsert(list1, 2.5));
// console.log('----------');
// logLinkedList(nonMutativeInsert(list1, 9));
// console.log('----------');
// logLinkedList(nonMutativeInsert(list1, 0));