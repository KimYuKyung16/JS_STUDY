function solution(storey) {
  let answer = 0;
  storey = (storey + "").split("").map(Number).reverse();
  for (let i = 0; i < storey.length; i++) {
    if (storey[i] > 5 || (storey[i] === 5 && storey[i + 1] >= 5)) {
      answer += 10 - storey[i];
      if (storey[i + 1]) storey[i + 1]++;
      else storey.push(1);
    } else {
      answer += storey[i];
    }
  }
  return answer;
}

/*
정확성  테스트
테스트 1 〉	통과 (0.06ms, 33.6MB)
테스트 2 〉	통과 (0.05ms, 33.4MB)
테스트 3 〉	통과 (0.06ms, 33.4MB)
테스트 4 〉	통과 (0.05ms, 33.4MB)
테스트 5 〉	통과 (0.06ms, 33.4MB)
테스트 6 〉	통과 (0.06ms, 33.6MB)
테스트 7 〉	통과 (0.06ms, 33.4MB)
테스트 8 〉	통과 (0.05ms, 33.4MB)
테스트 9 〉	통과 (0.06ms, 33.4MB)
테스트 10 〉	통과 (0.05ms, 33.4MB)
테스트 11 〉	통과 (0.05ms, 33.5MB)
테스트 12 〉	통과 (0.06ms, 33.4MB)
테스트 13 〉	통과 (0.06ms, 33.4MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/
