function solution(s) {
    if (s.length % 2 === 1) return 0;
    const sLen = s.length;
    let answer = 0;
  
    for (let i = 0; i < sLen; i++) {
      let str = s.slice(i) + s.slice(0, i);  // 왼쪽으로 한칸씩 이동
      const stack = [];
      let flag = 1;
      for (let n of str) {
        if (n === "(" || n === "{" || n === "[") stack.push(n);
        else {
          const bracket = stack.pop();
          if (n === ")" && bracket === "(") continue;
          if (n === "}" && bracket === "{") continue;
          if (n === "]" && bracket === "[") continue;
          flag = 0;
          break;
        }
      }
      if (flag) answer++;
    }
    return answer;
  }

//   정확성  테스트
// 테스트 1 〉	통과 (8.79ms, 38.2MB)
// 테스트 2 〉	통과 (7.00ms, 38MB)
// 테스트 3 〉	통과 (7.21ms, 38MB)
// 테스트 4 〉	통과 (7.67ms, 38MB)
// 테스트 5 〉	통과 (10.89ms, 38MB)
// 테스트 6 〉	통과 (7.77ms, 37.9MB)
// 테스트 7 〉	통과 (9.21ms, 38.1MB)
// 테스트 8 〉	통과 (11.00ms, 38MB)
// 테스트 9 〉	통과 (15.01ms, 38.2MB)
// 테스트 10 〉	통과 (19.16ms, 38.2MB)
// 테스트 11 〉	통과 (27.18ms, 38.3MB)
// 테스트 12 〉	통과 (0.06ms, 33.5MB)
// 테스트 13 〉	통과 (0.07ms, 33.5MB)
// 테스트 14 〉	통과 (0.08ms, 33.5MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0