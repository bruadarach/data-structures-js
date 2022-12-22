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

  // add front
  prepend(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      // no list
      this.head = node;
    } else {
      // list existed
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  // add end
  append(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      // travel to the last node of the list
      // head is the only pointer we have access to the nodes
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  insert(value, index) {
    // case 1. invalid index
    if (index < 0 || index > this.size) {
      return;
    }
    // case 2. index === 0
    if (index === 0) {
      this.prepend(value);
      // no extra size++ here
      // case 3. index > 0
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  removeFrom(index) {
    // index is invalid
    if (index < 0 || index >= this.size) {
      return null;
    }
    // index = 0
    // move to next pointer
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      // index > 0
      // use temporary pointer `prev`
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this.size--;
    return removedNode.value;
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
}

// class
const list = new LinkedList();
console.log("List is empty? ", list.isEmpty()); // true
console.log("List size ", list.getSize()); // 0
list.print(); // List is empty

// prepend
list.prepend(10);
list.print(); // 10 // list has one item
list.prepend(20);
list.prepend(30);
list.print(); // 30 20 10 // list has three items

// print
console.log(list);
// LinkedList {
//     head: Node { value: 30, next: Node { value: 20, next: [Node] } },
//     size: 3
//   }

// append
list.append(40);
list.append(50);
list.append(60);
list.print(); // 30 20 10 40 50 60

// insert
list.insert(5, 0);
list.print(); // 5 30 20 10 40 50 60

list.insert(25, 3);
list.print(); // 5 30 20 25 10 40 50 60

console.log(list.getSize()); // 8

// remove
console.log(list.removeFrom(10)); // null
console.log(list.removeFrom(0)); // 5
list.print(); // 30 20 25 10 40 50 60
console.log(list.removeFrom(2)); // 25
list.print(); // 30 20 10 40 50 60
