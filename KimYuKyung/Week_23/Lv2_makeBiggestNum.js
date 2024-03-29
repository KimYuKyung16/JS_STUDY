function solution(number, k) {
  let count = 0;
  let number_list = [];
  let index = 1;
  
  number_list.push(number[0]);
  
  while(1) {
      if (number_list.length === number.length - k && count === k) break;  
      if (index === (number.length-1) && number_list[number_list.length-1] > number[index] && count === k-1) break;
          
      if (number_list[number_list.length-1] < number[index]) {
          while (number_list.length !== 0 && number_list[number_list.length-1] < number[index] && count !== k) {
              number_list.pop();
              count++;
          }
      }
              
      number_list.push(number[index]);
      index++;
  }
  return number_list.join('');
}

/*
정확성  테스트
테스트 1 〉	통과 (0.07ms, 33.5MB)
테스트 2 〉	통과 (0.17ms, 33.5MB)
테스트 3 〉	통과 (0.17ms, 33.5MB)
테스트 4 〉	통과 (0.31ms, 33.6MB)
테스트 5 〉	통과 (0.60ms, 33.6MB)
테스트 6 〉	통과 (6.26ms, 37.3MB)
테스트 7 〉	통과 (7.56ms, 38.5MB)
테스트 8 〉	통과 (17.06ms, 40.1MB)
테스트 9 〉	통과 (44.06ms, 54.5MB)
테스트 10 〉	통과 (50.09ms, 49.5MB)
테스트 11 〉	통과 (0.07ms, 33.5MB)
테스트 12 〉	통과 (0.10ms, 33.6MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
*/