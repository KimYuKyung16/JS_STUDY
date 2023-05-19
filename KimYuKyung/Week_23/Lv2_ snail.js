function solution(n) {
  let array = new Array(n);
  let total_num = 0;
  let result = [];
  
  for (let i=0; i<array.length; i++) {
      array[i] = new Array(i+1).fill(0);
      total_num += array[i].length;
  }
  
  let num = 1;
  let direction = 'd';
  let x = 0, y = 0;
  
  while(1) {
      if (num === total_num) break;
      if (direction === 'd') {
          if (y === n-1 || array[y+1][x] !== 0) {
              direction = 'r';
              continue;
          }
          array[y][x] = num;
          y++;
          num++;  
      } else if (direction === 'r') {
          if (x === array[y].length-1 || array[y][x+1] !== 0) {
              direction = 'u';
              continue;
          }
          array[y][x] = num;
          x++;
          num++;
      } else {
          if (array[y-1][x-1] !== 0) {
              direction = 'd';
              continue;
          }
          array[y][x] = num;
          x--;
          y--;
          num++;

      }
  }

  array[y][x] = total_num;
  
  for (let i=0; i<array.length; i++) {
      result.push(...array[i]);
  }
  
  return result
  
}

/*
정확성  테스트
테스트 1 〉	통과 (0.08ms, 33.5MB)
테스트 2 〉	통과 (0.08ms, 33.6MB)
테스트 3 〉	통과 (0.08ms, 33.4MB)
테스트 4 〉	통과 (0.68ms, 37.5MB)
테스트 5 〉	통과 (0.70ms, 37.4MB)
테스트 6 〉	통과 (0.68ms, 37.6MB)
테스트 7 〉	통과 (27.52ms, 102MB)
테스트 8 〉	통과 (27.56ms, 101MB)
테스트 9 〉	통과 (27.42ms, 101MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/