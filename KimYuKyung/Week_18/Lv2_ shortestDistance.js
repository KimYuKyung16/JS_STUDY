function solution(maps) {
  let answer = 1;
  let queue = [];
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const n = maps.length;
  const m = maps[0].length;
  
  // 시작 위치 담기 
  queue.push([0, 0]);

  // 지나간 위치를 0으로 막는다.(시작 위치도 지나간 위치 이므로 막음)
  maps[0][0] = 0;
  
  // 큐에 담긴 값이 없을 때까지 반복한다.
  while(queue.length > 0) {
      // queue의 길이가 변화하기 때문에 최초 반복 횟수는 고정한다
      let size = queue.length;
      
      for(let i = 0; i < size; i++) {
          let [x, y] = queue.shift();
          
          // 저장된 위치에서 위,아래,좌측,우측 이동 가능 경로 확인하기
          for(let j = 0; j < 4; j++) {
              let nx = x + dx[j];
              let ny = y + dy[j];
              
              /*
                 nx >= 0 &&  ny >= 0 : 맵을 벗어 나지 않기 위한 조건
                 visited[nx][ny] === 1 : 이동할 위치가 막혀있지 않은지 조건
             */
              if(nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] === 1) {
                  // 도착 지점 바로 직전
                  if(nx == n-1 && ny == m - 1) {
                      return answer+1;
                  }
                  queue.push([nx, ny]);
                  maps[nx][ny] = 0;
              }
          }
      }
      answer++;
  }
  
  return -1;
}

/*
정확성  테스트
테스트 1 〉	통과 (0.23ms, 33.5MB)
테스트 2 〉	통과 (0.20ms, 33.4MB)
테스트 3 〉	통과 (0.36ms, 33.5MB)
테스트 4 〉	통과 (0.22ms, 33.4MB)
테스트 5 〉	통과 (0.22ms, 33.4MB)
테스트 6 〉	통과 (0.24ms, 33.4MB)
테스트 7 〉	통과 (0.25ms, 33.5MB)
테스트 8 〉	통과 (0.21ms, 33.5MB)
테스트 9 〉	통과 (0.24ms, 33.5MB)
테스트 10 〉	통과 (0.23ms, 33.6MB)
테스트 11 〉	통과 (0.21ms, 33.5MB)
테스트 12 〉	통과 (0.21ms, 33.4MB)
테스트 13 〉	통과 (0.21ms, 33.5MB)
테스트 14 〉	통과 (0.27ms, 33.4MB)
테스트 15 〉	통과 (0.24ms, 33.5MB)
테스트 16 〉	통과 (0.10ms, 33.4MB)
테스트 17 〉	통과 (0.26ms, 33.5MB)
테스트 18 〉	통과 (0.09ms, 33.4MB)
테스트 19 〉	통과 (0.09ms, 33.5MB)
테스트 20 〉	통과 (0.10ms, 33.5MB)
테스트 21 〉	통과 (0.09ms, 33.4MB)
효율성  테스트
테스트 1 〉	통과 (12.33ms, 37.8MB)
테스트 2 〉	통과 (6.58ms, 37.4MB)
테스트 3 〉	통과 (7.39ms, 37.8MB)
테스트 4 〉	통과 (6.22ms, 37.8MB)
채점 결과
정확성: 69.9
효율성: 30.1
합계: 100.0 / 100.0
*/