function solution(n) {
  let answer = "";
  while (n > 3) {
    let x = parseInt(n / 3); //몫
    let y = n % 3; //나머지
    if (y == 0) {
      answer = "4" + answer;
      n = x - 1;
    } else {
      if (y === 1) {
        answer = "1" + answer;
      } else {
        answer = "2" + answer;
      }
      n = x;
    }
  }
  if (n === 3) answer = "4" + answer;
  else if (n === 2) answer = "2" + answer;
  else if (n === 1) answer = "1" + answer;

  return answer;
}
/*
정확성  테스트
테스트 1 〉	통과 (0.04ms, 33.4MB)
테스트 2 〉	통과 (0.04ms, 33.4MB)
테스트 3 〉	통과 (0.06ms, 33.5MB)
테스트 4 〉	통과 (0.04ms, 33.4MB)
테스트 5 〉	통과 (0.05ms, 33.4MB)
테스트 6 〉	통과 (0.05ms, 33.4MB)
테스트 7 〉	통과 (0.05ms, 33.5MB)
테스트 8 〉	통과 (0.05ms, 33.4MB)
테스트 9 〉	통과 (0.04ms, 33.2MB)
테스트 10 〉	통과 (0.04ms, 33.1MB)
테스트 11 〉	통과 (0.05ms, 33.4MB)
테스트 12 〉	통과 (0.04ms, 33.4MB)
테스트 13 〉	통과 (0.05ms, 33.5MB)
테스트 14 〉	통과 (0.04ms, 33.5MB)
효율성  테스트
테스트 1 〉	통과 (0.06ms, 33MB)
테스트 2 〉	통과 (0.04ms, 33.4MB)
테스트 3 〉	통과 (0.08ms, 32.8MB)
테스트 4 〉	통과 (0.07ms, 32.7MB)
테스트 5 〉	통과 (0.04ms, 33MB)
테스트 6 〉	통과 (0.06ms, 33MB)
채점 결과
정확성: 70.0
효율성: 30.0
합계: 100.0 / 100.0
*/
