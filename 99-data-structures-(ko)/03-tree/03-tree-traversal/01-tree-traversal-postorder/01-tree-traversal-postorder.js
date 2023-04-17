// 1. 재귀적 풀이법
const postOrderTraversal = (root) => {
  // 출력결과를 저장하기 위한 result 배열을 하나 만들어 줍니다.
  let result = [];

  // 트리를 재귀적으로 순회하기 위한 재귀함수를 생성합니다.
  const dfs = (node) => {
    // 재귀의 기저조건으로 방문한 노드가 빈 노드일 경우에 해당 재귀를 종료시킨 후 상위로 올려줍니다.
    if (node === null) return;

    // 트리를 후위 순회하는 것이기 때문에 node를 root로 보았을 때,
    // node 기준으로 왼편 -> 오른편 -> 해당 node 순으로 방문합니다.
    dfs(node.left);
    dfs(node.right);

    result.push(node.val);
  };

  // 순회 시작을 위해 최초 받은 root노드를 매개변수로 넣어 재귀함수를 실행시켜 주니다.
  dfs(root);

  // 재귀가 모두 끝난 이후 결과를 반환해 줍니다.
  return result;
};

// 2. 반복문적 풀이법
// const postOrderTraversal = (root) => {
//   const stack = [];
//   const result = [];

//   if (root === null) return result;

//   stack.push(root);

//   while (stack.length) {
//     const node = stack.pop();

// 		// 후위순회는 root노드의 값이 항상 가장 마지막에 방문되어야 하고, 그 말은 즉 출력결과에 뒷 편에 위치해야 하므로
// 		// 매번 root노드의 값을 출력결과의 맨 앞 부분에 넣어주게 되면 반복문을 돌면서 해당 값이 뒤로 밀리면서 출력결과의 뒷 편에 위치하게 된다.
//     result.unshift(node.val);

// 		// 후위순회이기 때문에 방문순서는 left -> right -> root이지만, 윗 줄의 코드에서 매번 root노드의 값을 출력결과 배열의 맨 앞에 넣어주면서 해당 값을 뒤로 밀어내고 있기 때문에
// 		// 다음 방문을 위한 node의 자식을 stack에 담을 때는 기존 순서대로 left -> right순으로 담아주면 된다.
//     node.left && stack.push(node.left);
//     node.right && stack.push(node.right);
//   }

//   return result;
// };

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

//     1
//      \
//       2
//      /
//     3
const root1 = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null));
const result1 = postOrderTraversal(root1);
console.log(result1); // [3, 2, 1]

const root2 = null;
const result2 = postOrderTraversal(root2);
console.log(result2); // []

const root3 = new TreeNode(1);
const result3 = postOrderTraversal(root3);
console.log(result3); // [1]
