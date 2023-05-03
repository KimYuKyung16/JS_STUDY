function solution(numbers) {
  return [...new Set(getPer(numbers))].filter((v) => isPrime(v)).length; // 중복값 제외하고 출력
}

//
function getPer(str) {
  const answer = [];
  const n = str.length;
  let ch = Array.from({ length: n }, () => 0);
  function dfs(num) {
    answer.push(+num); //숫자 형식으로 answer에 추가
    for (let i = 0; i < n; i++) {
      if (ch[i] === 0) {
        ch[i] = 1;
        dfs(num + str[i]);
        ch[i] = 0;
      }
    }
  }
  dfs("");
  answer.shift();
  return answer;
}

// 소수인지 판별하는 함수
function isPrime(n) {
  if (n === 0 || n === 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.34ms, 33.5MB)
// 테스트 2 〉	통과 (2.77ms, 37MB)
// 테스트 3 〉	통과 (0.13ms, 33.4MB)
// 테스트 4 〉	통과 (1.33ms, 36.6MB)
// 테스트 5 〉	통과 (6.40ms, 37MB)
// 테스트 6 〉	통과 (0.14ms, 33.5MB)
// 테스트 7 〉	통과 (0.42ms, 33.6MB)
// 테스트 8 〉	통과 (6.28ms, 37.1MB)
// 테스트 9 〉	통과 (0.25ms, 33.4MB)
// 테스트 10 〉	통과 (3.72ms, 36.9MB)
// 테스트 11 〉	통과 (1.05ms, 35.6MB)
// 테스트 12 〉	통과 (0.34ms, 33.4MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
