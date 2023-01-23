# Linked List

- A linked list is a linear data structure that includes a series of connected nodes.
- Each node consist of a `data value` and a `pointer` that points to the next node.
- (+) The list elements can be easily inserted or removed without reallocation or reorganization of the entire structure.
- (-) Random access of elements is not feasible and accessing an element has linear complexity
- The linked list data structure supports three main operations
  - `Insertion` - to **add** an element at the beginning, end or at a given index in the list
  - `Deletion` - to **remove** an item given its index or value
  - `Search` - to **find** an element given its value

# Linked List Usage

- All application of both stacks and queues are application of linked list.
- Image viewer (e.g. Slide show)

# Linked List Big O

- insertion and removal is efficient.
- it is possible to append a new node in constant time,
- but that involves maintaining a tail pointer that always point at the last node in the list.
