// prepend
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    // instantiate the node class
    const node = new Node(value);

    if (this.isEmpty()) {
      // no list
      // duplicated part will be refactored later
      this.head = node;
    } else {
      // list existed
      // duplicated part will be refactored later
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
}

// class
const list = new LinkedList();
console.log("List is empty? ", list.isEmpty()); // true
console.log("List size ", list.getSize()); // 0

// prepend
list.prepend(10);
list.prepend(20);
list.prepend(30);

console.log(list);
