function solution(arr) {
  let max = Math.max(...arr);
  let count = 1;
  
  while(1) {
      let answer = max * count;
      if (arr.filter((x) => answer%x === 0).length === arr.length) return answer;
      else count ++;
  }
}

/*
정확성  테스트
테스트 1 〉	통과 (0.17ms, 32.9MB)
테스트 2 〉	통과 (0.16ms, 32.9MB)
테스트 3 〉	통과 (0.05ms, 33.3MB)
테스트 4 〉	통과 (0.19ms, 33.3MB)
테스트 5 〉	통과 (0.16ms, 32.9MB)
테스트 6 〉	통과 (35.97ms, 37.2MB)
테스트 7 〉	통과 (37.14ms, 38MB)
테스트 8 〉	통과 (0.56ms, 33.6MB)
테스트 9 〉	통과 (29.97ms, 37.4MB)
테스트 10 〉	통과 (33.05ms, 37.8MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/