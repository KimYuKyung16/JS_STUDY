function solution(numbers) {
  let sortedArray = numbers.map((x, index) => [String(x).padEnd(4, x), index]).sort().reverse();
  let answer = sortedArray.map((x) => numbers[x[1]]).join('');
  
  if (answer === '0'.repeat(numbers.length)) return '0';
  else return answer;
}

/*
정확성  테스트
테스트 1 〉	통과 (690.36ms, 65.1MB)
테스트 2 〉	통과 (433.53ms, 59MB)
테스트 3 〉	통과 (873.38ms, 71MB)
테스트 4 〉	통과 (11.47ms, 35MB)
테스트 5 〉	통과 (540.55ms, 65.7MB)
테스트 6 〉	통과 (493.57ms, 64.1MB)
테스트 7 〉	통과 (0.20ms, 33.4MB)
테스트 8 〉	통과 (0.19ms, 33.4MB)
테스트 9 〉	통과 (0.21ms, 33.5MB)
테스트 10 〉	통과 (0.18ms, 33.5MB)
테스트 11 〉	통과 (0.26ms, 33.4MB)
테스트 12 〉	통과 (0.07ms, 33.5MB)
테스트 13 〉	통과 (0.07ms, 33.4MB)
테스트 14 〉	통과 (0.08ms, 33.4MB)
테스트 15 〉	통과 (0.11ms, 33.5MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/