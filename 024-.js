/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 function ListNode(val) {
      this.val = val;
      this.next = null;
 }
var head=new ListNode(1);
var l2=new ListNode(2);
head.next=l2;
var l3=new ListNode(3);
l2.next=l3;
console.log(swapPairs(head));

function swapPairs(head) {
    if(head===null)
        return null;
    if (head.next===null)
        return head;
    var cashe = new ListNode(0);
    var current=head;
    var count=1;
    while(current.next!==null)
    {
        if(count%2==1)
        {
            cashe=current;
            current=current.next;
            cashe.next=current.next;
            cash=current.next;
        }
        count=count+1;
        current=current.next;
    }
    return head;

};