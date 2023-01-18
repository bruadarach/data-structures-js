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
}

// instantiate the graph class
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

// undirected graph => edges will exist from B to A and from C to A as well.
graph.addEdge("A", "B");
graph.addEdge("B", "C");
