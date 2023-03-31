function solution(want, number, discount) {
  let answer = 0;
  let count = {};
  let order = [];
  let i=0;
  
  while(1) {
      if (order.length === 10) {
          let flag = true;
          for (let i=0; i<want.length; i++) {
              if (count[want[i]] >= number[i]) continue;
              else {
                  flag = false;
                  break;
              }
          }
          if (flag) answer++;
          count[order.shift()]--; 
      } else {
          if (i === discount.length) break;
          if (count[discount[i]] === undefined) {
              count[discount[i]] = 1;
              order.push(discount[i]);
          } else {
              count[discount[i]]++;
              order.push(discount[i]);
          }  
          i++; 
      }
  }
  
  return answer
}

/*
정확성  테스트
테스트 1 〉	통과 (4.57ms, 37.3MB)
테스트 2 〉	통과 (10.39ms, 39.8MB)
테스트 3 〉	통과 (4.85ms, 37.2MB)
테스트 4 〉	통과 (10.35ms, 38.3MB)
테스트 5 〉	통과 (7.71ms, 38.8MB)
테스트 6 〉	통과 (4.02ms, 37MB)
테스트 7 〉	통과 (6.19ms, 37.5MB)
테스트 8 〉	통과 (12.00ms, 39.9MB)
테스트 9 〉	통과 (5.64ms, 37.5MB)
테스트 10 〉	통과 (8.76ms, 39.2MB)
테스트 11 〉	통과 (4.27ms, 37.1MB)
테스트 12 〉	통과 (0.08ms, 33.5MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/