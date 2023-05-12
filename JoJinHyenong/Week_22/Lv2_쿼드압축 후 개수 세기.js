function solution(arr) {
  var answer = [0, 0];

  function dfs(arr1, len) {
    const test = arr1.join(",");
    console.log(test);
    if (test.match(/0/g) === null) {
      // 모든 문자열에 0이 없을 경우
      answer[1] += 1;
      return;
    }
    if (test.match(/1/g) === null) {
      // 모든 문자열에 1이 없을 경우
      answer[0] += 1;
      return;
    }
    let case1 = arr1.slice(0, len / 2).map((item) => item.slice(0, len / 2)); //1사분면
    let case2 = arr1.slice(0, len / 2).map((item) => item.slice(len / 2, len)); //2사분면
    let case3 = arr1.slice(len / 2, len).map((item) => item.slice(0, len / 2)); //3시분면
    let case4 = arr1
      .slice(len / 2, len)
      .map((item) => item.slice(len / 2, len)); //4사분면
    dfs(case1, len / 2);
    dfs(case2, len / 2);
    dfs(case3, len / 2);
    dfs(case4, len / 2);
  }
  dfs(arr, arr.length);
  return answer;
}

// 정확성  테스트
// 테스트 1 〉	통과 (1.74ms, 34.2MB)
// 테스트 2 〉	통과 (1.48ms, 34.2MB)
// 테스트 3 〉	통과 (0.73ms, 33.7MB)
// 테스트 4 〉	통과 (0.35ms, 33.5MB)
// 테스트 5 〉	통과 (453.26ms, 68MB)
// 테스트 6 〉	통과 (216.63ms, 66.9MB)
// 테스트 7 〉	통과 (112.35ms, 65.3MB)
// 테스트 8 〉	통과 (91.94ms, 64.3MB)
// 테스트 9 〉	통과 (53.92ms, 52.4MB)
// 테스트 10 〉	통과 (52.00ms, 79.1MB)
// 테스트 11 〉	통과 (0.32ms, 33.5MB)
// 테스트 12 〉	통과 (0.52ms, 33.6MB)
// 테스트 13 〉	통과 (84.47ms, 60.8MB)
// 테스트 14 〉	통과 (528.23ms, 118MB)
// 테스트 15 〉	통과 (670.43ms, 121MB)
// 테스트 16 〉	통과 (204.14ms, 64.4MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
