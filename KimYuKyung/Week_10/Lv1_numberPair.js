function solution(X, Y) {
  let answer = '';
  let testCase = X.length > Y.length ? [...new Set(Y)] : [...new Set(X)];

  testCase.forEach((x) => {
      let count1 = X.split('').filter((num) => num === x).length;
      let count2 = Y.split('').filter((num2) => num2 === x).length;

      answer += x.repeat(count1 < count2 ? count1 : count2);
  })

  answer = answer.split('').sort((a, b) => b-a);
  if (answer[0] === '0') return '0';
  else if (answer.length === 0) return '-1';
  else return answer.join('');
}

/*
정확성  테스트
테스트 1 〉	통과 (0.12ms, 33.3MB)
테스트 2 〉	통과 (0.12ms, 33.4MB)
테스트 3 〉	통과 (0.12ms, 33.5MB)
테스트 4 〉	통과 (0.13ms, 33.4MB)
테스트 5 〉	통과 (0.12ms, 33.5MB)
테스트 6 〉	통과 (0.75ms, 33.6MB)
테스트 7 〉	통과 (0.60ms, 33.1MB)
테스트 8 〉	통과 (0.74ms, 33.2MB)
테스트 9 〉	통과 (0.53ms, 33.6MB)
테스트 10 〉	통과 (0.55ms, 33.6MB)
테스트 11 〉	통과 (2075.52ms, 194MB)
테스트 12 〉	통과 (2042.76ms, 168MB)
테스트 13 〉	통과 (2165.26ms, 168MB)
테스트 14 〉	통과 (2092.05ms, 193MB)
테스트 15 〉	통과 (2059.89ms, 163MB)
테스트 16 〉	통과 (0.14ms, 33.4MB)
테스트 17 〉	통과 (0.10ms, 33.5MB)
테스트 18 〉	통과 (0.10ms, 33.4MB)
테스트 19 〉	통과 (0.12ms, 33.4MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/