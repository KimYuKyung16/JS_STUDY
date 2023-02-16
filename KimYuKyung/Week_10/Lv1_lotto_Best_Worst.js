function solution(lottos, win_nums) {
  let answer = [0, 0]; // 최고, 최저 순서
  let grade = [6,5,4,3,2,1];

  for (let i=0; i<lottos.length; i++) {
      if (lottos[i] === 0) answer[0]++;   
      if (win_nums.includes(lottos[i])) {
          answer[0]++;
          answer[1]++;
      }
  }

  for (let i=0; i<answer.length; i++) {
      if (answer[i] === 0) answer[i] = grade[answer[i]];
      else answer[i] = grade[answer[i]-1];
  }

  return answer;
}

/*
정확성  테스트
테스트 1 〉	통과 (0.05ms, 33.4MB)
테스트 2 〉	통과 (0.06ms, 33.3MB)
테스트 3 〉	통과 (0.06ms, 33.4MB)
테스트 4 〉	통과 (0.05ms, 33.3MB)
테스트 5 〉	통과 (0.08ms, 33.4MB)
테스트 6 〉	통과 (0.07ms, 33.4MB)
테스트 7 〉	통과 (0.05ms, 33.4MB)
테스트 8 〉	통과 (0.05ms, 33.4MB)
테스트 9 〉	통과 (0.05ms, 33.3MB)
테스트 10 〉	통과 (0.05ms, 33.5MB)
테스트 11 〉	통과 (0.05ms, 33.3MB)
테스트 12 〉	통과 (0.05ms, 33.3MB)
테스트 13 〉	통과 (0.05ms, 33.3MB)
테스트 14 〉	통과 (0.05ms, 33.3MB)
테스트 15 〉	통과 (0.05ms, 33.5MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/