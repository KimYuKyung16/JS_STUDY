function solution(answers) {
  let answer = [];
  let p1 = [1, 2, 3, 4, 5];
  let p2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let count = [0, 0, 0];

  for(let i = 0; i < answers.length; i++) {
      if(answers[i] == p1[i % p1.length]) count[0]++;
      if(answers[i] == p2[i % p2.length]) count[1]++;
      if(answers[i] == p3[i % p3.length]) count[2]++;
  }

  let max = Math.max(count[0], count[1], count[2]);
  
  count.forEach((x, index) => {
      if (x === max) answer.push(index+1);
  })

  return answer;
}

/*
정확성  테스트
테스트 1 〉	통과 (0.09ms, 33.4MB)
테스트 2 〉	통과 (0.08ms, 33.5MB)
테스트 3 〉	통과 (0.07ms, 33.4MB)
테스트 4 〉	통과 (0.07ms, 33.6MB)
테스트 5 〉	통과 (0.18ms, 33.6MB)
테스트 6 〉	통과 (0.18ms, 33.5MB)
테스트 7 〉	통과 (0.77ms, 33.6MB)
테스트 8 〉	통과 (0.37ms, 33.5MB)
테스트 9 〉	통과 (3.36ms, 36.8MB)
테스트 10 〉	통과 (0.65ms, 33.5MB)
테스트 11 〉	통과 (3.36ms, 36.7MB)
테스트 12 〉	통과 (3.28ms, 36.9MB)
테스트 13 〉	통과 (0.22ms, 33.6MB)
테스트 14 〉	통과 (3.31ms, 36.8MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/