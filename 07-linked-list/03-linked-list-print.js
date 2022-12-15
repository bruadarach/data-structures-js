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
