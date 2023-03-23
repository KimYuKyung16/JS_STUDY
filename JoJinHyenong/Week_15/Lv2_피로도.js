// function solution(k, dungeons) {
//     let answer=0;
//     let array = Array(dungeons.length).fill(0);
//     function def(hp,count){
//         for(let i=0;i<dungeons.length;i++){
//             if(array[i]===0&&dungeons[i][0]<=hp){
//                 array[i]=1;
//                 def(hp-dungeons[i][0],count+1);
//                 array[i]=0; 
//             }
//         }
//         answer= Math.max(answer,count);
//     }
//     def(k,0);
//     return answer;
// }
function solution(k, dungeons) {
    let answer = 0;
    // 방문했는지 확인하기 위한 배열
    const visited = Array.from({ length: dungeons.length }, () => 0);
  
    // 완전탐색을 위한 DFS(남은 피로도, 진행단계)
    function DFS(hp, L) {
  
      // 던전의 수 만큼 반복한다.
      for (let i = 0; i < dungeons.length; i++) {
  
        // 방문하지 않았고 현재 남은 피로도가 최소 필요도 보다 크거나 같으면 실행
        if (visited[i]===0 && dungeons[i][0] <= hp) {
  
          // 현재 들어온 던전을 방문 처리
          visited[i] = 1;
  
          // DFS(현재 피로도 - 방문 던전, 진행단계 + 1)
          DFS(hp - dungeons[i][1], L + 1);
  
          // DFS 종료 후 방문을 끝내준다.
          visited[i] = 0;
        }
      }
  
      // 가장 깊이 들어간 진행단계를 answer에 넣어준다.
      answer = Math.max(answer, L);
    }
  
    DFS(k, 0);
  
    return answer;
  }

//   정확성  테스트
// 테스트 1 〉	통과 (0.19ms, 33.5MB)
// 테스트 2 〉	통과 (0.22ms, 33.5MB)
// 테스트 3 〉	통과 (0.19ms, 33.5MB)
// 테스트 4 〉	통과 (0.31ms, 33.6MB)
// 테스트 5 〉	통과 (1.13ms, 36.4MB)
// 테스트 6 〉	통과 (1.92ms, 36.4MB)
// 테스트 7 〉	통과 (4.59ms, 36.4MB)
// 테스트 8 〉	통과 (6.74ms, 36.4MB)
// 테스트 9 〉	통과 (0.21ms, 33.4MB)
// 테스트 10 〉	통과 (1.19ms, 36.4MB)
// 테스트 11 〉	통과 (0.35ms, 33.4MB)
// 테스트 12 〉	통과 (1.70ms, 36.5MB)
// 테스트 13 〉	통과 (0.36ms, 33.5MB)
// 테스트 14 〉	통과 (0.29ms, 33.6MB)
// 테스트 15 〉	통과 (0.22ms, 33.5MB)
// 테스트 16 〉	통과 (0.20ms, 33.5MB)
// 테스트 17 〉	통과 (0.29ms, 33.5MB)
// 테스트 18 〉	통과 (0.28ms, 33.2MB)
// 테스트 19 〉	통과 (0.22ms, 33.6MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0