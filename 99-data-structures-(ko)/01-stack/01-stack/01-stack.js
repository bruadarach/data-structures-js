// 직접 사용자 정의 데이터 타입을 구현해서 Stack과 Queue를 사용

class Stack {
  // stack constructor를 생성합니다.
  constructor() {
    this.storage = {};
    this.top = -1;
  }
  // stack의 사이즈를 구합니다.
  // this.top은 스택이 쌓일 때마다 하나씩 증가하기 때문에 top으로부터 size를 구할 수 있습니다.
  // this.top은 스택에 새롭게 추가될 요소의 인덱스를 나타냅니다. 빈 스택을 표현하는 -1부터 1씩 증감하며 표현하며 전체 요소의 개수를 추정할 수 있습니다
  size() {
    return this.top + 1;
  }
  // stack에 element를 추가합니다.
  // 현재 추가하는 element의 인덱스인 this.top을 키로, 요소를 값으로 하여 storage에 할당합니다.
  push(element) {
    this.top += 1;
    this.storage[this.top] = element;
  }
  // 만약 size가 0보다 작거나 같다면 이는 비어있는 스택을 의미하므로 아무 일도 일어나지 않습니다.
  // stack에서 현재 stack의 최상단에 있는 element를 변수에 저장합니다.
  // storage에서 해당 element를 제거합니다.
  // 하나를 제거했으니 방금 제거한 element의 인덱스를 나타내는 top 또한 감소시켜 업데이트 해줍니다.
  // 최상단에 있던 element가 저장된 변수 result를 반환합니다.
  pop() {
    if (this.size() <= 0) {
      return;
    }
    const result = this.storage[this.top];
    delete this.storage[this.top];
    this.top -= 1;
    return result;
  }
}

const stack = new Stack();

stack.size(); // 0
for (let i = 1; i < 10; i++) {
  stack.push(i);
}
stack.pop(); // 9
stack.pop(); // 8
stack.size(); // 7
stack.push(8);
stack.size(); // 8
