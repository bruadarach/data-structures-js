// JavaScript에는 Array 자료형 + 메소드 활용하여 Queue를 구현

//const queue = new Array(); 미리 정의된 Array 객체를 사용할 수 있습니다.
const queue = [];

queue.push(1); // [1]
queue.push(2); // [1, 2]
queue.push(3); // [1, 2, 3]
queue.push(4); // [1, 2, 3, 4]
queue.push(5); // [1, 2, 3, 4, 5]

console.log(queue); // [1, 2, 3, 4, 5]

//제일 먼저 들어간 것부터 빼내기 위해 shift() 메소드를 사용합니다.
queue.shift(); // [2, 3, 4, 5]
queue.shift(); // [3, 4, 5]

console.log(queue); // [3, 4, 5]
