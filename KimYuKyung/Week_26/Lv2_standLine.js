function solution(n, k) {
  let answer = [];
  let numbers = new Array(n).fill().map((x, i) => i+1);
  let fac = numbers.reduce((ac, v) => ac*v, 1); // 팩토리얼
  k--; // k가 index로 사용되기 때문에 -1
  
  while(answer.length !== n) {
      fac = fac/numbers.length;
      let temp = numbers[Math.floor(k/fac)];
      answer.push(temp);
      k %= fac;
      numbers = numbers.filter(x => x !== temp); // temp값 제거
  }
  
  return answer;
}  

/*
정확성  테스트
테스트 1 〉	통과 (0.08ms, 33.4MB)
테스트 2 〉	통과 (0.15ms, 33.5MB)
테스트 3 〉	통과 (0.16ms, 33.4MB)
테스트 4 〉	통과 (0.08ms, 33.4MB)
테스트 5 〉	통과 (0.08ms, 33.4MB)
테스트 6 〉	통과 (0.08ms, 33.4MB)
테스트 7 〉	통과 (0.08ms, 33.4MB)
테스트 8 〉	통과 (0.09ms, 33.5MB)
테스트 9 〉	통과 (0.09ms, 33.4MB)
테스트 10 〉	통과 (0.16ms, 33.4MB)
테스트 11 〉	통과 (0.16ms, 33.4MB)
테스트 12 〉	통과 (0.17ms, 33.4MB)
테스트 13 〉	통과 (0.19ms, 33.5MB)
테스트 14 〉	통과 (0.09ms, 33.5MB)
효율성  테스트
테스트 1 〉	통과 (0.19ms, 33.4MB)
테스트 2 〉	통과 (0.18ms, 33MB)
테스트 3 〉	통과 (0.16ms, 33.3MB)
테스트 4 〉	통과 (0.23ms, 33MB)
테스트 5 〉	통과 (0.17ms, 33.3MB)
채점 결과
정확성: 73.7
효율성: 26.3
합계: 100.0 / 100.0
*/