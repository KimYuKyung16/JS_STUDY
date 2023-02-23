function solution(s) {
  let word = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  
  for (let i=0; i<word.length; i++) {
    let regex = new RegExp(`${word[i]}`, 'g');
      s = s.replace(regex, i);
  }

  return parseInt(s);
}

/*
정확성  테스트
테스트 1 〉	통과 (0.15ms, 33.4MB)
테스트 2 〉	통과 (0.13ms, 33.4MB)
테스트 3 〉	통과 (0.13ms, 33.4MB)
테스트 4 〉	통과 (0.13ms, 33.5MB)
테스트 5 〉	통과 (0.13ms, 33.4MB)
테스트 6 〉	통과 (0.13ms, 33.4MB)
테스트 7 〉	통과 (0.13ms, 33.4MB)
테스트 8 〉	통과 (0.13ms, 33.4MB)
테스트 9 〉	통과 (0.13ms, 33.4MB)
테스트 10 〉	통과 (0.12ms, 33.4MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/