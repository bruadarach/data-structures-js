class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null; // add
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
      // list exists => travel nodes
    } else {
      let curr = this.head;
      let listValues = "";

      // curr !== null
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }

  prepend(value) {}

  append(value) {}

  removeFromFront() {}

  removeFromEnd() {}
}

// class
const list = new LinkedList();
console.log("List is empty? ", list.isEmpty()); // true
console.log("List size ", list.getSize()); // 0
list.print(); // List is empty
