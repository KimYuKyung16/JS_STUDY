function solution(topping) {
  let answer = 0;
  let left_kind = new Set;
  let right_kind = new Set;
  let result = [];
  
  for (let i=0; i<topping.length-1; i++) {
      left_kind.add(topping[i]);
      right_kind.add(topping[topping.length-1-i]);
      
      result.push([left_kind.size, right_kind.size]);
  }
  
  for (let i=0; i<result.length; i++) {
      if (result[i][0] === result[result.length-1-i][1]) answer++;
  }
  
  return answer;
}

/*
정확성  테스트
테스트 1 〉	통과 (5.59ms, 37.8MB)
테스트 2 〉	통과 (26.88ms, 54.1MB)
테스트 3 〉	통과 (19.74ms, 49.1MB)
테스트 4 〉	통과 (17.48ms, 49.6MB)
테스트 5 〉	통과 (205.81ms, 155MB)
테스트 6 〉	통과 (247.65ms, 161MB)
테스트 7 〉	통과 (258.57ms, 160MB)
테스트 8 〉	통과 (248.44ms, 159MB)
테스트 9 〉	통과 (258.25ms, 159MB)
테스트 10 〉	통과 (248.54ms, 158MB)
테스트 11 〉	통과 (19.68ms, 49.7MB)
테스트 12 〉	통과 (6.54ms, 38.9MB)
테스트 13 〉	통과 (261.05ms, 160MB)
테스트 14 〉	통과 (230.85ms, 158MB)
테스트 15 〉	통과 (267.05ms, 160MB)
테스트 16 〉	통과 (243.29ms, 158MB)
테스트 17 〉	통과 (256.44ms, 158MB)
테스트 18 〉	통과 (260.20ms, 160MB)
테스트 19 〉	통과 (249.51ms, 159MB)
테스트 20 〉	통과 (236.21ms, 159MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/