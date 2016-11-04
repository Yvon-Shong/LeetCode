//Add Two Numbers

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 
 var addTwoNumbers = function(l1, l2) {
    return currentNode(l1,l2,0);
}

function currentNode(node1,node2,carry)
{
    var current=new ListNode(carry);

    if( node1 === null && node2 === null&&carry===0)
    {
        return null;   
    }


    
    if( node1 !== null || node2 !== null||carry!==0)//exist one is not null
    {
       
        var a = node1 ? node1.val : 0, 
            b = node2 ? node2.val : 0;
        var sum = a + b + carry;
        current = new ListNode( sum % 10 );
        carry = Math.floor( sum / 10 );
        current.next=currentNode(node1?node1.next:null , node2?node2.next:null , carry)
    }

    return current;
}
