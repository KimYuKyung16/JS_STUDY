function solution(number, k) {
  let answer = [];
  let arr = number.split("");
  for (let i = 0; i < arr.length; i++) {
    while (k > 0 && answer[answer.length - 1] < arr[i]) {
      answer.pop();
      k--;
    }
    answer.push(arr[i]);
  }
  answer.splice(answer.length - k, k);
  return answer.join("");
}
/*
정확성  테스트
테스트 1 〉	통과 (0.06ms, 33.4MB)
테스트 2 〉	통과 (0.15ms, 33.4MB)
테스트 3 〉	통과 (0.15ms, 33.5MB)
테스트 4 〉	통과 (0.24ms, 33.6MB)
테스트 5 〉	통과 (0.43ms, 33.4MB)
테스트 6 〉	통과 (3.29ms, 37MB)
테스트 7 〉	통과 (5.92ms, 38.7MB)
테스트 8 〉	통과 (10.90ms, 40.6MB)
테스트 9 〉	통과 (29.30ms, 55.8MB)
테스트 10 〉	통과 (42.95ms, 52.4MB)
테스트 11 〉	통과 (0.05ms, 33.5MB)
테스트 12 〉	통과 (0.05ms, 33.4MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/
