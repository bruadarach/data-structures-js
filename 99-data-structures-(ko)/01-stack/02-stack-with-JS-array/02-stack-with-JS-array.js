// JavaScript에는 Array 자료형 + 메소드 활용하여 Stack을 구현

//const stack = new Array(); 미리 정의된 Array 객체를 사용할 수 있습니다.
const stack = [];

stack.push(1); // [1]
stack.push(2); // [1, 2]
stack.push(3); // [1, 2, 3]
stack.push(4); // [1, 2, 3, 4]
stack.push(5); // [1, 2, 3, 4, 5]

console.log(stack); // [1, 2, 3, 4, 5]

//제일 마지막에 들어간 요소부터 빼내기 위해 pop() 메소드를 사용합니다.
stack.pop(); // [1, 2, 3, 4]
stack.pop(); // [1, 2, 3]

console.log(stack); // [1, 2, 3]
