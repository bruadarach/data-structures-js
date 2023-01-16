const matrix = [
  [0, 1, 0],
  [1, 0, 1],
  [0, 1, 0],
];

console.log(matrix[0][1]); // 1 //=> matrix[A][B], connection exists from A to B
console.log(matrix[1][2]); // 1 //=> matrix[B][C], connection exists from B to C
console.log(matrix[0][0]); // 0 //=> matrix[A][A], A does not contain a self-loop
