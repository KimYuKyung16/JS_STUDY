function solution(k, score) {
  let answer = [];
  let array = [];
  
  for (let i=0; i<score.length; i++) {
      if (i < k) {
          array.push(score[i]);
          answer.push(Math.min(...array));
      } else {
          let min_score = Math.min(...array);
          if (score[i] > min_score) {
              array[array.indexOf(min_score)] = score[i];
              answer.push(Math.min(...array));
          }
          else answer.push(min_score);
      }
  }
  
  
  return answer;
}

/*
정확성  테스트
테스트 1 〉	통과 (0.05ms, 33.4MB)
테스트 2 〉	통과 (0.05ms, 33.6MB)
테스트 3 〉	통과 (0.05ms, 33.6MB)
테스트 4 〉	통과 (0.05ms, 33.5MB)
테스트 5 〉	통과 (0.14ms, 33.4MB)
테스트 6 〉	통과 (0.05ms, 33.6MB)
테스트 7 〉	통과 (0.14ms, 33.5MB)
테스트 8 〉	통과 (0.14ms, 33.5MB)
테스트 9 〉	통과 (0.14ms, 33.6MB)
테스트 10 〉	통과 (0.16ms, 33.5MB)
테스트 11 〉	통과 (0.14ms, 33.6MB)
테스트 12 〉	통과 (0.39ms, 33.5MB)
테스트 13 〉	통과 (0.39ms, 33.5MB)
테스트 14 〉	통과 (0.34ms, 33.6MB)
테스트 15 〉	통과 (0.62ms, 33.7MB)
테스트 16 〉	통과 (0.67ms, 33.7MB)
테스트 17 〉	통과 (0.66ms, 33.6MB)
테스트 18 〉	통과 (0.64ms, 33.7MB)
테스트 19 〉	통과 (0.35ms, 33.8MB)
테스트 20 〉	통과 (0.25ms, 33.7MB)
테스트 21 〉	통과 (0.25ms, 33.6MB)
테스트 22 〉	통과 (0.25ms, 33.6MB)
테스트 23 〉	통과 (0.25ms, 33.7MB)
테스트 24 〉	통과 (0.26ms, 33.7MB)
테스트 25 〉	통과 (0.26ms, 33.7MB)
테스트 26 〉	통과 (0.05ms, 33.5MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/