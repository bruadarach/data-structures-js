adjacencyList = {
  A: ["B"],
  B: ["A", "C"],
  C: ["B"],
};

console.log(adjacencyList["A"]); // [ 'B' ]
console.log(adjacencyList["B"]); // [ 'A', 'C' ]
console.log(adjacencyList["C"]); // [ 'B' ]
