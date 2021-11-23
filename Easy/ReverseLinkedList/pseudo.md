Given the head of a singly linked list, reverse the list, and return the reversed list.

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

IDEA: Iterate through the linked list. For every node, add the value to the beginning of an array.
Then just make a new linked list based on the values in that reversed array.

Steps:

- Make a reversed array
- Iterate through the list, using recursion
- For every node, add a new node to the reversed array with the value
- For every node in the reversed array, add the next element as the next value
- Return the head of the new linked list

<script>
    function ListNode (value, next) {
        this.value = value;
        this.next = next;
    }

    function reverseLinkedList(head){
        make reversed array
        let addToReversed = (head) => {
            array.push(head.value)
            if (head.next) addToReversed(head.next)
        }
    }
</script>
