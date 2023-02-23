/* 실행 실패한 코드 - 오류내용: Maximum call stack size exceeded */
// function solution(n) {
//     if (n === 0) return 0; // 0일 경우
//     else if (n === 1) return 1; // 1일 경우
//     else { 
//         return solution(n-2) + solution(n-1);
//     }
// }


// % 1234567 안 넣으면 값 커졌을 때 infinity 뜸.
function solution(n) {
  let sum;
  let num1 = 0; 
  let num2 = 1;

  for (i=2; i<=n; i++) {    
      sum = (num1 + num2) % 1234567;
      num1 = num2;
      num2 = sum;
  }    

  return sum;
}

/*
정확성  테스트
테스트 1 〉	통과 (0.04ms, 33.5MB)
테스트 2 〉	통과 (0.04ms, 33.4MB)
테스트 3 〉	통과 (0.04ms, 33.4MB)
테스트 4 〉	통과 (0.04ms, 33.4MB)
테스트 5 〉	통과 (0.05ms, 33.4MB)
테스트 6 〉	통과 (0.04ms, 33.4MB)
테스트 7 〉	통과 (0.09ms, 33.6MB)
테스트 8 〉	통과 (0.07ms, 33.4MB)
테스트 9 〉	통과 (0.05ms, 33.4MB)
테스트 10 〉	통과 (0.10ms, 33.5MB)
테스트 11 〉	통과 (0.08ms, 33.4MB)
테스트 12 〉	통과 (0.07ms, 33.4MB)
테스트 13 〉	통과 (1.69ms, 36.3MB)
테스트 14 〉	통과 (1.75ms, 36.5MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/