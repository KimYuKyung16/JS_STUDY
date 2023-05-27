function solution(sequence, k) {
  if ([...new Set(sequence)].length === 1) {
      return [0, k/sequence[0]-1];
  } else {
      let sum = 0;
      let i = sequence.length-1;
      for (let j=i; j>=0; j--) {
          sum += sequence[j];
          if (sum > k) {
              sum -= sequence[i];
              i--; 
              continue;
          } 
          if (sum === k) {
              if (sequence[j] === sequence[i]) {
                  let index = sequence.indexOf(sequence[j]);
                  return [index, index+k/sequence[index]-1];
              }
              return [j, i];
          }
      }
  }
}

/*
정확성  테스트
테스트 1 〉	통과 (0.09ms, 33.4MB)
테스트 2 〉	통과 (0.06ms, 33.4MB)
테스트 3 〉	통과 (0.07ms, 33.5MB)
테스트 4 〉	통과 (0.21ms, 33.5MB)
테스트 5 〉	통과 (0.30ms, 33.8MB)
테스트 6 〉	통과 (0.69ms, 34.2MB)
테스트 7 〉	통과 (0.68ms, 35.5MB)
테스트 8 〉	통과 (1.52ms, 35.8MB)
테스트 9 〉	통과 (2.08ms, 38.9MB)
테스트 10 〉	통과 (28.49ms, 50.4MB)
테스트 11 〉	통과 (12.82ms, 69.3MB)
테스트 12 〉	통과 (11.61ms, 69.3MB)
테스트 13 〉	통과 (11.59ms, 69.3MB)
테스트 14 〉	통과 (12.75ms, 69.3MB)
테스트 15 〉	통과 (11.79ms, 69.3MB)
테스트 16 〉	통과 (12.32ms, 71.4MB)
테스트 17 〉	통과 (9.36ms, 71.4MB)
테스트 18 〉	통과 (0.06ms, 33.4MB)
테스트 19 〉	통과 (0.09ms, 33.4MB)
테스트 20 〉	통과 (0.07ms, 33.4MB)
테스트 21 〉	통과 (0.09ms, 33.5MB)
테스트 22 〉	통과 (0.06ms, 33.5MB)
테스트 23 〉	통과 (0.09ms, 33.5MB)
테스트 24 〉	통과 (10.05ms, 65.7MB)
테스트 25 〉	통과 (9.48ms, 65.7MB)
테스트 26 〉	통과 (27.41ms, 65.7MB)
테스트 27 〉	통과 (19.44ms, 65.7MB)
테스트 28 〉	통과 (34.31ms, 65.7MB)
테스트 29 〉	통과 (26.40ms, 65.7MB)
테스트 30 〉	통과 (31.08ms, 71.6MB)
테스트 31 〉	통과 (0.09ms, 33.5MB)
테스트 32 〉	통과 (0.06ms, 33.6MB)
테스트 33 〉	통과 (0.09ms, 33.4MB)
테스트 34 〉	통과 (0.09ms, 33.4MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/