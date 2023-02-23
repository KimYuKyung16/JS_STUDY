function solution(numbers, hand) {
  var answer = '';
  let left = '*';
  let right = '#';
  
  numbers.forEach((x) => {
      if (x === 1 || x === 4 || x === 7) { // 왼손
          answer += 'L';
          left = x;
      } else if (x === 3 || x === 6 || x === 9) { // 오른손
          answer += 'R';
          right = x;
      } else { // 왼손이거나 오른손     
          // 현재 위치
          let c_location = location(x);
          let l_location = location(left);
          let r_location = location(right);
          
          // 총 거리
          let r_count = Math.abs(r_location[0]-c_location[0]) + Math.abs(r_location[1]-c_location[1]);
          let l_count = Math.abs(l_location[0]-c_location[0]) + Math.abs(l_location[1]-c_location[1]);
          
          if (l_count < r_count) {
              left = x;
              answer += 'L';
          } else if (r_count < l_count) {
              right = x;
              answer += 'R';
          } else {
              if (hand === 'right') {
                  right = x;
                  answer += 'R';
              } else {
                  left = x;
                  answer += 'L';
              }  
          }
      }
  })
  return answer;
}


// 현재 위치의 인덱스를 구해주는 함수.
function location(key) {
  const keypad = [1,2,3,4,5,6,7,8,9,'*',0,'#'];
  
  let row = parseInt(keypad.indexOf(key)/3);
  let col = parseInt(keypad.indexOf(key)%3);
  
  return [row, col];
}

/*
정확성  테스트
테스트 1 〉	통과 (0.09ms, 33.5MB)
테스트 2 〉	통과 (0.12ms, 33.5MB)
테스트 3 〉	통과 (0.12ms, 33.5MB)
테스트 4 〉	통과 (0.09ms, 33.5MB)
테스트 5 〉	통과 (0.12ms, 33.6MB)
테스트 6 〉	통과 (0.12ms, 33.6MB)
테스트 7 〉	통과 (0.21ms, 33.4MB)
테스트 8 〉	통과 (0.25ms, 33.6MB)
테스트 9 〉	통과 (0.24ms, 33.5MB)
테스트 10 〉	통과 (0.21ms, 33.5MB)
테스트 11 〉	통과 (0.28ms, 33.5MB)
테스트 12 〉	통과 (0.39ms, 33.5MB)
테스트 13 〉	통과 (0.27ms, 33.6MB)
테스트 14 〉	통과 (0.33ms, 33.6MB)
테스트 15 〉	통과 (0.53ms, 33.7MB)
테스트 16 〉	통과 (0.48ms, 33.7MB)
테스트 17 〉	통과 (0.91ms, 33.7MB)
테스트 18 〉	통과 (0.70ms, 33.6MB)
테스트 19 〉	통과 (0.85ms, 33.8MB)
테스트 20 〉	통과 (0.75ms, 33.7MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/