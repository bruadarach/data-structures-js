const levelOrderTraversal = (root) => {
  // 최종 출력결과를 반환하기 위한 배열을 만들어 줍니다.
  const result = [];

  // 만약 최초에 들어온 root노드 자체가 null값이라면 빈 배열을 반환하고 로직을 끝냅니다.
  if (!root) return result;

  // BFS를 위한 Queue를 만들어 주고, BFS시작을 위해 최초값인 root노드를 큐에 넣어줍니다.
  const queue = [];
  queue.push(root);

  // queue에 값이 더 이상 존재하지 않을 때까지 루프를 돌며 로직을 진행시킵니다.
  while (queue.length > 0) {
    // 트리의 각 레벨별로 값을 묶어줘야 하기 때문에 각 레벨을 위한 내부 배열을 선언합니다.
    const subResult = [];
    // 해당 레벨에 존재하는 노드의 수 만큼 for 루프를 돌기 위해서 미리 큐의 사이즈를 변수에 저장합니다.
    const size = queue.length;

    // 해당 레벨에 존재하는 노드의 수만큼 for 루프를 돌면서 내부 배열(subResult)에 값을 추가해 갑니다.
    for (let i = 0; i < size; ++i) {
      // queue에서 맨 앞(head)값을 꺼내서 노드로 저장하고
      const node = queue.shift();
      // 해당 노드의 값을 subResult 배열에 넣어줍니다.
      subResult.push(node.val);

      // 다음 레벨을 순회하기 위해 해당 노드에 왼쪽이나 오른쪽 자식이 있으면 큐에 삽입해 줍니다.
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }

    // 위의 for루프에서 해당 레벨에 해당하는 subResult 배열을 완성시킨 후 최종 반환배열인 result에 해당 subResult를 추가해 줍니다.
    result.push(subResult);
  }

  // 최종 반환배열인 result를 반환하고 로직을 끝내줍니다.
  return result;
};

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/*
        3
       / \
      9  20
        /  \
       15   7
*/
const root1 = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);
const result1 = levelOrderTraversal(root1);
console.log(result1); // [[3], [9, 20], [15, 7]];

const root2 = new TreeNode(1);
const result2 = levelOrderTraversal(root2);
console.log(result2); // [[1]]

const root3 = null;
const result3 = levelOrderTraversal(root3);
console.log(result3); // []
