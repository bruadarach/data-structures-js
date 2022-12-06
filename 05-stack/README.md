# Stack

- The `Stack` data structure is a `sequential collection` of elements that follows the principle of `Last In First Out (LIFO)`.
  - The last elements inserted into the stack is first element to be removed.
  - A stack of plates. The last plate placed on top of the stack is also the first plate removed from the stack.
- Stack is an abstract data type. It is defined by its behavior, rather than being a mathematical model.
- The Stack data structure supports two main operations.
  - `Push`, witch adds an element to the collection.
  - `Pop`, which removes the most recently added elements from the collection.

<br>

# Stack Usage

1. Browser history tracking
   - Go back and forward buttons
2. Undo-operation when typing
3. Expression conversions.

   - e.g) infix to postfix
   - 중위 표기법 (우리가 일반적으로 사용하는 식) → 후위 표기법 (컴퓨터가 사용하는 연산방법)
   - 참고: [https://dev-with-precious-dreams.tistory.com/17](https://dev-with-precious-dreams.tistory.com/17)

4. <u>\*Call stack in JavaScript runtime</u>

<br>

# Stack Implementation

| Methods         | Explanation                                           |
| --------------- | ----------------------------------------------------- |
| `push(element)` | add an element to the top of the stack                |
| `pop() `        | remove the top most element from the stack            |
| `peek() `       | get the value of the top element, without removing it |
| `isEmpty()`     | check if the stack is empty                           |
| `size()`        | get the number of elements in the stack               |
| `print() `      | visualize the elements in the stack                   |

<br>

# Stack vs. Array

Why Stack? Array can handle all these methods?!
=> b/c `LIFO` principle!

> Array is an indexed list that allows random read and write operations, whereas Stack implements the LIFO principle

> Insertion and removal of elements in a `stack is always constant time complexity`, whereas an Array may have linear time complexity if you choose to insert or remove at index 0.

> If you want a list with restrictions, the stack data structure is the way to go.
