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
var addTwoNumbers = function (l1, l2) {
    var flag = false; // 是否需要进位数
    var head = null; // 和链表的头节点
    var temp = new ListNode(0); //游走的当前节点
    var first = true; // 是否是第一次

    // 两个链表的当前节点不都为空
    while (l1 !== null || l2 !== null) {
        // 两个链表当前节点的值,如果节点为空则值为0
        var val1 = l1 === null ? 0 : l1.val;
        var val2 = l2 === null ? 0 : l2.val;
        // 两个当前节点的值的和
        var sum = val1 + val2;
        // 是否有进位值,如果有将和+1,并设置进位标识为false
        if (flag === true) {
            sum += 1;
            flag = false;
        }
        //是否需要进位,如果是,设置进位标识为true, 并更新sum的值
        if (sum >= 10) {
            flag = true;
            sum = sum - 10;
        }
        //将sum值赋给临时的和节点
        temp.val = sum;
        //判断是否是第一次,如果是,将head节点设置为当前节点
        if (first) {
            first = false;
            head = temp;
        }
        //判断两个链表是否都已经全部到了最后一个,如果没有到最后一个,创建新的临时节点并将当前节点的下个节点设置成新的临时节点
        if ((l1 !== null && l1.next !== null) || (l2 !== null && l2.next !== null)) {
            temp.next = new ListNode(0);
            temp = temp.next;
        }
        //list是否为空,如果不为空,指向下一个节点
        if (l1 !== null) {
            l1 = l1.next;
        }
        if (l2 !== null) {
            l2 = l2.next;
        }
    }
    // 最后判断还有没有进位,如果有,增加新的临时节点并将链表的尾节点指向该节点.
    if (flag === true) {
        temp.next = new ListNode(1);
    }
    // 返回连表的头
    return head;
};

var ListNode = function (val) {
    this.val = val;
    this.next = null;
};

function generateListNode(listArray) {
    var temp;
    var head = null;
    listArray.forEach(function (e, i) {
        var node = new ListNode(e);
        if (i == 0) {
            head = node;
            temp = node;
        } else {
            temp.next = node;
            temp = temp.next;
        }
    });
    return head;
};

var l1;
var l2;
var l1a = [2, 4, 3];
var l2a = [5, 6, 4];
l1 = generateListNode(l1a);
l2 = generateListNode(l2a);
console.log(l1);
console.log(l2);
var sum = addTwoNumbers(l1, l2);
console.log(sum);

