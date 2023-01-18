/*
  - All methods has a constant time complexity, except for removeVertex.
  - the time complexity of removeVertex depends on the number of adjacent Vertices.
*/

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      //this.adjacencyList[vertex] = [];
      // for a better performance, recommend to make use of `Set` data structure
      this.adjacencyList[vertex] = new Set();
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }

    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }

    this.adjacencyList[vertex1].add(vertex2); // `add` is available in `Set` data structure
    this.adjacencyList[vertex2].add(vertex1); // `add` is available in `Set` data structure
  }

  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + " -> " + [...this.adjacencyList[vertex]]);
    }
  }

  // check edges
  hasEdge(vertex1, vertex2) {
    return (
      // `has` is available in `Set` data structure
      this.adjacencyList[vertex1].has(vertex2) &&
      this.adjacencyList[vertex2].has(vertex1)
    );
  }

  // remove
  removeEdge(vertex1, vertex2) {
    // `delete` is a built-in method in `Set` data structure
    this.adjacencyList[vertex1].delete(vertex2);
    this.adjacencyList[vertex2].delete(vertex1);
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return;
    }

    for (let adjacentVertex of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}

// instantiate the graph class
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

// undirected graph => edges will exist from B to A and from C to A as well.
graph.addEdge("A", "B");
graph.addEdge("B", "C");

// display
graph.display();
// A -> B
// B -> A,C
// C -> B

// hasEdge
console.log(graph.hasEdge("A", "B")); // true
console.log(graph.hasEdge("A", "C")); // false

// removeEdge
graph.removeEdge("A", "B");
graph.display();
// A ->
// B -> C
// C -> B

// removeVertex
graph.removeVertex("B");
graph.display();
// A ->
// C ->
