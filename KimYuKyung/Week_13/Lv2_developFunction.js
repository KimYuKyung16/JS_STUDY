function solution(progresses, speeds) {
  var answer = [];

  while(speeds.length > 0) {
      // 개발
      for(let i in speeds) {
          if(progresses[i] < 100) {
              progresses[i] += speeds[i];
          }
      }

      // 배포
      let deploy_count = 0;
      while(progresses[0] >= 100) {
          progresses.shift();
          speeds.shift();
          deploy_count++;
      }
      if(deploy_count > 0) {
          answer.push(deploy_count);
      }
  }

  return answer;
}

/*
정확성  테스트
테스트 1 〉	통과 (0.08ms, 29.9MB)
테스트 2 〉	통과 (0.30ms, 30.5MB)
테스트 3 〉	통과 (0.45ms, 30MB)
테스트 4 〉	통과 (0.21ms, 30.2MB)
테스트 5 〉	통과 (0.08ms, 30MB)
테스트 6 〉	통과 (0.12ms, 30.2MB)
테스트 7 〉	통과 (0.39ms, 30.1MB)
테스트 8 〉	통과 (0.12ms, 30MB)
테스트 9 〉	통과 (0.31ms, 30MB)
테스트 10 〉	통과 (0.32ms, 30.2MB)
테스트 11 〉	통과 (0.09ms, 30.2MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/