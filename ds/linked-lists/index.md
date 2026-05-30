# Linked Lists
Linked Lists are a type of data structure used for storing collections of data. The data is stored in nodes, each of which contains a data field and a reference (link) to the next node in the sequence. Structurally, a linked list is organized into a sequence or chain of nodes, hence the name. Two types of linked lists are commonly used: singly linked lists, where each node points to the next node and the last node points to null, and doubly linked lists, where each node has two links, one to the previous node and another one to the next. Linked Lists are used in other types of data structures like stacks and queues. 

They are also used in various applications such as implementing dynamic memory allocation, managing symbol tables in compilers, and representing sparse matrices. Linked Lists provide efficient insertion and deletion operations compared to arrays, but they do not allow for direct access to elements by index, which can lead to slower search times.

There are stored in a non-contiguous block of memory, which allows for dynamic resizing and efficient memory usage. However, they can have higher overhead compared to arrays due to the need for storing additional pointers and the potential for cache misses.

## Implementation Status
- [ ] Singly Linked List
- [ ] Doubly Linked List (Optional)

## Complexity Analysis
- **Access/Search**: O(n)
- **Insertion/Deletion (at head)**: O(1)
- **Insertion/Deletion (at tail)**: O(n) or O(1) with tail pointer
- **Space**: O(n)

## Applications
- Dynamic memory allocation.
- Implementing stacks and queues.
- When frequent insertions and deletions are required.
- Symbol table management.
- Undo/Redo operations.
- Inversion count in an array.
- Range sum queries (with modifications).
- Counting inversions in an array.
- Dynamic memory allocation and management.
- Managing symbol tables in compilers.
- Representing sparse matrices.
- stacks and queues.

## Real World Usage
- Music players (next/previous tracks).
- Browser history navigation and preview and next search results/history.

