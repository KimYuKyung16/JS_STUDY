/* // 실패한 코드 - 시간초과 : filter 때문
function solution(k, tangerine) {
  let answer = 0;
  let count = 0;
  let kind = [...new Set(tangerine)];
  
  let count_list = kind.map((x) => { // 각 개수별 귤 개수 리스트
      return tangerine.filter((t) => t === x).length;
  }).sort((a,b) => b-a);
  
  for (let i=0; i<count_list.length; i++) {
      if (count < k) {
          count += count_list[i];
          answer ++;
      } else break;
  }
      
  return answer;
}
*/

// 성공한 코드
function solution(k, tangerine) {
  let answer = 0;
  let count = 0;
  let maxSize = Math.max(...tangerine);
  let countList = new Array(maxSize).fill(0); // 각 크기별 귤 개수를 담을 리스트
  
  for (let i=0; i<tangerine.length; i++) {
      countList[tangerine[i]-1] ++; // 해당하는 인덱스에 귤 개수 +1
  }
  
  countList.sort((a,b) => b-a); // 개수가 많은 귤부터 비교하기 위해 내림차순
  
  for (let i=0; i<countList.length; i++) {
      if (count < k) { // k보다 작을 경우에는 상자에 담김.
          count += countList[i];
          answer ++;
      } else break;
  }
  
  return answer;
}

/*
정확성  테스트
테스트 1 〉	통과 (3.06ms, 39.1MB)
테스트 2 〉	통과 (3.12ms, 39.1MB)
테스트 3 〉	통과 (3.02ms, 39.1MB)
테스트 4 〉	통과 (3.32ms, 39.2MB)
테스트 5 〉	통과 (3.13ms, 38.9MB)
테스트 6 〉	통과 (3.42ms, 39MB)
테스트 7 〉	통과 (3.28ms, 39MB)
테스트 8 〉	통과 (3.21ms, 39MB)
테스트 9 〉	통과 (3.32ms, 39.1MB)
테스트 10 〉	통과 (3.11ms, 39.1MB)
테스트 11 〉	통과 (403.30ms, 185MB)
테스트 12 〉	통과 (0.06ms, 33.5MB)
테스트 13 〉	통과 (0.07ms, 33.4MB)
테스트 14 〉	통과 (0.09ms, 33.4MB)
테스트 15 〉	통과 (0.12ms, 33.6MB)
테스트 16 〉	통과 (0.08ms, 33.4MB)
테스트 17 〉	통과 (0.07ms, 33.4MB)
테스트 18 〉	통과 (0.10ms, 33.4MB)
테스트 19 〉	통과 (0.07ms, 33.5MB)
테스트 20 〉	통과 (0.07ms, 33.6MB)
테스트 21 〉	통과 (0.35ms, 33.5MB)
테스트 22 〉	통과 (0.37ms, 33.5MB)
테스트 23 〉	통과 (0.52ms, 33.6MB)
테스트 24 〉	통과 (0.96ms, 33.5MB)
테스트 25 〉	통과 (3.29ms, 36.2MB)
테스트 26 〉	통과 (14.23ms, 39.2MB)
테스트 27 〉	통과 (582.86ms, 193MB)
테스트 28 〉	통과 (384.45ms, 192MB)
테스트 29 〉	통과 (354.03ms, 193MB)
테스트 30 〉	통과 (523.44ms, 193MB)
테스트 31 〉	통과 (374.77ms, 192MB)
테스트 32 〉	통과 (379.23ms, 192MB)
테스트 33 〉	통과 (215.00ms, 119MB)
테스트 34 〉	통과 (221.93ms, 118MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/