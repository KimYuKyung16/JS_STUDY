function solution(N, stages) {
  let answer = [];
  let people = new Array(N).fill(0);
  let fail_people = new Array(N).fill(0);

  // 도전한 사람들
  for(let i=0; i<stages.length; i++) { 
      for(let j=0; j<stages[i]; j++) people[j] += 1;
  }

  // 실패한 사람들
  for(let i=0; i<stages.length; i++) fail_people[stages[i]-1] += 1;

  for (let i=0; i<N; i++) {
      let failrate = fail_people[i] / people[i];
      isNaN(failrate) ? failrate = 0 : failrate = failrate;
      answer.push([failrate, i+1])
  }

  answer.sort((a, b) => b[0]-a[0]);

  return answer.map((x) => x[1])
}

/*
정확성  테스트
테스트 1 〉	통과 (0.23ms, 33.5MB)
테스트 2 〉	통과 (0.61ms, 33.7MB)
테스트 3 〉	통과 (11.70ms, 37.8MB)
테스트 4 〉	통과 (31.71ms, 39.3MB)
테스트 5 〉	통과 (117.68ms, 41.2MB)
테스트 6 〉	통과 (3.43ms, 36.5MB)
테스트 7 〉	통과 (5.24ms, 36.9MB)
테스트 8 〉	통과 (22.68ms, 38.3MB)
테스트 9 〉	통과 (98.47ms, 40.5MB)
테스트 10 〉	통과 (18.62ms, 39.1MB)
테스트 11 〉	통과 (24.71ms, 38.3MB)
테스트 12 〉	통과 (18.75ms, 39.8MB)
테스트 13 〉	통과 (43.71ms, 39.2MB)
테스트 14 〉	통과 (0.32ms, 33.5MB)
테스트 15 〉	통과 (5.90ms, 38.4MB)
테스트 16 〉	통과 (5.36ms, 38.7MB)
테스트 17 〉	통과 (5.72ms, 37.3MB)
테스트 18 〉	통과 (4.54ms, 37.9MB)
테스트 19 〉	통과 (2.79ms, 36.8MB)
테스트 20 〉	통과 (4.97ms, 38.4MB)
테스트 21 〉	통과 (5.45ms, 37.7MB)
테스트 22 〉	통과 (161.06ms, 40.4MB)
테스트 23 〉	통과 (7.04ms, 39.5MB)
테스트 24 〉	통과 (10.17ms, 39.6MB)
테스트 25 〉	통과 (0.09ms, 33.5MB)
테스트 26 〉	통과 (0.14ms, 33.4MB)
테스트 27 〉	통과 (0.08ms, 33.4MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/