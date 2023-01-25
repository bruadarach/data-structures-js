# Array

- An array is a data structure that can hold a collection of values

- Arrays can contain a mix of different data types.

- You can store strings, booleans, numbers or even objects all in the same array.

- Arrays are resizable. You don’t have to declare the size of an array before creating it.

- JavaScript arrays are zero-indexed and the insertion order is maintained.

- Arrays are iterables. They can be used with a for of loop.

# Array - Big-O time complexity

### (+) **map, filter, reduce, concat, slice** and **splice**

<br>

**Worst case time complexity** of some of these common methods and operations?

when it comes to arrays, it is very important to maintain **the appropriate index** any time we perform an operation.

- That is what we have to consider when determining the time complexity.

if you insert or remove an element at the end of the array, the time complexity is constant.

- Insert / Remove from end - O(1)

if you insert or remove an element at the beginning of the array, the time complexity is linear.

- Insert / Remove from beginning - O(n)
  - this is because, the index has to be reset for every remaining element in the array

Accessing an element is constant time complexity, as the fetching the first element is no different from fetching an element at position 100 thousand.

- Access - O(1)

Searching for an element is still linear time complexity, as element can be the last one in the array.

- Search - O(n)

| Methods                                   | Time Complexity |
| ----------------------------------------- | --------------- |
| push / pop                                | `O(1)  `        |
| shift / unshift / concat / slice / splice | `O(n)        `  |
| forEach/ map / filter / reduce            | `O(n)`          |
