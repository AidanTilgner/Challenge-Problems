Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.

Idea: Iterate through the linked list recursively, adding each node to an array as we go along. If the array
included the current node, then we have a cycle. For the "pos" part, just keep track of the index of the array
when a node is found in it.

- Create a previous array
- Create a pos variable that equals false
- Iterate through the linked list
- Set pos to the index of the node's child in the previous array
- If pos != -1, then break the recursion and return true
- Otherwise, if there is a next, call the function recursively on that child
- Do this until you've gone through each node

<script>

    function DetectCycle(head){
        prev = []
        pos = false

        let checkNode = (node) => {
            if (prev.indexOf(node) isn't -1) {
                return
            }
            if (node.next) checkNode(node)
        }
        return !!pos
    }

</script>
