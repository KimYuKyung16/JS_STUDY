function solution(n, wires) {
  let tree = new Array(n+1).fill().map(() => new Array());
  let visited = new Array(n+1).fill(0);
  let answer = n; // 일단 제일 최대값 넣어줌.

  for (let i=0; i<wires.length; i++) { // 트리 부모-자식 서로 연결
      tree[wires[i][0]].push(wires[i][1]);
      tree[wires[i][1]].push(wires[i][0]);
  }
  
  for (let i=0; i<wires.length; i++) {
      visited = new Array(n+1).fill(0);
      let [left, right] = wires[i];
      let count_list = [];
      let count = 1;
      dfs(left, left); // 왼쪽 값부터 이어진 트리 개수 구하기 위해
      count_list.push(count); // 왼쪽 값부터 이어진 트리 개수 push
      count = 1;
      dfs(right, right); // 오른쪽 값부터 이어진 트리 개수 구하기 위해
      count_list.push(count); // 오른쪽 값부터 이어진 트리 개수 push
      
      // [0]은 왼쪽 값부터 이어진 트리 개수, [1]은 오른쪽 값부터 이어진 트리 개수
      // ex) left: 1, right: 3  --> [0]: 1과 이어진 트리개수, [1]: 3과 이어진 트리 개수
      answer = Math.min(answer, Math.abs(count_list[0]-count_list[1])); // 송전탑 개수의 차이가 제일 작은 값

      function dfs(current, index) { //index는 본인 포함 + 본인의 자식노드
          if (visited[index] === 1) return;
          // ex) 현재값이 left값인데 index가 right값이랑 같으면 left랑 right이 이어진 경우이기 때문에 return
          if (current === left && index === right) return; // 왼쪽값 비교할 경우에 해당하는 if문
          if (current === right && index === left) return; // 오른쪽값 비교할 경우에 해당하는 if문
          visited[index] = 1;
          count++;

          // tree[index]는 부모 --> forEach를 통해 자식 노드 확인
          tree[index].forEach((x) => dfs(current, x));
      }  
  }
  
  return answer;
}

/*
정확성  테스트
테스트 1 〉	통과 (4.09ms, 39MB)
테스트 2 〉	통과 (4.60ms, 38.9MB)
테스트 3 〉	통과 (4.32ms, 38.9MB)
테스트 4 〉	통과 (5.12ms, 39MB)
테스트 5 〉	통과 (4.29ms, 37.8MB)
테스트 6 〉	통과 (0.24ms, 33.5MB)
테스트 7 〉	통과 (0.25ms, 33.4MB)
테스트 8 〉	통과 (0.68ms, 33.6MB)
테스트 9 〉	통과 (0.46ms, 33.6MB)
테스트 10 〉	통과 (3.92ms, 38.9MB)
테스트 11 〉	통과 (4.24ms, 39MB)
테스트 12 〉	통과 (5.45ms, 39MB)
테스트 13 〉	통과 (3.87ms, 39MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/