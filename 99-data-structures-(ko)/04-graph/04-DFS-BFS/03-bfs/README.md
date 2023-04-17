# treeBFS

## 문제

임의의 tree를 구성하는 노드 중 하나의 Node 객체를 입력받아, 해당 노드를 시작으로 너비 우선 탐색(BFS, Breadth First Search)을 합니다.

이 때, 탐색되는 순서대로 노드의 값이 저장된 배열을 리턴해야 합니다.

## 입력

인자 1 : node

    - 'value', 'children' 속성을 갖는 객체 (Node)
    - 'node.value'는 number 타입
    - 'node.children'은 Node를 요소로 갖는 배열

## 출력

배열을 리턴해야 합니다.

## 주의사항

생성자 함수(Node)와 메소드(addChild)는 변경하지 않아야 합니다.
