// 3진법 이용
function solution(n) {
    let answer = [];
    let numbers = ['4', '1', '2']; // 나머지가 0일때, 1일 때, 2일 때
    
    // n을 3으로 나누면서 확인 : 3진수 변환
    while (n > 0) {
        answer.push(numbers[n%3]);
        if (n%3 === 0) n = n/3-1; // 나머지가 0일 경우 몫에서 1빼기 : 변환표 보면 규칙이 그렇게 되어있음.
        else n = parseInt(n/3); // 몫
    }
    
    return answer.reverse().join('');
}

/*
정확성  테스트
테스트 1 〉	통과 (0.05ms, 33.4MB)
테스트 2 〉	통과 (0.05ms, 33.4MB)
테스트 3 〉	통과 (0.04ms, 33.4MB)
테스트 4 〉	통과 (0.05ms, 33.4MB)
테스트 5 〉	통과 (0.05ms, 33.5MB)
테스트 6 〉	통과 (0.05ms, 33.4MB)
테스트 7 〉	통과 (0.04ms, 33.4MB)
테스트 8 〉	통과 (0.05ms, 33.5MB)
테스트 9 〉	통과 (0.05ms, 33.4MB)
테스트 10 〉	통과 (0.05ms, 33.4MB)
테스트 11 〉	통과 (0.05ms, 33.4MB)
테스트 12 〉	통과 (0.05ms, 33.4MB)
테스트 13 〉	통과 (0.07ms, 33.5MB)
테스트 14 〉	통과 (0.05ms, 33.4MB)
효율성  테스트
테스트 1 〉	통과 (0.04ms, 33.4MB)
테스트 2 〉	통과 (0.04ms, 33.4MB)
테스트 3 〉	통과 (0.04ms, 33.4MB)
테스트 4 〉	통과 (0.22ms, 33.4MB)
테스트 5 〉	통과 (0.17ms, 33.4MB)
테스트 6 〉	통과 (0.20ms, 33.4MB)
채점 결과
정확성: 70.0
효율성: 30.0
합계: 100.0 / 100.0
*/



/* 
실패한 코드
사용한 알고리즘: BFS
실패한 이유: 시간 초과 

function solution(n) {
  let current_num = 0; // 현재 10진수 숫자
  let numList = ['1', '2', '4']; // 들어갈 숫자들의 리스트
  let queue = [];

  for (let i=0; i<numList.length; i++) {
      if (current_num === n) break; 
      queue.push(numList[i]);
      current_num++;
  }
  
  bfs();
  
  function bfs() {
      while (queue.length) {
          if (current_num === n) break;  
          
          let compareNum = queue.shift();
          for (let i=0; i<numList.length; i++) {
              let makeNum = compareNum + numList[i];
              queue.push(makeNum);
              current_num++;
              if (current_num === n) break;
          }
      }
  }
  
  return queue.pop();
}
*/