function solution(n, words) {
  var answer = [];
  let last = '';
  let confirm_list = [words[0]];

  for (let i=0; i<words.length; i++) {
      if (i === 0) last = words[i][words[i].length-1];
      else {
          if (last === words[i][0] && confirm_list.indexOf(words[i]) === -1) {
              last = words[i][words[i].length-1];
              confirm_list.push(words[i]);
          } else {
              return [i%n+1, parseInt(i/n)+1]
          }
      }
  }
  return [0, 0];
}

/*
정확성  테스트
테스트 1 〉	통과 (0.09ms, 33.4MB)
테스트 2 〉	통과 (0.21ms, 33.5MB)
테스트 3 〉	통과 (0.08ms, 33.5MB)
테스트 4 〉	통과 (0.23ms, 33.5MB)
테스트 5 〉	통과 (0.21ms, 33.5MB)
테스트 6 〉	통과 (0.06ms, 33.5MB)
테스트 7 〉	통과 (0.15ms, 33.4MB)
테스트 8 〉	통과 (0.06ms, 33.4MB)
테스트 9 〉	통과 (0.07ms, 33.4MB)
테스트 10 〉	통과 (0.16ms, 33.5MB)
테스트 11 〉	통과 (0.16ms, 33.5MB)
테스트 12 〉	통과 (0.15ms, 33.4MB)
테스트 13 〉	통과 (0.07ms, 33.4MB)
테스트 14 〉	통과 (0.07ms, 33.6MB)
테스트 15 〉	통과 (0.06ms, 33.5MB)
테스트 16 〉	통과 (0.07ms, 33.4MB)
테스트 17 〉	통과 (0.07ms, 33.5MB)
테스트 18 〉	통과 (0.10ms, 33.5MB)
테스트 19 〉	통과 (0.06ms, 33.5MB)
테스트 20 〉	통과 (0.17ms, 33.4MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/